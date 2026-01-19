import React from 'react'
import { Music } from 'lucide-react'

const AnthemSection = () => {
    return (
        <div className="space-y-12">
            <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white rounded-3xl p-12 text-center">
                <Music className="w-16 h-16 mx-auto mb-6 opacity-80" />
                <h2 className="text-4xl font-serif font-bold mb-4">Bishop Cipriano Kihangire School Anthem</h2>
                <p className="text-blue-100 text-lg">Celebrating our school spirit, faith, and commitment to excellence</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Lyrics */}
                <div className="lg:col-span-2">
                    <div className="bg-white rounded-2xl shadow-lg p-10">
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">Lyrics</h3>
                        
                        <div className="space-y-8 text-gray-800 leading-relaxed">
                            {/* Chorus */}
                            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                                <p className="font-semibold text-blue-900 mb-3">Chorus:</p>
                                <p className="text-center font-semibold">
                                    Oh Bishop Cipriano<br/>
                                    Bishop Kihangire<br/>
                                    A catholic secondary school<br/>
                                    Training boys and girls<br/>
                                    To be the light of the world<br/>
                                    <span className="text-blue-600">(x2)</span>
                                </p>
                            </div>

                            {/* Stanza One */}
                            <div>
                                <p className="font-semibold text-gray-900 mb-3">Stanza One:</p>
                                <p className="text-center">
                                    We are ambassadors of hope<br/>
                                    Messengers of peace<br/>
                                    Vessels of love<br/>
                                    And we are the salt of the earth.
                                </p>
                            </div>

                            {/* Stanza Two */}
                            <div>
                                <p className="font-semibold text-gray-900 mb-3">Stanza Two:</p>
                                <p className="text-center">
                                    Our parents<br/>
                                    Our guardians<br/>
                                    Teachers and friends<br/>
                                    Support us for the future of our Country is in our hands.
                                </p>
                            </div>

                            {/* Stanza Three */}
                            <div>
                                <p className="font-semibold text-gray-900 mb-3">Stanza Three:</p>
                                <p className="text-center">
                                    God our father<br/>
                                    Make Bishop Kihangire<br/>
                                    To always shine and sing and rejoice<br/>
                                    Rejoice with saints.
                                </p>
                            </div>

                            {/* Motto */}
                            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
                                <p className="text-center font-semibold text-xl text-green-900">
                                    Per aspera ad astra<br/>
                                    <span className="text-sm text-green-700 block mt-2">(Through hardships to the stars)</span>
                                </p>
                            </div>

                            {/* Closing */}
                            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                                <p className="text-center font-bold text-lg text-blue-900">
                                    We strive for the crown <span className="text-blue-600">(x2)</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Anthem Significance */}
                <div className="space-y-8">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Anthem Significance</h3>
                        <div className="space-y-4 text-gray-700">
                            <div>
                                <h4 className="font-semibold text-blue-600 mb-2">Our Mission</h4>
                                <p className="text-sm leading-relaxed">
                                    Training students to be lights of the world through comprehensive education rooted in Catholic values.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-blue-600 mb-2">Our Identity</h4>
                                <p className="text-sm leading-relaxed">
                                    Ambassadors of hope, messengers of peace, and vessels of love serving our community.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-blue-600 mb-2">Our Support</h4>
                                <p className="text-sm leading-relaxed">
                                    Guided by parents, guardians, teachers, and friends who believe in our potential.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-blue-600 mb-2">Our Aspiration</h4>
                                <p className="text-sm leading-relaxed">
                                    Per aspera ad astra – reaching for excellence through dedication and perseverance.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-linear-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8">
                        <h3 className="font-bold mb-4">School Spirit</h3>
                        <p className="text-sm leading-relaxed opacity-95">
                            Our anthem embodies the spirit of excellence, faith, and community that defines Bishop Cipriano Kihangire SSS. Through these powerful words, we celebrate our shared commitment to becoming the best versions of ourselves.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnthemSection
