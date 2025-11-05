export const metadata = {
  title: "About | Justin Badua",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[1600px] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl space-y-16">
        {/* Greeting */}
        <div className="space-y-3">
          <p className="text-base text-neutral-500">
            Hello there, <span className="text-neutral-600 font-medium">kamusta!</span>
          </p>
          <p className="text-xs text-neutral-400 italic">/huàn yíng/</p>
        </div>

        {/* Large intro text like in the reference */}
        <div className="space-y-8">
          <h1 className="text-4xl font-normal leading-relaxed text-neutral-500 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.4]">
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
        <div className="border-t border-neutral-200/60 pt-12">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-8">Background</p>
          <div className="space-y-4 text-base text-neutral-600 leading-relaxed">
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

