export const metadata = {
  title: "About | Justin Badua",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[1400px] px-8 py-16 sm:px-12 lg:px-16">
      <div className="mx-auto max-w-4xl space-y-20">
        {/* Greeting */}
        <div className="space-y-1">
          <p className="text-[15px] text-neutral-600">
            Hello there, <span className="font-normal">kamusta!</span>
          </p>
          <p className="text-[13px] text-neutral-400 italic">/ka-MOOS-tah/</p>
        </div>

        {/* Large intro text like in the reference */}
        <div className="space-y-8">
          <h1 className="text-[2.75rem] font-normal leading-[1.2] text-neutral-500 sm:text-5xl lg:text-[3.25rem] tracking-tight">
            Justin is a designer thinking about{' '}
            <span className="text-neutral-700">intelligent interfaces</span> driven by{' '}
            <span className="text-neutral-700">novel interaction paradigms</span> that feel natural, seamlessly blending
            with our daily intentions. Previously, he&apos;s designed{' '}
            <span className="text-neutral-700">human interfaces</span> at various organizations and startups.
            He&apos;s currently a student at{' '}
            <span className="text-neutral-700">Queen&apos;s University</span>.
          </h1>
        </div>

        {/* Additional sections placeholder */}
        <div className="pt-12">
          <p className="text-[0.6rem] uppercase tracking-[0.4em] text-neutral-400 font-medium mb-8">Background</p>
          <div className="space-y-5 text-[15px] text-neutral-600 leading-[1.7]">
            <p>
              I&apos;m passionate about creating interfaces that bridge the gap between complex technology and human understanding.
              My work spans AI-powered applications, design systems, and interactive experiences.
            </p>
            <p>
              When I&apos;m not coding or designing, you&apos;ll find me exploring new interaction patterns,
              contributing to open source, or helping build communities around technology and design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

