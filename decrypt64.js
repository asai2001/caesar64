function decryptText() {
    var encodedText = document.getElementById("encodedText").value;
    var decryptCaesarShift = parseInt(document.getElementById("decryptCaesarShift").value, 10);

    if (isNaN(decryptCaesarShift)) {
        alert("Caesar Shift harus berupa angka. Harap masukkan angka saja.");
        return;
    }

    var decryptedText = decryptCaesarBase64(encodedText, decryptCaesarShift);
    document.getElementById("decryptedText").innerText = decryptedText;
}

function decryptCaesarBase64(encryptedText, caesarShift) {
    var decoded = atob(encryptedText); // Base64 decoding
    var caesarEncrypted = decoded.toString();

    var result = '';

    for (var i = 0; i < caesarEncrypted.length; i++) {
        var ch = caesarEncrypted.charAt(i);

        if (/[a-zA-Z]/.test(ch)) {
            var base = ch === ch.toUpperCase() ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            var decryptedChar = String.fromCharCode(((ch.charCodeAt(0) - base - caesarShift + 26) % 26) + base);
            result += decryptedChar;
        } else if (/[0-9]/.test(ch)) {
            var decryptedChar = String.fromCharCode(((ch.charCodeAt(0) - '0'.charCodeAt(0) - caesarShift + 10) % 10) + '0'.charCodeAt(0));
            result += decryptedChar;
        } else {
            result += ch;
        }
    }

    return result;
}
