const fs = require("fs");
const qrcode = require("qrcode");


// Generate QR code
// qrcode.toFile('./output.png', JSON.stringify(data), (err) => {
//     if (err) throw err;
//     console.log('QR code generated successfully!');
// });
module.exports = {
    name: "getQRDetails",
    execute: async () => {
        try {
        } catch (error) {
            throw new Error("Failed to generate QR code.");
        }
    },
};