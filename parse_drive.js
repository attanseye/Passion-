const fs = require("fs");
const html = fs.readFileSync("/tmp/drive.html", "utf8");

const parts = html.split("AF_initDataCallback(");
parts.slice(1).forEach((part, i) => {
  const endIdx = part.indexOf(");</script>");
  const content = endIdx !== -1 ? part.slice(0, endIdx) : part.slice(0, 500);
  console.log(`--- Callback ${i} (length: ${content.length}) ---`);
  
  const fileMatches = content.match(/["']([^"']+\.(jpg|jpeg|png|webp|pdf|docx|xlsx))["']/gi);
  if (fileMatches) console.log("File matches:", fileMatches);

  // Search for folder / file IDs
  const idMatches = content.match(/1[a-zA-Z0-9_\-]{25,}/g);
  if (idMatches) console.log("Drive IDs:", [...new Set(idMatches)]);
});

