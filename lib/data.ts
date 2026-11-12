export type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  image?: string;
};

export type SubCollection = {
  name: string;
  products: Product[];
};

export type Collection = {
  name: string;
  image: string;
  subCollections?: SubCollection[];
  products?: Product[];
};

export function getProductImage(productId?: string): string {
  const fallbacks = [
    "/products/lush/Ready Braid.png",
    "/products/apple/Beauty Shampoo.png",
    "/products/passhionate/Above edge wax.png",
    "/products/passhionate/Choice wax.png",
    "/products/lush/Bouncy Wave.png",
    "/products/passhionate/Argan protein.png",
    "/products/lush/Bone Straight Pony.png",
  ];
  if (!productId) return fallbacks[0];
  let hash = 0;
  for (let i = 0; i < productId.length; i++) {
    hash = (hash << 5) - hash + productId.charCodeAt(i);
    hash |= 0;
  }
  const index = Math.abs(hash) % fallbacks.length;
  return fallbacks[index];
}

export const CATALOG: Collection[] = [
  {
    name: "Lush Products",
    image: "/products/lush/Ready Braid.png",
    subCollections: [
      {
        name: "Hair Extensions",
        products: [
          { id: "le-4", name: "Wow Braid", category: "Braids", price: "₦2,500", image: "/products/lush/Naija Braid.png" },
          { id: "le-5", name: "Jumbo Braid", category: "Braids", price: "₦3,000", image: "/products/lush/Jumbo Braid.png" },
          { id: "le-6", name: "Supreme Braid 10X", category: "Braids", price: "₦4,500", image: "/products/lush/Mega Braid.png" },
          { id: "le-7", name: "Ready Braid", category: "Braids", price: "₦3,500", image: "/products/lush/Ready Braid.png" },
          { id: "le-8", name: "Mega Braid", category: "Braids", price: "₦2,800", image: "/products/lush/Mega Braid.png" },
          { id: "le-9", name: "Aura Braid", category: "Braids", price: "₦3,200", image: "/products/lush/Aura Braid.png" },
          { id: "le-10", name: "Lasgidi Braid", category: "Braids", price: "₦3,500", image: "/products/lush/Lasgidi Braid.png" },
          { id: "le-11", name: "Nancy Braid", category: "Braids", price: "₦3,000", image: "/products/lush/Nancy Braid.png" },
          { id: "le-12", name: "Naija Braid", category: "Braids", price: "₦2,500", image: "/products/lush/Naija Braid.png" },
          { id: "le-13", name: "Zari Braid", category: "Braids", price: "₦3,500", image: "/products/lush/Aura Braid.png" },
          { id: "le-14", name: "Kinky Twist", category: "Twists", price: "₦4,000", image: "/products/lush/Kinky Twist.png" },
          { id: "le-15", name: "Kinky Twist Long", category: "Twists", price: "₦5,000", image: "/products/lush/Kinky Twist Long.png" },
          { id: "le-16", name: "Curly Braids", category: "Braids", price: "₦4,500", image: "/products/lush/Curly Braids.png" },
          { id: "le-17", name: "Curly Braids Short", category: "Braids", price: "₦3,500", image: "/products/lush/Curly Braids Short.png" },
          { id: "le-18", name: "Passion Twist", category: "Twists", price: "₦4,800", image: "/products/lush/Passion Twist.png" },
          { id: "le-19", name: "Dancing Curls", category: "Curls", price: "₦4,500", image: "/products/lush/Dancing Curls.png" },
          { id: "le-20", name: "Sasha Locs", category: "Locs", price: "₦5,500", image: "/products/lush/Sasha Locs.png" },
          { id: "le-21", name: "Bone Straight Pony", category: "Ponytails", price: "₦12,000", image: "/products/lush/Bone Straight Pony.png" },
          { id: "le-22", name: "Natural Pony", category: "Ponytails", price: "₦8,000", image: "/products/lush/Natural Pony.png" },
          { id: "le-23", name: "Bouncy Wave", category: "Waves", price: "₦10,000", image: "/products/lush/Bouncy Wave.png" },
        ],
      },
      {
        name: "Hair Care",
        products: [
          { id: "lh-4", name: "Detangling Conditioner 370ml", category: "Conditioners", price: "₦4,500", image: "/products/lush/Detangling Conditioner 370ml.png" },
          { id: "lh-5", name: "Mentholated Conditioner 370ml", category: "Conditioners", price: "₦4,500", image: "/products/lush/Detangling Conditioner 370ml.png" },
          { id: "lh-6", name: "Deep Conditioner 250g", category: "Conditioners", price: "₦5,000", image: "/products/lush/Anti-Dandruff Treatment 250ml.png" },
          { id: "lh-7", name: "Deep Conditioner 500g", category: "Conditioners", price: "₦8,000", image: "/products/lush/Anti-Dandruff Treatment 500ml.png" },
          { id: "lh-8", name: "Leave In Treatment 250g", category: "Treatments", price: "₦4,500", image: "/products/lush/Mentholated Hair  Scalp Treatment 500ml.png" },
          { id: "lh-9", name: "Leave In Treatment 500g", category: "Treatments", price: "₦7,500", image: "/products/lush/Mentholated Hair  Scalp Treatment 500ml.png" },
          { id: "lh-10", name: "Rejuvenating Shampoo 390ml", category: "Shampoos", price: "₦5,000", image: "/products/apple/Beauty Shampoo.png" },
          { id: "lh-11", name: "Mentholated Shampoo 40g", category: "Shampoos", price: "₦1,500", image: "/products/apple/Beauty Shampoo.png" },
          { id: "lh-12", name: "Mentholated Shampoo 390ml", category: "Shampoos", price: "₦4,500", image: "/products/apple/Beauty Shampoo.png" },
          { id: "lh-13", name: "Neutralizing Shampoo 350ml", category: "Shampoos", price: "₦4,500", image: "/products/apple/Beauty Shampoo.png" },
          { id: "lh-14", name: "Neutralizing Shampoo 500ml", category: "Shampoos", price: "₦7,000", image: "/products/apple/Beauty Shampoo.png" },
          { id: "lh-15", name: "Indian Herb Hair Growth 250ml", category: "Treatments", price: "₦6,000", image: "/products/lush/Mentholated Hair  Scalp Treatment 500ml.png" },
          { id: "lh-16", name: "Indian Herb Hair Growth 500ml", category: "Treatments", price: "₦10,000", image: "/products/lush/Mentholated Hair  Scalp Treatment 500ml.png" },
          { id: "lh-17", name: "Mentholated Hair & Scalp Treatment 250ml", category: "Treatments", price: "₦5,500", image: "/products/lush/Mentholated Hair  Scalp Treatment 500ml.png" },
          { id: "lh-18", name: "Mentholated Hair & Scalp Treatment 500ml", category: "Treatments", price: "₦9,000", image: "/products/lush/Mentholated Hair  Scalp Treatment 500ml.png" },
          { id: "lh-19", name: "Ultra Nourishing Hair Food 250ml", category: "Treatments", price: "₦4,000", image: "/products/apple/Hair Food.png" },
          { id: "lh-20", name: "Ultra Nourishing Hair Food 500ml", category: "Treatments", price: "₦7,000", image: "/products/apple/Hair Food.png" },
          { id: "lh-21", name: "Anti-Dandruff Treatment 250ml", category: "Treatments", price: "₦5,500", image: "/products/lush/Anti-Dandruff Treatment 250ml.png" },
          { id: "lh-22", name: "Anti-Dandruff Treatment 500ml", category: "Treatments", price: "₦9,000", image: "/products/lush/Anti-Dandruff Treatment 500ml.png" },
          { id: "lh-23", name: "No-Lye Relaxer 4-in-1 Regular", category: "Relaxers", price: "₦6,000", image: "/products/lush/No-Lye Relaxer 4-in-1 Regular.png" },
          { id: "lh-24", name: "No-Lye Relaxer 4-in-1 Super", category: "Relaxers", price: "₦6,000", image: "/products/lush/No-Lye Relaxer 4-in-1 Super.png" },
          { id: "lh-25", name: "Classic No-Lye Relaxer", category: "Relaxers", price: "₦5,000", image: "/products/lush/Classic No-Lye Relaxer.png" },
          { id: "lh-26", name: "Twin Pack Super", category: "Relaxers", price: "₦8,500", image: "/products/lush/No-Lye Relaxer 4-in-1 Super.png" },
          { id: "lh-27", name: "Cooling Scalp Relief Bundle", category: "Bundles", price: "₦14,500", image: "/products/lush/Cooling Scalp Relief Bundle.png" },
          { id: "lh-28", name: "Dandruff Control & Scalp Balance Bundle", category: "Bundles", price: "₦15,000", image: "/products/lush/Dandruff Control  Scalp Balance Bundle.png" },
          { id: "lh-29", name: "Growth Booster & Length Retention Bundle", category: "Bundles", price: "₦16,000", image: "/products/lush/Growth Booster  Length Retention Bundle.png" },
        ],
      },
      {
        name: "Skin Care",
        products: [
          { id: "sk-1", name: "Vitamin C Serum", category: "Serums", price: "₦5,500", image: "/products/passhionate/1st Class Booster.png" },
          { id: "sk-2", name: "Hyaluronic Acid Moisturizer", category: "Creams", price: "₦4,800", image: "/products/passhionate/Above placenta.png" },
          { id: "sk-3", name: "Facial Cleanser", category: "Cleansers", price: "₦3,200", image: "/products/passhionate/Blue soap _ Cotton clean.png" },
          { id: "sk-4", name: "Sunscreen SPF 50", category: "Sun Protection", price: "₦6,000", image: "/products/apple/Petroleum Jelly.png" },
        ],
      },
    ],
  },
  {
    name: "Apple Products",
    image: "/products/apple/Beauty Shampoo.png",
    products: [
      { id: "ap-1", name: "Beauty Shampoo", category: "Shampoos", price: "₦4,500", image: "/products/apple/Beauty Shampoo.png" },
      { id: "ap-2", name: "Coconut Oil Hair Conditioner", category: "Conditioners", price: "₦3,800", image: "/products/apple/Coconut Oil Hair Conditioner.png" },
      { id: "ap-3", name: "Conditioning Creme Relaxer", category: "Relaxers", price: "₦3,500", image: "/products/apple/Conditioning Creme Relaxer.png" },
      { id: "ap-4", name: "Hair Conditioner", category: "Conditioners", price: "₦3,200", image: "/products/apple/Hair Conditioner.png" },
      { id: "ap-5", name: "Hair Darkening Pomade", category: "Pomades", price: "₦2,500", image: "/products/apple/Hair Darkening Pomade.png" },
      { id: "ap-6", name: "Hair Food", category: "Treatments", price: "₦2,200", image: "/products/apple/Hair Food.png" },
      { id: "ap-7", name: "Hair Oil", category: "Oils", price: "₦2,800", image: "/products/apple/Hair Oil.png" },
      { id: "ap-8", name: "Hair Treatment", category: "Treatments", price: "₦4,000", image: "/products/apple/Hair Treatment.png" },
      { id: "ap-9", name: "Herbal Hair & Scalp Treatment", category: "Treatments", price: "₦4,200", image: "/products/apple/Herbal Hair  Scalp Treatment.png" },
      { id: "ap-10", name: "Petroleum Jelly", category: "Body & Hair", price: "₦1,800", image: "/products/apple/Petroleum Jelly.png" },
      { id: "ap-11", name: "Scalp Care Cream", category: "Treatments", price: "₦2,500", image: "/products/apple/Scalp Care Cream.png" },
      { id: "ap-12", name: "Styling Gel", category: "Gels", price: "₦2,500", image: "/products/apple/Styling Gel.png" },
      { id: "ap-13", name: "Super Setting Lotion", category: "Styling", price: "₦3,000", image: "/products/apple/Super Setting Lotion.png" },
      { id: "ap-14", name: "Weave-on Super Gloss", category: "Gloss & Sprays", price: "₦2,500", image: "/products/apple/Weave-on Super Gloss.png" },
    ],
  },
  {
    name: "Hair Cosmetics, Care, & Styling Products",
    image: "/products/passhionate/Black  Nature dye.png",
    subCollections: [
      {
        name: "Dyes, Tints, & Color Accessories",
        products: [
          { id: "h1-1", name: "Black & Nature dye (b/s)", category: "Dyes", price: "₦3,500", image: "/products/passhionate/Black  Nature dye.png" },
          { id: "h1-2", name: "Cruset dye (b/s & s/s)", category: "Dyes", price: "₦2,800", image: "/products/passhionate/Cruset dye.png" },
          { id: "h1-3", name: "Adore dye mix", category: "Dyes", price: "₦4,000", image: "/products/passhionate/Adore dye mix.png" },
          { id: "h1-4", name: "Cup dye mix", category: "Dyes", price: "₦1,500", image: "/products/passhionate/Cup dye mix.png" },
          { id: "h1-5", name: "Tou Dye (s/s)", category: "Dyes", price: "₦1,200", image: "/products/passhionate/Cruset dye.png" },
          { id: "h1-6", name: "CSCR tint spray", category: "Dyes", price: "₦5,500", image: "/products/passhionate/CSCR tint spray.png" },
        ],
      },
      {
        name: "Shampoos, Conditioners, & Treatments",
        products: [
          { id: "h2-1", name: "Argan shampoo s/s (& 5L Conditioner)", category: "Shampoos", price: "₦8,500", image: "/products/passhionate/Argan shampoo s_s and 5 Litre Conditioner shampoo.png" },
          { id: "h2-2", name: "Argan protein", category: "Treatments", price: "₦6,000", image: "/products/passhionate/Argan protein.png" },
          { id: "h2-3", name: "12 in 1 Scalp spray miracle oil", category: "Oils", price: "₦5,500", image: "/products/passhionate/12 in 1 Scalp spray miracle oil.png" },
          { id: "h2-4", name: "12 in 1 Scalp spray treatment (antidandruff)", category: "Treatments", price: "₦5,500", image: "/products/passhionate/12 in 1 Scalp spray treatment antidandruff.png" },
          { id: "h2-5", name: "1st Class Booster", category: "Treatments", price: "₦4,500", image: "/products/passhionate/1st Class Booster.png" },
          { id: "h2-6", name: "Above placenta", category: "Treatments", price: "₦3,800", image: "/products/passhionate/Above placenta.png" },
          { id: "h2-7", name: "Blue Magic hair cream", category: "Conditioners", price: "₦3,500", image: "/products/passhionate/Blue Magic hair cream.png" },
          { id: "h2-8", name: "Curl Lala", category: "Creams", price: "₦4,200", image: "/products/passhionate/Curl Lala.png" },
        ],
      },
      {
        name: "Relaxers & Texturizers",
        products: [
          { id: "h3-1", name: "Upgrade relaxer", category: "Relaxers", price: "₦2,500", image: "/products/apple/Conditioning Creme Relaxer.png" },
          { id: "h3-2", name: "Milky Way relaxer", category: "Relaxers", price: "₦3,000", image: "/products/lush/Classic No-Lye Relaxer.png" },
          { id: "h3-3", name: "Elan Kit & Relaxer", category: "Relaxers", price: "₦4,200", image: "/products/lush/No-Lye Relaxer 4-in-1 Regular.png" },
          { id: "h3-4", name: "Series Coldwave relaxer", category: "Relaxers", price: "₦2,800", image: "/products/lush/No-Lye Relaxer 4-in-1 Super.png" },
        ],
      },
      {
        name: "Gels, Waxes, Glues, & Edge Controls",
        products: [
          { id: "h4-1", name: "Above edge wax", category: "Edge Controls", price: "₦2,500", image: "/products/passhionate/Above edge wax.png" },
          { id: "h4-2", name: "Choice wax", category: "Waxes", price: "₦3,800", image: "/products/passhionate/Choice wax.png" },
          { id: "h4-3", name: "ATS and LNT Gel", category: "Gels", price: "₦3,500", image: "/products/passhionate/ATS and LNT Gel.png" },
          { id: "h4-4", name: "Any bond glue", category: "Glues", price: "₦3,000", image: "/products/passhionate/Any bond glue.png" },
          { id: "h4-5", name: "Gorilla gel (b/s & s/s)", category: "Gels", price: "₦4,500", image: "/products/passhionate/ATS and LNT Gel.png" },
          { id: "h4-6", name: "Eco gel (8oz)", category: "Gels", price: "₦4,000", image: "/products/apple/Styling Gel.png" },
          { id: "h4-7", name: "Damagrow activator moisturizer gel", category: "Gels", price: "₦3,200", image: "/products/passhionate/Damagrow activator moisturizer gel.png" },
        ],
      },
      {
        name: "Mousses, Sprays, Spritz, & Protectants",
        products: [
          { id: "h5-1", name: "Above mousse", category: "Mousses", price: "₦4,500", image: "/products/passhionate/Above mousse.png" },
          { id: "h5-2", name: "Astylyset mousse", category: "Mousses", price: "₦4,200", image: "/products/passhionate/Astylyset mousse.png" },
          { id: "h5-3", name: "CSCR melting spray", category: "Sprays", price: "₦6,000", image: "/products/passhionate/CSCR melting spray.png" },
          { id: "h5-4", name: "CSCR heat protectant", category: "Protectants", price: "₦5,500", image: "/products/passhionate/CSCR heat protectant.png" },
          { id: "h5-5", name: "Above oil sheen", category: "Sprays", price: "₦3,800", image: "/products/passhionate/Above oil sheen b_s s_s.png" },
          { id: "h5-6", name: "Butterfly spray", category: "Sprays", price: "₦3,200", image: "/products/passhionate/Butterfly spray.png" },
        ],
      },
    ],
  },
  {
    name: "Microblading Materials & Permanent Makeup Equipment",
    image: "/products/passhionate/Blue soap _ Cotton clean.png",
    products: [
      { id: "m1-1", name: "Tattoo machine", category: "Equipment", price: "₦35,000", image: "/products/passhionate/Cartridge 1p_3p_5p  Cartridge 1r_3r.png" },
      { id: "m1-2", name: "Micro bladdler pen", category: "Pens", price: "₦12,000", image: "/products/passhionate/Cartridge 1p_3p_5p  Cartridge 1r_3r.png" },
      { id: "m1-3", name: "Spirit paper (100pcs)", category: "Papers", price: "₦8,500", image: "/products/passhionate/Aftercare ointment for tattoo.png" },
      { id: "m1-4", name: "Pigments (Microblading)", category: "Pigments", price: "₦15,000", image: "/products/passhionate/Black  Nature dye.png" },
      { id: "m1-5", name: "Aftercare ointment (for tattoo)", category: "Aftercare", price: "₦2,000", image: "/products/passhionate/Aftercare ointment for tattoo.png" },
      { id: "m1-6", name: "Blue soap & Cotton clean", category: "Cleaning", price: "₦4,500", image: "/products/passhionate/Blue soap _ Cotton clean.png" },
      { id: "m1-7", name: "Cartridge (1p/3p/5p) & Cartridge 1r/3r", category: "Needles", price: "₦6,500", image: "/products/passhionate/Cartridge 1p_3p_5p  Cartridge 1r_3r.png" },
    ],
  },
  {
    name: "Manicure, Pedicure, & Nail Products",
    image: "/products/passhionate/Callus Remover.png",
    subCollections: [
      {
        name: "Pedicure Scrubs, Creams, & Salts",
        products: [
          { id: "n1-1", name: "Foot scrub excellent", category: "Scrubs", price: "₦3,500", image: "/products/passhionate/Callus Remover.png" },
          { id: "n1-2", name: "Treasure peppermint organic", category: "Creams", price: "₦4,200", image: "/products/passhionate/Cuticle trimmer _ Cuticle softener b_s s_s _ Cuticle oil.png" },
          { id: "n1-3", name: "Sea Salt (m/s, s/s)", category: "Salts", price: "₦2,500", image: "/products/passhionate/Callus Remover.png" },
        ],
      },
      {
        name: "Manicure & Pedicure Tools",
        products: [
          { id: "n2-1", name: "Callus Remover (b/s)", category: "Tools", price: "₦2,800", image: "/products/passhionate/Callus Remover.png" },
          { id: "n2-2", name: "Cuticle trimmer, softener & cuticle oil", category: "Tools", price: "₦4,500", image: "/products/passhionate/Cuticle trimmer _ Cuticle softener b_s s_s _ Cuticle oil.png" },
          { id: "n2-3", name: "Pedicure scraper with blade", category: "Tools", price: "₦1,500", image: "/products/passhionate/Cuticle trimmer _ Cuticle softener b_s s_s _ Cuticle oil.png" },
          { id: "n2-4", name: "Nail Cutter (s/s)", category: "Tools", price: "₦500", image: "/products/passhionate/Cuticle trimmer _ Cuticle softener b_s s_s _ Cuticle oil.png" },
          { id: "n2-5", name: "Massage gun", category: "Tools", price: "₦25,000", image: "/products/passhionate/Cloud 9 Hot Comb & Cloud 9 Straightener.png" },
        ],
      },
      {
        name: "Acrylic, Gel Nail Supplies, & Liquids",
        products: [
          { id: "n3-1", name: "3D brush & 15 in 1 design brush", category: "Brushes", price: "₦5,500", image: "/products/passhionate/3D brush _ 15 in 1 design brush.png" },
          { id: "n3-2", name: "Chrome & Press on Stand & Air brush", category: "Hardware", price: "₦8,500", image: "/products/passhionate/Chrome _ Press on Stand _ Air brush _ Alcohol pad.png" },
          { id: "n3-3", name: "Ezflow monomer", category: "Liquids", price: "₦12,000", image: "/products/passhionate/Chrome _ Press on Stand _ Air brush _ Alcohol pad.png" },
          { id: "n3-4", name: "16d gel (b/s)", category: "Gels", price: "₦4,800", image: "/products/passhionate/3D brush _ 15 in 1 design brush.png" },
          { id: "n3-5", name: "Nail glue", category: "Glues", price: "₦1,200", image: "/products/passhionate/Any bond glue.png" },
        ],
      },
      {
        name: "False Nails & Tips",
        products: [
          { id: "n4-1", name: "Nail by 240", category: "False Nails", price: "₦2,500", image: "/products/passhionate/Chrome _ Press on Stand _ Air brush _ Alcohol pad.png" },
          { id: "n4-2", name: "Cat eye press on nails", category: "False Nails", price: "₦4,000", image: "/products/passhionate/Chrome _ Press on Stand _ Air brush _ Alcohol pad.png" },
        ],
      },
      {
        name: "Nail Station Hardware & Lamps",
        products: [
          { id: "n5-1", name: "Electronic Nail drill", category: "Hardware", price: "₦28,000", image: "/products/passhionate/Cloud 9 Hot Comb & Cloud 9 Straightener.png" },
          { id: "n5-2", name: "X7max nail dryer", category: "Lamps", price: "₦15,000", image: "/products/passhionate/Chrome _ Press on Stand _ Air brush _ Alcohol pad.png" },
          { id: "n5-3", name: "Armrest with UV lamp", category: "Hardware", price: "₦18,500", image: "/products/passhionate/Chrome _ Press on Stand _ Air brush _ Alcohol pad.png" },
        ],
      },
    ],
  },
  {
    name: "Makeup Products",
    image: "/products/passhionate/CSCR tint spray.png",
    products: [
      { id: "mk-1", name: "Matte Liquid Lipstick", category: "Lips", price: "₦2,500", image: "/products/passhionate/Adore dye mix.png" },
      { id: "mk-2", name: "Full Coverage Foundation", category: "Face", price: "₦8,000", image: "/products/passhionate/1st Class Booster.png" },
      { id: "mk-3", name: "Eyeshadow Palette", category: "Eyes", price: "₦12,500", image: "/products/passhionate/Cup dye mix.png" },
      { id: "mk-4", name: "Setting Spray", category: "Face", price: "₦4,500", image: "/products/passhionate/Butterfly spray.png" },
    ],
  },
  {
    name: "Eyelashes (Lashes)",
    image: "/products/passhionate/Chrome _ Press on Stand _ Air brush _ Alcohol pad.png",
    products: [
      { id: "l1-1", name: "Cat eye lashes 5 in 1", category: "Lashes", price: "₦3,500", image: "/products/passhionate/Chrome _ Press on Stand _ Air brush _ Alcohol pad.png" },
      { id: "l1-2", name: "Cluster Lash", category: "Lashes", price: "₦2,800", image: "/products/passhionate/Cuticle trimmer _ Cuticle softener b_s s_s _ Cuticle oil.png" },
      { id: "l1-3", name: "Noble Red Cherry", category: "Lashes", price: "₦1,500", image: "/products/passhionate/3D brush _ 15 in 1 design brush.png" },
      { id: "l1-4", name: "20 in 1 Book lashes", category: "Lashes", price: "₦8,000", image: "/products/passhionate/Cartridge 1p_3p_5p  Cartridge 1r_3r.png" },
    ],
  },
  {
    name: "Hair Styling Tools, Extensions, & General Salon Equipment",
    image: "/products/passhionate/Cloud 9 Hot Comb & Cloud 9 Straightener.png",
    subCollections: [
      {
        name: "Electrical Styling Tools",
        products: [
          { id: "s1-1", name: "Cloud 9 Hot Comb & Straightener", category: "Electrical", price: "₦45,000", image: "/products/passhionate/Cloud 9 Hot Comb & Cloud 9 Straightener.png" },
          { id: "s1-2", name: "Walmank Clipper", category: "Electrical", price: "₦18,000", image: "/products/passhionate/Cloud 9 Hot Comb & Cloud 9 Straightener.png" },
          { id: "s1-3", name: "Sonar dryer", category: "Electrical", price: "₦12,500", image: "/products/passhionate/Cloud 9 Hot Comb & Cloud 9 Straightener.png" },
          { id: "s1-4", name: "Titanium Flat Iron Pro", category: "Electrical", price: "₦35,000", image: "/products/passhionate/Cloud 9 Hot Comb & Cloud 9 Straightener.png" },
          { id: "s1-5", name: "Ceramic Curling Wand", category: "Electrical", price: "₦22,000", image: "/products/passhionate/Cloud 9 Hot Comb & Cloud 9 Straightener.png" },
        ],
      },
      {
        name: "Combs, Brushes, & Sectioning Clips",
        products: [
          { id: "s2-1", name: "Curve brush", category: "Brushes", price: "₦1,800", image: "/products/passhionate/Curve brush.png" },
          { id: "s2-2", name: "Brose chauffe", category: "Brushes", price: "₦3,500", image: "/products/passhionate/Brose chauffe.png" },
          { id: "s2-3", name: "Bending Rollers", category: "Rollers", price: "₦2,500", image: "/products/passhionate/Bending Rollers.png" },
          { id: "s2-4", name: "Iron tail comb", category: "Combs", price: "₦800", image: "/products/passhionate/Curve brush.png" },
          { id: "s2-5", name: "Crocodile clip", category: "Clips", price: "₦1,500", image: "/products/passhionate/Bending Rollers.png" },
        ],
      },
      {
        name: "Hairpieces & Wigs",
        products: [
          { id: "s3-1", name: "Canvas dummy mix", category: "Wigs", price: "₦8,500", image: "/products/lush/Bone Straight Pony.png" },
          { id: "s3-2", name: "Tripod wig stand", category: "Equipment", price: "₦15,000", image: "/products/lush/Bone Straight Pony.png" },
          { id: "s3-3", name: "5X5 net", category: "Nets", price: "₦4,500", image: "/products/lush/Ready Braid.png" },
        ],
      },
      {
        name: "Salon Consumables & Apparel",
        products: [
          { id: "s4-1", name: "Spray bottle (b/s)", category: "Consumables", price: "₦1,200", image: "/products/passhionate/Butterfly spray.png" },
          { id: "s4-2", name: "Steaming Cap", category: "Apparel", price: "₦3,500", image: "/products/passhionate/Argan protein.png" },
          { id: "s4-3", name: "Neck tissue", category: "Consumables", price: "₦2,000", image: "/products/passhionate/Blue soap _ Cotton clean.png" },
        ],
      },
    ],
  },
];

export const ALL_PRODUCTS = CATALOG.flatMap((c) => {
  if (c.products) return c.products;
  return c.subCollections?.flatMap((sc) => sc.products) || [];
});
