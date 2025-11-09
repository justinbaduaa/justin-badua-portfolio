import Image from 'next/image';

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
            <p className="text-[0.6rem] font-medium uppercase tracking-[0.5em] text-neutral-400 transition duration-300 hover:text-neutral-500">Get to know me...</p>
            <h1 className="text-[4.5rem] font-semibold leading-none tracking-tight text-[#6B6A6D] transition-colors duration-500 hover:text-[#555459] sm:text-[6.5rem] lg:text-[8.5rem] xl:text-[10rem]">
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
              <div className="relative z-10 col-span-3 col-start-1 row-span-3 row-start-3 -mt-[50px] w-full overflow-hidden rounded-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-transform duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)] hidden md:block" style={{aspectRatio: '1/1'}}>
                <Image
                  src="/Ski.webp"
                  alt="Skiing adventure"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Center portrait - Always visible when container is shown */}
              <div className="relative z-20 col-span-3 col-start-4 row-span-5 row-start-1 mt-[86px] mb-[20px] w-full overflow-hidden rounded-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-transform duration-500 ease-out hover:-translate-y-4 hover:shadow-[0_35px_90px_rgba(15,23,42,0.22)] sm:mt-[102px] lg:mt-[118px]" style={{aspectRatio: '3/4'}}>
                <Image
                  src="/headshot.webp"
                  alt="Justin Badua headshot"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Top-right square - Shown from sm up */}
              <div className="relative z-10 col-span-3 col-start-7 row-span-2 row-start-2 w-full overflow-hidden rounded-l-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-transform duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)]" style={{aspectRatio: '1/1'}}>
                <Image
                  src="/Queens.webp"
                  alt="Queen's University"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom-right square - Hidden on sm, shown from lg up */}
              <div className="relative z-10 col-span-3 col-start-7 row-span-2 row-start-4 w-full overflow-hidden rounded-l-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-transform duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)] hidden lg:block" style={{aspectRatio: '1/1'}}>
                <Image
                  src="/HTN.webp"
                  alt="Hack the North"
                  fill
                  className="object-cover"
                />
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
              <div className="relative w-[40%] min-w-[140px] max-w-[220px] sm:w-[200px] lg:w-[220px] aspect-[220/215] -mt-[20px] overflow-hidden rounded-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-transform duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
                <Image
                  src="/waterfall.webp"
                  alt="Waterfall view"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Right image */}
              <div className="relative w-[55%] min-w-[180px] max-w-[280px] sm:w-[240px] lg:w-[280px] aspect-[3/4] overflow-hidden rounded-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)] transition-transform duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
                <Image
                  src="/Trail.webp"
                  alt="Scenic trail view"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Right side: Text content */}
            <div className="flex-1 min-w-0">
              <h2 className="mb-8 text-[0.6rem] font-medium uppercase tracking-[0.5em] text-neutral-400">
                INFO
              </h2>
              
              <div className="space-y-6 text-[15px] leading-relaxed text-neutral-600">
                <p>
                  I&apos;m Filipino, born and raised, and moved to Canada when I was six. That mix shaped a lot of who I am. Family, food, and community matter to me, and I try to bring that same warmth and energy to the teams I&apos;m part of.
                </p>
                
                <p>
                  When I&apos;m not in class or working on projects, you&apos;ll usually find me with a guitar in hand. I&apos;m a big F1 fan and tune in on race weekends when I can. Away from screens, I&apos;m outside, working on my golf game, hiking new trails, and chasing good views. I&apos;m curious by nature, always keen to try new things, meet new people, and hunt down great food. I&apos;m a big foodie, always searching for the best eats, especially a standout shawarma.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
 
