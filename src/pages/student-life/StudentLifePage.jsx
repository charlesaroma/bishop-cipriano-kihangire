import React from 'react'
import PageHero from '../../components/common/PageHero'
import CoCurricularGrid from '../../components/3.information/CoCurricularGrid'
import { Music } from 'lucide-react'

const StudentLifePage = ({ section }) => {
    const titles = {
        'boarding': { title: 'Boarding Section', subtitle: 'A home away from home providing exceptional residential care and community.' },
        'day-school': { title: 'Day Scholar Section', subtitle: 'Flexibility and excellence for local students with full access to all facilities.' },
        'sports': { title: 'Sports & Co-Curricular', subtitle: 'Developing talents beyond the classroom through diverse programs and athletic excellence.' },
        'clubs': { title: 'Clubs & Leadership', subtitle: 'Fostering leadership, interests, and talents through student organizations.' }
    }

    const pageInfo = titles[section] || titles['boarding']

    const renderContent = () => {
        switch (section) {
            case 'boarding': return <BoardingSection />;
            case 'day-school': return <DayScholarSection />;
            case 'sports': return <SportsSection />;
            case 'clubs': return <ClubsSection />;
            case 'anthem': return <AnthemSection />;
            default: return <StudentLifeOverview />;
        }
    }

    const breadcrumbPath = section ? `/student-life/${section}` : '/student-life'
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Student Life', href: '/student-life' },
        ...(section ? [{ label: pageInfo.title, href: breadcrumbPath }] : [])
    ]

    return (
        <div>
            <PageHero 
                title={pageInfo.title}
                subtitle={pageInfo.subtitle}
                breadcrumbs={breadcrumbs}
            />
            
            <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {renderContent()}
            </div>
        </div>
    )
}

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

                <a href="/student-life/anthem" className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl hover:scale-105 transition-all duration-300 border-t-4 border-green-600 md:col-span-2">
                    <div className="flex items-center gap-4">
                        <Music className="w-12 h-12 text-green-600" />
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">School Anthem</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Celebrate our school spirit through the powerful lyrics and inspiring message of our school anthem.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

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

const ClubsSection = () => {
    const clubs = [
        {
            name: 'MEMPROW Girls Network',
            description: 'Empowering girls through mentorship, leadership training, and advocacy for gender equality and women\'s rights.'
        },
        {
            name: 'Debate Club',
            description: 'Developing critical thinking and public speaking skills through structured debate competitions.'
        },
        {
            name: 'Choir & Music',
            description: 'Showcasing our talented musicians through performances at school events, competitions, and cultural celebrations.'
        },
        {
            name: 'Drama & Arts',
            description: 'Encouraging creative expression through theatrical performances and artistic activities.'
        },
        {
            name: 'Science Club',
            description: 'Fostering scientific inquiry with experiments, demonstrations, and participation in science fairs.'
        },
        {
            name: 'Environmental Club',
            description: 'Promoting sustainability and environmental stewardship through conservation projects and awareness campaigns.'
        },
        {
            name: 'Prefect & Leadership',
            description: 'Developing student leaders through the prefect system, with various leadership roles and responsibilities.'
        },
        {
            name: 'Other Clubs',
            description: 'Additional clubs and societies catering to diverse interests: photography, journalism, entrepreneurship, and more.'
        }
    ]

    return (
        <div className="space-y-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Student Organizations & Clubs</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Our diverse clubs and programs provide platforms for students to develop talents, build friendships, and make meaningful contributions to our school community.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {clubs.map((club, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{club.name}</h3>
                        <p className="text-gray-600 leading-relaxed">{club.description}</p>
                    </div>
                ))}
            </div>

            <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Leadership Development</h3>
                <p className="mb-6 max-w-3xl mx-auto leading-relaxed">
                    Through clubs and organizations, students develop leadership skills, discover their passions, and contribute to a vibrant school culture. We believe that co-curricular activities are essential to holistic education.
                </p>
            </div>
        </div>
    )
}

export default StudentLifePage
