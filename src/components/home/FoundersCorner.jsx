import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'

const FoundersCorner = () => {
  return (
    <section className="relative py-24 bg-[#002366] overflow-hidden text-white">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <Quote className="absolute -top-10 -left-10 w-96 h-96 transform rotate-12" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-white rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Section Label */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-8 flex justify-center"
        >
            <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-sm font-medium tracking-widest uppercase backdrop-blur-sm">
                Our Founding Vision
            </span>
        </motion.div>

        {/* Main Statement */}
        <motion.h2 
          className="text-3xl md:text-5xl font-serif font-medium leading-tight mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <span className="text-white/80">"To build a future where every child is empowered with </span>
          <span className="text-white font-semibold border-b-2 border-yellow-500/50 pb-1">knowledge</span>
          <span className="text-white/80">, </span>
          <span className="text-white font-semibold border-b-2 border-yellow-500/50 pb-1">faith</span>
          <span className="text-white/80">, and the </span>
          <span className="text-white font-semibold border-b-2 border-yellow-500/50 pb-1">courage</span>
          <span className="text-white/80"> to serve."</span>
        </motion.h2>

        {/* Minimal Details */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Founded on the principles of Bishop Cipriano Kihangire (1918–1990), we continue to honor his legacy by nurturing students who excel not just in exams, but in life.
          </p>

          <div className="pt-8">
            <Link 
              to="/about"
              className="inline-flex items-center gap-2 text-white font-medium hover:text-yellow-400 transition-colors group"
            >
              <span>Explore our history</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default FoundersCorner
