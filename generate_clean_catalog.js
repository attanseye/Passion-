const fs = require("fs");

function getFileMap(dir) {
  if (!fs.existsSync(dir)) return new Map();
  const map = new Map();
  fs.readdirSync(dir).forEach(file => {
    const clean = file.replace(/\.png$/i, "").toLowerCase().replace(/[^a-z0-9]/g, "");
    const webPath = `/${dir}/${file}`.replace("/public/", "/");
    map.set(clean, webPath);
  });
  return map;
}

const lushMap = getFileMap("public/products/lush");
const appleMap = getFileMap("public/products/apple");
const passMap = getFileMap("public/products/passhionate");

function resolveImg(name, preferredBrand) {
  const clean = name.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  const maps = [];
  if (preferredBrand === "lush") maps.push(lushMap, passMap, appleMap);
  else if (preferredBrand === "apple") maps.push(appleMap, passMap, lushMap);
  else maps.push(passMap, lushMap, appleMap);

  // 1. Exact match
  for (const m of maps) {
    if (m.has(clean)) return m.get(clean);
  }

  // 2. Starts with / contains (prefer exact without numbers)
  for (const m of maps) {
    for (const [k, v] of m.entries()) {
      if (k === clean || (k.startsWith(clean) && !k.match(/\d+$/))) return v;
    }
  }

  for (const m of maps) {
    for (const [k, v] of m.entries()) {
      if (k.startsWith(clean) || clean.startsWith(k)) return v;
    }
  }

  return undefined;
}

console.log("Aura Braid ->", resolveImg("Aura Braid", "lush"));
console.log("Bone Straight Pony ->", resolveImg("Bone Straight Pony", "lush"));
console.log("Jumbo Braid ->", resolveImg("Jumbo Braid", "lush"));
console.log("Detangling Conditioner 370ml ->", resolveImg("Detangling Conditioner 370ml", "lush"));
console.log("Above edge wax ->", resolveImg("Above edge wax", "passhionate"));

