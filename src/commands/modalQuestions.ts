import { ActionRowBuilder, CommandInteraction, ModalBuilder, ModalSubmitInteraction, TextInputBuilder, TextInputStyle } from "discord.js";
import { ButtonComponent, Discord, ModalComponent, Slash } from "discordx";
@Discord()
class ModalQuestions {
    @Slash({ description: "modal"})
    quiz(interaction: CommandInteraction): void {
        const modal = new ModalBuilder()
            .setTitle("Quiz")
            .setCustomId("Modal")
   
        const quiz1 = new TextInputBuilder()
            .setCustomId("qu1")
            .setLabel("Qual é o país com o maior PIB?")
            .setRequired(true)
            .setPlaceholder("Teste")
            .setStyle(TextInputStyle.Short)

        const quiz2 = new TextInputBuilder()
            .setCustomId("qu2")
            .setLabel("Onde se localiza Machu Picchu?")
            .setRequired(true)
            .setStyle(TextInputStyle.Short)

        const quiz3 = new TextInputBuilder()
            .setCustomId("quiz3")
            .setLabel("Quem inventou a lâmpada?")
            .setRequired(true)
            .setStyle(TextInputStyle.Short)

        const firstQuestion = new ActionRowBuilder<TextInputBuilder>().addComponents(quiz1)
        const secondQuestion = new ActionRowBuilder<TextInputBuilder>().addComponents(quiz2)
        const thirdQuestion = new ActionRowBuilder<TextInputBuilder>().addComponents(quiz3)
        
        modal.addComponents(firstQuestion, secondQuestion, thirdQuestion)
        interaction.showModal(modal)
    }
    @ModalComponent()
    async Modal(interaction: ModalSubmitInteraction): Promise<void> {
        const [quizQuestion1, quizQuestion2, quizQuestion3] = ["qu1", "qu2", "quiz3"].map((id) =>
            interaction.fields.getTextInputValue(id)
        )
        await interaction.reply(
            { content: `Pergunta 1: ${quizQuestion1}, Pergunta 2: ${quizQuestion2}, Pergunta 3: ${quizQuestion3}`, ephemeral: true }
        )
        return;
    }

}