import React from 'react'
import { motion } from 'framer-motion'

/**
 * Hero Component - Academic Calm Design System
 * 
 * Visual Style:
 * - Watercolor / soft illustration background
 * - Soft light, muted color saturation
 * - Generous white space
 * - Clear typographic hierarchy
 * - Minimal motion, purposeful animation
 * 
 * Typography:
 * - H1: Playfair Display 600 (Semi-Bold)
 * - Body: Inter 400 (Regular)
 * 
 * Colors (Hardcoded - No Tailwind config):
 * - Brand Blue: #003399
 * - Primary Text: #374151
 * - Secondary Text: #6B7280
 * - Canvas: #F9F9FB
 */
const Hero = () => {
  // Animation variants - subtle and purposeful
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F9F9FB]">
      {/* Watercolor Background Illustration */}
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
          background: 'linear-gradient(to bottom, rgba(249, 249, 251, 0.70) 0%, rgba(249, 249, 251, 0.85) 50%, rgba(249, 249, 251, 0.95) 100%)'
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-16">
        
        {/* Primary Heading */}
        <motion.h1 
          className="text-[#003399] mb-6"
          style={{ 
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
            fontWeight: 600,
            letterSpacing: '-0.02em',
            lineHeight: 1.15
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Admissions & Fees
        </motion.h1>

        {/* Section Divider */}
        <motion.div 
          className="w-16 h-px bg-[#E5E7EB] my-6"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        />

        {/* Required Documentation Section */}
        <motion.div 
          className="max-w-2xl mx-auto mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 
            className="text-[#374151] mb-4"
            style={{ 
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: '1.25rem',
              fontWeight: 600
            }}
          >
            Required Documentation
          </h2>
          
          <p 
            className="text-[#6B7280] mb-8"
            style={{ 
              fontFamily: '"Inter", sans-serif',
              fontSize: '1rem',
              lineHeight: 1.7
            }}
          >
            To process an application, the following must be submitted digitally or in person:
          </p>

          {/* Documentation List */}
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-4">
              <span className="text-2xl">📷</span>
              <p 
                className="text-[#374151]"
                style={{ fontFamily: '"Inter", sans-serif', fontSize: '1rem' }}
              >
                <strong className="text-[#003399]">Exactly 3 (Three)</strong> passport-sized photographs
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-2xl">📋</span>
              <p 
                className="text-[#374151]"
                style={{ fontFamily: '"Inter", sans-serif', fontSize: '1rem' }}
              >
                <strong className="text-[#003399]">Previous year's</strong> original result slips
              </p>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="text-2xl">🏥</span>
              <p 
                className="text-[#374151]"
                style={{ fontFamily: '"Inter", sans-serif', fontSize: '1rem' }}
              >
                <strong className="text-[#003399]">Completed Medical Forms</strong>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section Divider with dots */}
        <motion.div 
          className="flex items-center justify-center gap-2 my-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#6B7280]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#6B7280]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#6B7280]" />
        </motion.div>

        {/* Fees Structure Card */}
        <motion.div 
          className="
            w-full max-w-2xl mx-auto
            bg-white/80 backdrop-blur-[20px]
            rounded-xl border border-[#E5E7EB]
            p-8
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 
            className="text-[#374151] text-center mb-6"
            style={{ 
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: '1.5rem',
              fontWeight: 600
            }}
          >
            2025 Fees Structure:
          </h3>

          <div className="space-y-4">
            <div className="flex items-baseline gap-2 flex-wrap justify-center">
              <span className="text-[#6B7280]" style={{ fontFamily: '"Inter", sans-serif' }}>
                &gt; Boarding Students:
              </span>
              <span 
                className="text-[#003399] font-semibold"
                style={{ fontFamily: '"Inter", sans-serif', fontSize: '1.125rem' }}
              >
                UGX 1,415,000
              </span>
              <span 
                className="text-[#6B7280] italic text-sm"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                (One million, four hundred and fifteen thousand Uganda Shillings)
              </span>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <a
            href="/admissions/apply"
            className="
              inline-flex items-center justify-center
              px-8 py-4
              bg-[#003399] text-white
              text-base font-medium
              rounded-xl
              shadow-[0_4px_14px_rgba(0,51,153,0.25)]
              hover:bg-[#002366]
              hover:shadow-[0_6px_20px_rgba(0,51,153,0.35)]
              transition-all duration-200
            "
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            Begin Your Application
          </a>
        </motion.div>

        {/* Silver Jubilee Badge */}
        <motion.p 
          className="mt-8 text-[#6B7280]"
          style={{ 
            fontFamily: '"Inter", sans-serif',
            fontSize: '0.875rem'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          Celebrating 25 (Twenty-five) years of Academic Excellence
        </motion.p>
      </div>
    </section>
  )
}

export default Hero
