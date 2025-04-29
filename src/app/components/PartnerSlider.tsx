'use client';

import { useEffect, useRef } from 'react';

export default function PartnerSlider() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const logos = [
    '/images/1.webp',
    '/images/2.webp',
    '/images/3.webp',
    '/images/4.webp',
    // Add more logos as needed
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;

    // Clone the logos to create the loop effect
    logos.forEach(() => {
      const clone = track.children[0].cloneNode(true);
      track.appendChild(clone);
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <div ref={trackRef} className="flex animate-scroll gap-6">
        {logos.map((src, index) => (
          <img key={index} src={src} alt={`Logo ${index}`} className="h-16 w-auto" />
        ))}
      </div>
    </div>
  );
}
