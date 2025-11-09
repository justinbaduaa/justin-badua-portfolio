import './globals.css';

import ClientLayout from '@/components/ClientLayout';

export const metadata = {
  title: "Justin Badua | Portfolio",
  description: "Portfolio site for Justin Badua, focusing on human-centered interfaces and AI projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-white text-neutral-900">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

