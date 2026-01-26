import React from 'react'
import aboutData from '../../data/aboutData.json'
import { User, HeartHandshake, History, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const HistoryTimeline = () => {
  const { background } = aboutData

  return (
    <div className="space-y-20">
      {/* Intro Section */}
      <motion.p 
        className="text-center text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Since our humble beginnings in 1999, Bishop Cipriano Kihangire SSS has grown into a beacon of academic and moral excellence in Uganda.
      </motion.p>

      {/* Founder & Patron */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Founder */}
        <motion.div 
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-blue-900/5 relative overflow-hidden group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
             <User className="w-32 h-32 text-[#003399]" />
          </div>
          
          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-blue-50 text-[#003399] rounded-full text-xs font-semibold uppercase tracking-wider mb-6">The Founder</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-1 font-serif">{background.founder.name}</h3>
            <p className="text-sm text-gray-500 mb-6 font-medium">{background.founder.life}</p>
            <div className="w-12 h-1 bg-[#003399]/20 mb-6"></div>
            <p className="text-gray-600 leading-relaxed italic">
                "{background.founder.bio}"
            </p>
          </div>
        </motion.div>

        {/* Patron */}
        <motion.div 
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-blue-900/5 relative overflow-hidden group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
             <HeartHandshake className="w-32 h-32 text-emerald-700" />
          </div>

          <div className="relative z-10">
            <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">Patron & Benefactor</span>
            <h3 className="text-2xl font-bold text-gray-900 mb-1 font-serif">{background.patron.name}</h3>
            <p className="text-sm text-gray-500 mb-6 font-medium">{background.patron.role}</p>
            <div className="w-12 h-1 bg-emerald-700/20 mb-6"></div>
            <p className="text-gray-600 leading-relaxed">
                {background.patron.bio}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Center Line for Desktop, Left for Mobile */}
        <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gray-200 lg:-ml-px"></div>

        <div className="space-y-12">
          {background.timeline.map((event, idx) => (
            <motion.div 
                key={idx} 
                className={`relative flex flex-col lg:flex-row items-center lg:items-start lg:gap-16 ${
                    idx % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
            >
              {/* Dot on Line */}
              <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-white border-4 border-[#003399] rounded-full -translate-x-1/2 mt-6 z-10 box-content shadow-sm"></div>

              {/* Date (Mobile: Next to content, Desktop: Opposite Side) */}
              <div className="w-full lg:w-1/2 pl-20 lg:pl-0 lg:text-right flex lg:block justify-start items-center mb-2 lg:mb-0">
                 <div className={`lg:px-8 ${idx % 2 === 0 ? 'lg:text-left' : 'lg:text-right'}`}>
                    <span className="text-4xl font-bold text-[#003399]/20 font-serif">{event.year}</span>
                 </div>
              </div>

              {/* Content Card */}
              <div className="w-full lg:w-1/2 pl-20 lg:pl-0">
                 <div className={`bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow lg:mx-8 relative group ${
                    idx % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'
                 }`}>
                    {/* Arrow for Desktop */}
                    <div className={`hidden lg:block absolute top-6 w-3 h-3 bg-white border-l border-t border-gray-100 transform rotate-45 ${
                        idx % 2 === 0 ? '-right-1.5' : '-left-1.5'
                    }`}></div>
                    
                    <h4 className="text-lg font-bold text-[#374151] mb-2">{event.event}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{event.desc}</p>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* 25 Years Badge */}
      <motion.div 
        className="flex justify-center pt-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-[#003399] text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-lg shadow-blue-900/20">
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="font-medium tracking-wide">Celebrating 25 Years of Excellence</span>
        </div>
      </motion.div>

    </div>
  )
}

export default HistoryTimeline
