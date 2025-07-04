
'use client';

import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface Certificate {
    imageSrc: string;
    pdfUrl: string;
    alt: string;
    title: string;
    description: string;
    hint: string;
}

interface CertificationsListProps {
    certifications: Certificate[];
}

export default function CertificationsList({ certifications }: CertificationsListProps) {
    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
                <Link
                    key={index}
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fade-in-up group block"
                    style={{ animationDelay: `${index * 100}ms` }}
                    aria-label={`View certificate: ${cert.title}`}
                >
                    <Card className="overflow-hidden relative h-[500px] transition-all duration-300 group-hover:shadow-2xl group-hover:border-primary/50 group-hover:scale-[1.02]">
                        <Image
                            src={cert.imageSrc}
                            alt={cert.alt}
                            data-ai-hint={cert.hint}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/70 to-transparent" />
                        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                             <div className="absolute top-4 right-4 rounded-full bg-white/20 p-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                                <ExternalLink className="h-5 w-5 text-white"/>
                            </div>
                            <h3 className="font-headline text-2xl font-bold transition-transform duration-300 group-hover:-translate-y-2" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}>{cert.title}</h3>
                            <p className="text-sm text-white/80 max-h-0 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 group-hover:mt-2">
                                {cert.description}
                            </p>
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    );
}
