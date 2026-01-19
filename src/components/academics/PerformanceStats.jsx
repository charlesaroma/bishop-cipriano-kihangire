import React from 'react'
import informationData from '../../data/informationData.json'

const PerformanceStats = () => {
  const { performance } = informationData

  return (
    <div className="space-y-8">
      <div className="bg-linear-to-r from-bck-blue/5 to-transparent p-6 rounded-lg border border-bck-blue/10">
        <p className="text-gray-700 leading-relaxed">{performance.intro}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {performance.stats.map((stat, index) => (
          <div key={index} className="bg-linear-to-br from-bck-blue/10 to-transparent rounded-lg border border-bck-blue/20 p-6 text-center">
            <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
            <p className="text-4xl font-bold text-bck-blue">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-bck-blue mb-4">Key Highlights</h3>
        <ul className="space-y-3">
          {performance.highlights.map((highlight, index) => (
            <li key={index} className="flex items-start">
              <span className="text-bck-blue mr-3 mt-1 font-bold">→</span>
              <span className="text-gray-700">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PerformanceStats
