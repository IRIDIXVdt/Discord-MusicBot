const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');

module.exports = {
    name: "cat",
    description: "catAPI",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
        const url = "https://api.thecatapi.com/v1/images/search";
        let settings = { method: "Get" };
        fetch(url, settings)
            .then(res => res.json())
            .then((json) => {
                let Embed = new MessageEmbed()
                    .setAuthor(
                        `Cat API of ${client.user.username}`
                    )
                    .setColor(client.botconfig.EmbedColor)
                    .setImage(
                        json[0].url
                    );
                message.channel.send(Embed);
            });


    },
};
