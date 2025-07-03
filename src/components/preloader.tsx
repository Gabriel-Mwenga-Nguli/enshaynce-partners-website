'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
          <div className="flex animate-logo-pulse items-center gap-4">
            <Image
              src="/images/epl-logo.svg"
              alt="Enshaynce Partners Logo"
              width={80}
              height={80}
            />
            <span className="font-headline text-4xl font-bold text-foreground">Enshaynce Partners</span>
          </div>
           <p className="mt-4 text-muted-foreground">Elevating Potential. Enabling Performance.</p>
        </div>
      )}
      <div className={cn(loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500')}>
        {children}
      </div>
    </>
  );
}
