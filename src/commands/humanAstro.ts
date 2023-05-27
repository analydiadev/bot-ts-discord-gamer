import { Discord, Slash, SlashChoice, SlashOption } from "discordx";
import { ApplicationCommandOptionType, CommandInteraction } from "discord.js";

@Discord()
class WhoAmI {
  @Slash({ description: "Quem sou eu?"})
  eusou(
   @SlashChoice({name:"Humano", value: "Humano"})
   @SlashChoice({name:"Astronauta", value: "Astronauta"})
   @SlashChoice({name:"Desenvolvedor(a)", value:"Desenvolvedor(a)"})
   @SlashChoice({name:"Desempregado(a)", value:"Desempregado(a)"})
   @SlashOption({
    description: "O que eu sou?",
    name: "que",
    required: true,
    type: ApplicationCommandOptionType.String,
   })
   que: string,
   interaction: CommandInteraction
  ){
   interaction.reply(`eu sou: ${que}`)
  }
}