import { ApplicationCommandOptionType, CommandInteraction, GuildMember, } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";

@Discord()
class banUser {
   @Slash({ description: "ban membro" })
   ban(
      @SlashOption({
         description: "id",
         name: "id",
         required: true,
         type: ApplicationCommandOptionType.Mentionable,
      })
      id: GuildMember,
      interaction: CommandInteraction
   ) {
      id.ban()
      interaction.reply(`O(a) membro ${id.displayName} foi banido`)
      console.log(`O(a) membro ${id.displayName} foi banido`);
   }
}



