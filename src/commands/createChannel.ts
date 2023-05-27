import { ApplicationCommandOptionType, AutocompleteInteraction, ChannelType, CommandInteraction, GuildChannel, GuildChannelCreateOptions, createChannel } from "discord.js";
import { Discord, Slash, SlashOption } from "discordx";

@Discord()
class ClearChat {
    @Slash({ description: "criar canal" })
    create(
        @SlashOption({
            description: "channel",
            name: "criarcanal",
            required: true,
            type: ApplicationCommandOptionType.String
        })
        criarcanal: string,

        @SlashOption({
            autocomplete: (typechannel: AutocompleteInteraction) => {
                typechannel.respond([
                    { name: "Canal de voz", value: "Voice" },
                    { name: "Canal de texto", value: "Text" },
                    { name: "Canal de forum", value: "Forum" },
                    { name: "Canal de anunciamento", value: "Announcement" },
                    { name: "Criar categoria", value: "Category" },
                    { name: "Canal público temporário", value: "Public" },
                ]);
            },
            description: "Opcão de canal",
            name: "opcao-de-canal",
            required: true,
            type: ApplicationCommandOptionType.String
        })
        typeGuildChannel: string,
        interaction: CommandInteraction,
    ) {
        console.log(typeGuildChannel)
        var newChannel = interaction.guild?.channels
        switch (typeGuildChannel) {
            case "Voice":
                //@ts-ignore
                newChannel?.create({ name: criarcanal, type: ChannelType.GuildVoice })
                break;
            case "Text":
                //@ts-ignore
                newChannel?.create({ name: criarcanal, type: ChannelType.GuildText })
                break;
            case "Forum":
                //@ts-ignore
                newChannel?.create({ name: criarcanal, type: ChannelType.GuildForum })
                break;
            case "Announcement":
                //@ts-ignore
                newChannel?.create({ name: criarcanal, type: ChannelType.GuildAnnouncement })
                break;
            case "Category":
                //@ts-ignore
                newChannel?.create({ name: criarcanal, type: ChannelType.GuildCategory })
                break;
            case "Public":
                //@ts-ignore
                newChannel?.create({ name: criarcanal, type: ChannelType.PublicThread })
                break;
            default:
                interaction.reply("Tente novamente")
        }
        interaction.reply(`O nome do canal criado é: ${criarcanal} e o tipo é: ${typeGuildChannel}`)
    }
}
