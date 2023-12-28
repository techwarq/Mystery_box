// script.js

async function generateQRCode() {
    // Get the message from the textarea
    const message = document.getElementById('messageInput').value;

    // Check if the message is not empty
    if (message.trim() !== '') {
        try {
            // Use an online API to generate the QR code
            const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=128x128&data=${encodeURIComponent(message)}`;
            
            // Fetch the QR code image
            const response = await fetch(apiUrl);
            const qrCodeImage = await response.blob();

            // Create an image element and set the source
            const imgElement = document.createElement('img');
            imgElement.src = URL.createObjectURL(qrCodeImage);

            // Get the QR code box and append the image
            const qrCodeBox = document.getElementById('qrCodeBox');
            qrCodeBox.innerHTML = ''; // Clear previous content
            qrCodeBox.appendChild(imgElement);

            // Hide the textarea and show the box with the QR code
            document.querySelector('.promo textarea').style.display = 'none';
            document.querySelector('.submit').style.display = 'none';
            qrCodeBox.style.display = 'block';
        } catch (error) {
            console.error('Error generating QR code:', error);
            alert('Error generating QR code. Please try again.');
        }
    } else {
        alert('Please enter a message before submitting.');
    }
}
