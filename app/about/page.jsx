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
          <div className="min-w-0 flex-1 space-y-4 px-6 sm:space-y-6 sm:px-32 lg:px-48 xl:px-60">
            <p className="text-[0.6rem] font-medium uppercase tracking-[0.5em] text-neutral-400">Get to know me...</p>
            <h1 className="text-[4.5rem] font-semibold leading-none tracking-tight text-[#6B6A6D] sm:text-[6.5rem] lg:text-[8.5rem] xl:text-[10rem]">
              Justin
              <br />
              Badua
            </h1>
            <p className="text-[15px] text-neutral-400 italic">/BAH-dwah/</p>
          </div>

          {/* Right: Photo layout */}
          <div className="relative isolate aspect-[5/4] w-full flex-none sm:aspect-[6/5] sm:w-[48vw] lg:w-[46vw] xl:w-[44vw]">
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

        {/* About Me Info Section */}
        <section className="mt-20 px-12 sm:px-20 lg:px-40 xl:px-52">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left side: Images */}
            <div className="flex flex-row gap-4 lg:gap-6 flex-shrink-0">
              {/* Left image */}
              <div className="w-[220px] h-[215px] -mt-[20px] overflow-hidden rounded-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
                <div className="flex h-full items-center justify-center">
                  <p className="px-4 text-xs text-neutral-400">Architecture Model Photo</p>
                </div>
              </div>
              
              {/* Right image */}
              <div className="w-[280px] aspect-[3/4] overflow-hidden rounded-md border border-neutral-200/40 bg-[#F5F5F5] shadow-[0_10px_35px_rgba(15,23,42,0.05)]">
                <div className="flex h-full items-center justify-center">
                  <p className="px-4 text-xs text-neutral-400">Landscape Photo</p>
                </div>
              </div>
            </div>
            
            {/* Right side: Text content */}
            <div className="flex-1">
              <h2 className="mb-8 text-[0.6rem] font-medium uppercase tracking-[0.5em] text-neutral-400">
                INFO
              </h2>
              
              <div className="space-y-6 text-[15px] leading-relaxed text-neutral-600">
                <p>
                  Justin Badua is a Queens student.
                </p>
                
                <p>
                  For a long time, I&apos;ve been designing spaces that people can enjoy strolling around, always striving to curate an engaging human experience as they navigate the built environment. Throughout this journey, I&apos;ve been curious about understanding human interaction to build more intuitive things – there are many complexities in human relationships with nature and architecture with so much still to explore.
                </p>
                
                <p>
                  During my sophomore year, I decided to shift my career towards designing for people in computing spaces because of a desire to work at larger and faster scales. While computing and architecture slowly evolve, still, at the heart of these disciplines are what makes design valuable – it improves people&apos;s lives holistically through emotion, functionality, and aesthetics. Instead of strolling spaces, however, people are now scrolling interfaces more. Architecture has given me a spatial &apos;taste&apos; of design in the real world and allows me to bring a systems view to designing interfaces that feel more humane.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
 
