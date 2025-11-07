export const metadata = {
  title: 'About | Justin Badua',
};

export default function AboutPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[340px] bg-gradient-to-b from-neutral-100 via-white to-transparent blur-3xl"
        aria-hidden
      />

      <div className="relative w-full py-14 sm:py-16">
        {/* Hero Section */}
        <section className="flex items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Left: Name and pronunciation */}
          <div className="min-w-0 flex-1 space-y-4 px-6 sm:space-y-6 sm:px-10 lg:px-20">
            <p className="text-[0.6rem] font-medium uppercase tracking-[0.5em] text-neutral-400">Get to know me...</p>
            <h1 className="text-[3.5rem] font-semibold leading-none tracking-tight text-neutral-700 sm:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem]">
              Justin
              <br />
              Badua
            </h1>
            <p className="text-[13px] text-neutral-400 italic">/BAH-dwah/</p>
          </div>

          {/* Right: Photo layout */}
          <div className="relative isolate aspect-[5/4] w-full flex-none sm:aspect-[6/5] sm:w-[62vw] lg:w-[60vw] xl:w-[58vw]">
            <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/60 via-white/40 to-transparent blur-3xl" aria-hidden />

            <div className="grid h-full grid-cols-8 grid-rows-6 gap-3 sm:gap-4 lg:gap-5">
              {/* Left square */}
              <div className="relative z-10 col-span-3 col-start-1 row-span-3 row-start-3 -mt-[50px] overflow-hidden rounded-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
                <div className="flex h-full items-center justify-center">
                  <p className="px-4 text-xs text-neutral-400">Photo 1 · square (1:1)</p>
                </div>
              </div>

              {/* Center portrait */}
              <div className="relative z-20 col-span-3 col-start-4 row-span-5 row-start-1 mt-[86px] mb-[20px] overflow-hidden rounded-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:mt-[102px] lg:mt-[118px]">
                <div className="flex h-full items-center justify-center">
                  <p className="px-4 text-xs text-neutral-400">Photo 2 · portrait (3:4)</p>
                </div>
              </div>

              {/* Top-right square */}
              <div className="relative z-10 col-span-3 col-start-7 row-span-2 row-start-2 overflow-hidden rounded-l-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
                <div className="flex h-full items-center justify-center">
                  <p className="px-3 text-xs text-neutral-400">Photo 3 · square (1:1)</p>
                </div>
              </div>

              {/* Bottom-right square */}
              <div className="relative z-10 col-span-3 col-start-7 row-span-2 row-start-4 overflow-hidden rounded-l-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
                <div className="flex h-full items-center justify-center">
                  <p className="px-3 text-xs text-neutral-400">Photo 4 · square (1:1)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
 
