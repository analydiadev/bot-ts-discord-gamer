import { CommandInteraction, EmbedBuilder } from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
export class Profile {
  @Slash({ description: "profile user"})
  profile(interaction: CommandInteraction): void {
    const embed = new EmbedBuilder()
    .setTitle("Alien")
    .setDescription("Olá!!!!")
    .setColor("Blue")
    .addFields([
      {"name": "te", "value": "*pop*", "inline": true},
      {"name": "lk", "value": "**aaa**", "inline": true},
      {"name": "ana", "value": "me", "inline": true},
    ])
    .setImage("https://conteudo.imguol.com.br/c/noticias/8d/2018/06/24/alien-extraterrestre-et-1529854864290_v2_1x1.jpg")
    .setThumbnail("https://cafecomnerd.com.br/wp-content/uploads/2021/04/alien_day-dia-de-comemoracao-aos-filmes-da-franquia-alien.jpg")
    .setTimestamp()
    .setAuthor({name: interaction.user.username})
    interaction.reply({content: "ET", embeds:[embed]})
  }
}
