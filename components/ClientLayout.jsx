'use client';

import { useState } from 'react';

import LoadingScreen from './LoadingScreen';
import MobileHeader from './MobileHeader';
import Sidebar from './Sidebar';

export default function ClientLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className={`mx-auto flex w-full transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Sidebar />
        <div className="flex min-h-screen w-full min-w-0 flex-1 flex-col lg:ml-56">
          <MobileHeader />
          <main className="min-w-0 flex-1 bg-white dark:bg-neutral-950">{children}</main>
        </div>
      </div>
    </>
  );
}

