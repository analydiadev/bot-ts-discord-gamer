import { ApplicationCommandOptionType, AutocompleteInteraction, CommandInteraction } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";

@Discord()
class allMethods {
    @Slash({ description: "comprimentando" })
    comprimentando(
        @SlashOption({
            autocomplete: true,
            description: "Oi",
            name: "oi",
            required: true,
            type: ApplicationCommandOptionType.String,
        })
        searchText: string,
        @SlashOption({
            autocomplete: function (
                interaction: AutocompleteInteraction
            ) {
                interaction.respond([
                    { name: "option c", value: "c" },
                    { name: "option d", value: "d" },
                ]);
            },
            description: "option-b",
            name: "option-b",
            required: true,
            type: ApplicationCommandOptionType.String,
        })
        searchText2: string,

        @SlashOption({
            autocomplete: (interaction: AutocompleteInteraction) => {
                interaction.respond([
                    { name: "option e", value: "e" },
                    { name: "optiom f", value: "f" },
                ]);
            },
            description: "option-c",
            name: "option-c",
            required: true,
            type: ApplicationCommandOptionType.String,
        })
        searchText3: string,
        interaction: CommandInteraction | AutocompleteInteraction
    ): void {
        if (interaction.isAutocomplete()) {
            const focusedOption = interaction.options.getFocused(true);
            if (focusedOption.name === "option-a") {
                interaction.respond([
                    { name: "option a", value: "a" },
                    { name: "option b", value: "b" },
                ]);
            }
        } else {
            interaction.reply(`usuário: ${interaction.user.username} mensagem: ${searchText} opção_1: ${searchText2} opção_2: ${searchText3}`)
            console.log(`usuário: ${interaction.user.username} mensagem: ${searchText} opção_1: ${searchText2} opção_2: ${searchText3}`);
        }
    }
}