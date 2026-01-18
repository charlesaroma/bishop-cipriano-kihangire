import React from 'react'
import { motion } from 'framer-motion'
import aboutData from '../../data/aboutData.json'

const HistoryTimeline = () => {
    const { background } = aboutData;

    return (
        <div className="space-y-20">
            {/* Founders Profiles */}
            <div className="grid md:grid-cols-2 gap-12">
                <div className="text-center">
                    <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 shadow-xl border-4 border-white overflow-hidden relative">
                        {/* Placeholder for Bishop Image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500 text-xs text-center p-2">Bishop Cipriano Image</div>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900">{background.founder.name}</h3>
                    <p className="text-bck-blue font-medium mb-4">{background.founder.life}</p>
                    <p className="text-gray-600 italic">"{background.founder.bio}"</p>
                </div>

                <div className="text-center">
                    <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 shadow-xl border-4 border-white overflow-hidden relative">
                        {/* Placeholder for Fr. John Scalabrini Image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-300 text-gray-500 text-xs text-center p-2">Fr. John Scalabrini Image</div>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900">{background.patron.name}</h3>
                    <p className="text-bck-blue font-medium mb-4">{background.patron.role}</p>
                    <p className="text-gray-600">{background.patron.bio}</p>
                </div>
            </div>

            {/* Timeline */}
            <div className="relative border-l-2 border-dashed border-gray-200 ml-4 md:ml-1/2 space-y-12">
                {background.timeline.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-0"
                    >
                        {/* Dot */}
                        <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-bck-blue border-4 border-white shadow-sm md:left-1/2 md:-translate-x-1/2"></div>

                        <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'}`}>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                <span className="text-bck-blue font-bold text-xl block mb-2">{item.year}</span>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.event}</h4>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default HistoryTimeline
