const fs = require("fs");
const path = require("path");

function getFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).map(f => ({
    name: f,
    base: f.replace(/\.png$/i, "").toLowerCase().replace(/[^a-z0-9]/g, ""),
    relPath: `/${dir}/${f}`.replace('/public/', '/')
  }));
}

const lushFiles = getFiles("public/products/lush");
const appleFiles = getFiles("public/products/apple");
const passhionateFiles = getFiles("public/products/passhionate");
const allFiles = [...lushFiles, ...appleFiles, ...passhionateFiles];

console.log("Total downloaded images available:", allFiles.length);

