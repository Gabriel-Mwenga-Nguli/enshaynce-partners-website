
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Target, Gem, Star, Handshake, Lightbulb } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Enshaynce Partners, our mission, vision, and the core values that drive our commitment to building high-performing organizations across Africa.",
};

const coreValues = [
    { icon: <Gem className="h-6 w-6 text-accent" />, title: "Integrity", description: "We uphold honesty and transparency in all engagements." },
    { icon: <Star className="h-6 w-6 text-accent" />, title: "Professionalism", description: "We adhere to the highest standards of quality and ethical conduct." },
    { icon: <Handshake className="h-6 w-6 text-accent" />, title: "Partnership", description: "We collaborate to co-create solutions." },
    { icon: <Target className="h-6 w-6 text-accent" />, title: "Impact", description: "We are results-oriented and committed to sustainable outcomes." },
    { icon: <Lightbulb className="h-6 w-6 text-accent" />, title: "Continuous Learning", description: "We value growth through learning and innovation." },
];

export default function AboutPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative w-full">
                <Image
                    src="/images/banners/about.png"
                    alt="About Enshaynce Partners background"
                    data-ai-hint="company background"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-primary/90 via-secondary/75 to-primary/60 text-white">
                    <div className="relative container mx-auto px-4 text-center">
                        <div className="fade-in">
                            <h1 className="font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                                About Enshaynce Partners
                            </h1>
                            <p className="mx-auto mt-6 max-w-3xl text-md sm:text-lg text-white/90">
                               We are a strategic consulting firm dedicated to elevating potential and enabling performance within organizations across Africa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div className="fade-in">
                             <Image
                                src="/images/banners/story.png"
                                alt="An illustrative image representing the story and journey of Enshaynce Partners."
                                data-ai-hint="company story"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="fade-in" style={{ animationDelay: '100ms' }}>
                            <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Our Story</h2>
                            <p className="mt-4 text-muted-foreground leading-relaxed">
                                Enshaynce Partners Limited was founded with a clear purpose: to bridge the gap between potential and performance. Registered in Kenya, our firm was born from a deep-seated belief that Africa's organizations—be they NGOs, government bodies, or private enterprises—possess immense potential waiting to be unlocked.
                            </p>
                            <p className="mt-4 text-muted-foreground leading-relaxed">
                                We saw a need for a consultancy that doesn't just advise from a distance but partners closely with clients to co-create lasting solutions. Our journey is one of collaboration, continuous learning, and an unwavering commitment to making a tangible impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="bg-secondary/10 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="fade-in space-y-6">
                            <Card>
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <Eye className="h-8 w-8 text-accent" />
                                    <CardTitle>Our Vision</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">To be a trusted partner in building high-performing, sustainable, and people-centered organizations across Africa.</p>
                                </CardContent>
                            </Card>
                             <Card>
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <Target className="h-8 w-8 text-accent" />
                                    <CardTitle>Our Mission</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">To deliver strategic, innovative, and practical consultancy services that empower institutions to maximise their impact and efficiency.</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="fade-in" style={{ animationDelay: '100ms' }}>
                             <Image
                                src="/images/cover.png"
                                alt="Enshaynce Partners vision and mission"
                                data-ai-hint="vision mission"
                                width={600}
                                height={600}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

             {/* Core Values Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center fade-in">
                         <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Our Core Values</h2>
                         <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">The principles that guide our work and partnerships.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {coreValues.map((value, index) => (
                             <Card key={value.title} className="text-center p-6 fade-in bg-card/60 backdrop-blur-sm border-transparent hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl" style={{ animationDelay: `${index * 100}ms` }}>
                                <div className="inline-flex items-center justify-center rounded-full bg-accent/10 p-4 mb-4 ring-4 ring-accent/20">
                                   {value.icon}
                                </div>
                                <h3 className="font-headline text-xl font-bold">{value.title}</h3>
                                <p className="text-muted-foreground text-sm mt-2">{value.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Partner CTA */}
            <section className="bg-primary text-primary-foreground py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-headline text-3xl font-bold md:text-4xl">Meet Our Partner</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
                        Our leadership's vision and expertise are at the heart of our success. Learn more about the driving force behind Enshaynce Partners.
                    </p>
                    <div className="mt-8">
                        <Button asChild size="lg" variant="secondary" className="transition-transform hover:scale-105 bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/partners">View Partner's Profile <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
