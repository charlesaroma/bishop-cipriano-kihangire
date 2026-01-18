import React from 'react';
import { motion } from 'framer-motion';

/**
 * PageHero – a simple full‑width hero section for magazine‑style pages.
 * Props:
 *   title:   Main heading (string)
 *   subtitle: Optional sub‑heading (string)
 *   image:   URL of background image (string)
 */
const PageHero = ({ title, subtitle, image }) => {
    return (
        <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black opacity-30" />

            <motion.div
                className="relative z-10 text-center px-8 sm:px-6 lg:px-24"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
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
