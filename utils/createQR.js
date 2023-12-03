const fs = require("fs");
const qrcode = require("qrcode");

// Data to be encoded in the QR code
const data = { name: "Arpit Bansal", transactionId: "dummyTransaction" };

async function generateQRCode(text) {
    try {
        const qrCodeDataUrl = await qrcode.toDataURL(JSON.stringify(data));
        return qrCodeDataUrl;
    } catch (error) {
        throw new Error("Failed to generate QR code.");
    }
}

// Generate QR code
// qrcode.toFile('./output.png', JSON.stringify(data), (err) => {
//     if (err) throw err;
//     console.log('QR code generated successfully!');
// });
module.exports = {
    name: "getQRDetails",
    execute: async() => {
        try {
            // Generate QR code as a data URL
            const qrCodeBuffer = Buffer.from(valueDetails.split(",")[1], "base64");

            // Convert the data URL to a Buffer
            const qrCodeDataUrl = await qrcode.toDataURL(qrCodeBuffer);
            console.log("what is the fil");
            return qrCodeDataUrl;
        } catch (error) {
            throw new Error("Failed to generate QR code.");
        }
    },
};