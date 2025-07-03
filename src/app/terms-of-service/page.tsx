import type { Metadata } from "next";
import CurrentDate from "@/components/current-date";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Review the Terms of Service for using the Enshaynce Partners Limited website and services.",
};

export default function TermsOfServicePage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <div className="prose prose-lg mx-auto max-w-4xl text-foreground">
                    <h1 className="font-headline text-4xl font-bold text-foreground">Terms of Service</h1>
                    <p className="lead text-muted-foreground">Last updated: <CurrentDate /></p>

                    <h2>1. Agreement to Terms</h2>
                    <p>
                        By using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the services.
                    </p>

                    <h2>2. Description of Service</h2>
                    <p>
                        Enshaynce Partners Limited provides strategic and management consulting services, including but not limited to H.R Consulting, Strategic Planning, and Proposal Development. We also provide AI-powered tools for service recommendations and SEO suggestions. These services are provided for informational purposes and do not constitute legal or financial advice.
                    </p>

                    <h2>3. User Conduct</h2>
                    <p>
                        You agree not to use the services for any unlawful purpose or in any way that could damage, disable, overburden, or impair any of our servers. You agree not to attempt to gain unauthorized access to any services, other accounts, computer systems, or networks connected to any of our servers.
                    </p>

                    <h2>4. Intellectual Property</h2>
                    <p>
                        All content included on the site, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is the property of Enshaynce Partners Limited or its suppliers and protected by copyright and other laws.
                    </p>

                    <h2>5. Disclaimers</h2>
                    <p>
                        The services are provided "as is" and "as available" without any warranties of any kind, express or implied. We do not warrant that the services will be uninterrupted or error-free. The AI-generated content is for informational purposes only and we make no representations or warranties about its accuracy or completeness.
                    </p>

                    <h2>6. Limitation of Liability</h2>
                    <p>
                        In no event shall Enshaynce Partners Limited, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
                    </p>

                    <h2>7. Changes to Terms</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms of Service on this page.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at: <a href="mailto:info@enshayncepartners.com" className="text-primary hover:underline">info@enshayncepartners.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
