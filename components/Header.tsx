'use client';

import { ShoppingBag, Search, Menu, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { CartSidebar } from './CartSidebar';
import { MobileMenu } from './MobileMenu';

import { CATALOG } from '@/lib/data';
import Link from 'next/link';
import Logo from './Logo';

export function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#FFF5F7]/95 backdrop-blur-md border-b border-pink-200/70 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile Menu */}
            <div className="flex items-center lg:hidden gap-4">
              <button type="button" onClick={() => setIsMobileMenuOpen(true)} className="text-gray-900 p-2 -ml-2 hover:text-gray-600 transition-colors">
                <span className="sr-only">Open menu</span>
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
              <Link href="/" className="flex items-center gap-2">
                <Logo className="h-10" />
              </Link>
            </div>

            {/* Desktop Logo */}
            <div className="hidden lg:flex lg:flex-none">
              <Link href="/" className="flex items-center gap-2 mt-1">
                <Logo className="h-12" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-8">
              <Link href="/" className="text-sm font-medium text-gray-900 hover:text-pink-600 transition-colors flex items-center h-16">
                Home
              </Link>
              
              <div className="relative group">
                <button 
                  className="flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-pink-600 transition-colors h-16"
                  onMouseEnter={() => setActiveMenu('catalog')}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  Catalog
                  <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-pink-600" />
                </button>

                {/* Mega Menu Dropdown */}
                {activeMenu === 'catalog' && (
                  <div 
                    className="absolute top-16 left-1/2 -translate-x-1/2 w-[1100px] bg-[#FFF8FA] border border-pink-200 shadow-2xl p-8 grid grid-cols-5 gap-8 rounded-2xl animate-in fade-in slide-in-from-top-2 duration-200"
                    onMouseEnter={() => setActiveMenu('catalog')}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    {CATALOG.map((collection) => (
                      <div key={collection.name}>
                        <Link href={`/collections/${encodeURIComponent(collection.name)}`} className="font-semibold text-gray-900 mb-4 block hover:text-pink-600 transition-colors leading-snug">
                          {collection.name}
                        </Link>
                        <ul className="space-y-3">
                          {collection.subCollections ? (
                            collection.subCollections.slice(0, 5).map((sub) => (
                              <li key={sub.name}>
                                <Link href={`/collections/${encodeURIComponent(collection.name)}`} className="text-sm text-gray-500 hover:text-pink-600 transition-colors leading-snug block">
                                  {sub.name}
                                </Link>
                              </li>
                            ))
                          ) : (
                            collection.products?.slice(0, 5).map((prod) => (
                              <li key={prod.id}>
                                <Link href={`/collections/${encodeURIComponent(collection.name)}`} className="text-sm text-gray-500 hover:text-pink-600 transition-colors leading-snug block">
                                  {prod.name}
                                </Link>
                              </li>
                            ))
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <Link href="#" className="text-sm font-medium text-gray-900 hover:text-pink-600 transition-colors flex items-center h-16">
                Contact
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center justify-end gap-x-4 lg:gap-x-6">
              <button type="button" className="p-2 text-gray-900 hover:text-pink-600 transition-colors hidden sm:block">
                <span className="sr-only">Search</span>
                <Search className="h-5 w-5" />
              </button>
              <button 
                type="button" 
                onClick={() => setIsCartOpen(true)}
                className="p-2 text-gray-900 hover:text-pink-600 transition-colors relative"
              >
                <span className="sr-only">Cart</span>
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute top-1 right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-pink-600 text-[9px] font-medium text-white">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
