import React from 'react'
import { Trophy, Star, TrendingUp } from 'lucide-react'
import informationData from '../../data/informationData.json'

const PerformanceStats = () => {
    const { performance } = informationData;

    return (
        <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
                <p className="text-xl text-gray-600">{performance.intro}</p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
                {performance.stats.map((stat, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                        <p className="text-gray-500 font-medium mb-2">{stat.label}</p>
                        <h3 className="text-4xl font-bold text-bck-blue">{stat.value}</h3>
                    </div>
                ))}
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
                <div className="flex items-center justify-center mb-8">
                    <Trophy className="w-8 h-8 text-amber-500 mr-3" />
                    <h3 className="text-2xl font-serif font-bold text-gray-900">Recent Achievements</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {performance.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start bg-white p-5 rounded-xl shadow-sm">
                            <Star className="w-5 h-5 text-amber-400 mr-3 mt-1 shrink-0" />
                            <p className="text-gray-700 font-medium">{highlight}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PerformanceStats
