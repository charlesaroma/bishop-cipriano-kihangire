import React from 'react'
import aboutData from '../../data/aboutData.json'

const ManagementTeam = () => {
  const { management } = aboutData

  return (
    <div className="space-y-12">
      {/* Emmaus Foundation */}
      <div className="bg-linear-to-r from-purple-50 to-blue-50 rounded-xl p-8 border border-purple-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{management.emmaus.title}</h3>
        <p className="text-lg text-gray-700 leading-relaxed">{management.emmaus.desc}</p>
      </div>

      {/* Leadership Team */}
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-8">Leadership Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {management.leadership.map((leader, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-linear-to-br from-blue-400 to-blue-600 rounded-full mx-auto flex items-center justify-center text-white text-2xl mb-4">
                  👤
                </div>
                <h4 className="text-xl font-bold text-gray-900">{leader.name}</h4>
                <p className="text-sm text-bck-blue font-semibold mt-1">{leader.role}</p>
              </div>
              <p className="text-center text-gray-700 text-sm leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Governance Message */}
      <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-4">Committed Leadership</h3>
        <p className="text-blue-100 leading-relaxed">
          Our leadership team is committed to maintaining the highest standards of education and fostering an environment where every student can thrive. With years of experience and a deep commitment to the school's values, we guide BCK SSS towards continued excellence.
        </p>
      </div>
    </div>
  )
}

export default ManagementTeam
