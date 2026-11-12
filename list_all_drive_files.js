const fs = require("fs");

const brands = ["Apple", "Lush", "Passhionate"];
const allFiles = {};

brands.forEach(brand => {
  const html = fs.readFileSync(`/tmp/folder_${brand}.html`, "utf8");
  const regex = /\[null,"([a-zA-Z0-9_\-]{25,})"\][\s\S]{1,500}?\[\[\["([^"]+)"/g;
  let match;
  allFiles[brand] = [];
  const seen = new Set();
  while ((match = regex.exec(html)) !== null) {
    const id = match[1];
    let name = match[2];
    name = name.replace(/\\u0026/g, "&");
    if (!seen.has(name) && !["Name", "A to Z", "Date modified", "New to old", "Modified", "Size not available"].includes(name)) {
      seen.add(name);
      allFiles[brand].push({ id, name });
    }
  }
  console.log(`\n=== ${brand}: ${allFiles[brand].length} files ===`);
  allFiles[brand].forEach(f => console.log(`  "${f.name}": "${f.id}"`));
});

fs.writeFileSync("/tmp/drive_files.json", JSON.stringify(allFiles, null, 2));
