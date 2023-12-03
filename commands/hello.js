const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hello')
        .setDescription('Get Tickets details Replies with Pong!'),
    async execute(interaction) {
        // await interaction.user.send('Hi From Tickeing Bot');
        await interaction.reply('Pong!');
    },
};