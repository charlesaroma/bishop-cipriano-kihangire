import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

/**
 * Navbar Component - Academic Calm Design System
 * 
 * Visual Style:
 * - Glassmorphic container
 * - Pill-shaped (rounded-full on large screens)
 * - Semi-transparent white background
 * - Backdrop blur: 20px
 * - Soft shadow
 * 
 * Behavior:
 * - Sticky on scroll
 * - Active page indicated by underline
 * - Hover transitions on links
 * - Embedded primary CTA ("Apply Now")
 */
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'About Us',
            path: '/about',
            dropdown: [
                { name: 'School Overview', path: '/about' },
                { name: 'History & Background', path: '/about/history' },
                { name: 'Administration', path: '/about/administration' },
            ]
        },
        {
            name: 'Information',
            path: '/academics',
            dropdown: [
                { name: 'Curriculum & Departments', path: '/academics/curriculum' },
                { name: 'Academic Performance', path: '/academics/performance' },
                { name: 'ICT & E-Governance', path: '/academics/ict' },
            ]
        },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Blog', path: '/news' },
    ];

    const isActivePath = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3">
            {/* Glassmorphic Pill Navbar Container */}
            <nav 
                className={`
                    max-w-6xl mx-auto
                    rounded-full
                    transition-all duration-300
                    ${scrolled 
                        ? 'bg-white/85 backdrop-blur-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-[#E5E7EB]/80' 
                        : 'bg-white/60 backdrop-blur-[20px] border border-[#E5E7EB]/40'
                    }
                `}
            >
                <div className="flex justify-between items-center h-14 px-6 lg:px-8">
                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-3 group">
                        <img 
                            src="/BCK_Logo.png" 
                            alt="BCK SSS Logo" 
                            className="w-9 h-9 object-contain group-hover:scale-105 transition-transform duration-200"
                        />
                        <span 
                            className="font-serif font-semibold text-lg text-[#003399] hidden sm:block"
                            style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                        >
                            BCK SSS
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <a
                                    href={link.path}
                                    className={`
                                        relative px-4 py-2 text-[15px] font-medium
                                        transition-all duration-200 flex items-center gap-1
                                        rounded-lg
                                        ${isActivePath(link.path)
                                            ? 'text-[#003399]'
                                            : 'text-[#374151] hover:text-[#003399] hover:bg-[#003399]/5'
                                        }
                                    `}
                                    style={{ fontFamily: '"Inter", sans-serif', letterSpacing: '0.01em' }}
                                >
                                    <span className="relative">
                                        {link.name}
                                        {/* Active underline indicator */}
                                        {isActivePath(link.path) && (
                                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#003399] rounded-full" />
                                        )}
                                    </span>
                                    {link.dropdown && (
                                        <ChevronDown 
                                            className={`w-4 h-4 transition-transform duration-200 ${
                                                activeDropdown === link.name ? 'rotate-180' : ''
                                            }`} 
                                        />
                                    )}
                                </a>

                                {/* Dropdown Menu */}
                                {link.dropdown && (
                                    <div 
                                        className={`
                                            absolute top-full left-0 mt-2 w-56
                                            bg-white/95 backdrop-blur-[20px]
                                            rounded-xl shadow-lg
                                            border border-[#E5E7EB]
                                            overflow-hidden
                                            transition-all duration-200
                                            ${activeDropdown === link.name 
                                                ? 'opacity-100 visible translate-y-0' 
                                                : 'opacity-0 invisible -translate-y-2'
                                            }
                                        `}
                                    >
                                        <div className="py-2">
                                            {link.dropdown.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.path}
                                                    className="
                                                        block px-4 py-2.5 text-sm font-medium
                                                        text-[#374151] hover:text-[#003399]
                                                        hover:bg-[#003399]/5
                                                        transition-all duration-150
                                                    "
                                                    style={{ fontFamily: '"Inter", sans-serif' }}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Partner Logos + CTA (Desktop) */}
                    <div className="hidden lg:flex items-center space-x-3">
                        {/* Partner logos placeholder - can be added later */}
                        
                        {/* Apply Now CTA */}
                        <a
                            href="/admissions/apply"
                            className="
                                px-5 py-2.5
                                bg-[#003399] text-white
                                text-sm font-medium
                                rounded-xl
                                shadow-[0_4px_14px_rgba(0,51,153,0.25)]
                                hover:bg-[#002366]
                                hover:shadow-[0_6px_20px_rgba(0,51,153,0.35)]
                                transition-all duration-200
                            "
                            style={{ fontFamily: '"Inter", sans-serif' }}
                        >
                            Apply Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-[#374151] hover:text-[#003399] transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div 
                className={`
                    lg:hidden fixed inset-x-0 top-20
                    bg-white/98 backdrop-blur-[20px]
                    border-t border-[#E5E7EB]
                    transition-all duration-300 ease-out
                    ${isOpen 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-4'
                    }
                `}
                style={{ height: 'calc(100vh - 5rem)' }}
            >
                <div className="px-6 py-6 space-y-2 overflow-y-auto h-full">
                    {navLinks.map((link) => (
                        <div key={link.name} className="border-b border-[#E5E7EB]/50 pb-3">
                            <a
                                href={link.path}
                                className={`
                                    block px-4 py-3 text-lg font-medium
                                    transition-colors duration-150
                                    ${isActivePath(link.path) 
                                        ? 'text-[#003399]' 
                                        : 'text-[#374151] hover:text-[#003399]'
                                    }
                                `}
                                style={{ fontFamily: '"Inter", sans-serif' }}
                            >
                                {link.name}
                            </a>
                            {link.dropdown && (
                                <div className="ml-4 mt-1 space-y-1">
                                    {link.dropdown.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.path}
                                            className="
                                                block px-4 py-2 text-sm
                                                text-[#6B7280] hover:text-[#003399]
                                                transition-colors duration-150
                                            "
                                            style={{ fontFamily: '"Inter", sans-serif' }}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    
                    {/* Mobile CTA */}
                    <div className="pt-4">
                        <a
                            href="/admissions/apply"
                            className="
                                block w-full px-6 py-4
                                bg-[#003399] text-white
                                font-medium rounded-xl text-center
                                shadow-[0_4px_14px_rgba(0,51,153,0.25)]
                                active:bg-[#002366]
                            "
                            style={{ fontFamily: '"Inter", sans-serif' }}
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>

            {/* Mobile Floating Action Button (FAB) - Always visible on mobile */}
            <a
                href="/admissions/apply"
                className="
                    lg:hidden fixed bottom-6 right-6 z-50
                    w-14 h-14 rounded-full
                    bg-[#003399] text-white
                    flex items-center justify-center
                    shadow-[0_4px_14px_rgba(0,51,153,0.4)]
                    hover:bg-[#002366] hover:scale-105
                    transition-all duration-200
                "
                aria-label="Apply Now"
            >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            </a>
        </header>
    );
};

export default Navbar;