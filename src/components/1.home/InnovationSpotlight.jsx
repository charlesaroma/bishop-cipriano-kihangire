import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const InnovationSpotlight = () => {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-24">

                <div className="grid lg:grid-cols-2 gap-20 items-start">

                    {/* Left Side: Article Layout */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-blue-700">
                                Innovation Spotlight
                            </h3>
                            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-none tracking-tighter">
                                FUTURE-READY <br />
                                <span className="text-gray-300 italic">LEARNING.</span>
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed font-medium first-letter:text-6xl first-letter:font-black first-letter:text-blue-700 first-letter:mr-3 first-letter:float-left">
                                Education is evolving, and so are we. At Bishop Cipriano Kihangire SSS, we bridge the gap between traditional values and modern innovation, preparing students for a rapidly changing global landscape.
                            </p>
                        </div>

                        <button className="flex items-center gap-2 text-blue-700 font-black text-xs uppercase tracking-[0.2em] group">
                            Explore Our Campus <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Right Side: Editorial Image & Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative aspect-square overflow-hidden scale-90 lg:scale-100 origin-right">
                            <img
                                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1000"
                                alt="Modern Learning"
                                className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                            />
                            {/* Image Caption Overlay */}
                            <div className="absolute top-0 right-0 p-6 bg-white shadow-xl">
                                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Feature 01</p>
                                <p className="text-xs font-bold text-gray-900 uppercase tracking-tighter">Campus Technology</p>
                            </div>
                        </div>

                        {/* Vertical Marker */}
                        <div className="absolute -left-10 top-1/4 h-1/2 w-4 bg-blue-700 hidden lg:block" />

                        {/* Bold Participation Stat */}
                        <div className="absolute -bottom-10 right-0 bg-blue-700 p-10 text-white shadow-2xl max-w-xs">
                            <p className="text-5xl font-black tracking-tighter mb-2">95%</p>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] leading-tight">
                                Digital literacy rate among our graduating students.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default InnovationSpotlight;
