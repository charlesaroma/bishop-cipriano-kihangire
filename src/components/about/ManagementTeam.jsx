import React from 'react'
import aboutData from '../../data/aboutData.json'
import { UserCircle, Gavel, Users, Building2 } from 'lucide-react'
import { motion } from 'framer-motion'

const ManagementTeam = () => {
  const { management } = aboutData

  return (
    <div className="space-y-20">
      {/* Emmaus Foundation */}
      <motion.div 
        className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border border-blue-100 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 right-0 p-12 opacity-5">
            <Building2 className="w-40 h-40 text-[#003399]" />
        </div>
        <div className="relative z-10 max-w-3xl">
            <span className="text-[#003399] font-semibold uppercase tracking-wider text-xs mb-2 block">Governance & Oversight</span>
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-serif">{management.emmaus.title}</h3>
            <p className="text-lg text-gray-700 leading-relaxed">{management.emmaus.desc}</p>
        </div>
      </motion.div>

      {/* Leadership Team */}
      <div>
        <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Leadership Team</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Guiding our institution with wisdom, experience, and a commitment to excellence.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {management.leadership.map((leader, idx) => (
            <motion.div 
                key={idx} 
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-[#003399] group-hover:bg-[#003399]/10 transition-colors duration-300">
                <UserCircle className="w-16 h-16" strokeWidth={1} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h4>
              <p className="text-[#003399] font-medium text-sm uppercase tracking-wide mb-4">{leader.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Governance Message */}
      <motion.div 
        className="bg-[#002366] text-white rounded-2xl p-8 lg:p-12 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
             <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 font-serif">Committed to Excellence</h3>
                <p className="text-blue-100 leading-relaxed opacity-90">
                Our leadership team is committed to maintaining the highest standards of education and fostering an environment where every student can thrive. With years of experience and a deep commitment to the school's values, we guide BCK SSS towards continued excellence.
                </p>
             </div>
             <div className="shrink-0 bg-white/10 p-4 rounded-full border border-white/20">
                <Gavel className="w-8 h-8 text-white" />
             </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ManagementTeam
