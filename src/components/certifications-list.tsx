
'use client';

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface Certificate {
    imageSrc: string;
    pdfUrl: string;
    alt: string;
    title: string;
    hint: string;
}

interface CertificationsListProps {
    certifications: Certificate[];
}

export default function CertificationsList({ certifications }: CertificationsListProps) {
    return (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                    <Card className="overflow-hidden text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl h-full flex flex-col">
                        <CardContent className="p-4 aspect-[3/4] flex items-center justify-center bg-muted/30 flex-grow">
                            <Image
                                src={cert.imageSrc}
                                alt={cert.alt}
                                data-ai-hint={cert.hint}
                                width={400}
                                height={565}
                                className="object-contain w-full h-auto max-h-full transition-transform duration-500 group-hover:scale-105"
                            />
                        </CardContent>
                        <div className="p-4 border-t bg-card">
                            <h3 className="font-semibold text-base text-foreground">{cert.title}</h3>
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    );
}
