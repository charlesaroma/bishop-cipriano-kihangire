import React from 'react'

const SportsSection = () => {
    return (
        <div className="space-y-12">
            <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Sports & Excellence</h2>
                <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
                    BCK SSS excels in athletics and sporting disciplines. Our students have won numerous national and regional competitions, establishing the school as a powerhouse in Ugandan secondary school sports.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Football</h3>
                    <p className="text-gray-600 mb-4">
                        Our football program is one of the most competitive in Uganda. The team regularly participates in national championships and has produced talented players who have gone on to professional careers.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                        <li>✓ Inter-house competitions</li>
                        <li>✓ National school tournaments</li>
                        <li>✓ Professional coaching staff</li>
                    </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Basketball & Volleyball</h3>
                    <p className="text-gray-600 mb-4">
                        Our basketball and volleyball teams showcase excellence in court sports. We have modern facilities and competitive programs that develop both skill and sportsmanship.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                        <li>✓ National league participation</li>
                        <li>✓ Gender-inclusive programs</li>
                        <li>✓ Tournament hosting</li>
                    </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Dove Stadium</h3>
                    <p className="text-gray-600 mb-4">
                        Our state-of-the-art Dove Stadium is a modern athletic facility hosting football, athletics, and other sporting events. It's a hub of sports excellence and school pride.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                        <li>✓ Modern track and field</li>
                        <li>✓ Grandstand seating</li>
                        <li>✓ Hosting regional events</li>
                    </ul>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">MDD & Athletics</h3>
                    <p className="text-gray-600 mb-4">
                        Moral, Discipline & Development (MDD) integrated with athletics builds character and resilience. We emphasize teamwork, integrity, and the pursuit of excellence.
                    </p>
                    <ul className="space-y-2 text-gray-700">
                        <li>✓ Character development</li>
                        <li>✓ Cross-country running</li>
                        <li>✓ Track and field events</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SportsSection
