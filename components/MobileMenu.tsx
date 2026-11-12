'use client';
import { X } from 'lucide-react';
import Link from 'next/link';
import { CATALOG } from '@/lib/data';
import Logo from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-neutral-900/30 backdrop-blur-sm z-[60] transition-opacity animate-in fade-in duration-300" 
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="fixed inset-y-0 left-0 z-[70] w-full max-w-sm bg-white shadow-2xl flex flex-col pt-safe px-safe pb-safe animate-in slide-in-from-left duration-300">
        <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
          <Logo className="h-8" />
          <button 
            onClick={onClose}
            className="p-2 -mr-2 text-gray-400 hover:text-gray-900 transition-colors"
          >
            <span className="sr-only">Close menu</span>
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
          <Link href="/" onClick={onClose} className="block text-lg font-medium text-gray-900">
            Home
          </Link>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Catalog</h3>
            <ul className="space-y-4">
              {CATALOG.map((collection) => (
                <li key={collection.name}>
                  <Link 
                    href={`/collections/${encodeURIComponent(collection.name)}`}
                    onClick={onClose}
                    className="block text-base text-gray-500 hover:text-pink-600 transition-colors"
                  >
                    {collection.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="#" onClick={onClose} className="block text-lg font-medium text-gray-900">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
