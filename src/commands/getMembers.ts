import { CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
class GetMembers{
    @Slash({description: "Quantidade de membro no servidor"})
    membros(interaction: CommandInteraction): void{
        interaction.reply(`Obrigado por estar em nosso servidor ${interaction.user.username}, agora somos ${interaction.guild?.memberCount} membros`)
    }
}