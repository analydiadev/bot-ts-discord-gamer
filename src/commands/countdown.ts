import { channel } from "diagnostics_channel";
import { ApplicationCommandOptionType, CommandInteraction, EmbedBuilder, TextChannel } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";

@Discord()
class countdown {
    @Slash({ description: "contagem regresiva", name: "contagem-regresiva" })
    async countdown(
        @SlashOption({
            description: "Contagem regressiva até:",
            name: "countdown",
            required: true,
            type: ApplicationCommandOptionType.Number
        })
        countdown: number,
        interection: CommandInteraction,
    ) {
        const embade = new EmbedBuilder()
            .setTitle("Contagem Regresiva")
            .setDescription(`nada`)
            .setColor("Blurple")
            .setAuthor({ name: interection.user.username })
            .setImage("https://gifs.eco.br/wp-content/uploads/2021/08/imagens-e-gifs-de-loading-7.gif")
            .setFooter({text: "contando", iconURL: "https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"})
        const menssage = await interection.channel?.send({ embeds: [embade] })

        for (let i = countdown; i >= 0; i--) {
            embade.setDescription(`Contagem regressiva: ${i}`)
            await menssage?.edit({ embeds: [embade] })
            await new Promise((resolve) => setTimeout(resolve, 1000))
        }
        embade.setDescription("Contagem concluída")
        await menssage?.edit({ embeds: [embade] })
    }

}



