import React from 'react'
import informationData from '../../data/informationData.json'
import { Zap, Globe, Code, Shield, Wifi, Monitor, Server, Book } from 'lucide-react'
import { motion } from 'framer-motion'

const ICTSection = () => {
  const { facilities } = informationData

  const iconMap = {
    'Library Resource Centre': Book,
    'Science Laboratories': Globe,
    'Computer Labs': Code,
    'Sports Center': Shield
  }

  return (
    <div className="space-y-16">
      {/* Overview Card */}
      <motion.div 
        className="bg-white rounded-3xl border border-gray-100 p-8 lg:p-12 shadow-xl shadow-blue-900/5 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 right-0 p-12 opacity-5">
            <Wifi className="w-64 h-64 text-[#003399]" />
        </div>
        
        <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">E-Governance & ICT Infrastructure</h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                Our state-of-the-art ICT infrastructure supports teaching and learning, institutional management, and transparent communication. We leverage technology for digital transformation, innovation, and data-driven decision making.
            </p>
            <div className="flex gap-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#003399] rounded-full text-sm font-medium">
                    <Wifi className="w-4 h-4" /> Campus-wide WiFi
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#003399] rounded-full text-sm font-medium">
                    <Monitor className="w-4 h-4" /> Smart Classrooms
                </span>
            </div>
        </div>
      </motion.div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {facilities.items.map((facility, index) => {
          const IconComponent = iconMap[facility.name] || Code
          return (
            <motion.div 
                key={index} 
                className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gray-50 rounded-2xl text-gray-400 group-hover:bg-[#003399] group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#003399] transition-colors">{facility.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{facility.desc}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Digital Learning Advantage */}
      <motion.div 
        className="bg-linear-to-r from-[#003399] to-blue-700 text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="absolute left-0 bottom-0 w-full h-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px]"></div>
        
        <div className="relative z-10">
            <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
                <Server className="w-6 h-6 text-blue-300" />
                Digital Learning Advantage
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                "Online learning management system for seamless academic delivery",
                "Student information portal for real-time academic progress tracking",
                "Digital library with access to thousands of academic resources",
                "Automated attendance and disciplinary tracking systems",
                "Secure cloud-based data storage ensuring privacy and reliability"
            ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300 mt-2.5 shrink-0"></div>
                    <span className="text-blue-50 leading-relaxed font-light">{item}</span>
                </li>
            ))}
            </ul>
        </div>
      </motion.div>
    </div>
  )
}

export default ICTSection
