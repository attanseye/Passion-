const fs = require("fs");
const html = fs.readFileSync("/tmp/drive.html", "utf8");
const parts = html.split("AF_initDataCallback(");
if (parts[4]) {
  const endIdx = parts[4].indexOf(");</script>");
  const content = endIdx !== -1 ? parts[4].slice(0, endIdx) : parts[4];
  fs.writeFileSync("/tmp/callback3.js", content);
  console.log("Saved callback 3, length:", content.length);
}
