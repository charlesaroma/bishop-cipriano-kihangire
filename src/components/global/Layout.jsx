import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen font-body bg-gray-50">
            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-white shadow-md">
                <nav className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-24 flex items-center justify-between h-16">
                    <Link to="/" className="text-2xl font-display text-brand-700">
                        SchoolName
                    </Link>
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="text-gray-700 hover:text-brand-700 transition-colors">Home</Link></li>
                        <li><Link to="/about" className="text-gray-700 hover:text-brand-700 transition-colors">About</Link></li>
                        <li><Link to="/admissions" className="text-gray-700 hover:text-brand-700 transition-colors">Admissions</Link></li>
                        <li><Link to="/contact" className="text-gray-700 hover:text-brand-700 transition-colors">Contact</Link></li>
                    </ul>
                </nav>
            </header>

            {/* Main Content */}
            <main className="flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-8">
                <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-24 text-center text-gray-600">
                    © {new Date().getFullYear()} SchoolName. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Layout;
