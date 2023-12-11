
    // Fungsi untuk melakukan enkripsi Base64 pada Panel 5
    function encryptBase64() {
        var textToEncryptBase64 = document.getElementById('textToEncryptBase64').value;
        var encryptedTextBase64 = encryptToBase64(textToEncryptBase64);
        document.getElementById('encryptedTextBase64').innerText = encryptedTextBase64;
    }

    // Fungsi enkripsi Base64 versi JavaScript
    function encryptToBase64(text) {
        var encodedText = btoa(text);
        return encodedText;
    }