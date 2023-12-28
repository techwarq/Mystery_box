// script.js

function generateQRCode() {
    // Get the message from the textarea
    const message = document.getElementById('messageInput').value;

    // Check if the message is not empty
    if (message.trim() !== '') {
        // Create a new QRCode instance
        const qrcode = new QRCode(document.getElementById('qrCodeBox'), {
            text: message,
            width: 128,
            height: 128,
        });

        // Call the makeCode method to generate the QR code
        qrcode.makeCode(message);

        // Hide the textarea and show the box with the QR code
        document.querySelector('.promo textarea').style.display = 'none';
        document.querySelector('.submit').style.display = 'none';
        document.getElementById('qrCodeBox').style.display = 'block';
    } else {
        alert('Please enter a message before submitting.');
    }
}
