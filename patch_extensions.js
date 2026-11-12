const fs = require('fs');
let data = fs.readFileSync('./lib/data.ts', 'utf8');

const regex = /name: "Hair Extensions",\s*products: \[[\s\S]*?\],/;
const replacement = `name: "Hair Extensions",
        products: [
          { id: "le-4", name: "Wow Braid", category: "Braids", price: "₦2,500" },
          { id: "le-5", name: "Jumbo Braid", category: "Braids", price: "₦3,000" },
          { id: "le-6", name: "Supreme Braid 10X", category: "Braids", price: "₦4,500" },
          { id: "le-7", name: "Ready Braid", category: "Braids", price: "₦3,500" },
          { id: "le-8", name: "Mega Braid", category: "Braids", price: "₦2,800" },
          { id: "le-9", name: "Aura Braid", category: "Braids", price: "₦3,200" },
          { id: "le-10", name: "Lasgidi Braid", category: "Braids", price: "₦3,500" },
          { id: "le-11", name: "Nancy Braid", category: "Braids", price: "₦3,000" },
          { id: "le-12", name: "Naija Braid", category: "Braids", price: "₦2,500" },
          { id: "le-13", name: "Zari Braid", category: "Braids", price: "₦3,500" },
          { id: "le-14", name: "Kinky Twist", category: "Twists", price: "₦4,000" },
          { id: "le-15", name: "Kinky Twist Long", category: "Twists", price: "₦5,000" },
          { id: "le-16", name: "Curly Braids", category: "Braids", price: "₦4,500" },
          { id: "le-17", name: "Curly Braids Short", category: "Braids", price: "₦3,500" },
          { id: "le-18", name: "Passion Twist", category: "Twists", price: "₦4,800" },
          { id: "le-19", name: "Dancing Curls", category: "Curls", price: "₦4,500" },
          { id: "le-20", name: "Sasha Locs", category: "Locs", price: "₦5,500" },
          { id: "le-21", name: "Bone Straight Pony", category: "Ponytails", price: "₦12,000" },
          { id: "le-22", name: "Natural Pony", category: "Ponytails", price: "₦8,000" },
          { id: "le-23", name: "Bouncy Wave", category: "Waves", price: "₦10,000" },
        ],`;

data = data.replace(regex, replacement);
fs.writeFileSync('./lib/data.ts', data);
console.log("Patched successfully");
