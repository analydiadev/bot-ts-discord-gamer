import { ActionRowBuilder, ApplicationCommandOptionType, ButtonBuilder, ButtonInteraction, ButtonStyle, CommandInteraction, EmbedBuilder, Message, MessageActionRowComponentBuilder } from "discord.js";
import { ButtonComponent, Discord, Once, Slash, SlashGroup, SlashOption } from "discordx";


var users: string[] = []

@Discord()
class giveWays {
    @ButtonComponent({ id: "btnRecognition" })
    async recognitionBtn(interaction: ButtonInteraction) {


        const titulo = interaction.message.embeds[0].title

        if (users.includes(interaction.user.id)) {
            users.push(interaction.user.id)
            
            await interaction.user.send(`Você está participando do sorteio ${titulo}`)
        }
        else {
            interaction.reply({ content: `Você já está participando do sorteio ${titulo}`, ephemeral: true })
        }

    }
    @Slash({ description: "cargos no servidor", name: "sorteio" })
    async recognition(
        @SlashOption({
            description: "título do sorteio",
            name: "titulo",
            required: true,
            type: ApplicationCommandOptionType.String
        })
        titulo: string,
        @SlashOption({
            description: "descrição, @everyone",
            name: "descricao",
            required: true,
            type: ApplicationCommandOptionType.String
        })
        descricao: string,
        @SlashOption({
            description: "imagem do sorteio",
            name: "image",
            required: true,
            type: ApplicationCommandOptionType.String
        })
        image: string,
        @SlashOption({
            description: "tempo que o sorteio durará",
            name: "tempo",
            required: true,
            type: ApplicationCommandOptionType.Number
        })
        tempo: number,
        @SlashOption({
            description: "Quantidade de vencedores",
            name: "vencedor",
            required: true,
            type: ApplicationCommandOptionType.Number
        })
        vencedor: number,
        interaction: CommandInteraction,
    ) {

        const btn = new ButtonBuilder()
            .setLabel("Participar")
            .setStyle(ButtonStyle.Primary)
            .setEmoji("✨")
            .setCustomId("btnRecognition")
        const buttonRow = new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(btn)

        const embedRecognition = new EmbedBuilder()
            .setTitle(titulo)
            .setDescription(`${descricao}, @everyone`)
            .setImage(image)
            .addFields(
                { name: "quantidade de vencedores", value: `${vencedor}` },
                { name: "O sorteio acabará em", value: `${tempo}` }
            )
            .setColor("DarkGold")
            .setTimestamp()

        const menssage = (await interaction.reply({ embeds: [embedRecognition], components: [buttonRow], ephemeral: true }))

        for (let i = tempo; i >= 0; i--) {
            embedRecognition.setFields(
                { name: "quantidade de vencedores", value: `${vencedor}` },
                { name: "O sorteio acabará em", value: `${i}` })

            await menssage?.edit({ embeds: [embedRecognition] })
            await new Promise((resolve) => setTimeout(resolve, 1000))
        }
        
        embedRecognition.setFields(
            { name: "O sorteio acabará em", value: "O sorteio acabou" })
            await menssage?.edit({ embeds: [embedRecognition] })
            
            var randomWinner;

            for(let winners = 0; winners < vencedor; winners++){
                randomWinner=  users[Math.floor(Math.random()  * users.length)]
                interaction.channel?.send(`O vencedor  do sorteio é: <@${randomWinner}>`)
            }
    }

}




