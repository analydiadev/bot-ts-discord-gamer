import { ApplicationCommandOptionType, BaseGuildTextChannel, CommandInteraction } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";

@Discord()
class clearChat {
    @Slash({ description: "limpar canal", name: "limpar" })
    clearChannel(
        @SlashOption({
            description: "Quantidade de mensagens até 100",
            name: "mensagem",
            required: true,
            type: ApplicationCommandOptionType.Number,
        })
        mensagem: number,
        deleteMessage: BaseGuildTextChannel,
        interaction: CommandInteraction,
    ) {
        console.log(mensagem);
        //@ ts-ignore
        deleteMessage.bulkDelete(5)
        interaction.reply({ content: `Canal ${interaction.channel} limpo`, ephemeral: true })

    }
}
