'use client';

import Image from 'next/image';
import { useState, useRef, MouseEvent } from 'react';

interface ZoomableImageProps {
  src: string;
  alt: string;
}

export function ZoomableImage({ src, alt }: ZoomableImageProps) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isZoomed, setIsZoomed] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imgRef.current) return;
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to image (percentage)
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setPosition({ x, y });
  };

  return (
    <div 
      ref={imgRef}
      className="relative aspect-[3/4] w-full overflow-hidden bg-gray-50 rounded-lg cursor-zoom-in group flex items-center justify-center border border-gray-100"
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
      onMouseMove={handleMouseMove}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className={`object-contain p-4 transition-transform duration-200 ease-out ${
          isZoomed ? 'scale-[2.2]' : 'scale-100'
        }`}
        style={{
          transformOrigin: isZoomed ? `${position.x}% ${position.y}%` : 'center center'
        }}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
