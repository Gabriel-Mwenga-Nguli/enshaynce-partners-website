import ContactForm from "@/components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Reach out to Enshaynce Partners for expert consulting services. Find our address in Nairobi, Kenya, phone number, and email to start the conversation.",
};

export default function ContactPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <div className="text-center fade-in">
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        Get in Touch
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                        We're here to help. Whether you have a question about our services or want to discuss your needs, we'd love to hear from you.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="fade-in" style={{ animationDelay: '100ms' }}>
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6 text-base">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Our Office</h3>
                                        <p className="text-muted-foreground">EENS Building, Block B, 1st Floor<br />Mombasa Road, Kenya</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                     <div className="mt-1 flex-shrink-0">
                                        <Mail className="h-6 w-6 text-primary" />
                                     </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Email Us</h3>
                                        <a href="mailto:info@enshayncepartners.com" className="text-muted-foreground transition-colors hover:text-primary">
                                            info@enshayncepartners.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0">
                                        <Phone className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">Call Us</h3>
                                        <a href="tel:+254725619571" className="text-muted-foreground transition-colors hover:text-primary">
                                            +254 725 619 571
                                        </a>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="fade-in" style={{ animationDelay: '200ms' }}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ContactForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>

                <div className="mt-16 fade-in" style={{ animationDelay: '300ms' }}>
                     <h2 className="text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Find Us Here
                    </h2>
                    <div className="mt-6 aspect-video h-96 w-full rounded-lg bg-muted overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.786524982935!2d36.89712121475437!3d-1.3044958990518714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13a5b0f4583d%3A0x6b72d24a3cf5a239!2sMombasa%20Road!5e0!3m2!1sen!2ske!4v1684750242858!5m2!1sen!2ske"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            title="Company Location on Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
