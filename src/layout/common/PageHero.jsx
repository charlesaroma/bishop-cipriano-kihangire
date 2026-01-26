import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

/**
 * PageHero – Academic Calm Design System
 * 
 * A clean, calm hero section with watercolor-style background
 * for internal pages.
 * 
 * Props:
 *   title:   Main heading (string)
 *   subtitle: Optional sub-heading (string)
 *   image:   URL of background image (string) - optional
 *   breadcrumbs: Optional array of { label, href } objects
 * 
 * Design Principles:
 * - Soft light, muted color saturation
 * - Generous white space
 * - Clear typographic hierarchy
 * - Minimal motion, purposeful animation
 */
const PageHero = ({ title, subtitle, image, breadcrumbs }) => {
    // Default hero background - uses the watercolor style
    const defaultImage = '/hero-bg.png';
    const heroImage = image || defaultImage;
    
    return (
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#F9F9FB] pt-28 lg:pt-32">
            {/* Background Image - Watercolor Style */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage})` }}
            />
            
            {/* Soft Gradient Overlay for text legibility */}
            <div 
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(to bottom, rgba(249, 249, 251, 0.75) 0%, rgba(249, 249, 251, 0.90) 100%)'
                }}
            />

            <motion.div
                className="relative z-10 text-center px-6 sm:px-8 lg:px-12 w-full max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                {/* Breadcrumbs */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <motion.div 
                        className="flex items-center justify-center gap-2 mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        {breadcrumbs.map((crumb, idx) => (
                            <React.Fragment key={idx}>
                                {idx > 0 && (
                                    <ChevronRight className="w-4 h-4 text-[#6B7280]" />
                                )}
                                <a 
                                    href={crumb.href} 
                                    className={`
                                        text-sm font-medium transition-colors duration-150
                                        ${idx === breadcrumbs.length - 1 
                                            ? 'text-[#003399]' 
                                            : 'text-[#6B7280] hover:text-[#003399]'
                                        }
                                    `}
                                    style={{ fontFamily: '"Inter", sans-serif' }}
                                >
                                    {crumb.label}
                                </a>
                            </React.Fragment>
                        ))}
                    </motion.div>
                )}
                
                {/* Main Title */}
                <motion.h1 
                    className="text-[#003399]"
                    style={{ 
                        fontFamily: '"Playfair Display", Georgia, serif',
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        fontWeight: 600,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {title}
                </motion.h1>

                {/* Section Divider */}
                <motion.div 
                    className="w-12 h-px bg-[#E5E7EB] mx-auto my-5"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                />

                {/* Subtitle */}
                {subtitle && (
                    <motion.p 
                        className="text-[#6B7280] max-w-2xl mx-auto"
                        style={{ 
                            fontFamily: '"Inter", sans-serif',
                            fontSize: '1.0625rem',
                            lineHeight: 1.7
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </motion.div>
        </section>
    );
};

export default PageHero;
