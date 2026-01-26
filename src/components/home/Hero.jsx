import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

/**
 * Hero Component
 * Navbar Height Calculation:
 * - Header Padding: py-3 (0.75rem * 2 = 1.5rem)
 * - Nav Height: h-14 (3.5rem)
 * - Total Height: 5rem = 80px = tailwind pt-20
 * 
 * We use pt-28 (7rem) to pt-32 (8rem) to ensure visual clearance.
 */
const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F9F9FB] pt-28 lg:pt-32">
      {/* Background with slight parallax effect possibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Gradient Overlay for text legibility */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(249, 249, 251, 0.70) 0%, rgba(249, 249, 251, 0.90) 60%, rgba(249, 249, 251, 1) 100%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-[calc(100vh-8rem)] flex flex-col justify-center items-center text-center pb-16">
        
        {/* Logo or Badge */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="mb-8"
        >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#003399]/10 text-[#003399] font-medium text-sm tracking-wide border border-[#003399]/20">
                Celebrating 25 Years of Excellence
            </span>
        </motion.div>

        {/* Primary Heading */}
        <motion.h1 
          className="text-[#003399] mb-6 max-w-4xl mx-auto"
          style={{ 
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Bishop Cipriano Kihangire <br /> Senior Secondary School
        </motion.h1>

        {/* Subheading / Mission Statement */}
        <motion.p 
          className="text-[#374151] mb-10 max-w-2xl mx-auto"
          style={{ 
            fontFamily: '"Inter", sans-serif',
            fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
            lineHeight: 1.6
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Empowering the next generation with values, knowledge, and discipline. 
          Home of 100% Division One performance and holistic student development.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/admissions"
            className="
              inline-flex items-center justify-center
              px-8 py-3.5
              bg-[#003399] text-white
              fontSize-lg font-medium
              rounded-xl
              shadow-[0_4px_14px_rgba(0,51,153,0.3)]
              hover:bg-[#002366]
              hover:shadow-[0_6px_20px_rgba(0,51,153,0.4)]
              hover:-translate-y-0.5
              transition-all duration-200
              w-full sm:w-auto
            "
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Apply for Admissions
          </Link>
          
          <Link
            to="/academics"
            className="
              inline-flex items-center justify-center
              px-8 py-3.5
              bg-white text-[#003399]
              fontSize-lg font-medium
              rounded-xl
              border-2 border-[#003399]/20
              hover:bg-gray-50 hover:border-[#003399]/50
              hover:-translate-y-0.5
              transition-all duration-200
              w-full sm:w-auto
            "
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Our Academics
          </Link>
        </motion.div>


      </div>
    </section>
  )
}

export default Hero
