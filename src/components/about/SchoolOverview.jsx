import React from 'react'
import { Target, Eye, BookOpen, CheckCircle, Star, Shield } from 'lucide-react'
import aboutData from '../../data/aboutData.json'
import { motion } from 'framer-motion'

const SchoolOverview = () => {
  const { school } = aboutData

  const cards = [
    { title: 'Vision', icon: Eye, content: school.vision },
    { title: 'Mission', icon: Target, content: school.mission },
    { title: 'Core Values', icon: Shield, content: 'Academic excellence, moral integrity, and holistic development.' }
  ]

  return (
    <div className="space-y-20">
      {/* Intro Section */}
      <motion.div 
        className="max-w-4xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-[#003399] font-semibold uppercase tracking-wider text-sm">Welcome to BCK SSS</span>
        <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed font-serif">
          "{school.subtitle}"
        </p>
      </motion.div>

      {/* Vision, Mission, Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => {
            const Icon = card.icon
            return (
                <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="w-12 h-12 bg-[#003399]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#003399] group-hover:text-white transition-colors duration-300 text-[#003399]">
                        <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-[#003399] mb-4 font-serif">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                        {card.content}
                    </p>
                </motion.div>
            )
        })}
      </div>

      {/* Why Choose Section */}
      <div className="bg-[#F9F9FB] rounded-3xl p-8 md:p-12 border border-gray-200">
        <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#374151] font-serif mb-4">Why Choose BCK SSS?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
                We are dedicated to fostering an environment where every student thrives academically, socially, and spiritually.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {school.campusFeatures.map((feature, idx) => (
            <motion.div 
                key={idx} 
                className="bg-white rounded-xl p-6 border border-gray-100 flex gap-4 items-start"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
            >
              <div className="mt-1">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#003399] mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SchoolOverview
