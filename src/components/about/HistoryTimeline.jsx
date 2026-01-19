import React from 'react'
import aboutData from '../../data/aboutData.json'

const HistoryTimeline = () => {
  const { background } = aboutData

  return (
    <div className="space-y-12">
      {/* Founder & Patron */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Founder */}
        <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
          <div className="text-center">
            <div className="text-5xl mb-4">👨‍🎓</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{background.founder.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{background.founder.life}</p>
            <p className="text-gray-700 leading-relaxed">{background.founder.bio}</p>
          </div>
        </div>

        {/* Patron */}
        <div className="bg-linear-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
          <div className="text-center">
            <div className="text-5xl mb-4">⛪</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{background.patron.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{background.patron.role}</p>
            <p className="text-gray-700 leading-relaxed">{background.patron.bio}</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div>
        <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Journey Through The Years</h3>
        <div className="space-y-8">
          {background.timeline.map((event, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-bck-blue text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {event.year}
                </div>
                {idx < background.timeline.length - 1 && (
                  <div className="w-1 h-20 bg-blue-200 mt-4"></div>
                )}
              </div>
              <div className="flex-1 pt-2 pb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{event.event}</h4>
                <p className="text-gray-700">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HistoryTimeline
