import React from 'react'
import informationData from '../../data/informationData.json'

const CurriculumView = () => {
  const { curriculum } = informationData

  return (
    <div className="space-y-8">
      <div className="bg-linear-to-r from-bck-blue/5 to-transparent p-6 rounded-lg border border-bck-blue/10">
        <p className="text-gray-700 leading-relaxed">{curriculum.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {curriculum.levels.map((level, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-bck-blue mb-4">{level.title}</h3>
            <ul className="space-y-2">
              {level.subjects.map((subject, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-bck-blue mr-3 mt-1">✓</span>
                  <span className="text-gray-700">{subject}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-linear-to-r from-bck-blue/10 to-transparent p-6 rounded-lg border border-bck-blue/20">
        <h3 className="text-lg font-semibold text-bck-blue mb-4">Languages Offered</h3>
        <div className="flex flex-wrap gap-3">
          {curriculum.languages.map((lang, index) => (
            <span key={index} className="px-4 py-2 bg-bck-blue text-white rounded-full text-sm font-medium">
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CurriculumView
