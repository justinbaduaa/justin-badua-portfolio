import './globals.css';

import MobileHeader from '@/components/MobileHeader';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: "Justin Badua | Portfolio",
  description: "Portfolio site for Justin Badua, focusing on human-centered interfaces and AI projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-white text-neutral-900">
        <div className="mx-auto flex w-full">
          <Sidebar />
          <div className="flex min-h-screen w-full min-w-0 flex-1 flex-col lg:ml-56">
            <MobileHeader />
            <main className="min-w-0 flex-1 bg-white">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

