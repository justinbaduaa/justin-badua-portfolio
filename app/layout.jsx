import './globals.css';

import ClientLayout from '@/components/ClientLayout';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata = {
  metadataBase: new URL('https://justinbadua.ca'),
  title: {
    default: "Justin Badua | Portfolio",
    template: "%s | Justin Badua",
  },
  description: "Justin Badua is a Queen's University Computing student specializing in AI and Economics, building human-centered interfaces and thoughtful digital experiences.",
  keywords: [
    "Justin Badua",
    "Portfolio",
    "Queen's University",
    "Computing",
    "AI",
    "Frontend Developer",
    "Web Developer",
    "UI/UX",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Justin Badua", url: "https://justinbadua.ca" }],
  creator: "Justin Badua",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://justinbadua.ca",
    siteName: "Justin Badua Portfolio",
    title: "Justin Badua | Portfolio",
    description: "Queen's University Computing student specializing in AI and Economics, building human-centered interfaces.",
    images: [
      {
        url: "/JustinB-Headshot.webp",
        width: 1200,
        height: 630,
        alt: "Justin Badua - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Badua | Portfolio",
    description: "Queen's University Computing student building human-centered interfaces.",
    images: ["/JustinB-Headshot.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // You'll add your Google Search Console verification code here after setup
    // google: 'your-google-verification-code',
  },
};

// JSON-LD structured data for better search visibility
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Justin Badua',
  url: 'https://justinbadua.ca',
  image: 'https://justinbadua.ca/JustinB-Headshot.webp',
  jobTitle: 'Computing Student & Frontend Developer',
  worksFor: {
    '@type': 'Organization',
    name: "Queen's University",
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: "Queen's University",
  },
  sameAs: [
    // Add your social profiles here if you have them
    // 'https://linkedin.com/in/justinbadua',
    // 'https://github.com/justinbadua',
  ],
  knowsAbout: [
    'Frontend Development',
    'React',
    'Next.js',
    'UI/UX Design',
    'Artificial Intelligence',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="custom-scroll min-h-screen overflow-x-hidden bg-white dark:bg-black text-neutral-900 dark:text-[#f5f5f7] transition-colors duration-300">
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
