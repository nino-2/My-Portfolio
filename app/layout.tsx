import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Morgan Opeyemi — Full-Stack Developer & Brand Designer | Nino Technologies',
  description: 'Lagos-based Full-Stack Developer and Brand Designer. Building scalable web applications and bold visual identities that turn ideas into digital experiences.',
  openGraph: {
    title: 'Morgan Opeyemi — Nino Technologies',
    description: 'Full-Stack Developer & Brand Designer based in Lagos.',
    images: [{ url: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morgan Opeyemi — Nino Technologies',
    images: [{ url: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={plusJakartaSans.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
