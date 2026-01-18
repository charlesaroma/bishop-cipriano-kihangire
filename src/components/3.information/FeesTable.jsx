import React from 'react'
import { BadgeCheck, Info } from 'lucide-react'
import informationData from '../../data/informationData.json'

const FeesTable = () => {
    const { fees } = informationData;

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <p className="text-xl text-gray-600">{fees.intro}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {fees.breakdown.map((item, idx) => (
                    <div key={idx} className={`rounded-2xl p-8 border-2 ${idx === 0 ? 'bg-white border-bck-blue shadow-xl relative' : 'bg-gray-50 border-transparent'}`}>
                        {idx === 0 && (
                            <div className="absolute top-0 right-0 bg-bck-blue text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                                POPULAR
                            </div>
                        )}
                        <h3 className="text-lg font-semibold text-gray-600 mb-4">{item.category}</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-4xl font-bold text-gray-900">{item.amount}</span>
                            <span className="text-gray-500 ml-2">/ term</span>
                        </div>
                        <div className="flex items-start text-sm text-gray-600">
                            <BadgeCheck className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                            {item.details}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex items-start text-amber-800 text-sm">
                <Info className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                <p>{fees.note}</p>
            </div>
        </div>
    )
}

export default FeesTable
