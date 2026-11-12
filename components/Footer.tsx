'use client';

import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Video } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-pink-950 text-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 border-b border-pink-900/50 pb-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-md text-center md:text-left">
          <h3 className="text-xl font-medium text-white mb-2 tracking-wide">Join our Newsletter</h3>
          <p className="text-pink-100/80 text-sm">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals delivered straight to your inbox.</p>
        </div>
        <form className="flex w-full md:w-auto max-w-md gap-2" onSubmit={(e) => { e.preventDefault(); }}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full sm:w-80 bg-pink-950 border border-pink-800/80 text-white rounded-none px-4 py-3 text-sm focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 transition-colors placeholder:text-pink-400/60"
            required
          />
          <button 
            type="submit"
            className="bg-pink-600 hover:bg-pink-500 text-white px-8 py-3 text-sm font-medium transition-colors whitespace-nowrap shadow-sm"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        <div>
          <h4 className="font-semibold mb-4 uppercase tracking-widest text-xs text-pink-300">About Us</h4>
          <p className="text-pink-100/80 leading-relaxed font-light">
            Nigeria&apos;s premier destination for authentic beauty, salon, and professional cosmetics equipment. We deliver nationwide.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 uppercase tracking-widest text-xs text-pink-300">Shop</h4>
          <ul className="space-y-3 text-pink-100/80 font-light">
            <li><Link href="/collections/Lush%20Products" className="hover:text-white transition-colors">Lush Products</Link></li>
            <li><Link href="/collections/Makeup%20Products" className="hover:text-white transition-colors">Makeup Products</Link></li>
            <li><Link href="/collections/Hair%20Cosmetics%2C%20Care%2C%20%26%20Styling%20Products" className="hover:text-white transition-colors">Hair Care</Link></li>
            <li><Link href="/collections/Manicure%2C%20Pedicure%2C%20%26%20Nail%20Products" className="hover:text-white transition-colors">Nail Supplies</Link></li>
            <li><Link href="/collections/Hair%20Styling%20Tools%2C%20Extensions%2C%20%26%20General%20Salon%20Equipment" className="hover:text-white transition-colors">Salon Equipment</Link></li>
            <li><Link href="/collections/Microblading%20Materials%20%26%20Permanent%20Makeup%20Equipment" className="hover:text-white transition-colors">Microblading</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 uppercase tracking-widest text-xs text-pink-300">Contact</h4>
          <ul className="space-y-4 text-pink-100/80 font-light">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>42 Old Aba RD, Port Harcourt</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0" />
              <a href="tel:+2348068682568" className="hover:text-white transition-colors">+234 806 868 2568</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 shrink-0" />
              <a href="mailto:hello@passionatebeautystore.com.ng" className="hover:text-white transition-colors break-all">hello@passionatebeautystore.com.ng</a>
            </li>
            <li className="pt-2">
              <div className="flex gap-4 items-center">
                <a href="https://instagram.com/passionatebeautystore" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://tiktok.com/@passionatebeautystore" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="TikTok">
                  <Video className="w-5 h-5" />
                </a>
                <a href="https://facebook.com/passionatebeautystore" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://x.com/passionatebeautystore" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="X (Twitter)">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://wa.me/2348068682568" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="WhatsApp">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 uppercase tracking-widest text-xs text-pink-300">Payment</h4>
          <p className="text-pink-100/80 mb-4 font-light leading-relaxed">
            Secure payments via Paystack and Flutterwave. We accept all major Nigerian bank cards and bank transfers.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-pink-900/50 flex flex-col md:flex-row items-center justify-between gap-4 text-center text-pink-200/50 text-xs">
        <p>&copy; 2026 Passionate Beauty Store. All rights reserved. Designed by iBlaq</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
