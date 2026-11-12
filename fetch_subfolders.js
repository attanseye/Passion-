const https = require("https");
const fs = require("fs");

const folders = [
  { name: "Brand Assets", id: "1aI-ZYNVz_6gLaEnq-W7FfX7sqNlLUy_C" },
  { name: "Category Images", id: "1VGmBwYUE3MIaTYZMOFJYqvMZCOREtemO" },
  { name: "Homepage Banners", id: "1kuK71J-najRHCs2lDmjlDU8mtlw1jOTh" },
  { name: "Product Images", id: "1fK2Wf8yazJfDiavf6YY3txbXwzkgH2Uk" }
];

function fetchFolder(folder) {
  return new Promise((resolve) => {
    const url = `https://drive.google.com/drive/folders/${folder.id}?usp=sharing`;
    https.get(url, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        fs.writeFileSync(`/tmp/folder_${folder.name.replace(/\s+/g, '_')}.html`, data);
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
