const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("mahjong")
        .setDescription("Display Riichi Mahjong rules."),

    //TODO : Faire en sorte d'afficher les règles du mahjong avec plusieurs pages
    //Accéder à une page précise et/ou un point des règles grâce à la commande (+ ajout d'un nombre page, nombre ou nom du chapitre)
    //Inclure des images
    async execute(interaction) {
        await interaction.reply("Hellowwww!");
    },
};