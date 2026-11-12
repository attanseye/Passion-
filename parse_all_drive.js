const fs = require("fs");

["Category_Images", "Homepage_Banners"].forEach(fname => {
  const html = fs.readFileSync(`/tmp/folder_${fname}.html`, "utf8");
  console.log(`\n=================== FOLDER: ${fname} ===================`);
  const parts = html.split("AF_initDataCallback(");
  if (parts[4]) {
    // print strings that look like names or file ids
    const text = parts[4];
    const matches = text.match(/\[null,"([a-zA-Z0-9_\-]{25,})"\]/g);
    console.log("IDs found:", matches);
    
    // search for any filenames or labels
    const labels = text.match(/\[\[\["([^"]+)"/g);
    console.log("Labels:", labels);
  }
});
