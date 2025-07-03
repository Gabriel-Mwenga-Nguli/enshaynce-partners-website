import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/common/header';
import Footer from '@/components/common/footer';
import ChatWidget from '@/components/chat-widget';
import { ThemeProvider } from '@/components/theme-provider';
import { PT_Sans, Belleza, Alegreya } from 'next/font/google';
import Preloader from '@/components/preloader';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-pt-sans',
  display: 'swap',
});

const belleza = Belleza({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-belleza',
  display: 'swap',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-alegreya',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Enshaynce Partners - Strategic Consulting in Africa',
    template: '%s | Enshaynce Partners',
  },
  description: 'Enshaynce Partners Limited offers specialised consultancy services in Human Resources, Strategic Planning, and Organizational Performance Management. Elevating Potential. Enabling Performance.',
  keywords: ['HR Consulting', 'Strategic Planning', 'Job Evaluation', 'Proposal Development', 'Grant Writing', 'Change Management', 'Performance Management', 'Consulting Kenya', 'NGO Consulting', 'Africa'],
  metadataBase: new URL('https://www.enshayncepartners.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body 
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          ptSans.variable,
          belleza.variable,
          alegreya.variable
        )}
      >
        <Preloader>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <ChatWidget />
            <Toaster />
          </ThemeProvider>
        </Preloader>
      </body>
    </html>
  );
}
