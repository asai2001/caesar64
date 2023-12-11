// Fungsi untuk melakukan dekripsi Base64 pada Panel 6
    function decryptBase64() {
        var textToDecryptBase64 = document.getElementById('textToDecryptBase64').value;
        var decryptedTextBase64 = decryptFromBase64(textToDecryptBase64);
        document.getElementById('decryptedTextBase64').innerText = decryptedTextBase64;
    }

    // Fungsi dekripsi Base64 versi JavaScript
    function decryptFromBase64(encodedText) {
        var decodedText = atob(encodedText);
        return decodedText;
    }