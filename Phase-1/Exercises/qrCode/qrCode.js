const QRCode = require("qrcode");

QRCode.toFile(
  "github.png",
  "https://github.com",
  function (err) {
    if (err) throw err;

    console.log("QR generated!");
  }
);
