const https = require("https");
const fs = require("fs");

const folders = [
  { name: "Apple", id: "1j9oSUFzsCfoSxBTrPa30d_5dUZo0BnAV" },
  { name: "Lush", id: "12tyq4tdaxJejWCHGAY_oqd3pD6CAaO7T" },
  { name: "Passhionate", id: "1Ezxxa8JEQaa5UaOaqinQP1b_KtUhA9NR" }
];

function fetchFolder(folder) {
  return new Promise((resolve) => {
    const url = `https://drive.google.com/drive/folders/${folder.id}?usp=sharing`;
    https.get(url, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        fs.writeFileSync(`/tmp/folder_${folder.name}.html`, data);
        console.log(`Saved ${folder.name}, length: ${data.length}`);
        resolve();
      });
    }).on("error", (e) => {
      console.error(`Error fetching ${folder.name}:`, e);
      resolve();
    });
  });
}

(async () => {
  for (const f of folders) {
    await fetchFolder(f);
  }
})();
