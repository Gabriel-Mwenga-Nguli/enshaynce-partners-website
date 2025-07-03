
'use client';

import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface GalleryImage {
    src: string;
    alt: string;
    hint: string;
}

interface GalleryProps {
    images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images.map((image, index) => (
                <Dialog key={index}>
                    <DialogTrigger asChild>
                        <div className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                data-ai-hint={image.hint}
                                width={600}
                                height={400}
                                className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 transition-all duration-500 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                                <p className="text-sm font-semibold">View Image</p>
                            </div>
                        </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            data-ai-hint={image.hint}
                            width={1200}
                            height={800}
                            className="h-auto w-full rounded-lg shadow-2xl"
                        />
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    );
}
