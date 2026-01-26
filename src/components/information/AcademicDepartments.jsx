import React from 'react'
import informationData from '../../data/informationData.json'
import { Trophy, Music, Users, Palette, Activity, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const AcademicDepartments = () => {
  const { cocurricular } = informationData

  const activityIcons = {
    'Sports': Trophy,
    'Music, Dance & Drama': Music,
    'Clubs & Societies': Users,
    'Creative Arts': Palette
  }

  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
      {/* Sidebar / Intro */}
      <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
        >
            <span className="text-[#003399] font-bold uppercase tracking-widest text-xs mb-3 block">Beyond the Classroom</span>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
                {cocurricular.title}
            </h2>
            <div className="w-20 h-1 bg-[#003399] mb-6"></div>
            <p className="text-gray-600 leading-relaxed text-lg font-light mb-8">
                "{cocurricular.intro}"
            </p>
            
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-3 mb-2">
                    <Heart className="w-5 h-5 text-red-500 fill-current" />
                    <h4 className="font-bold text-[#003399]">Holistic Growth</h4>
                </div>
                <p className="text-sm text-gray-600">We believe in nurturing talent, character, and physical well-being alongside academic prowess.</p>
            </div>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="lg:w-2/3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cocurricular.activities.map((activity, index) => {
                let Icon = Activity;
                if (activity.name.includes('Sports')) Icon = Trophy;
                if (activity.name.includes('Music')) Icon = Music;
                if (activity.name.includes('Clubs')) Icon = Users;

                return (
                    <motion.div 
                        key={index} 
                        className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-xl bg-[#003399]/5 flex items-center justify-center text-[#003399] group-hover:bg-[#003399] group-hover:text-white transition-colors duration-300">
                                <Icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#003399] transition-colors">{activity.name}</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed grow border-t border-gray-50 pt-4">
                            {activity.desc}
                        </p>
                    </motion.div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default AcademicDepartments
