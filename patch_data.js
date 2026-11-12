const fs = require('fs');
let data = fs.readFileSync('./lib/data.ts', 'utf8');

const oldLush = `  {
    name: "Lush Products",
    image: "/cat_hair_cosmetics_1783095646458.jpg",
    products: [
      { id: "sk-1", name: "Vitamin C Serum", category: "Serums", price: "₦5,500" },
      { id: "sk-2", name: "Hyaluronic Acid Moisturizer", category: "Creams", price: "₦4,800" },
      { id: "sk-3", name: "Facial Cleanser", category: "Cleansers", price: "₦3,200" },
      { id: "sk-4", name: "Sunscreen SPF 50", category: "Sun Protection", price: "₦6,000" },
    ],
  },`;

const newLush = `  {
    name: "Lush Products",
    image: "/cat_hair_cosmetics_1783095646458.jpg",
    subCollections: [
      {
        name: "Skin Care",
        products: [
          { id: "sk-1", name: "Vitamin C Serum", category: "Serums", price: "₦5,500" },
          { id: "sk-2", name: "Hyaluronic Acid Moisturizer", category: "Creams", price: "₦4,800" },
          { id: "sk-3", name: "Facial Cleanser", category: "Cleansers", price: "₦3,200" },
          { id: "sk-4", name: "Sunscreen SPF 50", category: "Sun Protection", price: "₦6,000" },
        ],
      },
      {
        name: "Hair Care",
        products: [
          { id: "lh-1", name: "Lush Hydrating Shampoo", category: "Shampoos", price: "₦6,500" },
          { id: "lh-2", name: "Lush Deep Conditioner", category: "Conditioners", price: "₦7,000" },
          { id: "lh-3", name: "Lush Hair Oil", category: "Oils", price: "₦4,500" },
        ],
      },
      {
        name: "Hair Extensions",
        products: [
          { id: "le-1", name: "Lush 100% Human Hair 20\\"", category: "Extensions", price: "₦45,000" },
          { id: "le-2", name: "Lush Clip-in Extensions", category: "Extensions", price: "₦25,000" },
          { id: "le-3", name: "Lush Braiding Hair", category: "Extensions", price: "₦5,000" },
        ],
      },
    ],
  },`;

data = data.replace(oldLush, newLush);
fs.writeFileSync('./lib/data.ts', data);
console.log("Patched lib/data.ts");
