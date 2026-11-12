const fs = require("fs");

const folderNames = ["Brand_Assets", "Category_Images", "Homepage_Banners", "Product_Images"];

folderNames.forEach(fname => {
  const html = fs.readFileSync(`/tmp/folder_${fname}.html`, "utf8");
  console.log(`\n=================== FOLDER: ${fname} ===================`);
  
  // Find AF_initDataCallback with ds:3 or with items
  const parts = html.split("AF_initDataCallback(");
  parts.slice(1).forEach((part, idx) => {
    // Look for items: [[null, "FILE_ID"], null, null, null, "mime-type", ... [filename]]
    // Pattern: [null,"([a-zA-Z0-9_-]{25,})"].*?"([^"]+\.(png|jpg|jpeg|webp|svg|pdf|csv|xlsx?))"
    const regex = /\[null,"([a-zA-Z0-9_\-]{25,})"\][\s\S]*?\[\[\["([^"]+)"/g;
    let match;
    const items = [];
    while ((match = regex.exec(part)) !== null) {
      items.push({ id: match[1], name: match[2] });
    }
    if (items.length > 0) {
      console.log(`Found ${items.length} items in part ${idx}:`);
      items.forEach(it => console.log(`  - [${it.id}] ${it.name}`));
    }
  });
});

