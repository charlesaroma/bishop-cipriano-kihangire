import React from 'react'
import { Users, Award, BookOpen, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'

const ImpactStats = () => {
  const impactStats = [
    { id: 1, label: 'Current Enrollment', value: '2,750+', desc: 'Learners', icon: Users },
    { id: 2, label: 'University Acceptance', value: '98%', desc: 'Success Rate', icon: GraduationCap },
    { id: 3, label: 'Alumni Network', value: '12k+', desc: 'Global Community', icon: BookOpen },
    { id: 4, label: 'National Ranking', value: 'Top 10', desc: 'Consistently', icon: Award }
  ]

  return (
    <section className="py-24 bg-[#F9F9FB] relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#003399 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {impactStats.map((stat, index) => {
             const Icon = stat.icon
             return (
              <motion.div 
                key={stat.id} 
                className={`text-center px-4 ${index > 1 ? 'pt-12 lg:pt-0' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-full bg-[#003399]/5 text-[#003399]">
                    <Icon className="w-5 h-5" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#003399] mb-2 font-serif tracking-tight">
                    {stat.value}
                </div>
                <div className="text-gray-900 font-medium text-lg mb-1">
                    {stat.label}
                </div>
                <div className="text-gray-500 text-sm uppercase tracking-wide">
                    {stat.desc}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ImpactStats
