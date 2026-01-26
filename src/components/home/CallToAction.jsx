import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail } from 'lucide-react'

const CallToAction = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Glassmorphic Background - Matching Navbar */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[20px] border-t border-[#E5E7EB]/40" />

            {/* Optional Gradient Overlay for depth */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-blue-50/50 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-[#003399]">
                        Ready to Join the BCK Family?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed font-light">
                        Unlock your potential in an environment designed for excellence. Applications for the academic year 2026 are now open.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            to="/admissions/apply"
                            className="inline-flex items-center justify-center px-8 py-4 bg-[#003399] text-white text-lg font-medium rounded-full shadow-lg hover:bg-[#002366] hover:scale-105 transition-all duration-300 group"
                        >
                            Apply Now
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#003399] text-lg font-medium rounded-full shadow-lg border border-gray-100 hover:border-[#003399]/20 hover:bg-gray-50 transition-all duration-300"
                        >
                            Contact Us
                            <Mail className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CallToAction
