const fs = require("fs");
const path = require("path");

function getFileMap(dir) {
  if (!fs.existsSync(dir)) return {};
  const map = {};
  fs.readdirSync(dir).forEach(file => {
    const key = file.toLowerCase().replace(/[^a-z0-9]/g, "");
    map[key] = `/${dir}/${file}`.replace('/public/', '/');
  });
  return map;
}

const lushMap = getFileMap("public/products/lush");
const appleMap = getFileMap("public/products/apple");
const passMap = getFileMap("public/products/passhionate");

console.log("Lush keys:", Object.keys(lushMap).length);
console.log("Apple keys:", Object.keys(appleMap).length);
console.log("Passhionate keys:", Object.keys(passMap).length);

function findImage(name, brand) {
  const clean = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  if (brand === "lush") {
    if (lushMap[clean]) return lushMap[clean];
    for (const [k, v] of Object.entries(lushMap)) {
      if (clean.includes(k) || k.includes(clean)) return v;
    }
  }
  if (brand === "apple") {
    if (appleMap[clean]) return appleMap[clean];
    for (const [k, v] of Object.entries(appleMap)) {
      if (clean.includes(k) || k.includes(clean)) return v;
    }
  }
  if (brand === "passhionate") {
    if (passMap[clean]) return passMap[clean];
    for (const [k, v] of Object.entries(passMap)) {
      if (clean.includes(k) || k.includes(clean)) return v;
    }
  }
  
  // Generic lookup
  for (const [k, v] of Object.entries({...lushMap, ...appleMap, ...passMap})) {
    if (clean.length > 5 && (clean.includes(k) || k.includes(clean))) return v;
  }
  return null;
}

// Test some matches
console.log("Aura Braid ->", findImage("Aura Braid", "lush"));
console.log("Bone Straight Pony ->", findImage("Bone Straight Pony", "lush"));
console.log("Coconut Oil Hair Conditioner ->", findImage("Coconut Oil Hair Conditioner", "apple"));
console.log("Black & Nature dye ->", findImage("Black & Nature dye", "passhionate"));

