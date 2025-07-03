
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CertificationsList from "@/components/certifications-list";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Building2, CheckCircle, Eye, FileText, Gem, Handshake, Mail, Target, Users, BriefcaseBusiness, SearchCheck, Route, Network, TrendingUp, Scale, Star, BrainCircuit, Lightbulb } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Company Profile",
    description: "A comprehensive overview of Enshaynce Partners Limited, a leading management and strategic consulting firm in Kenya. Explore our services, legal status, leadership, and commitment to excellence.",
};

const services = [
  { icon: <BriefcaseBusiness className="h-8 w-8 text-primary" />, title: "H.R Strategy and Compliance", description: "Aligning your human resources with business goals while ensuring full legal and regulatory compliance." },
  { icon: <SearchCheck className="h-8 w-8 text-primary" />, title: "Job Evaluation & Analysis", description: "Creating clear, equitable role definitions and compensation structures to attract and retain talent." },
  { icon: <Route className="h-8 w-8 text-primary" />, title: "Strategic Planning", description: "Facilitating the development of robust, actionable strategies that drive sustainable growth and impact." },
  { icon: <FileText className="h-8 w-8 text-primary" />, title: "Proposal Development & Grant Writing", description: "Securing funding through expertly crafted proposals and grant applications tailored to donor requirements." },
  { icon: <Users className="h-8 w-8 text-primary" />, title: "Training, Capacity & Team Building", description: "Enhancing team skills, cohesion, and performance through targeted training and development programs." },
  { icon: <Network className="h-8 w-8 text-primary" />, title: "Change Management & OD", description: "Guiding organizations through transitions smoothly, fostering adaptability and improving overall effectiveness." },
  { icon: <TrendingUp className="h-8 w-8 text-primary" />, title: "Performance Management", description: "Implementing systems to set goals, track progress, and drive high performance across the organization." },
  { icon: <BrainCircuit className="h-8 w-8 text-primary" />, title: "Recruitment Process Outsourcing (RPO)", description: "Providing end-to-end recruitment services, including agency placements and executive headhunting." },
];

const coreValues = [
    { icon: <Gem className="h-5 w-5 text-accent" />, title: "Integrity", description: "We uphold honesty and transparency in all engagements." },
    { icon: <Star className="h-5 w-5 text-accent" />, title: "Professionalism", description: "We adhere to the highest standards of quality and ethical conduct." },
    { icon: <Handshake className="h-5 w-5 text-accent" />, title: "Partnership", description: "We collaborate to co-create solutions." },
    { icon: <Target className="h-5 w-5 text-accent" />, title: "Impact", description: "We are results-oriented and committed to sustainable outcomes." },
    { icon: <Lightbulb className="h-5 w-5 text-accent" />, title: "Continuous Learning", description: "We value growth through learning and innovation." },
];

const certifications = [
    { imageSrc: "/images/certifications/tax-compliance.png", pdfUrl: "/documents/tax-compliance.pdf", alt: "Kenya Revenue Authority Tax Compliance Certificate", title: "Tax Compliance Certificate", hint: "certificate document" },
    { imageSrc: "/images/certifications/ihrm-practicing.png", pdfUrl: "/documents/ihrm-practicing.pdf", alt: "IHRM Practicing Certificate", title: "IHRM Practicing Certificate", hint: "certificate document" },
    { imageSrc: "/images/certifications/ihrm-corporate.png", pdfUrl: "/documents/ihrm-corporate.pdf", alt: "IHRM Corporate Certificate", title: "IHRM Corporate Certificate", hint: "certificate document" },
    { imageSrc: "/images/certifications/good-conduct.png", pdfUrl: "/documents/good-conduct.pdf", alt: "Certificate of Good Conduct", title: "Certificate of Good Conduct", hint: "certificate document" },
    { imageSrc: "/images/certifications/business-permit.png", pdfUrl: "/documents/business-permit.pdf", alt: "Business Permit", title: "Business Permit", hint: "certificate document" },
    { imageSrc: "/images/certifications/agpo-certificate.png", pdfUrl: "/documents/agpo-certificate.pdf", alt: "AGPO Certificate", title: "AGPO Certificate", hint: "certificate document" },
    { imageSrc: "/images/certifications/cr12-certificate.png", pdfUrl: "/documents/cr12-certificate.pdf", alt: "CR12 Certificate", title: "CR12 Certificate", hint: "certificate document" },
    { imageSrc: "/images/certifications/incorporation.png", pdfUrl: "/documents/incorporation.pdf", alt: "Certificate of Incorporation", title: "Certificate of Incorporation", hint: "certificate document" },
];

