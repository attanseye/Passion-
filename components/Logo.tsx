import React from 'react';
import Image from 'next/image';

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center ${className} w-44 sm:w-56 h-10 sm:h-12`}>
      <Image 
        src="/logo.png" 
        alt="Passionate Beauty Stores"
        width={228}
        height={58}
        priority
        className="h-full w-auto object-contain object-left"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
