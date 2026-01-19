import React from 'react'

const StudentLifeOverview = () => {
    return (
        <div className="space-y-16">
            {/* Intro Section */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">Holistic Student Life at BCK SSS</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    At Bishop Cipriano Kihangire Senior Secondary School, we believe in the holistic development of our students. Beyond academics, we foster spiritual growth, physical wellness, leadership skills, and character development.
                </p>
            </div>

            {/* Life Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <a href="/student-life/boarding" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-600">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Boarding Section</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Experience a home away from home with 24/7 pastoral care, structured community living, and exceptional support services.
                    </p>
                    <span className="text-blue-600 font-semibold flex items-center gap-2">Learn More →</span>
                </a>

                <a href="/student-life/day-school" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-600">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Day Scholar Section</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Flexible learning with reliable transport, full facility access, and equal participation in all school activities.
                    </p>
                    <span className="text-blue-600 font-semibold flex items-center gap-2">Learn More →</span>
                </a>

                <a href="/student-life/sports" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-600">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Sports & Co-Curricular</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Develop athletic excellence through competitive sports programs, state-of-the-art facilities, and professional coaching.
                    </p>
                    <span className="text-blue-600 font-semibold flex items-center gap-2">Learn More →</span>
                </a>

                <a href="/student-life/clubs" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-blue-600">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Clubs & Leadership</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Discover your passions through diverse student organizations and develop leadership skills that last a lifetime.
                    </p>
                    <span className="text-blue-600 font-semibold flex items-center gap-2">Learn More →</span>
                </a>
            </div>
        </div>
    )
}

export default StudentLifeOverview
