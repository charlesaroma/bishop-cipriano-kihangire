import React from 'react'
import PageHero from '../../components/common/PageHero'
import CoCurricularGrid from '../../components/3.information/CoCurricularGrid'

const StudentLifePage = ({ section }) => {
    const titles = {
        'boarding': { title: 'Boarding & Day School', subtitle: 'Experience holistic student life in a nurturing, supportive environment.' },
        'sports': { title: 'Sports & Co-Curricular', subtitle: 'Developing talents beyond the classroom through diverse programs and athletic excellence.' },
        'clubs': { title: 'Clubs & Leadership', subtitle: 'Fostering leadership, interests, and talents through student organizations.' }
    }

    const pageInfo = titles[section] || titles['boarding']

    const renderContent = () => {
        switch (section) {
            case 'boarding': return <BoardingSection />;
            case 'sports': return <SportsSection />;
            case 'clubs': return <ClubsSection />;
            default: return <BoardingSection />;
        }
    }

    const breadcrumbPath = section ? `/student-life/${section}` : '/student-life'
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Student Life', href: '/student-life' },
        { label: pageInfo.title, href: breadcrumbPath }
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
