const fs = require('fs');
let data = fs.readFileSync('./lib/data.ts', 'utf8');

const newItems = `          { id: "lh-4", name: "Detangling Conditioner 370ml", category: "Conditioners", price: "₦4,500" },
          { id: "lh-5", name: "Mentholated Conditioner 370ml", category: "Conditioners", price: "₦4,500" },
          { id: "lh-6", name: "Deep Conditioner 250g", category: "Conditioners", price: "₦5,000" },
          { id: "lh-7", name: "Deep Conditioner 500g", category: "Conditioners", price: "₦8,000" },
          { id: "lh-8", name: "Leave In Treatment 250g", category: "Treatments", price: "₦4,500" },
          { id: "lh-9", name: "Leave In Treatment 500g", category: "Treatments", price: "₦7,500" },
          { id: "lh-10", name: "Rejuvenating Shampoo 390ml", category: "Shampoos", price: "₦5,000" },
          { id: "lh-11", name: "Mentholated Shampoo 40g", category: "Shampoos", price: "₦1,500" },
          { id: "lh-12", name: "Mentholated Shampoo 390ml", category: "Shampoos", price: "₦4,500" },
          { id: "lh-13", name: "Neutralizing Shampoo 350ml", category: "Shampoos", price: "₦4,500" },
          { id: "lh-14", name: "Neutralizing Shampoo 500ml", category: "Shampoos", price: "₦7,000" },
          { id: "lh-15", name: "Indian Herb Hair Growth 250ml", category: "Treatments", price: "₦6,000" },
          { id: "lh-16", name: "Indian Herb Hair Growth 500ml", category: "Treatments", price: "₦10,000" },
          { id: "lh-17", name: "Mentholated Hair & Scalp Treatment 250ml", category: "Treatments", price: "₦5,500" },
          { id: "lh-18", name: "Mentholated Hair & Scalp Treatment 500ml", category: "Treatments", price: "₦9,000" },
          { id: "lh-19", name: "Ultra Nourishing Hair Food 250ml", category: "Treatments", price: "₦4,000" },
          { id: "lh-20", name: "Ultra Nourishing Hair Food 500ml", category: "Treatments", price: "₦7,000" },
          { id: "lh-21", name: "Anti-Dandruff Treatment 250ml", category: "Treatments", price: "₦5,500" },
          { id: "lh-22", name: "Anti-Dandruff Treatment 500ml", category: "Treatments", price: "₦9,000" },
          { id: "lh-23", name: "No-Lye Relaxer 4-in-1 Regular", category: "Relaxers", price: "₦6,000" },
          { id: "lh-24", name: "No-Lye Relaxer 4-in-1 Super", category: "Relaxers", price: "₦6,000" },
          { id: "lh-25", name: "Classic No-Lye Relaxer", category: "Relaxers", price: "₦5,000" },
          { id: "lh-26", name: "Twin Pack Super", category: "Relaxers", price: "₦8,500" },`;

const target = `          { id: "lh-3", name: "Lush Hair Oil", category: "Oils", price: "₦4,500" },`;

if (data.includes(target)) {
    data = data.replace(target, target + '\n' + newItems);
    fs.writeFileSync('./lib/data.ts', data);
    console.log("Patched successfully");
} else {
    console.log("Could not find target");
}
