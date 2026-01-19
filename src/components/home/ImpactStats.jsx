import React from 'react'
import { Users, Award, BookOpen, GraduationCap } from 'lucide-react'

const ImpactStats = () => {
  const impactStats = [
    { id: 1, label: 'Total Enrollment', value: '2,750+', desc: 'Students', iconKey: 'users' },
    { id: 2, label: 'Active Scholarships', value: '126', desc: 'For 2025', iconKey: 'graduationCap' },
    { id: 3, label: 'Alumni Base', value: '12,000+', desc: 'Since 1999', iconKey: 'bookOpen' },
    { id: 4, label: 'National Ranking', value: 'Top 10%', desc: 'UCE Results', iconKey: 'award' }
  ]

  const iconMap = {
    users: Users,
    award: Award,
    bookOpen: BookOpen,
    graduationCap: GraduationCap
  }

  return (
    <section className="py-20 bg-linear-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-24">
        <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-16">
          Our Impact in Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat) => {
            const Icon = iconMap[stat.iconKey] || Users
            return (
              <div key={stat.id} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-100 rounded-lg">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                <p className="text-4xl font-bold text-bck-blue mb-1">{stat.value}</p>
                <p className="text-gray-600">{stat.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ImpactStats
