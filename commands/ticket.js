const { SlashCommandBuilder } = require("discord.js");
const createQR = require("../utils/createQR");
const qrcode = require("qrcode");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ticket")
        .setDescription("Get Tickets based on the details you provide"),
    async execute(interaction) {
        const valueDetails = await generateQRCode();

        await interaction.user.send(
            "Hi! I am from Tickeing Bot Team. Attached is you ticket!"
        );
        await interaction.user.send({ files: [qrCodeBuffer] });
        await interaction.reply(
            "Ticket generation has been completed and sent to you!"
        );
    },
};