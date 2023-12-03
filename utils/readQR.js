const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');
const jsQR = require('jsqr');

// Read QR code from an image file
async function readQRCode(filePath) {
    try {
        // Load the image
        const image = await loadImage(filePath);

        // Create a canvas and draw the image on it
        const canvas = createCanvas(image.width, image.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);

        // Get the image data from the canvas
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // Decode the QR code
        const code = jsQR(imageData.data, canvas.width, canvas.height);

        if (code) {
            console.log('QR Code content:', JSON.stringify(code.data), ' |||| ', JSON.parse(code.data));
        } else {
            console.log('No QR code found.');
        }
    } catch (err) {
        console.error('Error reading QR code:', err.message);
    }
}

// Provide the path to the QR code image file
const qrCodeFilePath = './output.png';
readQRCode(qrCodeFilePath);