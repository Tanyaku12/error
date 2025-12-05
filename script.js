// Contoh JavaScript sederhana: Membuat teks "Error" berkedip setiap 1 detik
const errorText = document.querySelector('.error-text');
setInterval(() => {
    errorText.style.opacity = (errorText.style.opacity === '0.5') ? '1' : '0.5';
}, 1000);html>
