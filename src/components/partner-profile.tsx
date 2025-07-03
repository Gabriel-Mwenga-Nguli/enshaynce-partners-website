
'use client';

import { Award, School, Verified, BookUser, Calendar, Star, Users, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Image from "next/image";
import Gallery from "@/components/gallery";
import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

// Data based on user input
const partner = {
    name: "Steve Martin Ogony",
    title: "Founder & Managing Partner",
    imageUrl: "/images/partners/steve-ogony.jpg",
    aiHint: "professional kenyan man portrait",
    bio: "Steve Martin Ogony brings over 15 years of experience in human resource management, institutional strengthening, and development program design. He has supported local NGOs, government agencies and international partners in building effective teams and securing millions in donor funding for organizations like the World Health Organization (W.H.O), UNEP, and Save a Child, through high-quality proposal development.",
    education: [
        "PhD. - Project Planning and Management (Specialisation - Project Financing)",
        "M.B.A - Strategic Management",
        "B.B.A - Procurement and Human Resource",
    ],
    professionalAffiliation: {
        name: "Institute of Human Resource Management (I.H.R.M)",
        regNo: "16994",
    },
    certifications: [
        "Certified Human Resource Professional, Kenya (C.H.R.P-K)",
        "C.C.C.N.A",
        "Computer Proficiency"
    ],
    gallery: [
        { src: "/images/gallery/1.jpg", alt: "Professional headshot of Steve Martin Ogony", hint: "professional headshot" },
        { src: "/images/gallery/2.jpg", alt: "Steve Martin Ogony in a business suit", hint: "business portrait" },
        { src: "/images/gallery/3.jpg", alt: "Steve Martin Ogony posing in a suit", hint: "professional portrait" },
        { src: "/images/gallery/4.jpg", alt: "Portrait of Steve Martin Ogony", hint: "man portrait" },
        { src: "/images/gallery/5.jpg", alt: "Steve Martin Ogony outdoors", hint: "man outdoors" },
        { src: "/images/gallery/6.jpg", alt: "Steve Martin Ogony at his graduation", hint: "graduation photo" },
        { src: "/images/gallery/7.jpg", alt: "Steve Martin Ogony in graduation attire", hint: "graduation photo" },
        { src: "/images/gallery/8.jpg", alt: "Steve Martin Ogony celebrating graduation outdoors", hint: "graduation outdoors" },
        { src: "/images/gallery/9.jpg", alt: "Smiling portrait of Steve Martin Ogony in graduation gown", hint: "smiling man" },
        { src: "/images/gallery/10.jpg", alt: "Graduation portrait of Steve Martin Ogony", hint: "graduation portrait" },
        { src: "/images/gallery/11.jpg", alt: "Steve Martin Ogony walking in graduation attire", hint: "man walking" },
        { src: "/images/gallery/12.jpg", alt: "Steve Martin Ogony at a formal event", hint: "formal event" },
    ]
};

const expertiseData = [
  { name: 'HR', score: 95, fill: "hsl(var(--chart-1))" },
  { name: 'Strategy', score: 90, fill: "hsl(var(--chart-2))" },
  { name: 'Funding', score: 88, fill: "hsl(var(--chart-3))" },
  { name: 'Proj. Mgt.', score: 85, fill: "hsl(var(--chart-4))" },
  { name: 'Change Mgt.', score: 82, fill: "hsl(var(--chart-5))" },
];

const clientData = [
  { name: 'NGOs & Civil Society', value: 40, fill: 'hsl(var(--chart-1))' },
  { name: 'INGOs & Donors', value: 25, fill: 'hsl(var(--chart-2))' },
  { name: 'Government Agencies', value: 15, fill: 'hsl(var(--chart-3))' },
  { name: 'Private Enterprises', value: 15, fill: 'hsl(var(--chart-4))' },
  { name: 'Faith-Based Orgs', value: 5, fill: 'hsl(var(--chart-5))' },
];

const chartConfig = {
  score: { label: "Score" },
  value: { label: "Value" },
  clients: { label: "Clients" },
  ...expertiseData.reduce((acc, cur) => ({ ...acc, [cur.name]: { label: cur.name, color: cur.fill } }), {}),
  ...clientData.reduce((acc, cur) => ({ ...acc, [cur.name]: { label: cur.name, color: cur.fill } }), {}),
};


export default function PartnerProfile() {
  return (
    <div className="bg-secondary/10">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <Card className="overflow-hidden shadow-2xl backdrop-blur-sm bg-background/80">
          <div className="relative h-48 w-full bg-gradient-to-r from-primary via-secondary to-accent md:h-64">
            <Image src="/images/gallery/12.jpg" alt="Abstract background" layout="fill" objectFit="cover" className="opacity-30" data-ai-hint="abstract texture" />
          </div>
          
          <div className="relative -mt-20 px-4 pb-8 sm:px-6 md:-mt-24 text-center">
            <Image
              src={partner.imageUrl}
              alt={`Portrait of ${partner.name}`}
              data-ai-hint={partner.aiHint}
              width={200}
              height={200}
              className="h-40 w-40 rounded-full border-4 border-background object-cover shadow-lg md:h-48 md:w-48 mx-auto"
            />
            <div className="mt-6">
              <h1 className="font-headline text-3xl font-bold text-foreground md:text-4xl flex items-center justify-center gap-2">
                {partner.name}
              </h1>
              <p className="text-lg text-primary md:text-xl">{partner.title}</p>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-sm font-medium">
                <Verified className="h-4 w-4 text-green-500" /> CHRP-K
              </Badge>
              <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-sm font-medium">
                <School className="h-4 w-4 text-blue-500" /> PhD
              </Badge>
              <Badge variant="secondary" className="gap-1.5 px-3 py-1 text-sm font-medium">
                <Calendar className="h-4 w-4 text-red-500" /> 15+ Years Exp.
              </Badge>
            </div>
          </div>

          <Tabs defaultValue="overview" className="w-full px-4 pb-6 sm:px-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="overview">Overview & Stats</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
                    <div className="lg:col-span-3 space-y-8">
                         <Card>
                             <CardHeader>
                                <CardTitle className="font-headline text-2xl flex items-center gap-2">
                                  <Award className="h-8 w-8 text-accent" />
                                  About Steve
                                </CardTitle>
                             </CardHeader>
                             <CardContent>
                                 <p className="text-base text-muted-foreground leading-relaxed">{partner.bio}</p>
                             </CardContent>
                         </Card>

                        <div>
                          <h2 className="font-headline text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                            <Briefcase className="h-8 w-8 text-accent"/>
                            Credentials & Qualifications
                          </h2>
                          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                              <Card>
                                  <CardHeader>
                                      <CardTitle className="flex items-center gap-2 font-headline text-xl"><School className="text-primary"/> Educational Background</CardTitle>
                                  </CardHeader>
                                  <CardContent className="space-y-4">
                                    {partner.education.map(edu => (
                                          <div key={edu} className="flex items-start gap-3">
                                              <Badge variant="outline" className="mt-1 p-1"><Star className="h-3 w-3" /></Badge>
                                              <p className="text-muted-foreground flex-1 text-sm">{edu}</p>
                                          </div>
                                      ))}
                                  </CardContent>
                              </Card>
                              <div className="space-y-6">
                                  <Card>
                                      <CardHeader>
                                          <CardTitle className="flex items-center gap-2 font-headline text-xl"><BookUser className="text-primary"/> Professional Affiliation</CardTitle>
                                      </CardHeader>
                                      <CardContent>
                                          <p className="font-semibold text-foreground">{partner.professionalAffiliation.name}</p>
                                          <p className="text-sm text-muted-foreground">Reg. No: {partner.professionalAffiliation.regNo}</p>
                                      </CardContent>
                                  </Card>
                                  <Card>
                                      <CardHeader>
                                          <CardTitle className="flex items-center gap-2 font-headline text-xl"><Verified className="text-primary"/> Certifications</CardTitle>
                                      </CardHeader>
                                      <CardContent className="flex flex-wrap gap-2">
                                          {partner.certifications.map(cert => (
                                              <Badge key={cert} variant="default" className="text-sm">{cert}</Badge>
                                          ))}
                                      </CardContent>
                                  </Card>
                              </div>
                          </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 space-y-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl font-headline"><Star className="text-accent"/> Key Expertise</CardTitle>
                                <CardDescription>Proficiency across core service areas.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={chartConfig} className="h-64 w-full">
                                    <BarChart data={expertiseData} layout="vertical" margin={{ left: 10, right: 10 }}>
                                        <XAxis type="number" hide />
                                        <YAxis dataKey="name" type="category" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))' }} width={80} />
                                        <ChartTooltip cursor={{ fill: 'hsl(var(--muted))' }} content={<ChartTooltipContent />} />
                                        <Bar dataKey="score" radius={5} />
                                    </BarChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>

                         <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl font-headline"><Users className="text-accent"/> Client Portfolio</CardTitle>
                                 <CardDescription>Distribution of partnered organizations.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center">
                                <ChartContainer config={chartConfig} className="h-64 w-full">
                                    <PieChart>
                                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                        <Pie data={clientData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={80} paddingAngle={2}>
                                            {clientData.map((entry) => (
                                                <Cell key={`cell-${entry.name}`} fill={entry.fill} />
                                            ))}
                                        </Pie>
                                        <ChartLegend content={<ChartLegendContent nameKey="name" />} />
                                    </PieChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </TabsContent>

            <TabsContent value="gallery" className="mt-6">
                 <Gallery images={partner.gallery} />
            </TabsContent>

          </Tabs>
        </Card>
      </div>
    </div>
  );
}
