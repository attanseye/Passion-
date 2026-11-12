const fs = require("fs");

["Apple", "Lush", "Passhionate"].forEach(brand => {
  const html = fs.readFileSync(`/tmp/folder_${brand}.html`, "utf8");
  console.log(`\n=================== BRAND: ${brand} ===================`);
  
  // Look for items inside the html data
  // Google drive item structure in ds:3
  // [null,"<file-id>"],null,null,null,"image/..." ... [[["<filename>"]]]
  // Let us match: [null,"([a-zA-Z0-9_-]{25,})"] followed within 500 chars by [[["([^"]+)
  const regex = /\[null,"([a-zA-Z0-9_\-]{25,})"\][\s\S]{1,500}?\[\[\["([^"]+)"/g;
  let match;
  const items = new Map();
  while ((match = regex.exec(html)) !== null) {
    const id = match[1];
    const name = match[2];
    if (name !== "Name" && name !== "A to Z" && name !== "Modified" && name !== "Size not available") {
      items.set(id, name);
    }
  }
  console.log(`Total unique files found: ${items.size}`);
  for (const [id, name] of items.entries()) {
    console.log(`  - [${id}] ${name}`);
  }
});
