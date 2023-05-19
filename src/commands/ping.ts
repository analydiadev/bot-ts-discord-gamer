import { ActivityType, Client, CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
class Ping {
    @Slash({ description: "pig de usuário" })
    ping(interaction: CommandInteraction): void {  
        interaction.reply({ content: `Tenha uma excelente semana ${interaction.user.username}, seu ping é: (${Date.now() - interaction.createdTimestamp}ms)`, ephemeral: true }) 
    }
}

