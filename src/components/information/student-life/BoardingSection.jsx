import React from 'react'

const BoardingSection = () => {
    return (
        <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Exceptional Residential Experience</h2>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        Our boarding section provides a home away from home for over 1,000 students. With well-furnished dormitories, experienced house staff, and a structured daily routine, we foster a sense of community while maintaining academic focus and personal development.
                    </p>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        The day section offers flexibility for local students while maintaining the same high standards of discipline, care, and academic excellence. Both sections enjoy equal access to all school facilities and co-curricular activities.
                    </p>
                </div>
                <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Student Support Services</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">24/7 pastoral care and guidance counseling</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Health center with trained medical staff</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Study halls and library access during weekends</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Recreational facilities and organized activities</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Regular communication with parents and guardians</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Balanced schedule with academics and recreation</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BoardingSection
