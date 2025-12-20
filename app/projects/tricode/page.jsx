'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import BlurFade from '@/components/ui/BlurFade';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import LottieAnimation from '@/components/ui/LottieAnimation';
import { useTheme } from '@/components/ThemeProvider';
import './tricode.css';

// ========================================
// SIMPLE ROLE ITEM (Clean list style)
// ========================================
function RoleItem({ number, title, description, index = 0 }) {
    const itemRef = useRef(null);
    const isInView = useInView(itemRef, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={itemRef}
            className="tc-role-item"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.08 }}
        >
            <span className="tc-role-number">{number}</span>
            <div className="tc-role-text">
                <h4 className="tc-role-title">{title}</h4>
                <p className="tc-role-desc">{description}</p>
            </div>
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
            image: '/tricode-cloud-mock.webp',
            darkImage: '/Tricode Cloud Mock Dark.png',
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
// DESIGN PRINCIPLE CARD
// ========================================
function PrincipleCard({ number, title, description }) {
    return (
        <motion.div
            className="tc-principle-card"
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
            <span className="tc-principle-number">{number}</span>
            <h4 className="tc-principle-title">{title}</h4>
            <p className="tc-principle-desc">{description}</p>
        </motion.div>
    );
}

// ========================================
// PRODUCT UI SHOWCASE
// ========================================
function ProductUIShowcase() {
    const features = [
        {
            title: 'Anonymized Candidates',
            description: 'Candidates are assigned random names and icons to eliminate unconscious bias during review.',
            image: '/tricode-anonymized-candidates.jpg'
        },
        {
            title: 'Department Management',
            description: 'Color-coded department cards for organizing hiring across different teams.',
            image: '/tricode-departments.png'
        },
        {
            title: 'Candidate Portal',
            description: 'Clear progress stepper so applicants always know where they stand.',
            image: '/tricode-candidate-portal.png'
        },
        {
            title: 'Feature System',
            description: 'Modular feature cards with consistent iconography and clear descriptions.',
            image: '/tricode-features.png'
        }
    ];

    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <div className="tc-product-showcase">
            <div className="tc-feature-nav">
                {features.map((feature, idx) => (
                    <button
                        key={feature.title}
                        onClick={() => setActiveFeature(idx)}
                        className={`tc-feature-btn ${activeFeature === idx ? 'active' : ''}`}
                    >
                        <span className="tc-feature-btn-num">{String(idx + 1).padStart(2, '0')}</span>
                        <span className="tc-feature-btn-title">{feature.title}</span>
                    </button>
                ))}
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="tc-feature-display"
                >
                    <div className="tc-feature-image-wrapper">
                        <Image
                            src={features[activeFeature].image}
                            alt={features[activeFeature].title}
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <p className="tc-feature-desc">{features[activeFeature].description}</p>
                </motion.div>
            </AnimatePresence>
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
                                Tricode: Building the Design & Engineering Foundation
                            </h1>
                        </BlurFade>

                        <BlurFade delay={0.3}>
                            <p className="tc-hero-subtitle">
                                As an early-stage team member, I designed the brand identity, built both marketing sites, and developed the frontend for Tricode's flagship product, Clikk Apply.
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
                            At Tricode, I wore many hats. From establishing the visual identity to shipping production code, I was involved in every layer of the product experience.
                        </p>
                    </BlurFade>

                    <BlurFade delay={0.2}>
                        <div className="tc-role-list">
                            <RoleItem
                                number="01"
                                title="Brand Identity"
                                description="Designed the Tricode logo, established brand guidelines, color system, and visual language."
                                index={0}
                            />
                            <RoleItem
                                number="02"
                                title="UX/UI Design"
                                description="Prototyped in Figma with a focus on accessibility and simplicity for student users."
                                index={1}
                            />
                            <RoleItem
                                number="03"
                                title="Frontend Development"
                                description="Built the React/Next.js codebase, component library, and animation system."
                                index={2}
                            />
                            <RoleItem
                                number="04"
                                title="Landing Pages"
                                description="Designed and developed both the Tricode Cloud and Clikk Apply marketing sites."
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
                            I created the visual foundation for Tricode from scratch, establishing a design system that scales across products.
                        </p>
                    </BlurFade>

                    <BlurFade delay={0.2}>
                        <div className="tc-brand-grid">
                            <div className="tc-brand-card tc-brand-logo">
                                <h4>Logo & Wordmark</h4>
                                <Placeholder label="Logo assets - add later" aspectRatio="2/1" />
                            </div>
                            <div className="tc-brand-card tc-brand-colors">
                                <h4>Color System</h4>
                                <div className="tc-color-swatches">
                                    <div className="tc-swatch" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                                        <span>Primary Gradient</span>
                                    </div>
                                    <div className="tc-swatch" style={{ background: '#0055FF' }}>
                                        <span>Accent Blue</span>
                                    </div>
                                    <div className="tc-swatch" style={{ background: '#10B981' }}>
                                        <span>Success Green</span>
                                    </div>
                                    <div className="tc-swatch" style={{ background: '#1a1a1a' }}>
                                        <span>Dark</span>
                                    </div>
                                </div>
                            </div>
                            <div className="tc-brand-card tc-brand-typography">
                                <h4>Typography</h4>
                                <Placeholder label="Typography samples - add later" aspectRatio="3/2" />
                            </div>
                            <div className="tc-brand-card tc-brand-guidelines">
                                <h4>Brand Guidelines</h4>
                                <Placeholder label="Brand guidelines PDF - add later" aspectRatio="3/2" />
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
                            Tricode serves student organizations with varying levels of tech literacy. Every design decision was guided by these principles.
                        </p>
                    </BlurFade>

                    <BlurFade delay={0.2}>
                        <div className="tc-principles-grid">
                            <PrincipleCard
                                number="01"
                                title="Simplicity First"
                                description="If a feature needs explaining, the design failed. We aimed for interfaces so intuitive that onboarding is unnecessary."
                            />
                            <PrincipleCard
                                number="02"
                                title="Accessible by Default"
                                description="Student orgs include members with diverse needs. We built for keyboard navigation, screen readers, and color blindness from day one."
                            />
                            <PrincipleCard
                                number="03"
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
                            label="Faculty Societies"
                            description="Engineering, Arts & Science, Commerce, and Computing."
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

                    <BlurFade delay={0.4}>
                        <div className="tc-reflection">
                            <h4>Reflection</h4>
                            <p>
                                Working at Tricode taught me how to operate as a full-stack designer and developer. I learned to balance visual polish with engineering pragmatism, and to ship features that real users actually needed. Building something from zero to production, seeing student clubs actually use it, reinforced my belief that the best products come from deeply understanding your users.
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
                                <Link href="https://linkedin.com/in/justinbadua" target="_blank" rel="noopener noreferrer" className="ca-cta-secondary">
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
