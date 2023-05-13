import { ApplicationCommandOptionType, CommandInteraction, EmbedBuilder, GuildMember, } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";

@Discord()
class banUser {
   @Slash({ description: "ban membro" })
   async ban(
      @SlashOption({
         description: "membro",
         name: "id",
         required: true,
         type: ApplicationCommandOptionType.Mentionable,
      })

      id: GuildMember,

      @SlashOption({
         description: "razão pelo banimento",
         name: "reason",
         required: true,
         type: ApplicationCommandOptionType.String
      })
      reason: string,
      interaction: CommandInteraction,
   ) {
      const gifs = ['https://thumbs.gfycat.com/BlondDamagedCreature-size_restricted.gif', 'https://media.tenor.com/B0NGJq2D4lAAAAAd/ban.gif',
      'https://gifdb.com/images/high/spongebob-squarepants-rainbow-banned-v2qkn8gqkegcuk2i.gif', 'https://media.tenor.com/TbfChfHKkOUAAAAM/ban-button.gif',
      'data:image/jpeg;base64,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',
      'https://gifdb.com/images/high/online-game-among-us-hammering-ban-meme-sjpo6n3h7sskzz28.gif', 'https://media1.giphy.com/media/dtBvQsAAfThn0P1mSQ/200w.gif?cid=82a1493bvl5j76k3x5il0x1ta4q7q45jjtujp0d2czjybj26&ep=v1_gifs_related&rid=200w.gif&ct=g',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT851Emc5ERpO0P7uBuAP4TnGnYJXhywgAQpnG9Gr7MthnOSwUs8y2-YXE555rKTdp3Ujk&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIBKWV26dsztqjQtIX8HWCGowZX721SiSGWxe1rKbqtQFXMkQ9wrfHU074UZtd-WxArU&usqp=CAU',
      'https://media.tenor.com/9zCgefg___cAAAAM/bane-no.gif']

      id.ban()
      const embadeBan = new EmbedBuilder()
         .setTitle("BANIDO!")
         .setAuthor({ name: `${interaction.user.username}` })
         .addFields(
            { name: "Moderado(a)r ", value: `*${interaction.user}*`, inline: true },
            { name: "Puniu", value: `*<@${id.id}>*`, inline: true },
            { name: "Por", value: `${reason}`, inline: true },
         )
         .setColor("DarkRed")
         .setImage(`${gifs[Math.floor(Math.random() * gifs.length)]}`)
         .setTimestamp()
      return (await (await interaction.reply({ embeds: [embadeBan], fetchReply: true })).react("😂"))

   }
}



