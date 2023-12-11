 // Fungsi untuk enkripsi Caesar pada Panel 3
    function encryptCaesar() {
        var text = document.getElementById('textCaesar').value;
        var shift = parseInt(document.getElementById('caesarShift3').value);

        var encryptedText = encryptCaesarCipher(text, shift);

        document.getElementById('encryptedTextCaesar').innerText = encryptedText;
    }

    // Fungsi enkripsi Caesar versi JavaScript
    function encryptCaesarCipher(text, shift) {
        var result = '';

        for (var i = 0; i < text.length; i++) {
            var ch = text.charAt(i);

            if (/[a-zA-Z]/.test(ch)) {
                var base = ch === ch.toUpperCase() ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
                var encryptedChar = String.fromCharCode(((ch.charCodeAt(0) - base + shift) % 26) + base);
                result += encryptedChar;
            } else if (/[0-9]/.test(ch)) {
                var encryptedChar = String.fromCharCode(((ch.charCodeAt(0) - '0'.charCodeAt(0) + shift) % 10) + '0'.charCodeAt(0));
                result += encryptedChar;
            } else {
                result += ch;
            }
        }

        return result;
    }