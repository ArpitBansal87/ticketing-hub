const { SlashCommandBuilder } = require("discord.js");
const qrcode = require("qrcode");


// Data to be encoded in the QR code
const data = { name: "Arpit Bansal", transactionId: "dummyTransaction" };

async function generateQRCode() {
    try {
        const qrCodeDataUrl = await qrcode.toDataURL(JSON.stringify(data));
        return qrCodeDataUrl;
    } catch (error) {
        throw new Error("Failed to generate QR code.");
    }
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ticket")
        .setDescription("Get Tickets based on the details you provide"),
    async execute(interaction) {
        // Generate QR code as a data URL
        const valueDetails = await generateQRCode();
        // Convert the data URL to a Buffer
        const qrCodeBuffer = Buffer.from(valueDetails.split(",")[1], "base64");

        await interaction.user.send(
            "Hi! I am from Tickeing Bot Team. Attached is you ticket!"
        );
        await interaction.user.send({ files: [qrCodeBuffer] });
        await interaction.reply(
            "Ticket generation has been completed and sent to you!"
        );
    },
};