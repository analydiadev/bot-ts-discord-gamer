import { ActionRowBuilder, CommandInteraction, ModalBuilder, ModalSubmitInteraction, TextInputBuilder, TextInputStyle } from "discord.js";
import { Discord, ModalComponent, Slash } from "discordx";

@Discord()
class Modal {
    @Slash({ description: "modal", name:"cadastrar" })
    modal(interaction: CommandInteraction): void {
        const modal = new ModalBuilder()
            .setTitle("Meu Formulário")
            .setCustomId("AwesomeForm");

        const nameInputComponent = new TextInputBuilder()
            .setCustomId("name")
            .setLabel("Seu nome:")
            .setRequired(true)
            .setMinLength(2)
            .setStyle(TextInputStyle.Short)

        const ageInputComponent = new TextInputBuilder()
            .setCustomId("age")
            .setLabel("Idade:")
            .setRequired(true)
            .setMinLength(2)
            .setStyle(TextInputStyle.Short)

        const profissionInputComponent = new TextInputBuilder()
            .setCustomId("profission")
            .setLabel("Profissao")
            .setRequired(true)
            .setMinLength(2)
            .setStyle(TextInputStyle.Short)

        const aboutInputComponent = new TextInputBuilder()
            .setCustomId("about")
            .setLabel("Sobre")
            .setMinLength(2)
            .setStyle(TextInputStyle.Paragraph)

        const row1 = new ActionRowBuilder<TextInputBuilder>().addComponents(nameInputComponent);
        const row2 = new ActionRowBuilder<TextInputBuilder>().addComponents(ageInputComponent);
        const row3 = new ActionRowBuilder<TextInputBuilder>().addComponents(profissionInputComponent);
        const row4 = new ActionRowBuilder<TextInputBuilder>().addComponents(aboutInputComponent);

        modal.addComponents(row1,row2,row3,row4)
        interaction.showModal(modal);
    }
    @ModalComponent()
    async AwesomeForm(interaction: ModalSubmitInteraction): Promise<void> {
        const [userName, userAge, userProfission, userAbout] = ["name", "age", "profission", "about"].map((id) =>
            interaction.fields.getTextInputValue(id)
        );
        console.log(userName, userAge, userProfission, userAbout);
        // map
        // const userName = interaction.fields.getTextInputValue("name");
        await interaction.reply(
            {content: `Nome: ${userName}, Idade: ${userAge}, Profissão: ${userProfission}, Sobre: ${userAbout}`, ephemeral : true}
        );
        return;
    }
}