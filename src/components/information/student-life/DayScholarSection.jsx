import React from 'react'

const DayScholarSection = () => {
    return (
        <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Flexible Learning for Local Students</h2>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        Our day scholar program provides flexibility for students living in and around Kampala. Day scholars enjoy the same world-class educational experience as boarding students while maintaining the ability to commute daily.
                    </p>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Day students have full access to all school facilities, including laboratories, library, ICT hub, sports facilities, and co-curricular activities. Our transport system ensures safe and reliable pickup and drop-off services.
                    </p>
                </div>
                <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Day Scholar Benefits</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Commuter-friendly schedule</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Safe, reliable school transport service</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Full participation in all co-curricular activities</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Equal access to all school facilities</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Study support and guidance programs</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Same rigorous academic standards as boarders</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DayScholarSection
