import React from 'react'
import { useLocation } from 'react-router-dom'

const GenericPage = ({ title, category }) => {
    const location = useLocation();

    // Deduced title from path if not provided
    const pageTitle = title || location.pathname.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const pageCategory = category || location.pathname.split('/')[1].toUpperCase();

    return (
        <div className="pt-32 pb-20 px-8 sm:px-6 lg:px-24 max-w-5xl mx-auto min-h-[60vh]">
            <div className="text-center mb-16">
                <span className="text-bck-blue font-semibold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">
                    {pageCategory}
                </span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-4 mb-6">
                    {pageTitle}
                </h1>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 prose prose-lg prose-blue mx-auto">
                <p className="lead">
                    Welcome to the {pageTitle} page. This section is currently being updated with the latest information for the 2025 academic year.
                </p>
                <p>
                    Bishop Cipriano Kihangire SSS is dedicated to providing a holistic education. Please check back soon for detailed updates on:
                </p>
                <ul>
                    <li>Detailed curriculum breakdowns</li>
                    <li>Staff and Management profiles</li>
                    <li>Upcoming events and news</li>
                </ul>
            </div>
        </div>
    )
}

export default GenericPage
