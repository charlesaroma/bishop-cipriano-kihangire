import React from 'react'
import { BookOpen, Heart, Users, Star, Shield, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

const InnovationSpotlight = () => {
  const features = [
    {
      icon: <Star className="w-6 h-6 text-[#003399]" />,
      title: "Academic Excellence",
      description: "Consistently ranked among the top schools nationally with a focus on holistic student success in Sciences and Arts."
    },
    {
      icon: <Shield className="w-6 h-6 text-[#003399]" />,
      title: "Strong Values",
      description: "Rooted in Catholic discipline, we mold students into responsible, ethical, and compassionate leaders of tomorrow."
    },
    {
      icon: <Trophy className="w-6 h-6 text-[#003399]" />,
      title: "Talent Development",
      description: "From our award-winning Music, Dance & Drama troupe to our Football Academy, we nurture every student's unique potential."
    }
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            className="text-[#374151] mb-4 text-3xl md:text-4xl"
            style={{ fontFamily: '"Playfair Display", serif', fontWeight: 600 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Bishop Cipriano?
          </motion.h2>
          <motion.p 
            className="text-[#6B7280] text-lg"
            style={{ fontFamily: '"Inter", sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We provide an environment where academic rigor meets spiritual growth and creative expression.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group p-8 rounded-2xl bg-[#F9F9FB] border border-gray-100 hover:border-[#003399]/20 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 
                className="text-xl font-semibold text-[#003399] mb-3"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {feature.title}
              </h3>
              <p 
                className="text-[#6B7280] leading-relaxed"
                style={{ fontFamily: '"Inter", sans-serif' }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Minimal CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="/about" className="text-[#003399] font-medium hover:text-[#002366] inline-flex items-center gap-2 transition-colors">
            Read more about our mission <span>→</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default InnovationSpotlight
