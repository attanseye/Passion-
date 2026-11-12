'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, X } from 'lucide-react';

export function PriceDropButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setIsOpen(false);
        setStatus('idle');
        setEmail('');
      }, 2000);
    }, 1000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full bg-transparent text-pink-600 border border-pink-600 px-8 py-4 text-sm font-medium hover:bg-pink-50 transition-colors flex justify-center items-center gap-2"
      >
        <Bell className="w-4 h-4" />
        Notify me when price drops
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white p-8 max-w-md w-full relative shadow-xl"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6 text-center">
                <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Price Drop Alert</h3>
                <p className="text-sm text-gray-500">
                  Enter your email address and we&apos;ll let you know when this item goes on sale.
                </p>
              </div>

              {status === 'success' ? (
                <div className="text-center py-4 bg-green-50 text-green-700 font-medium border border-green-200">
                  You&apos;re all set! We&apos;ll be in touch.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-gray-200 focus:outline-none focus:border-pink-600 focus:ring-1 focus:ring-pink-600 transition-all text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'submitting'}
                  />
                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-pink-600 text-white px-8 py-3 text-sm font-medium hover:bg-pink-700 transition-colors disabled:opacity-70 flex justify-center items-center h-[46px]"
                  >
                    {status === 'submitting' ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      'Notify Me'
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
