import React from 'react'

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

export default ClubsSection
