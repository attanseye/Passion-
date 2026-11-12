const fs = require("fs");
const path = require("path");
const https = require("https");

const driveFiles = JSON.parse(fs.readFileSync("/tmp/drive_files.json", "utf8"));

function downloadFile(url, dest) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        https.get(res.headers.location, (res2) => {
          res2.pipe(file);
          file.on('finish', () => {
            file.close(resolve);
          });
        }).on('error', (e) => {
          console.error("Redirect error:", dest, e);
          resolve();
        });
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (e) => {
      console.error("Download error:", dest, e);
      resolve();
    });
  });
}

async function run() {
  for (const [brand, items] of Object.entries(driveFiles)) {
    const dir = path.join("public", "products", brand.toLowerCase());
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Downloading ${items.length} images for ${brand}...`);
    for (const item of items) {
      const cleanName = item.name.replace(/[^a-zA-Z0-9_\-\. ]/g, "").trim();
      const dest = path.join(dir, cleanName);
      if (!fs.existsSync(dest) || fs.statSync(dest).size < 1000) {
        const url = `https://lh3.googleusercontent.com/d/${item.id}`;
        await downloadFile(url, dest);
        console.log(`  Saved: ${dest} (${fs.statSync(dest).size} bytes)`);
      }
    }
  }
  console.log("All downloads completed!");
}

run();
