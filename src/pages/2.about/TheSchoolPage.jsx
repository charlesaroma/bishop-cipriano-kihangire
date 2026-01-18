import React from 'react'
import SchoolOverview from '../../components/2.about/SchoolOverview'

const TheSchoolPage = () => {
    return (
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <span className="text-bck-blue font-semibold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">About Us</span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-4 mb-6">
                    The School
                </h1>
            </div>
            <SchoolOverview />
        </div>
    )
}

export default TheSchoolPage
