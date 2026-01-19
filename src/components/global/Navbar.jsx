import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    // Determine if we're on the home page
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        {
            name: 'About',
            path: '/about',
            dropdown: [
                { name: 'School Overview', path: '/about' },
                { name: 'History & Background', path: '/about/history' },
                { name: 'Administration', path: '/about/administration' },
            ]
        },
        {
            name: 'Academics',
            path: '/academics',
            dropdown: [
                { name: 'Curriculum & Departments', path: '/academics/curriculum' },
                { name: 'Academic Performance', path: '/academics/performance' },
                { name: 'ICT & E-Governance', path: '/academics/ict' },
            ]
        },
        {
            name: 'Student Life',
            path: '/student-life',
            dropdown: [
                { name: 'Boarding Section', path: '/student-life/boarding' },
                { name: 'Day Scholar Section', path: '/student-life/day-school' },
                { name: 'Sports & Co-Curricular', path: '/student-life/sports' },
                { name: 'Clubs & Leadership', path: '/student-life/clubs' },
            ]
        },
        {
            name: 'Admissions',
            path: '/admissions',
            dropdown: [
                { name: 'Requirements & Fees', path: '/admissions/requirements' },
                { name: 'How to Apply', path: '/admissions/apply' },
            ]
        },
        { name: 'News', path: '/news' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Background overlay */}
            <div 
                className={`absolute inset-0 bg-white backdrop-blur-lg shadow-md transition-opacity duration-300 ${
                    isHomePage && !scrolled ? 'opacity-0' : 'opacity-95'
                }`}
            />
            
            <div className="relative max-w-7xl mx-auto px-8 sm:px-6 lg:px-24">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <a href="/" className="flex items-center space-x-2 z-50 group">
                        <img 
                            src="/BCK_Logo.png" 
                            alt="BCK SSS Logo" 
                            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className={`font-serif font-bold text-xl leading-tight transition-colors duration-300 ${
                            isHomePage && !scrolled ? 'text-white' : 'text-gray-700'
                        }`}>
                            BCK
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <a
                                    href={link.path}
                                    className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 flex items-center gap-1 group ${
                                        isHomePage && !scrolled 
                                            ? 'text-white/90 hover:text-white' 
                                            : 'text-gray-700 hover:text-blue-600'
                                    }`}
                                >
                                    <span className="relative">
                                        {link.name}
                                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                                            isHomePage && !scrolled ? 'bg-white' : 'bg-linear-to-r from-blue-600 to-blue-800'
                                        }`}></span>
                                    </span>
                                    {link.dropdown && (
                                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                    )}
                                </a>

                                {/* Dropdown Menu */}
                                {link.dropdown && (
                                    <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                                        activeDropdown === link.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                                    }`}>
                                        <div className="p-2">
                                            {link.dropdown.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.path}
                                                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 group"
                                                >
                                                    <span className="flex items-center justify-between">
                                                        {item.name}
                                                        <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center">
                        <a
                            href="/admissions/apply"
                            className={`relative px-8 py-3 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden group ${
                                isHomePage && !scrolled
                                    ? 'bg-white text-blue-700 hover:bg-blue-50'
                                    : 'bg-linear-to-r from-blue-600 to-blue-800 text-white'
                            }`}
                        >
                            <span className="relative z-10">Apply Now</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden z-50 p-2 transition-colors duration-300 ${
                            isHomePage && !scrolled
                                ? 'text-white hover:text-white/80'
                                : 'text-gray-700 hover:text-blue-600'
                        }`}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto">
                    <div className="px-4 py-6 space-y-2">
                        {navLinks.map((link) => (
                            <div key={link.name} className="border-b border-gray-100 pb-2">
                                <a
                                    href={link.path}
                                    className="block px-4 py-3 text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                                >
                                    {link.name}
                                </a>
                                {link.dropdown && (
                                    <div className="ml-4 mt-2 space-y-2">
                                        {link.dropdown.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.path}
                                                className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="pt-4">
                            <a
                                href="/admissions/apply"
                                className="block w-full px-6 py-4 bg-linear-to-r from-blue-600 to-blue-800 text-white font-bold rounded-xl text-center shadow-lg"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;