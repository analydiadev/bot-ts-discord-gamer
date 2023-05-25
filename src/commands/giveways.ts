import { ActionRowBuilder, ApplicationCommandOptionType, ButtonBuilder, ButtonInteraction, ButtonStyle, CommandInteraction, EmbedBuilder, MessageActionRowComponentBuilder } from "discord.js";
import { ButtonComponent, Discord,Slash, SlashOption } from "discordx";


var users: string[] = []
var win: string[] = []

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

        let seconds = 80
        
        for (let minutes = tempo; minutes >= 0; minutes--) {

            for (let secs = 60; secs >= 0; secs--) {
                setInterval(function() {
                    secs-=20
                }, 2000);     

                seconds -= 20
                if(seconds < 0)seconds = 60
                
                console.log(seconds);
                
                embedRecognition.setFields(
                    { name: "quantidade de vencedores", value: `${vencedor}` },
                    { name: "O sorteio acabará em", value: `${minutes} : ${seconds}` })
                    await menssage?.edit({ embeds: [embedRecognition] })
                    await new Promise((resolve) => setTimeout(resolve, 2000))
            }
            if (minutes == 0) {
                embedRecognition.setFields(
                    { name: "O sorteio acabará em", value: "O sorteio acabou" })
                await menssage?.edit({ embeds: [embedRecognition] })
            }
        }
        var randomWinner;

        for (let winners = 0; winners < vencedor; winners++) {
            randomWinner = users[Math.floor(Math.random() * users.length)]
            win.push(randomWinner)

        }
            
        if (win.length < vencedor) {
            interaction.channel?.send(`O sorteio ${titulo} foi cancelado pois não há membros participantes suficiente.`)
        }
        else {
        let getId = interaction.client.users.cache.get(`${win}`);
        console.log(getId);

        await getId?.send(`Parabéns!!! 🥳🥳🥳 você ganhou o sorteio **${titulo}** do servidor ${interaction.guild?.name}`)

        }
    }

}




