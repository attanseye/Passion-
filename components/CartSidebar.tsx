'use client';

import { X, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { getProductImage } from '@/lib/data';

// Using mock items based on new catalog
const MOCK_CART_ITEMS = [
  {
    id: 'h6-5',
    name: 'Ghost bonding glue',
    price: '₦18,000',
    category: 'Glues',
    quantity: 1,
    image: getProductImage('h6-5')
  },
  {
    id: 's1-1',
    name: 'Cloud 9 Hot Comb',
    price: '₦45,000',
    category: 'Electrical',
    quantity: 1,
    image: getProductImage('s1-1')
  }
];

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  useEffect(() => {
    // Prevent scrolling on body when cart is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-neutral-900/30 backdrop-blur-sm z-[60] transition-opacity animate-in fade-in duration-300" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar Dropdown/Slide-out */}
      <div className="fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-white shadow-2xl flex flex-col pt-safe px-safe pb-safe animate-in slide-in-from-right duration-300 sm:w-[400px]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
          <h2 className="text-lg font-medium text-gray-900">Your Cart</h2>
          <button 
            onClick={onClose}
            className="p-2 -mr-2 text-gray-400 hover:text-gray-900 transition-colors"
          >
            <span className="sr-only">Close cart panel</span>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {MOCK_CART_ITEMS.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-gray-500 font-medium">Your cart is empty.</p>
              <button 
                onClick={onClose}
                className="mt-4 bg-neutral-900 text-white px-6 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            MOCK_CART_ITEMS.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative w-24 h-32 flex-shrink-0 bg-gray-50">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                        {item.name}
                      </h3>
                      <button className="text-gray-400 hover:text-red-500 transition-colors ml-2">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">{item.category}</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-sm font-medium text-gray-900">{item.price}</p>
                    
                    {/* Quantity controls */}
                    <div className="flex items-center border border-gray-200">
                      <button className="px-2 py-1 text-gray-600 hover:bg-gray-50">-</button>
                      <span className="text-xs font-medium px-2 py-1 min-w-[2rem] text-center">{item.quantity}</span>
                      <button className="px-2 py-1 text-gray-600 hover:bg-gray-50">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {MOCK_CART_ITEMS.length > 0 && (
          <div className="border-t border-gray-100 bg-gray-50/50 p-6">
            <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
              <p>Subtotal</p>
              <p>₦63,000</p>
            </div>
            <p className="text-xs text-gray-500 mb-6">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="space-y-3">
              <Link href="/checkout" onClick={onClose} className="w-full relative group bg-pink-600 text-white px-6 py-4 text-sm hover:bg-pink-700 transition-colors flex items-center justify-center gap-2 uppercase tracking-widest">
                Checkout
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 absolute right-6" />
              </Link>
              <button 
                onClick={onClose}
                className="w-full text-center py-2 text-sm text-gray-500 hover:text-pink-600 tracking-widest uppercase transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
