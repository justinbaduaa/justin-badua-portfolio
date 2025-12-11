import Link from 'next/link';

export const metadata = {
    title: 'Clikk Apply | Justin Badua',
    description: 'Case study: Building the frontend and design system for a unified hiring platform for student organizations.',
};

// Placeholder component for images
function ImagePlaceholder({ label, aspectRatio = '16/9', className = '' }) {
    return (
        <div
            className={`relative w-full rounded-2xl bg-neutral-100 dark:bg-[#1c1c1e] border border-neutral-200 dark:border-[#2c2c2e] overflow-hidden ${className}`}
            style={{ aspectRatio }}
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-400 dark:text-neutral-500 p-6 text-center">
                <svg className="w-10 h-10 mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-sm font-medium">{label}</p>
            </div>
        </div>
    );
}

export default function ClikApplyPage() {
    return (
        <div className="mx-auto w-full max-w-[1400px] pb-32 text-neutral-900 dark:text-[#f5f5f7]">
            {/* Hero Section */}
            <header className="mb-12 sm:mb-16 lg:mb-20 space-y-8 sm:space-y-10 px-6 sm:px-8 lg:px-16 pt-12 sm:pt-16">
                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-4">
                        Tricode Cloud
                    </p>
                    <h1 className="text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-medium tracking-tight leading-[1.2] text-neutral-800 dark:text-[#f5f5f7] mb-6">
                        Clikk Apply
                    </h1>
                    <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                        Hiring, built for student organizations.
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
                        <span className="px-3 py-1.5 rounded-full border border-neutral-200 dark:border-[#2c2c2e]">
                            Frontend Developer & Designer
                        </span>
                        <span className="px-3 py-1.5 rounded-full border border-neutral-200 dark:border-[#2c2c2e]">
                            2024 — Present
                        </span>
                        <Link
                            href="https://tricode.cloud/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-[#2c2c2e] transition-colors hover:border-neutral-400 dark:hover:border-[#434348] hover:text-neutral-900 dark:hover:text-white"
                        >
                            <span>Visit Site</span>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Hero Image Placeholder */}
                <ImagePlaceholder
                    label="Product hero shot: Dashboard overview or application flow"
                    aspectRatio="16/9"
                />
            </header>

            <div className="mx-6 sm:mx-8 lg:mx-16 border-t border-neutral-200 dark:border-[#2c2c2e]" />

            {/* Product Overview */}
            <section className="px-6 sm:px-8 lg:px-16 py-16 sm:py-20">
                <div className="max-w-4xl">
                    <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-8">
                        Product Overview
                    </h2>

                    {/* Problem & Solution */}
                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-10">
                        <div>
                            <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-wider">The Problem</h3>
                            <p className="text-[15px] leading-[1.7] text-neutral-600 dark:text-neutral-300">
                                Student organizations run high-volume hiring cycles with scattered tools: Google Forms for applications, spreadsheets for tracking, email threads for scheduling. It's chaotic, time-consuming, and hard to keep fair.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-wider">The Solution</h3>
                            <p className="text-[15px] leading-[1.7] text-neutral-600 dark:text-neutral-300">
                                Clikk Apply centralizes everything in one platform: customizable application forms, real-time interview scheduling, blind scoring, and standardized evaluation. One workflow, start to finish.
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
                        <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#1c1c1e] border border-neutral-100 dark:border-[#2c2c2e]">
                            <p className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white mb-1">10,000+</p>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">Applications processed yearly</p>
                        </div>
                        <div className="p-5 rounded-2xl bg-neutral-50 dark:bg-[#1c1c1e] border border-neutral-100 dark:border-[#2c2c2e]">
                            <p className="text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white mb-1">40+</p>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">Hours saved per hiring cycle</p>
                        </div>
                    </div>

                    {/* Feature Tags */}
                    <div className="flex flex-wrap gap-2">
                        {['Customizable Forms', 'Real-Time Scheduling', 'Blind Scoring', 'Standardized Evaluation'].map((feature) => (
                            <span
                                key={feature}
                                className="px-3 py-1.5 text-sm rounded-full bg-neutral-100 dark:bg-[#2c2c2e] text-neutral-600 dark:text-neutral-300"
                            >
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <div className="mx-6 sm:mx-8 lg:mx-16 border-t border-neutral-200 dark:border-[#2c2c2e]" />

            {/* My Contributions */}
            <section className="px-6 sm:px-8 lg:px-16 py-16 sm:py-20">
                <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 mb-12">
                    My Contributions
                </h2>

                <div className="space-y-16 sm:space-y-20">
                    {/* Brand & Design System */}
                    <div>
                        <h3 className="text-xl sm:text-2xl font-medium mb-3 text-neutral-900 dark:text-white">
                            Brand & Design System
                        </h3>
                        <p className="text-[15px] leading-[1.7] text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl">
                            Created the brand identity from scratch: logo, typography, and color palette. Established the visual design system that defines the product's look and feel across all touchpoints.
                        </p>
                        <ImagePlaceholder
                            label="Logo, color palette, and typography specimens"
                            aspectRatio="16/9"
                        />
                    </div>

                    {/* Homepage & Marketing */}
                    <div>
                        <h3 className="text-xl sm:text-2xl font-medium mb-3 text-neutral-900 dark:text-white">
                            Homepage & Marketing Site
                        </h3>
                        <p className="text-[15px] leading-[1.7] text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl">
                            Designed and built the Tricode Cloud homepage, translating the brand identity into a public-facing site that communicates the product's value to potential users.
                        </p>
                        <ImagePlaceholder
                            label="Tricode Cloud homepage screenshot"
                            aspectRatio="16/9"
                        />
                    </div>

                    {/* Product Frontend */}
                    <div>
                        <h3 className="text-xl sm:text-2xl font-medium mb-3 text-neutral-900 dark:text-white">
                            Product Frontend
                        </h3>
                        <p className="text-[15px] leading-[1.7] text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl">
                            Designed the core user workflows and interaction patterns. Built frontend implementation for key features including the application experience, admin dashboards, and evaluation interfaces.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                            <ImagePlaceholder
                                label="Application form UI"
                                aspectRatio="4/3"
                            />
                            <ImagePlaceholder
                                label="Admin dashboard view"
                                aspectRatio="4/3"
                            />
                            <ImagePlaceholder
                                label="Evaluation interface"
                                aspectRatio="4/3"
                                className="sm:col-span-2 lg:col-span-1"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
