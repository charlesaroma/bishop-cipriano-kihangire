import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

/**
 * PageHero – a simple full‑width hero section for magazine‑style pages.
 * Props:
 *   title:   Main heading (string)
 *   subtitle: Optional sub‑heading (string)
 *   image:   URL of background image (string)
 *   breadcrumbs: Optional array of { label, href } objects
 */
const PageHero = ({ title, subtitle, image, breadcrumbs }) => {
    const defaultImage = 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80';
    
    return (
        <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image || defaultImage})` }}
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black opacity-30" />

            <motion.div
                className="relative z-10 text-center px-8 sm:px-6 lg:px-24 w-full"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Breadcrumbs */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <div className="flex items-center justify-center gap-2 mb-6 text-white/80 text-sm">
                        {breadcrumbs.map((crumb, idx) => (
                            <React.Fragment key={idx}>
                                {idx > 0 && <ChevronRight className="w-4 h-4" />}
                                <a href={crumb.href} className="hover:text-white transition-colors">
                                    {crumb.label}
                                </a>
                            </React.Fragment>
                        ))}
                    </div>
                )}
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white drop-shadow-lg">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                )}
            </motion.div>
        </section>
    );
};

export default PageHero;
