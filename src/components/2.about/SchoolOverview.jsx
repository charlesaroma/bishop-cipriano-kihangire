import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Layout, Heart, BookOpen } from 'lucide-react'
import aboutData from '../../data/aboutData.json'

const SchoolOverview = () => {
    const { school } = aboutData;

    const iconMap = {
        "Modern Infrastructure": Layout,
        "Spiritual Growth": Heart,
        "Holistic Development": BookOpen
    }

    return (
        <div className="space-y-16">
            {/* Intro */}
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-bck-blue mb-6">{school.title}</h2>
                <p className="text-lg text-gray-600">{school.subtitle}</p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-blue-50 p-8 rounded-2xl border border-blue-100"
                >
                    <div className="bg-bck-blue w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <Target className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                    <p className="text-gray-700">{school.mission}</p>
                </motion.div>

                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
                >
                    <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <Eye className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                    <p className="text-gray-700">{school.vision}</p>
                </motion.div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6">
                {school.campusFeatures.map((feature, idx) => {
                    const Icon = iconMap[feature.title] || Layout;
                    return (
                        <div key={idx} className="text-center p-6">
                            <div className="bg-white shadow-sm border border-gray-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-bck-blue">
                                <Icon className="w-8 h-8" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                            <p className="text-sm text-gray-500">{feature.desc}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SchoolOverview
