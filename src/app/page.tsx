import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Handshake, Heart, ShieldCheck, TrendingUp, Users, Scale, Target, Eye, Gem, BriefcaseBusiness, SearchCheck, Route, FileText, Network } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/hero-slider";

const services = [
  {
    icon: <BriefcaseBusiness className="h-8 w-8 text-primary" />,
    title: "H.R Consulting",
    description: "Expert guidance on all aspects of human resources to optimize your workforce.",
  },
  {
    icon: <SearchCheck className="h-8 w-8 text-primary" />,
    title: "Job Evaluation & Analysis",
    description: "Defining roles and responsibilities to ensure fair and effective team structures.",
  },
  {
    icon: <Route className="h-8 w-8 text-primary" />,
    title: "Strategic Planning",
    description: "Collaborating to build actionable strategies that drive long-term growth and success.",
  },
];

const whyChooseUs = [
    {
        title: "Africa-Centric",
        description: "Deep understanding of local challenges and regional dynamics.",
        icon: <Image src="/africa.svg" alt="Africa" width={32} height={32} />
    },
    {
        title: "People-Driven",
        description: "We design solutions that put people at the centre of systems.",
        icon: <Users className="h-8 w-8 text-primary" />
    },
    {
        title: "Impact-Focused",
        description: "Every service we offer is geared toward measurable outcomes.",
        icon: <TrendingUp className="h-8 w-8 text-primary" />
    },
    {
        title: "Flexible and Responsive",
        description: "We meet clients where they are and adapt as needed.",
        icon: <Handshake className="h-8 w-8 text-primary" />
    },
    {
        title: "Credible and Confidential",
        description: "We operate with integrity, discretion and professionalism.",
        icon: <ShieldCheck className="h-8 w-8 text-primary" />
    }
];

const coreValues = [
    { title: "Integrity", description: "We uphold honesty and transparency in all engagements." },
    { title: "Professionalism", description: "We adhere to the highest standards of quality and ethical conduct." },
    { title: "Partnership", description: "We collaborate to co-create solutions." },
    { title: "Impact", description: "We are results-oriented and committed to sustainable outcomes." },
    { title: "Continuous Learning", description: "We value growth through learning and innovation." },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSlider />

      <section className="py-16 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
             <div className="fade-in">
                <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Our Vision & Mission</h2>
                <div className="mt-6 space-y-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Eye className="h-8 w-8 text-accent" />
                            <CardTitle>Vision</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">To be a trusted partner in building high-performing, sustainable, and people-centered organizations across Africa.</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Target className="h-8 w-8 text-accent" />
                            <CardTitle>Mission</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">To deliver strategic, innovative, and practical consultancy services that empower institutions to maximise their impact and efficiency.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
             <div className="fade-in">
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
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="fade-in text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Our Core Services</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We provide Management and Strategic Consulting Services to Businesses, Public, Private and Non-Profit Organisations.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <Card className="h-full transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <CardHeader className="flex flex-row items-center gap-4">
                    {service.icon}
                    <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="link" className="text-lg text-primary hover:text-accent">
                <Link href="/services">Explore All Services <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center fade-in">
                <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Why Choose Enshaynce Partners?</h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                    Our unique approach ensures that we deliver solutions that are not only effective but also sustainable and people-centric.
                </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                 {whyChooseUs.map((item, index) => (
                    <Card 
                        key={item.title} 
                        className="text-center fade-in bg-card/60 backdrop-blur-sm border-primary/10 shadow-lg hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-2" 
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <CardHeader className="items-center pb-4">
                            <div className="inline-flex items-center justify-center rounded-full bg-accent/10 p-4 mb-4 ring-4 ring-accent/20">
                               {item.icon}
                            </div>
                            <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center fade-in">
                 <h2 className="font-headline text-3xl font-bold text-foreground md:text-4xl">Our Core Values</h2>
                 <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">The principles that guide our work and partnerships.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {coreValues.map((value, index) => (
                    <div key={value.title} className="flex items-start gap-4 fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                        <Gem className="h-6 w-6 text-accent mt-1 shrink-0" />
                        <div>
                            <h3 className="font-bold text-foreground text-lg">{value.title}</h3>
                            <p className="text-muted-foreground">{value.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl font-bold md:text-4xl">Our Clients</h2>
            <p className="mx-auto mt-4 max-w-3xl text-primary-foreground/80">We are proud to partner with a diverse range of organizations to drive impact and performance.</p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-lg font-semibold">
                <span>NGOs</span>
                <span className="text-accent">&bull;</span>
                <span>U.N Agencies</span>
                 <span className="text-accent">&bull;</span>
                <span>Government Ministries</span>
                 <span className="text-accent">&bull;</span>
                <span>Private Enterprises</span>
                 <span className="text-accent">&bull;</span>
                <span>Faith-Based Organisations</span>
            </div>
        </div>
      </section>

    </div>
  );
}
