import Image from 'next/image';
import BlurFade from '@/components/ui/BlurFade';

export const metadata = {
  title: 'About | Justin Badua',
};

export default function AboutPage() {
  return (
    <div className="relative isolate overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[340px] bg-gradient-to-b from-neutral-100 via-white to-transparent dark:from-[#1c1c1e] dark:via-black blur-3xl"
        aria-hidden
      />

      <div className="relative w-full pb-14 sm:pb-16">
        {/* Hero Section */}
        <section className="mx-auto max-w-[1920px] flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 lg:gap-16 pt-8 sm:-mt-16 px-6 sm:px-12 lg:px-20 xl:px-32">
          {/* Left: Name and pronunciation */}
          <BlurFade delay={0.1} className="w-full sm:min-w-0 sm:flex-1 space-y-4 sm:space-y-6">
            <p className="text-[0.6rem] font-medium uppercase tracking-[0.5em] text-neutral-400 dark:text-neutral-500 transition duration-300 hover:text-neutral-500 dark:hover:text-neutral-400">Get to know me...</p>
            <h1 className="text-[4.5rem] font-semibold leading-none tracking-tight text-[#6B6A6D] dark:text-[#e5e5e7] transition-colors duration-500 hover:text-[#555459] dark:hover:text-[#f5f5f7] sm:text-[6.5rem] lg:text-[8.5rem] xl:text-[10rem]">
              Justin
              <br />
              Badua
            </h1>
            <p className="text-[15px] text-neutral-400 dark:text-neutral-500 italic">/BAH-dwah/</p>
          </BlurFade>

          {/* Right: Photo layout - Hidden on mobile, shown from sm up */}
          <BlurFade delay={0.3} className="relative isolate aspect-[5/4] w-full flex-none min-w-[320px] sm:aspect-[6/5] sm:w-[48vw] lg:w-[46vw] xl:w-[44vw] hidden sm:block">
            <div className="pointer-events-none absolute inset-0 rounded-[36px] bg-gradient-to-br from-white/60 via-white/40 to-transparent dark:from-[#2c2c2e]/60 dark:via-[#1c1c1e]/40 blur-3xl" aria-hidden />

            <div className="grid h-full w-full grid-cols-8 grid-rows-6 gap-3 sm:gap-4 lg:gap-5">
              {/* Left square - Hidden on small screens, shown from 1700px up to avoid text overlap */}
              <div className="relative z-10 col-span-3 col-start-1 row-span-3 row-start-3 -mt-[50px] w-full overflow-hidden rounded-xl border border-neutral-200/40 dark:border-[#2c2c2e] bg-[#F5F5F5] dark:bg-[#1c1c1e] shadow-[0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)] hidden min-[1700px]:block" style={{ aspectRatio: '1/1' }}>
                <Image
                  src="/Ski.webp"
                  alt="Skiing adventure"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Center portrait - Always visible when container is shown */}
              <div className="relative z-20 col-span-3 col-start-4 row-span-5 row-start-1 mt-[86px] mb-[20px] w-full overflow-hidden rounded-xl border border-neutral-200/40 dark:border-[#2c2c2e] bg-[#F5F5F5] dark:bg-[#1c1c1e] shadow-[0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out hover:-translate-y-4 hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.7)] sm:mt-[102px] lg:mt-[118px]" style={{ aspectRatio: '3/4' }}>
                <Image
                  src="/JustinB-HeadshotV2-26.webp"
                  alt="Justin Badua headshot"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Top-right square - Shown from sm up */}
              <div className="relative z-10 col-span-3 col-start-7 row-span-2 row-start-2 w-full overflow-hidden rounded-xl border border-neutral-200/40 dark:border-[#2c2c2e] bg-[#F5F5F5] dark:bg-[#1c1c1e] shadow-[0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)]" style={{ aspectRatio: '1/1' }}>
                <Image
                  src="/Queens.webp"
                  alt="Queen's University"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bottom-right square - Hidden on sm, shown from lg up */}
              <div className="relative z-10 col-span-3 col-start-7 row-span-2 row-start-4 w-full overflow-hidden rounded-xl border border-neutral-200/40 dark:border-[#2c2c2e] bg-[#F5F5F5] dark:bg-[#1c1c1e] shadow-[0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)]" style={{ aspectRatio: '1/1' }}>
                <Image
                  src="/HTN.webp"
                  alt="Hack the North"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </BlurFade>
        </section>

        {/* About Me Info Section */}
        <section className="mx-auto mt-20 max-w-[1920px] px-6 sm:px-12 lg:px-20 xl:px-24">
          <BlurFade delay={0.4} inView>
            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
              {/* Left side: Images */}
              <div className="flex flex-row gap-3 sm:gap-4 xl:gap-6 shrink-0">
                {/* Left image */}
                <div className="relative w-[40%] min-w-[140px] max-w-[220px] sm:w-[200px] xl:w-[220px] aspect-[220/215] -mt-[20px] overflow-hidden rounded-xl border border-neutral-200/40 dark:border-[#2c2c2e] bg-[#F5F5F5] dark:bg-[#1c1c1e] shadow-[0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                  <Image
                    src="/waterfall.webp"
                    alt="Waterfall view"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right image */}
                <div className="relative w-[55%] min-w-[180px] max-w-[280px] sm:w-[240px] xl:w-[280px] aspect-[3/4] overflow-hidden rounded-xl border border-neutral-200/40 dark:border-[#2c2c2e] bg-[#F5F5F5] dark:bg-[#1c1c1e] shadow-[0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                  <Image
                    src="/Trail.webp"
                    alt="Scenic trail view"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right side: Text content */}
              <div className="flex-1 min-w-[320px]">
                <h2 className="mb-8 text-[0.6rem] font-medium uppercase tracking-[0.5em] text-neutral-400 dark:text-neutral-500">
                  INFO
                </h2>

                <div className="space-y-6 text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">
                  <p>
                    I&apos;m Filipino, born and raised, and moved to Canada when I was six. That mix shaped a lot of who I am. Family, food, and community matter to me, and I try to bring that same warmth and energy to the teams I&apos;m part of.
                  </p>

                  <p>
                    When I&apos;m not in class or working on projects, you&apos;ll usually find me with a guitar in hand. I&apos;m a big F1 fan and tune in on race weekends when I can. Away from screens, I&apos;m outside, working on my golf game, hiking new trails, and chasing good views. I&apos;m curious by nature, always keen to try new things, meet new people, and hunt down great food. I&apos;m a big foodie, always searching for the best eats, especially a standout shawarma.
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </section>

        {/* Divider before education */}
        <div className="mx-auto mt-20 max-w-[1920px] px-6 sm:px-12 lg:px-20 xl:px-32">
          <BlurFade delay={0.5} inView>
            <div className="border-t border-neutral-200 dark:border-[#2c2c2e]" />
          </BlurFade>
        </div>

        {/* Education Section */}
        <section className="mx-auto max-w-[1920px] space-y-8 sm:space-y-10 px-6 sm:px-12 lg:px-20 xl:px-32">
          <BlurFade delay={0.6} inView>
            <div className="flex items-center pt-6 sm:pt-8">
              <p className="text-[0.75rem] uppercase tracking-[0.4em] text-neutral-400 font-medium">
                Education
              </p>
            </div>
          </BlurFade>
          <BlurFade delay={0.7} inView className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
            {/* Left side: Education details */}
            <div className="flex-1 min-w-0 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#111111] dark:text-white">
                    Queen&apos;s University
                  </h3>
                  <div className="space-y-1">
                    <p className="text-2xl font-medium text-neutral-400 dark:text-neutral-500">
                      Kingston, Ontario
                    </p>
                    <p className="text-base text-neutral-400 dark:text-neutral-500">
                      2024 &ndash; Expected 2028
                    </p>
                  </div>
                </div>
                <div className="space-y-1 text-base sm:text-lg text-neutral-600 dark:text-neutral-200">
                  <p>Bachelor of Computing (Honours)</p>
                  <p>Major in AI, Minor in Economics</p>
                </div>
              </div>
            </div>

            {/* Right side: Faded image with caption */}
            <div className="w-full lg:w-[44%]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-neutral-200/40 dark:border-[#2c2c2e] bg-[#F5F5F5] dark:bg-[#1c1c1e] shadow-[0_4px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                <Image
                  src="/queens-university-sunset.webp"
                  alt="Queen's University main campus at sunset"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </BlurFade>
        </section>
      </div>
    </div>
  );
}

