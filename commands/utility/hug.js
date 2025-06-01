const { SlashCommandBuilder } = require("discord.js");
const { giphyApiKey } = require('../../config.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hug")
        .setDescription("Replies with a text and a hug gif"),
    async execute(interaction) {
        await interaction.reply('Hug! 🤗');
        const url = `http://api.giphy.com/v1/gifs/search?q=hug&api_key=${giphyApiKey}&limit=100`;
        const res = await fetch(url);
        const json = await res.json();
        const randomIndex = Math.floor(Math.random() * json.data.length);
        const gifUrl = json.data[randomIndex].url;
        await interaction.channel.send(gifUrl);
    },
};