import './globals.css';

import ClientLayout from '@/components/ClientLayout';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata = {
  title: "Justin Badua | Portfolio",
  description: "Portfolio site for Justin Badua, focusing on human-centered interfaces and AI projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}

