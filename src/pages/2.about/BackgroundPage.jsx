import React from 'react'
import HistoryTimeline from '../../components/2.about/HistoryTimeline'

const BackgroundPage = () => {
    return (
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <span className="text-bck-blue font-semibold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">About Us</span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-4 mb-6">
                    History & Heritage
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Tracing the footsteps of our founders and the milestones that define our legacy.
                </p>
            </div>
            <HistoryTimeline />
        </div>
    )
}

export default BackgroundPage
