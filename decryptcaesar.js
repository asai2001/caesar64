// Fungsi untuk melakukan dekripsi Caesar pada Panel 4
    function decryptCaesar() {
        var textToDecrypt = document.getElementById('textToDecrypt').value;
        var decryptCaesarShift = parseInt(document.getElementById('decryptCaesarShift2').value, 10);

        if (isNaN(decryptCaesarShift)) {
            alert("Caesar Shift harus berupa angka. Harap masukkan angka saja.");
            return;
        }

        var decryptedCaesarText = decryptCaesarCipher(textToDecrypt, decryptCaesarShift);
        document.getElementById('decryptedCaesarText').innerText = decryptedCaesarText;
    }

    // Fungsi dekripsi Caesar versi JavaScript
    function decryptCaesarCipher(text, shift) {
        var result = '';

        for (var i = 0; i < text.length; i++) {
            var ch = text.charAt(i);

            if (/[a-zA-Z]/.test(ch)) {
                var base = ch === ch.toUpperCase() ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
                var decryptedChar = String.fromCharCode(((ch.charCodeAt(0) - base - shift + 26) % 26) + base);
                result += decryptedChar;
            } else if (/[0-9]/.test(ch)) {
                var decryptedChar = String.fromCharCode(((ch.charCodeAt(0) - '0'.charCodeAt(0) - shift + 10) % 10) + '0'.charCodeAt(0));
                result += decryptedChar;
            } else {
                result += ch;
            }
        }

        return result;
    }