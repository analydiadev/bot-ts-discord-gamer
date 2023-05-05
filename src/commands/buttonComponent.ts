import { ActionRowBuilder, ButtonBuilder, ButtonInteraction, ButtonStyle, CommandInteraction, MessageActionRowComponentBuilder } from "discord.js";
import { ButtonComponent, Discord, Slash } from "discordx";

@Discord()
class buttonComponent{
    @ButtonComponent({id:"oie"})
    handler(interaction:ButtonInteraction):void{
        interaction.reply(":wave:");
    }
    @ButtonComponent({id:"coracao"})
    coracao(interaction:ButtonInteraction):void{
        interaction.reply(":heart:")
    }
    @Slash({description: "teste"})
    test(interaction: CommandInteraction): void{
        const btn = new ButtonBuilder()
        .setLabel("hello")
        .setStyle(ButtonStyle.Primary)
        .setCustomId("oie");
        
        const heart = new ButtonBuilder()
        .setLabel("coração")
        .setEmoji("❤")
        .setStyle(ButtonStyle.Success)
        .setCustomId("coracao")

        const buttonRow =
        new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(btn);
        const heartButton = 
        new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(heart);
        interaction.reply({
            components: [buttonRow, heartButton],
        });
    }
    
}
