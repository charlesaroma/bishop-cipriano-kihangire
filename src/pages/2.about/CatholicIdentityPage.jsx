import React from 'react'
import PageHero from '../../components/common/PageHero'

const CatholicIdentityPage = () => {
    return (
        <div>
            <PageHero 
                title="Catholic Identity"
                subtitle="Living our faith and values: Spiritual formation at the heart of our mission."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About Us', href: '/about' },
                    { label: 'Catholic Identity', href: '/about/catholic-identity' }
                ]}
            />
            
            <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                            Faith, Formation & Values
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Bishop Cipriano Kihangire Senior Secondary School is a Catholic institution committed to the holistic development of our students. Under the spiritual guidance of the Archdiocese of Kampala, our school integrates faith, academic excellence, and moral uprightness into every aspect of student life.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Founded by the late Reverend Father John Scalabrini, our institution continues to embody the Scalabrinian values of love, compassion, and dedication to education. We believe that true education nurtures not just the mind, but the heart and soul.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                        <div className="space-y-6">
                            <div className="border-l-4 border-blue-600 pl-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Motto</h3>
                                <p className="text-gray-700 italic font-semibold">
                                    "For Unity, Academic Excellence and Moral Uprightness"
                                </p>
                            </div>
                            <div className="border-l-4 border-blue-600 pl-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                                <p className="text-gray-700">
                                    To be the best choice in providing holistic education in Uganda.
                                </p>
                            </div>
                            <div className="border-l-4 border-blue-600 pl-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                                <p className="text-gray-700">
                                    To provide high-quality secondary education emphasizing spiritual, social, intellectual, and physical development to face the changing world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mb-20">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
                        Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Spirituality</h3>
                            <p className="text-gray-600">
                                Living our Catholic faith with integrity and deepening our relationship with God through prayer, sacraments, and service.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                            <p className="text-gray-600">
                                Pursuing academic and personal excellence with diligence, discipline, and a commitment to continuous improvement.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
                            <p className="text-gray-600">
                                Acting with honesty, accountability, and moral uprightness in all our dealings and interactions.
                            </p>
                        </div>
                        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
                            <p className="text-gray-600">
                                Building a united, inclusive community where every member is valued and contributes to our collective mission.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Spiritual Formation Programs */}
                <div className="bg-linear-to-r from-blue-50 to-blue-100 rounded-2xl p-12">
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
                        Spiritual Formation & Activities
                    </h2>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                                <span className="text-white font-bold text-sm">✓</span>
                            </span>
                            <span className="text-gray-800">Daily prayer and Mass attendance for interested students</span>
                        </li>
                        <li className="flex items-start">
                            <span className="shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                                <span className="text-white font-bold text-sm">✓</span>
                            </span>
                            <span className="text-gray-800">Monthly Eucharistic celebrations and retreats</span>
                        </li>
                        <li className="flex items-start">
                            <span className="shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                                <span className="text-white font-bold text-sm">✓</span>
                            </span>
                            <span className="text-gray-800">Religious education integrated into the curriculum</span>
                        </li>
                        <li className="flex items-start">
                            <span className="shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                                <span className="text-white font-bold text-sm">✓</span>
                            </span>
                            <span className="text-gray-800">Community service and outreach programs</span>
                        </li>
                        <li className="flex items-start">
                            <span className="shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                                <span className="text-white font-bold text-sm">✓</span>
                            </span>
                            <span className="text-gray-800">Leadership development rooted in Catholic social teachings</span>
                        </li>
                        <li className="flex items-start">
                            <span className="shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                                <span className="text-white font-bold text-sm">✓</span>
                            </span>
                            <span className="text-gray-800">Guidance and counseling supporting holistic well-being</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CatholicIdentityPage
