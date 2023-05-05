import { ApplicationCommandOptionType, AutocompleteInteraction, CommandInteraction } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";

@Discord()
class Suggestions {
    @Slash({ description: "saudação" })
    oi(
        @SlashOption({
            autocomplete: function (
                interaction: AutocompleteInteraction
            ) {
                interaction.respond([
                    { name: "bom dia", value: "bom dia" },
                    { name: "boa noite", value: "boa noite" },
                ]);
            },
            description: "dia ou noite?",
            name: "saudação",
            required: true,
            type: ApplicationCommandOptionType.String,
        })
        input: string,
        interaction: CommandInteraction
    ){
        interaction.reply(`Oi... ${input}`)
    }
}    
