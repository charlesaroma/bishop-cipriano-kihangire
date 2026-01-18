import React from 'react'
import { Library, Microscope, Monitor, Trophy } from 'lucide-react'
import informationData from '../../data/informationData.json'

const FacilitiesGallery = () => {
    const { facilities } = informationData;

    const iconMap = {
        "Library Resource Centre": Library,
        "Science Laboratories": Microscope,
        "Computer Labs": Monitor,
        "Sports Center": Trophy
    }

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.items.map((facility, idx) => {
                const Icon = iconMap[facility.name] || Monitor;
                return (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all text-center">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-bck-blue">
                            <Icon className="w-8 h-8" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">{facility.name}</h3>
                        <p className="text-sm text-gray-600">{facility.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FacilitiesGallery
