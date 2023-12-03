const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("hello")
        .setDescription("Replies with Pong!"),
    async execute(interaction) {
        await interaction.user.send(
            "Hi! I am from Tickeing Bot Team. Please provide the correct details for ticket to get generated"
        );
        await interaction.reply('Initated the ticket generation process')
    },
};