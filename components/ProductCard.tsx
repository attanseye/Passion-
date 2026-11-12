'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { getProductImage } from '@/lib/data';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  imageUrl?: string;
  category?: string;
}

export function ProductCard({ id, name, price, imageUrl, category }: ProductCardProps) {
  // Map known alternate views for lush / passhionate products
  const ALTERNATE_IMAGES: Record<string, string> = {
    '/products/lush/Ready Braid.png': '/products/lush/Ready Braid 1.png',
    '/products/lush/Jumbo Braid.png': '/products/lush/Jumbo Braid 1.png',
    '/products/lush/Mega Braid.png': '/products/lush/Mega Braid 1.png',
    '/products/lush/Aura Braid.png': '/products/lush/Aura Braid 1.png',
    '/products/lush/Lasgidi Braid.png': '/products/lush/Lasgidi Braid 1.png',
    '/products/lush/Nancy Braid.png': '/products/lush/Nancy Braid 1.png',
    '/products/lush/Naija Braid.png': '/products/lush/Naija Braid 1.png',
    '/products/lush/Kinky Twist.png': '/products/lush/Kinky Twist 1.png',
    '/products/lush/Curly Braids.png': '/products/lush/Curly Braids 1.png',
    '/products/lush/Curly Braids Short.png': '/products/lush/Curly Braids Short 1.png',
    '/products/lush/Passion Twist.png': '/products/lush/Passion Twist 1.png',
    '/products/lush/Dancing Curls.png': '/products/lush/Dancing Curls 1.png',
    '/products/lush/Bone Straight Pony.png': '/products/lush/Bone Straight Pony 1.png',
    '/products/lush/Bouncy Wave.png': '/products/lush/Bouncy Wave 1.png',
    '/products/passhionate/Above mousse.png': '/products/passhionate/Above mousse 2.png',
    '/products/passhionate/Argan protein.png': '/products/passhionate/Argan protein 2.png',
  };

  const mainImage = imageUrl || getProductImage(id);
  const hoverImage = ALTERNATE_IMAGES[mainImage] || null;
  const isSale = parseInt(price.replace(/[^0-9]/g, '')) < 10000; // Simulated sale logic
  const originalPrice = isSale ? `₦${(parseInt(price.replace(/[^0-9]/g, '')) * 1.2).toLocaleString()}` : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-full flex"
    >
      <Link href={`/products/${id}`} className="group cursor-pointer flex flex-col relative w-full h-full mb-6">
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-b from-white via-pink-50/40 to-white rounded-2xl border border-pink-100/90 shadow-xs group-hover:border-pink-300 group-hover:shadow-md transition-all flex items-center justify-center p-2">
        <Image
          src={mainImage}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className={`object-contain p-3 object-center transition-all duration-500 ease-out ${
            hoverImage ? 'group-hover:opacity-0' : 'group-hover:scale-105'
          }`}
          referrerPolicy="no-referrer"
        />
        {hoverImage && (
          <Image
            src={hoverImage}
            alt={`${name} alternative view`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-contain p-3 object-center absolute inset-0 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        )}
        
        {isSale && (
          <div className="absolute top-3 left-3 bg-pink-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest z-10">
            Sale
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out z-20">
          <button 
            className="w-full bg-white text-gray-900 border border-transparent py-3 text-sm font-medium hover:border-gray-900 hover:bg-transparent hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic here
            }}
          >
            Quick Add
          </button>
        </div>
      </div>
      
      <div className="mt-4 flex flex-col space-y-1 text-center">
        {category && (
          <p className="text-xs uppercase tracking-wider text-gray-500">
            {category}
          </p>
        )}
        <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
          {name}
        </h3>
        <div className="flex items-center justify-center gap-2">
          {isSale && originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {originalPrice}
            </span>
          )}
          <span className={`text-sm font-medium ${isSale ? 'text-pink-600' : 'text-gray-900'}`}>
            {price}
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
  );
}
