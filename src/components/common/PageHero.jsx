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
    const heroImagesMapping = {
        'school overview': 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000',
        'about us': 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000',
        'our school': 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000',
        'administration': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
        'leadership': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000',
        'catholic identity': 'https://images.unsplash.com/photo-1543165365-07232ed12fad?auto=format&fit=crop&q=80&w=2000',
        'spiritual life': 'https://images.unsplash.com/photo-1543165365-07232ed12fad?auto=format&fit=crop&q=80&w=2000',
        'history & background': 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2000',
        'our history': 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=2000',
        'curriculum': 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=2000',
        'departments': 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2000',
        'academic performance': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000',
        'e-governance & ict': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000',
        'ict': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000',
        'academics': 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000',
        'boarding section': 'https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?auto=format&fit=crop&q=80&w=2000',
        'boarding': 'https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?auto=format&fit=crop&q=80&w=2000',
        'day scholar section': 'https://images.unsplash.com/photo-1526618524385-2e65d214a1c5?auto=format&fit=crop&q=80&w=2000',
        'day school': 'https://images.unsplash.com/photo-1526618524385-2e65d214a1c5?auto=format&fit=crop&q=80&w=2000',
        'sports & co-curricular': 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=2000',
        'sports': 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=2000',
        'clubs & leadership': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000',
        'clubs': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000',
        'student life': 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=2000',
        'admissions': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2000',
        'news & events': 'https://images.unsplash.com/photo-1504711331083-9c89e1be2f57?auto=format&fit=crop&q=80&w=2000',
        'news': 'https://images.unsplash.com/photo-1504711331083-9c89e1be2f57?auto=format&fit=crop&q=80&w=2000',
        'contact us': 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=2000',
        'contact': 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=2000',
        'default': 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=2000'
    };

    const searchKey = title?.trim().toLowerCase();
    const defaultImage = heroImagesMapping[searchKey] || heroImagesMapping['default'];
    const heroImage = image || defaultImage;
    
    return (
        <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black opacity-30" />

            <motion.div
                className="relative z-10 text-center px-8 sm:px-6 lg:px-24 w-full max-w-7xl mx-auto"
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
