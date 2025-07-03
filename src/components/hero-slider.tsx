'use client';

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, ArrowRightCircle, Sparkles, Wand2 } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const banners = [
  {
    title: 'Enshaynce Partners',
    subtitle: 'Elevating Potential. Enabling Performance.',
    description: "We offer specialised consultancy in Human Resources, Strategic Planning, and Organizational Performance Management. We don't just consult, we co-create.",
    imageUrl: '/images/banners/1.jpg',
    aiHint: 'business strategy',
    buttons: [
      { text: 'Our Services', href: '/services', variant: 'default' },
      { text: 'Contact Us', href: '/contact', variant: 'outline' },
    ],
  },
  {
    title: 'Strategic HR Consulting',
    subtitle: 'Your People, Your Greatest Asset.',
    description: 'Optimize your workforce with expert guidance on talent acquisition, employee relations, compliance, and building high-performing teams.',
    imageUrl: '/images/banners/2.jpg',
    aiHint: 'human resources',
    buttons: [
        { text: 'Explore HR Services', href: '/services', variant: 'default', icon: <ArrowRightCircle /> }
    ],
  },
  {
    title: 'AI-Powered Recommender',
    subtitle: 'Intelligent Solutions, Instantly.',
    description: "Not sure where to start? Our AI tool analyzes your company's unique needs to suggest the perfect services to drive your success.",
    imageUrl: '/images/banners/3.jpg',
    aiHint: 'artificial intelligence',
    buttons: [
        { text: 'Try the AI Assistant', href: '/ai-recommender', variant: 'default', icon: <Wand2 /> }
    ],
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);
  
  const scrollTo = useCallback((index: number) => {
    emblaApi?.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect) };
  }, [emblaApi]);

  return (
    <section className="relative h-[85vh] min-h-[550px] w-full overflow-hidden bg-secondary md:min-h-[600px]">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {banners.map((banner, index) => (
            <div key={index} className="embla__slide relative">
              <Image
                src={banner.imageUrl}
                alt={banner.title}
                data-ai-hint={banner.aiHint}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="container mx-auto px-4 relative flex h-full items-end pb-20 text-white">
                <div className={cn("max-w-3xl space-y-4", selectedIndex === index && "fade-in-up")}>
                  <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                    {banner.title}
                  </h1>
                  <p className="font-headline text-xl text-accent sm:text-2xl md:text-3xl lg:text-4xl" style={{ textShadow: '0 1px 5px rgba(0,0,0,0.4)' }}>
                    {banner.subtitle}
                  </p>
                  <p className="text-base text-white/90 md:text-lg">
                    {banner.description}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    {banner.buttons.map((button, btnIndex) => (
                      <Button key={btnIndex} asChild size="lg" variant={button.variant === 'outline' ? 'outline' : 'default'} className={cn("transition-transform hover:scale-105", button.variant === 'outline' && "bg-transparent border-white text-white hover:bg-white hover:text-primary")}>
                        <Link href={button.href}>
                          {button.icon}
                          {button.text}
                          {button.variant === 'default' && <ArrowRight className="ml-2 h-5 w-5" />}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 text-white hover:bg-white/40 hover:text-white backdrop-blur-sm hidden md:flex"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/20 text-white hover:bg-white/40 hover:text-white backdrop-blur-sm hidden md:flex"
        aria-label="Next slide"
      >
        <ArrowRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {banners.map((_, index) => (
            <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                    "h-3 w-3 rounded-full transition-all duration-300",
                    selectedIndex === index ? 'w-6 bg-accent' : 'bg-white/50 hover:bg-white/80'
                )}
                aria-label={`Go to slide ${index + 1}`}
            />
        ))}
      </div>
    </section>
  );
}