export default function CompanyProfilePage() {
    return (
        <div className="bg-background">
            <section className="relative h-[50vh] w-full min-h-[300px] md:min-h-[400px]">
                <Image
                    src="/banner/banner.jpg"
                    alt="A collage of business professionals in a modern office setting, representing Enshaynce Partners' corporate environment."
                    data-ai-hint="business collage"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-primary/80 via-primary/50 to-transparent">
                    <div className="container mx-auto px-4 text-center text-white fade-in">
                        <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-none backdrop-blur-sm">Company Profile</Badge>
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                            Enshaynce Partners Limited
                        </h1>
                        <p className="mx-auto mt-4 max-w-3xl text-lg text-white/90">
                            A comprehensive overview of our firm, our expertise, and our commitment to excellence.
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-3">
                    {/* Main Content Column */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Overview Section */}
                        <section className="fade-in-up">
                            <Card className="p-2">
                                <CardHeader>
                                    <CardTitle className="font-headline text-3xl flex items-center gap-3"><Building2 className="h-8 w-8 text-primary" /> Corporate Overview</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p className="text-lg text-muted-foreground">
                                        Enshaynce Partners Limited is a premier management and strategic consulting firm registered as a private limited company in Kenya. We are dedicated to elevating potential and enabling performance by providing bespoke solutions to businesses, public institutions, private enterprises, and non-profit organizations across Africa.
                                    </p>
                                    <div className="border-t pt-6 mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="flex items-start gap-4">
                                            <Mail className="h-7 w-7 text-accent shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-foreground">Email Address</h4>
                                                <a href="mailto:info@enshayncepartners.com" className="text-muted-foreground hover:text-primary">info@enshayncepartners.com</a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <Scale className="h-7 w-7 text-accent shrink-0 mt-1" />
                                            <div>
                                                <h4 className="font-semibold text-foreground">Legal Status</h4>
                                                <p className="text-muted-foreground">Private Limited Company</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </section>
                        
                        {/* Services Section */}
                        <section className="fade-in-up" style={{ animationDelay: '200ms' }}>
                             <h2 className="font-headline text-3xl font-bold text-foreground mb-8">Our Core Services</h2>
                             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                {services.map((service, index) => (
                                    <Card key={service.title} className="flex h-full flex-col p-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                        <CardHeader className="flex-row items-center gap-4">
                                            <div className="rounded-lg bg-primary/10 p-3">{service.icon}</div>
                                            <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <p className="text-sm text-muted-foreground">{service.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                             </div>
                        </section>

                         {/* Leadership Section */}
                        <section className="fade-in-up" style={{ animationDelay: '400ms' }}>
                            <h2 className="font-headline text-3xl font-bold text-foreground mb-8">Leadership Spotlight</h2>
                            <Card className="overflow-hidden border-primary/20">
                                <div className="flex flex-col sm:flex-row items-center gap-8 p-8 bg-secondary/5">
                                    <Avatar className="h-32 w-32 border-4 border-primary shadow-lg">
                                        <AvatarImage src="/images/partners/steve-ogony.jpg" alt="Steve Martin Ogony" />
                                        <AvatarFallback>SO</AvatarFallback>
                                    </Avatar>
                                    <div className="text-center sm:text-left flex-1">
                                        <h3 className="font-headline text-2xl font-bold">Steve Martin Ogony</h3>
                                        <p className="text-primary font-semibold text-lg">Founder & Managing Partner</p>
                                        <p className="mt-2 text-sm text-muted-foreground max-w-md">
                                            With over 15 years of experience, Steve is an expert in human resource management, institutional strengthening, and development program design.
                                        </p>
                                    </div>
                                    <Button asChild size="lg" className="ml-auto mt-4 sm:mt-0 shrink-0 self-center sm:self-end">
                                        <Link href="/partners">Full Profile <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                    </Button>
                                </div>
                            </Card>
                        </section>
                    </div>

                    {/* Sidebar Column */}
                    <aside className="space-y-8 lg:mt-2 fade-in-up" style={{ animationDelay: '600ms' }}>
                        <Card className="bg-card/60 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="font-headline flex items-center gap-3"><Eye className="text-accent h-7 w-7"/> Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-base">To be a trusted partner in building high-performing, sustainable, and people-centered organizations across Africa.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-card/60 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="font-headline flex items-center gap-3"><Target className="text-accent h-7 w-7"/> Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground text-base">To deliver strategic, innovative, and practical consultancy services that empower institutions to maximise their impact and efficiency.</p>
                            </CardContent>
                        </Card>
                        <Card className="bg-card/60 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="font-headline flex items-center gap-3"><Gem className="text-accent h-7 w-7"/> Our Core Values</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {coreValues.map(value => (
                                    <div key={value.title} className="flex items-start gap-3">
                                        <div className="mt-1">{value.icon}</div>
                                        <div>
                                            <h4 className="font-semibold text-foreground">{value.title}</h4>
                                            <p className="text-sm text-muted-foreground">{value.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                        <Card className="bg-card/60 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="font-headline flex items-center gap-3"><Handshake className="text-accent h-7 w-7"/> Our Clientele</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">We are fully equipped and ready to collaborate with a diverse range of partners, including:</p>
                                <ul className="space-y-2">
                                    {['Donors', 'INGOs', 'Government Agencies', 'Private Clients'].map(client => (
                                        <li key={client} className="flex items-center gap-3 text-sm font-medium text-foreground">
                                            <CheckCircle className="h-5 w-5 text-green-500" />
                                            {client}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>

            {/* Legal & Compliance Section */}
            <section className="bg-secondary/10 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center fade-in-up">
                        <h2 className="font-headline text-3xl font-bold text-foreground sm:text-4xl">
                            Legal Status & Compliance
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground text-lg">
                            Enshaynce Partners Limited is fully compliant with the Kenya Revenue Authority (KRA) and all relevant county and national authorities. Our commitment to transparency and ethical practice is documented through our official certifications.
                        </p>
                    </div>
                    <div className="mt-12 fade-in-up" style={{ animationDelay: '200ms' }}>
                        <CertificationsList certifications={certifications} />
                    </div>
                </div>
            </section>
        </div>
    );
}
