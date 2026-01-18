import React from 'react'
import { Music, Activity, Users, Mic2 } from 'lucide-react'
import informationData from '../../data/informationData.json'

const CoCurricularGrid = () => {
    const { cocurricular } = informationData;

    const iconMap = {
        "Football Academy": Activity,
        "Music, Dance & Drama": Music,
        "Hi Skool Kiromo": Users,
        "Debate Club": Mic2
    }

    return (
        <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
                <p className="text-xl text-gray-600">{cocurricular.intro}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {cocurricular.activities.map((activity, idx) => {
                    const Icon = iconMap[activity.name] || Users;
                    return (
                        <div key={idx} className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-bck-blue/30 hover:shadow-lg transition-all">
                            <div className="flex items-start space-x-6">
                                <div className="bg-blue-50 p-4 rounded-xl text-bck-blue group-hover:bg-bck-blue group-hover:text-white transition-colors">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.name}</h3>
                                    <p className="text-gray-600">{activity.desc}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CoCurricularGrid
