'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import BlurFade from '@/components/ui/BlurFade';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { useTheme } from '@/components/ThemeProvider';
import './tricode.css';

// ========================================
// SIMPLE ROLE ITEM - Attio feature grid style
// ========================================
function RoleItem({ icon, title, description, index = 0 }) {
    const itemRef = useRef(null);
    const isInView = useInView(itemRef, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={itemRef}
            className="tc-feature-card"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08 }}
        >
            <div className="tc-feature-header">
                <span className="tc-feature-icon">{icon}</span>
                <span className="tc-feature-title">{title}</span>
            </div>
            <p className="tc-feature-text">{description}</p>
        </motion.div>
    );
}

// ========================================
// IMAGE SHOWCASE COMPONENT
// ========================================
function ImageShowcase({ src, alt, caption }) {
    return (
        <div className="tc-image-showcase">
            <div className="tc-image-wrapper">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="tc-showcase-image"
                    style={{ objectFit: 'cover' }}
                />
            </div>
            {caption && <p className="tc-image-caption">{caption}</p>}
        </div>
    );
}

// ========================================
// PLACEHOLDER COMPONENT
// ========================================
function Placeholder({ label, aspectRatio = '16/9' }) {
    return (
        <div className="tc-placeholder" style={{ aspectRatio }}>
            <span className="tc-placeholder-label">{label}</span>
        </div>
    );
}

// ========================================
// LANDING PAGE SHOWCASE COMPONENT (Apple-style)
// ========================================
function LandingPageShowcase() {
    const { theme } = useTheme();

    const sites = [
        {
            id: 'tricode',
            title: 'Tricode Cloud',
            subtitle: 'Company Website',
            description: 'The parent company landing page. Designed with soft gradient aesthetics and a clean SaaS layout that communicates trust and professionalism.',
            image: '/tricode-cloud-mock.webp',
            darkImage: '/Tricode Cloud Mock Dark.png',
            link: 'https://tricode.cloud/',
            tags: ['Next.js', 'Responsive', 'Custom Illustrations']
        },
        {
            id: 'clikk',
            title: 'Clikk Apply',
            subtitle: 'Product Page',
            description: 'The conversion-focused product landing. Built with interactive feature demos, pricing tables, and clear CTAs for student organization admins.',
            image: '/Clikk Apply Mock.png',
            darkImage: '/Clikk Apply Mock Dark.png',
            link: 'https://clikk.ca/',
            tags: ['React', 'Framer Motion', 'Tailwind CSS']
        }
    ];

    return (
        <div className="tc-sites-showcase">
            {sites.map((site, idx) => {
                const currentImage = theme === 'dark' && site.darkImage ? site.darkImage : site.image;

                return (
                    <motion.div
                        key={site.id}
                        className="tc-site-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: idx * 0.15 }}
                        viewport={{ once: true }}
                    >
                        <div className="tc-site-image-container">
                            <Image
                                key={`${site.id}-${theme}`}
                                src={currentImage}
                                alt={site.title}
                                width={1200}
                                height={800}
                                className="tc-site-image"
                            />
                        </div>
                        <div className="tc-site-info">
                            <span className="tc-site-subtitle">{site.subtitle}</span>
                            <h3 className="tc-site-title">{site.title}</h3>
                            <p className="tc-site-desc">{site.description}</p>
                            <a
                                href={site.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="tc-site-link"
                            >
                                Visit Site
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}


// ========================================
// DESIGN PRINCIPLE - Numbered list (Apple style)
// ========================================
function PrincipleCard({ number, title, description }) {
    return (
        <div className="tc-principle-row">
            <div className="tc-principle-num">{number}</div>
            <div className="tc-principle-info">
                <h4 className="tc-principle-h">{title}</h4>
                <p className="tc-principle-p">{description}</p>
            </div>
        </div>
    );
}

// ========================================
// PRODUCT UI SHOWCASE - Attio-style split layout
// ========================================
function ProductUIShowcase() {
    const features = [
        {
            id: 'anonymized',
            headline: 'Anonymized Candidates',
            description: 'Eliminate unconscious bias with randomly generated names and colorful icons. Reviewers focus on qualifications, not identities.',
            image: '/tricode-anonymized-candidates.jpg'
        },
        {
            id: 'departments',
            headline: 'Department Management',
            description: 'Color-coded department cards make it easy to organize hiring across different teams and roles within your organization.',
            image: '/tricode-departments.png'
        },
        {
            id: 'portal',
            headline: 'Candidate Portal',
            description: 'Give applicants a clear view of their progress with an intuitive stepper. No more "where am I in the process?" emails.',
            image: '/tricode-candidate-portal.png'
        }
    ];

    return (
        <div className="tc-attio-showcase">
            {features.map((feature, idx) => (
                <motion.div
                    key={feature.id}
                    className={`tc-attio-row ${idx % 2 === 1 ? 'tc-attio-row-reverse' : ''}`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <div className="tc-attio-text">
                        <h3 className="tc-attio-headline">{feature.headline}</h3>
                        <p className="tc-attio-desc">{feature.description}</p>
                    </div>
                    <div className="tc-attio-image">
                        <Image
                            src={feature.image}
                            alt={feature.headline}
                            width={600}
                            height={400}
                            className="tc-attio-img"
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}



// ========================================
// METRIC CARD COMPONENT
// ========================================
function MetricCard({ value, label, suffix = '', prefix = '', description, icon }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            className="ca-metric-card"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
            {icon && <div className="ca-metric-icon">{icon}</div>}
            <div className="ca-metric-value">
                <AnimatedCounter value={value} suffix={suffix} prefix={prefix} duration={2.5} />
            </div>
            <div className="ca-metric-label">{label}</div>
            {description && <p className="ca-metric-desc">{description}</p>}
        </motion.div>
    );
}

// ========================================
// MAIN PAGE COMPONENT
// ========================================
export default function TricodePage() {
    return (
        <div className="clikk-apply-page tricode-page">

            {/* ========================================
                HERO SECTION
            ======================================== */}
            <section id="intro" className="ca-hero tc-hero">
                <div className="ca-container">
                    <BlurFade delay={0.1}>
                        <Link href="/" className="ca-back-link">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            <span>Back to Projects</span>
                        </Link>
                    </BlurFade>

                    <div className="tc-hero-content">


                        <BlurFade delay={0.2}>
                            <h1 className="tc-hero-title">
                                Tricode Cloud: Building the Design & Engineering Foundation
                            </h1>
                        </BlurFade>

                        <BlurFade delay={0.3}>
                            <p className="tc-hero-subtitle">
                                As an early-stage team member, I designed the brand identity, built both landing pages, and developed the frontend for Tricode Cloud&apos;s flagship product, Clikk Apply.
                            </p>
                        </BlurFade>

                        <BlurFade delay={0.4}>
                            <div className="tc-hero-meta">
                                <div className="tc-meta-item">
                                    <span className="tc-meta-label">Role</span>
                                    <span className="tc-meta-value">Design Lead & Frontend Engineer</span>
                                </div>
                                <div className="tc-meta-item">
                                    <span className="tc-meta-label">Timeline</span>
                                    <span className="tc-meta-value">2024 — Present</span>
                                </div>
                                <div className="tc-meta-item">
                                    <span className="tc-meta-label">Company</span>
                                    <span className="tc-meta-value">Tricode Cloud</span>
                                </div>
                            </div>
                        </BlurFade>

                        <BlurFade delay={0.5}>
                            <div className="ca-hero-ctas">
                                <Link
                                    href="https://tricode.cloud/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ca-cta-primary"
                                >
                                    View Live Site
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </Link>
                            </div>
                        </BlurFade>
                    </div>
                </div>
            </section>

            <div className="ca-divider" />

            {/* ========================================
                MY ROLE SECTION
            ======================================== */}
            <section id="role" className="tc-role-section">
                <div className="ca-container">
                    <BlurFade>

                        <h2 className="ca-section-title">What I Built</h2>
                        <p className="ca-section-subtitle">
                            My contributions spanned design and development—here&apos;s what I worked on.
                        </p>
                    </BlurFade>

                    <BlurFade delay={0.2}>
                        <div className="tc-feature-grid">
                            <RoleItem
                                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>}
                                title="Brand Identity"
                                description="Designed the Tricode Cloud logo, established brand guidelines, color system, and visual language."
                                index={0}
                            />
                            <RoleItem
                                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>}
                                title="UX/UI Design"
                                description="Prototyped in Figma with a focus on accessibility and simplicity for student users."
                                index={1}
                            />
                            <RoleItem
                                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>}
                                title="Frontend Development"
                                description="Built the React/Next.js codebase, component library, and animation system."
                                index={2}
                            />
                            <RoleItem
                                icon={<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" /></svg>}
                                title="Landing Pages"
                                description="Designed and developed both the Tricode Cloud and Clikk Apply landing pages."
                                index={3}
                            />
                        </div>
                    </BlurFade>
                </div>
            </section>

            <div className="ca-divider" />

            {/* ========================================
                BRAND FOUNDATION SECTION
            ======================================== */}
            <section id="brand" className="tc-brand-section">
                <div className="ca-container">
                    <BlurFade>

                        <h2 className="ca-section-title">Brand Identity</h2>
                        <p className="ca-section-subtitle">
                            I created the visual foundation for Tricode Cloud from scratch, establishing a design system that scales across products.
                        </p>
                    </BlurFade>

                    <BlurFade delay={0.2}>
                        <div className="tc-brand-grid">
                            <div className="tc-brand-card tc-brand-logo">
                                <h4>Logo & Wordmark</h4>
                                <div className="tc-logo-container">
                                    <Image
                                        src="/Tricode Work Mark.png"
                                        alt="Tricode Cloud Logo"
                                        width={400}
                                        height={200}
                                        className="tc-logo-image tc-logo-light"
                                    />
                                    <Image
                                        src="/tricode logo white.png"
                                        alt="Tricode Logo"
                                        width={400}
                                        height={200}
                                        className="tc-logo-image tc-logo-dark"
                                    />
                                </div>
                            </div>
                            <div className="tc-brand-card tc-brand-colors">
                                <h4>Color System</h4>
                                <div className="tc-color-swatches">
                                    <div className="tc-swatch tc-swatch-img">
                                        <Image src="/Freebie-GradientTextures-01.jpg" alt="Primary" fill style={{ objectFit: 'cover' }} />
                                        <span>Primary</span>
                                    </div>
                                    <div className="tc-swatch tc-swatch-img">
                                        <Image src="/hire-bg.jpg" alt="TriHire" fill style={{ objectFit: 'cover' }} />
                                        <span>TriHire</span>
                                    </div>
                                    <div className="tc-swatch tc-swatch-img">
                                        <Image src="/events-bg.jpg" alt="TriEvents" fill style={{ objectFit: 'cover' }} />
                                        <span>TriEvents</span>
                                    </div>
                                    <div className="tc-swatch tc-swatch-img">
                                        <Image src="/ExpenseBg.jpg" alt="TriExpense" fill style={{ objectFit: 'cover' }} />
                                        <span>TriExpense</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </BlurFade>
                </div>
            </section>

            <div className="ca-divider" />

            {/* ========================================
                LANDING PAGES SECTION
            ======================================== */}
            <section id="landing" className="tc-landing-section">
                <div className="ca-container">
                    <BlurFade>

                        <h2 className="ca-section-title">Landing Pages</h2>
                        <p className="ca-section-subtitle">
                            I designed and built two full landing pages: the parent company site and the product page.
                        </p>
                    </BlurFade>

                    <BlurFade delay={0.2}>
                        <LandingPageShowcase />
                    </BlurFade>
                </div>
            </section>

            <div className="ca-divider" />

            {/* ========================================
                DESIGN PHILOSOPHY SECTION
            ======================================== */}
            <section id="philosophy" className="tc-philosophy-section">
                <div className="ca-container">
                    <BlurFade>

                        <h2 className="ca-section-title">How I Approached It</h2>
                        <p className="ca-section-subtitle">
                            Tricode Cloud serves student organizations with varying levels of tech literacy. Every design decision was guided by these principles.
                        </p>
                    </BlurFade>

                    <BlurFade delay={0.2}>
                        <div className="tc-principles-grid">
                            <PrincipleCard
                                number="1"
                                title="Simplicity First"
                                description="If a feature needs explaining, the design failed. We aimed for interfaces so intuitive that onboarding is unnecessary."
                            />
                            <PrincipleCard
                                number="2"
                                title="User-Driven Iteration"
                                description="We collect feedback from our users and continuously iterate to improve the experience. Each release gets better based on real input."
                            />
                            <PrincipleCard
                                number="3"
                                title="Edge Case Friendly"
                                description="Clubs have chaotic workflows. The UI handles messy data, partial completions, and user mistakes gracefully."
                            />
                        </div>
                    </BlurFade>
                </div>
            </section>

            <div className="ca-divider" />

            {/* ========================================
                PRODUCT UI SECTION
            ======================================== */}
            <section id="product" className="tc-product-section">
                <div className="ca-container">
                    <BlurFade>

                        <h2 className="ca-section-title">Clikk Apply Interface</h2>
                        <p className="ca-section-subtitle">
                            Key screens and components I designed and built for the hiring platform.
                        </p>
                    </BlurFade>

                    <BlurFade delay={0.2}>
                        <ProductUIShowcase />
                    </BlurFade>
                </div>
            </section>

            <div className="ca-divider" />

            {/* ========================================
                RESULTS SECTION
            ======================================== */}
            <section id="results" className="ca-results-section">
                <div className="ca-container">
                    <BlurFade>

                        <h2 className="ca-section-title">The Results</h2>
                    </BlurFade>

                    <div className="ca-bento-grid">
                        <MetricCard
                            value={500}
                            suffix="+"
                            label="Applications Processed"
                            description="Through the platform I helped build."
                            icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
                                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                                </svg>
                            }
                        />

                        <MetricCard
                            value={4}
                            label="Student Organizations"
                            description="ASUS, CESA, COMPSA, and Computing O-Week."
                            icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                                </svg>
                            }
                        />

                        <MetricCard
                            value={2}
                            label="Landing Pages Shipped"
                            description="Production sites I designed and built from scratch."
                            icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                    <line x1="3" y1="9" x2="21" y2="9" />
                                </svg>
                            }
                        />

                        <MetricCard
                            value={1}
                            label="Complete Brand System"
                            description="Logo, colors, typography, and guidelines."
                            icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            }
                        />
                    </div>

                    <BlurFade delay={0.3}>
                        <div className="tc-trusted-by">
                            <p className="tc-trusted-label">Trusted by student organizations at Queen&apos;s</p>
                            <div className="tc-trusted-logos">
                                <Image src="/asus.webp" alt="ASUS" width={60} height={60} className="tc-org-logo" />
                                <Image src="/CESA.webp" alt="CESA" width={60} height={60} className="tc-org-logo" />
                                <Image src="/compsa.webp" alt="COMPSA" width={60} height={60} className="tc-org-logo" />
                                <Image src="/computing-oweek.webp" alt="Computing O-Week" width={60} height={60} className="tc-org-logo" />
                            </div>
                        </div>
                    </BlurFade>

                    <BlurFade delay={0.4}>
                        <div className="tc-reflection">
                            <h4>Reflection</h4>
                            <p>
                                Tricode Cloud was my first experience building a real product that people actually use. I learned how to design and ship features, collaborate with a team, and iterate based on real user feedback. Seeing student clubs rely on something I helped build made the work feel meaningful, and reinforced my belief that the best products come from deeply understanding your users.
                            </p>
                        </div>
                    </BlurFade>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="ca-footer-cta">
                <div className="ca-container">
                    <BlurFade>
                        <div className="ca-cta-block">
                            <h3 className="ca-cta-title">Interested in working together?</h3>
                            <p className="ca-cta-text">
                                I am always excited to discuss design systems, frontend architecture, and building products that help people.
                            </p>
                            <div className="ca-cta-buttons">
                                <Link href="mailto:justin.badua@queensu.ca" className="ca-cta-primary">
                                    Get in Touch
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link href="https://www.linkedin.com/in/justin-badua/" target="_blank" rel="noopener noreferrer" className="ca-cta-secondary">
                                    LinkedIn
                                </Link>
                            </div>
                        </div>
                    </BlurFade>
                </div>
            </section>
        </div>
    );
}
