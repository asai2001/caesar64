// script.js


function encryptText() {
    var text = document.getElementById("text").value;
    var caesarShift = parseInt(document.getElementById("caesarShift").value, 10);

    if (isNaN(caesarShift)) {
        alert("Caesar Shift harus berupa angka. Harap masukkan angka saja.");
        return;
    }

    var encryptedText = encryptCaesarBase64(text, caesarShift);
    document.getElementById("encryptedText").innerText = encryptedText;
}

function encryptCaesarBase64(text, caesarShift) {
    var result = '';

    for (var i = 0; i < text.length; i++) {
        var ch = text.charAt(i);

        if (/[a-zA-Z]/.test(ch)) {
            var base = ch === ch.toUpperCase() ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            var encryptedChar = String.fromCharCode(((ch.charCodeAt(0) - base + caesarShift) % 26) + base);
            result += encryptedChar;
        } else if (/[0-9]/.test(ch)) {
            var encryptedChar = String.fromCharCode(((ch.charCodeAt(0) - '0'.charCodeAt(0) + caesarShift) % 10) + '0'.charCodeAt(0));
            result += encryptedChar;
        } else {
            result += ch;
        }
    }

    var caesarEncrypted = result.toString();
    var encoded = btoa(caesarEncrypted); // Base64 encoding
    return encoded;
}
