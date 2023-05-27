import { ApplicationCommandOptionType, CommandInteraction, NewsChannel, TextChannel } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";

@Discord()
class ClearChat {
    @Slash({ description: "limpar canal", name: "limpar" })
    async clearChannel(
        @SlashOption({
            description: "Quantidade de mensagens até 100",
            name: "mensagem",
            required: true,
            type: ApplicationCommandOptionType.Number,
        })
        mensagem: number,
        interaction: CommandInteraction,
    ) {
        if (mensagem > 100 || mensagem < 0) {
            interaction.reply({ content: "A quantidade de mensagens não pode ser maior que 100 ou menor que 0", ephemeral: true })
        }
        const channel = interaction.channel as NewsChannel
        if (!channel) {
            interaction.reply({ content: "Não é um canal válido", ephemeral: true })
        }

        const msg = await channel.bulkDelete(mensagem)
        interaction.reply({ content: `O canal ${interaction.channel} teve ${mensagem} mensagens apagadas`, ephemeral: true })

    }
}
