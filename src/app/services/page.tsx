import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BriefcaseBusiness, SearchCheck, Route, FileText, Users, Network, TrendingUp } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our comprehensive consultancy services: H.R Consulting, Job Evaluation & Analysis, Strategic Planning, Proposal Development, Training, Change Management, and Performance Management.",
};

const services = [
  {
    icon: <BriefcaseBusiness className="h-10 w-10 text-primary" />,
    title: "H.R Consulting",
    description: "Providing expert guidance across all HR functions to optimize your workforce strategy, ensure compliance, and foster a productive work environment.",
  },
  {
    icon: <SearchCheck className="h-10 w-10 text-primary" />,
    title: "Job Evaluation & Analysis",
    description: "Systematically defining roles and responsibilities to create equitable salary structures, clear career paths, and effective organizational design.",
  },
  {
    icon: <Route className="h-10 w-10 text-primary" />,
    title: "Strategic Planning",
    description: "Facilitating collaborative planning processes to set clear goals, define actionable strategies, and ensure long-term organizational success and sustainability.",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Proposal Development & Grant Writing",
    description: "Crafting compelling, high-quality proposals and grant applications to secure critical funding from donors, foundations, and other financial partners.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Training, Capacity & Team Building",
    description: "Designing and delivering targeted training programs and team-building activities to enhance skills, boost morale, and improve collective performance.",
  },
  {
    icon: <Network className="h-10 w-10 text-primary" />,
    title: "Change Management & OD",
    description: "Guiding organizations through transitions with structured change management and organizational development initiatives to improve culture and effectiveness.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Performance Management",
    description: "Developing and implementing robust systems to track, measure, and optimize employee and organizational performance against strategic objectives.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center fade-in">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Strategic, innovative, and practical consultancy services that empower institutions to maximise their impact and efficiency.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={service.title} className="fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <Card className="h-full transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-accent">
                <CardHeader className="items-center text-center">
                  <div className="mb-4 rounded-full bg-accent/10 p-4">{service.icon}</div>
                  <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
