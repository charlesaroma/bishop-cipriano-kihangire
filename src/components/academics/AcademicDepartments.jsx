import React from 'react'
import informationData from '../../data/informationData.json'

const AcademicDepartments = () => {
  const { cocurricular } = informationData

  return (
    <div className="space-y-8">
      <div className="bg-linear-to-r from-bck-blue/5 to-transparent p-6 rounded-lg border border-bck-blue/10">
        <h2 className="text-2xl font-semibold text-bck-blue mb-3">{cocurricular.title}</h2>
        <p className="text-gray-700 leading-relaxed">{cocurricular.intro}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cocurricular.activities.map((activity, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-bck-blue mb-2">{activity.name}</h3>
            <p className="text-gray-700">{activity.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AcademicDepartments
