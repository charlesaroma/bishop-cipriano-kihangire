import React from 'react'
import informationData from '../../data/informationData.json'
import { Zap, Globe, Code, Shield } from 'lucide-react'

const ICTSection = () => {
  const { facilities } = informationData

  const iconMap = {
    'Library Resource Centre': Zap,
    'Science Laboratories': Globe,
    'Computer Labs': Code,
    'Sports Center': Shield
  }

  return (
    <div className="space-y-8">
      <div className="bg-linear-to-r from-bck-blue/5 to-transparent p-6 rounded-lg border border-bck-blue/10">
        <h2 className="text-2xl font-semibold text-bck-blue mb-3">E-Governance & ICT Infrastructure</h2>
        <p className="text-gray-700 leading-relaxed">
          Our state-of-the-art ICT infrastructure supports teaching and learning, institutional management, and transparent communication.
          We leverage technology for digital transformation, innovation, and data-driven decision making.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {facilities.items.map((facility, index) => {
          const IconComponent = iconMap[facility.name] || Code
          return (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-bck-blue/10 rounded-lg">
                  <IconComponent className="w-6 h-6 text-bck-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-bck-blue mb-2">{facility.name}</h3>
                  <p className="text-gray-700 text-sm">{facility.desc}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-linear-to-r from-bck-blue to-blue-600 text-white rounded-lg p-8">
        <h3 className="text-xl font-semibold mb-3">Digital Learning Advantage</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-3">
            <span className="text-blue-200 mt-1">•</span>
            <span>Online learning management system for seamless academic delivery</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-200 mt-1">•</span>
            <span>Student information portal for real-time academic progress tracking</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-200 mt-1">•</span>
            <span>Digital library with access to thousands of academic resources</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ICTSection
