
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { ThemeToggle } from '../theme-toggle';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/partners', label: 'Partners' },
  { href: '/certifications', label: 'Company Profile' },
  { href: '/contact', label: 'Contact' },
  { href: '/ai-recommender', label: 'AI Recommender' },
];

export default function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setSheetOpen] = useState(false);

  const NavLink = ({ href, label, isMobile = false }: { href: string; label: string; isMobile?: boolean }) => {
    const isActive = pathname === href;

    // Classes for the main header navigation (on background color)
    const desktopClasses = cn(
      'transition-colors hover:text-primary',
      isActive ? 'text-primary font-semibold' : 'text-foreground/60'
    );

    // Classes for the mobile sheet navigation (on default background)
    const mobileClasses = cn(
      'transition-colors hover:text-primary',
      isActive ? 'text-primary' : 'text-muted-foreground'
    );

    return (
      <Link
        href={href}
        onClick={() => isMobile && setSheetOpen(false)}
        className={cn(
          'text-sm font-medium',
          isMobile ? mobileClasses : desktopClasses,
          isMobile && 'block w-full p-4 text-lg'
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/epl-logo.svg" alt="Enshaynce Partners Logo" width={50} height={50} />
          <span className="font-headline text-2xl font-bold text-foreground">Enshaynce Partners</span>
        </Link>
        <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </nav>
            <ThemeToggle />
            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                  </SheetHeader>
                  <div className="mt-8 flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <NavLink key={link.href} {...link} isMobile />
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
