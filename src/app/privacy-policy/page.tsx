import type { Metadata } from "next";
import CurrentDate from "@/components/current-date";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Read the Privacy Policy for Enshaynce Partners Limited. We are committed to protecting your privacy and handling your personal information with care.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16 sm:py-24">
                <div className="prose prose-lg mx-auto max-w-4xl text-foreground">
                    <h1 className="font-headline text-4xl font-bold text-foreground">Privacy Policy</h1>
                    <p className="lead text-muted-foreground">Last updated: <CurrentDate /></p>

                    <h2>Introduction</h2>
                    <p>
                        Enshaynce Partners Limited ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Enshaynce Partners Limited.
                    </p>

                    <h2>Information We Collect</h2>
                    <p>
                        We collect information you provide directly to us. For example, we collect information when you create an account, subscribe, participate in any interactive features of our services, fill out a form, request customer support, or otherwise communicate with us. The types of information we may collect include your name, email address, postal address, phone number, and any other information you choose to provide.
                    </p>

                    <h2>How We Use Your Information</h2>
                    <p>
                        We use the information we collect to provide, maintain, and improve our services, such as to process transactions, develop new products and services, and personalize the services. We may also use the information we collect to:
                    </p>
                    <ul>
                        <li>Send you technical notices, updates, security alerts, and support and administrative messages.</li>
                        <li>Respond to your comments, questions, and requests, and provide customer service.</li>
                        <li>Communicate with you about products, services, offers, promotions, rewards, and events offered by Enshaynce Partners Limited and others, and provide news and information we think will be of interest to you.</li>
                    </ul>

                    <h2>Sharing of Information</h2>
                    <p>
                        We do not share your personal information with third parties without your consent, except in the following circumstances or as described in this Policy:
                    </p>
                    <ul>
                        <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
                        <li>In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law, regulation, or legal process.</li>
                        <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of Enshaynce Partners Limited or others.</li>
                    </ul>

                    <h2>Your Choices</h2>
                    <p>
                        You may update, correct or delete information about you at any time by logging into your online account or emailing us. If you wish to delete or deactivate your account, please email us, but note that we may retain certain information as required by law or for legitimate business purposes.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:info@enshayncepartners.com" className="text-primary hover:underline">info@enshayncepartners.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}
