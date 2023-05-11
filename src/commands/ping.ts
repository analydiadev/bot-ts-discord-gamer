import { Client, CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
class Ping {
    @Slash({ description: "pig de usuário" })
    ping(interaction: CommandInteraction): void {
       
        // var data = new Date()
        // console.log(data.toISOString);
        // var format = data.toLocaleString()
        // console.log(format);
        // console.log(Date.parse(format));
        
        interaction.reply({ content: `Tenha uma excelente semana ${interaction.user.username}, seu ping é: (${Date.now() - interaction.createdTimestamp}ms)`, ephemeral: true })
    }
}

