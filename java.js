const input = document.getElementById("input");
const btn = document.getElementById("btn");
const bgColor = document.getElementById("bgColor");
const qrColor = document.getElementById("qrColor");

btn.addEventListener("click", () => {
    qr.innerHTML = "";
    const qrcode = new QRCode(document.getElementById("qr"), {
        text: input.value,
        width: 200,
        height: 200,
        colorDark: qrColor.value,
        colorLight: bgColor.value,
        correctLevel: QRCode.CorrectLevel.H
    });
});



