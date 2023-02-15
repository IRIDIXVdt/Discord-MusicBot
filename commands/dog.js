const { MessageEmbed, MessageAttachment } = require("discord.js");
const fetch = require('node-fetch');


module.exports = {
    name: "dog",
    description: "dogAPI",
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
        const url = "https://dog.ceo/api/breeds/image/random";
        let settings = { method: "Get" };
        fetch(url, settings)
            .then(res => res.json())
            .then((json) => {
                const ma = new MessageAttachment(json.message);

                // message.channel.send('test method');
                // message.channel.send("new test"+json.message);

                let Embed = new MessageEmbed()
                    .setAuthor(
                        `Dog API of ${client.user.username}`
                    )
                    .setColor(client.botconfig.EmbedColor)
                    .setImage(
                        json.message
                    );

                message.channel.send(Embed);
            });


    },
};
