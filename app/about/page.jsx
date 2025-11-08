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

      <div className="relative w-full pb-14 sm:pb-16">
        {/* Hero Section */}
        <section className="mx-auto max-w-[1920px] flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 lg:gap-16 pt-8 sm:-mt-16 px-6 sm:px-12 lg:px-20 xl:px-32">
          {/* Left: Name and pronunciation */}
          <div className="w-full sm:min-w-0 sm:flex-1 space-y-4 sm:space-y-6">
            <p className="text-[0.6rem] font-medium uppercase tracking-[0.5em] text-neutral-400">Get to know me...</p>
            <h1 className="text-[4.5rem] font-semibold leading-none tracking-tight text-[#6B6A6D] sm:text-[6.5rem] lg:text-[8.5rem] xl:text-[10rem]">
              Justin
              <br />
              Badua
            </h1>
            <p className="text-[15px] text-neutral-400 italic">/BAH-dwah/</p>
          </div>

          {/* Right: Photo layout - Hidden on mobile, shown from sm up */}
          <div className="relative isolate aspect-[5/4] w-full flex-none min-w-[320px] sm:aspect-[6/5] sm:w-[48vw] lg:w-[46vw] xl:w-[44vw] hidden sm:block">
            <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/60 via-white/40 to-transparent blur-3xl" aria-hidden />

            <div className="grid h-full w-full grid-cols-8 grid-rows-6 gap-3 sm:gap-4 lg:gap-5">
              {/* Left square - Hidden on small screens, shown from md up */}
              <div className="relative z-10 col-span-3 col-start-1 row-span-3 row-start-3 -mt-[50px] w-full overflow-hidden rounded-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)] hidden md:block" style={{aspectRatio: '1/1'}}>
                <div className="flex h-full items-center justify-center">
                  <p className="px-4 text-xs text-neutral-400">Photo 1 · square (1:1)</p>
                </div>
              </div>

              {/* Center portrait - Always visible when container is shown */}
              <div className="relative z-20 col-span-3 col-start-4 row-span-5 row-start-1 mt-[86px] mb-[20px] w-full overflow-hidden rounded-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:mt-[102px] lg:mt-[118px]" style={{aspectRatio: '3/4'}}>
                <div className="flex h-full items-center justify-center">
                  <p className="px-4 text-xs text-neutral-400">Photo 2 · portrait (3:4)</p>
                </div>
              </div>

              {/* Top-right square - Shown from sm up */}
              <div className="relative z-10 col-span-3 col-start-7 row-span-2 row-start-2 w-full overflow-hidden rounded-l-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)]" style={{aspectRatio: '1/1'}}>
                <div className="flex h-full items-center justify-center">
                  <p className="px-3 text-xs text-neutral-400">Photo 3 · square (1:1)</p>
                </div>
              </div>

              {/* Bottom-right square - Hidden on sm, shown from lg up */}
              <div className="relative z-10 col-span-3 col-start-7 row-span-2 row-start-4 w-full overflow-hidden rounded-l-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)] hidden lg:block" style={{aspectRatio: '1/1'}}>
                <div className="flex h-full items-center justify-center">
                  <p className="px-3 text-xs text-neutral-400">Photo 4 · square (1:1)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Info Section */}
        <section className="mx-auto mt-20 max-w-[1920px] px-6 sm:px-12 lg:px-20 xl:px-32">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left side: Images */}
            <div className="flex flex-row gap-3 sm:gap-4 lg:gap-6 flex-shrink-0">
              {/* Left image */}
              <div className="w-[40%] min-w-[140px] max-w-[220px] sm:w-[200px] lg:w-[220px] aspect-[220/215] -mt-[20px] overflow-hidden rounded-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
                <div className="flex h-full items-center justify-center">
                  <p className="px-4 text-xs text-neutral-400">Generic Photo X</p>
                </div>
              </div>
              
              {/* Right image */}
              <div className="w-[55%] min-w-[180px] max-w-[280px] sm:w-[240px] lg:w-[280px] aspect-[3/4] overflow-hidden rounded-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
                <div className="flex h-full items-center justify-center">
                  <p className="px-4 text-xs text-neutral-400">Generic Photo X</p>
                </div>
              </div>
            </div>
            
            {/* Right side: Text content */}
            <div className="flex-1 min-w-0">
              <h2 className="mb-8 text-[0.6rem] font-medium uppercase tracking-[0.5em] text-neutral-400">
                INFO
              </h2>
              
              <div className="space-y-6 text-[15px] leading-relaxed text-neutral-600">
                <p>
                  I&apos;m Filipino, born and raised, and I moved to Canada when I was six. That mix of cultures shaped a lot of who I am. Family, food, and community matter to me, and I bring that energy into the teams I work with.
                </p>
                
                <p>
                  Outside of school and projects, I unwind with my guitar. I&apos;m a F1 fan and check in on race weekends when I can. When I&apos;m off a screen, I&apos;m usually outside. I play golf and enjoy the challenge of steady improvement. I also love getting out on hikes and exploring new trails, whether it is a quick weekend walk or a longer route with a good view. I&apos;m curious by nature and like trying new things, meeting new people, and finding good coffee along the way.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
 
