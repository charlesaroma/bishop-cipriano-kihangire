import React from 'react'
import informationData from '../../data/informationData.json'
import { BookOpen, Globe, PenTool, Calculator, FlaskConical, Languages } from 'lucide-react'
import { motion } from 'framer-motion'

const CurriculumView = () => {
  const { curriculum } = informationData

  const subjectIcons = {
    'Mathematics': Calculator,
    'Sciences': FlaskConical,
    'Languages': Languages,
    'Arts': PenTool,
    'Humanities': Globe
  }

  return (
    <div className="space-y-16">
      {/* Intro */}
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-xl text-gray-600 leading-relaxed font-light">
          "{curriculum.description}"
        </p>
      </motion.div>

      {/* Levels Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {curriculum.levels.map((level, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-blue-900/5 relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
               <BookOpen className="w-48 h-48 text-[#003399]" />
            </div>

            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#003399] mb-6 font-serif border-b border-gray-100 pb-4">
                    {level.title}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                    {level.subjects.map((subject, idx) => {
                        // Simple logic to pick an icon based on subject name keywords
                        let Icon = BookOpen;
                        if (subject.includes('Math')) Icon = Calculator;
                        else if (subject.includes('Sci') || subject.includes('Bio') || subject.includes('Chem') || subject.includes('Phy')) Icon = FlaskConical;
                        else if (subject.includes('Eng') || subject.includes('Fren') || subject.includes('Lit')) Icon = Languages;
                        else if (subject.includes('Geo') || subject.includes('Hist')) Icon = Globe;

                        return (
                            <div key={idx} className="flex items-center gap-3 text-gray-700 bg-gray-50/50 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all">
                                <span className="w-8 h-8 rounded-full bg-blue-50 text-[#003399] flex items-center justify-center shrink-0">
                                    <Icon className="w-4 h-4" />
                                </span>
                                <span className="text-sm font-medium">{subject}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Languages Section */}
      <motion.div 
        className="bg-gradient-to-br from-[#003399] to-[#002366] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
         <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
         <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/3 text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md mb-6 border border-white/20">
                    <Languages className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2">Global Languages</h3>
                <p className="text-blue-100/80 text-sm">Preparing students for international opportunities through linguistic proficiency.</p>
            </div>
            
            <div className="md:w-2/3 flex flex-wrap gap-3 justify-center md:justify-start">
                {curriculum.languages.map((lang, index) => (
                    <span 
                        key={index} 
                        className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl text-lg font-medium hover:bg-white hover:text-[#003399] transition-all duration-300 cursor-default"
                    >
                        {lang}
                    </span>
                ))}
            </div>
         </div>
      </motion.div>
    </div>
  )
}

export default CurriculumView
