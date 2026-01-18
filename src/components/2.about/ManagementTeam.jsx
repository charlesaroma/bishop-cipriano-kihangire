import React from 'react'
import { Landmark, Users, UserCircle } from 'lucide-react'
import aboutData from '../../data/aboutData.json'

const ManagementTeam = () => {
    const { management } = aboutData;

    return (
        <div className="space-y-16">
            {/* Emmaus Foundation Block */}
            <div className="bg-bck-blue text-white rounded-3xl p-10 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-white/5 opacity-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>

                <Landmark className="w-12 h-12 mx-auto mb-6 text-blue-200" />
                <h2 className="text-3xl font-serif font-bold mb-4 relative z-10">{management.emmaus.title}</h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto relative z-10">{management.emmaus.desc}</p>
            </div>

            {/* Leadership Grid */}
            <div className="grid md:grid-cols-3 gap-8">
                {management.leadership.map((leader, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:translate-y-[-5px] transition-transform duration-300">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 mx-auto text-gray-400">
                            {idx === 0 ? <UserCircle className="w-10 h-10" /> : <Users className="w-8 h-8" />}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 text-center mb-1">{leader.name}</h3>
                        <p className="text-bck-blue text-sm font-semibold text-center mb-4 uppercase tracking-wide">{leader.role}</p>
                        <p className="text-gray-600 text-center text-sm">{leader.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ManagementTeam
