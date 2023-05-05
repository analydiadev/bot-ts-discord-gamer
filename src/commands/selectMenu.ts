import { ActionRowBuilder, CommandInteraction, MessageActionRowComponentBuilder, StringSelectMenuBuilder, StringSelectMenuInteraction } from "discord.js";
import { Discord, SelectMenuComponent, Slash } from "discordx";

const roles = [
    { label: "Diretor", value: "diretor" },
    { label: "Professor", value: "professor" },
    { label: "Aluno", value: "aluno" }
]
@Discord()
class SelectMenu {
    @SelectMenuComponent({ id: "role-menu" })
    async menu(interaction: StringSelectMenuInteraction): Promise<unknown> {
        await interaction.deferReply();
        const roleValue = interaction.values?.[0];
        if (!roleValue) {
            return interaction.followUp("Id da posição inválido, selecione novamente.")
        }
        interaction.followUp(`você selecionou a posição ${roles.find((r) => r.value === roleValue)?.label ?? "unknown"}`);
        return
    }
    @Slash({ description: "roles menu", name: "roles" })
    async myRoles(interaction: CommandInteraction): Promise<unknown> {
        await interaction.deferReply();

        const menu = new StringSelectMenuBuilder()
            .addOptions(roles)
            .setCustomId("role-menu");

        const buttonRow = new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(menu)
        interaction.editReply({
            components: [buttonRow],
            content: `selecione uma nova posição`
        })
        return
    }
}
