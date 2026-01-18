import React from 'react';
import { Quote } from 'lucide-react';

const FoundersCorner = () => {
    const data = {
        quotePrefix: 'Poverty and ignorance combined are a',
        quoteHighlight: 'double tragedy',
        quoteSuffix: '.',
        author: 'Bishop Cipriano Kihangire',
        years: '1918 – 1990'
    };

    return (
        <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 overflow-hidden">
            
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-5"></div>

            <div className="max-w-5xl mx-auto px-8 sm:px-6 lg:px-24 text-center relative z-10">
                
                {/* Decorative Top Element */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <div className="h-px w-20 bg-gradient-to-r from-transparent to-blue-400"></div>
                    <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full">
                        <Quote className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-semibold text-white">Founder's Vision</span>
                    </div>
                    <div className="h-px w-20 bg-gradient-to-l from-transparent to-blue-400"></div>
                </div>

                {/* Quote Icon */}
                <div className="relative inline-block mb-12">
                    <div className="absolute inset-0 bg-blue-500/30 blur-2xl rounded-full"></div>
                    <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center mx-auto shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                        <Quote className="w-12 h-12 text-white" />
                    </div>
                </div>

                {/* Main Quote */}
                <div className="mb-16 space-y-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight px-4">
                        "{data.quotePrefix}{' '}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
                                {data.quoteHighlight}
                            </span>
                            <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-500/30 blur-lg"></span>
                        </span>
                        {data.quoteSuffix}"
                    </h2>
                </div>

                {/* Author Section */}
                <div className="flex flex-col items-center space-y-6">
                    
                    {/* Decorative Line */}
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full"></div>
                    
                    {/* Author Info Card */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                        
                        <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-10 py-8 shadow-2xl">
                            <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2">
                                {data.author}
                            </h3>
                            <div className="flex items-center justify-center gap-3">
                                <div className="h-px w-8 bg-blue-400"></div>
                                <p className="text-blue-300 font-medium text-lg">
                                    {data.years}
                                </p>
                                <div className="h-px w-8 bg-blue-400"></div>
                            </div>
                            <p className="text-white/70 text-sm mt-4 italic">
                                Founder & Visionary
                            </p>
                        </div>
                    </div>

                    {/* Bottom Decoration */}
                    <div className="flex items-center gap-2 mt-8">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                                style={{ animationDelay: `${i * 200}ms` }}
                            ></div>
                        ))}
                    </div>
                </div>

                {/* Legacy Statement */}
                <div className="mt-16 max-w-2xl mx-auto">
                    <p className="text-white/80 text-lg leading-relaxed">
                        His vision continues to inspire our commitment to providing accessible, quality education that transforms lives and communities.
                    </p>
                </div>
            </div>

            {/* Bottom Wave Decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white" fillOpacity="0.05"/>
                </svg>
            </div>
        </section>
    );
};

export default FoundersCorner;