import React from 'react'
import { Target, Eye, BookOpen } from 'lucide-react'
import aboutData from '../../data/aboutData.json'

const SchoolOverview = () => {
  const { school } = aboutData

  return (
    <div className="space-y-12">
      <div className="bg-linear-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
        <p className="text-gray-700 leading-relaxed text-lg">{school.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-6 h-6 text-bck-blue" />
            <h3 className="text-lg font-semibold text-bck-blue">Vision</h3>
          </div>
          <p className="text-gray-700">{school.vision}</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-bck-blue" />
            <h3 className="text-lg font-semibold text-bck-blue">Mission</h3>
          </div>
          <p className="text-gray-700">{school.mission}</p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-bck-blue" />
            <h3 className="text-lg font-semibold text-bck-blue">Values</h3>
          </div>
          <p className="text-gray-700">Academic excellence, moral integrity, and holistic development</p>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose BCK SSS</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {school.campusFeatures.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <h4 className="text-lg font-semibold text-bck-blue mb-2">{feature.title}</h4>
              <p className="text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SchoolOverview
