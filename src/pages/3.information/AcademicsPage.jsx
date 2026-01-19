import React from 'react'
import PageHero from '../../components/common/PageHero'
import CurriculumView from '../../components/3.information/CurriculumView'
import PerformanceStats from '../../components/3.information/PerformanceStats'

const AcademicsPage = ({ section }) => {
    const titles = {
        'curriculum': { title: 'Curriculum', subtitle: 'Our comprehensive academic programs designed to develop well-rounded students.' },
        'departments': { title: 'Departments', subtitle: 'Exploring our specialized departments and academic divisions.' },
        'performance': { title: 'Academic Performance', subtitle: 'Excellence in achievement: Our students succeed and thrive.' },
        'ict': { title: 'E-Governance & ICT', subtitle: 'Leveraging technology for transparency, innovation, and digital leadership.' }
    }

    const pageInfo = titles[section] || titles['curriculum']

    const renderContent = () => {
        switch (section) {
            case 'curriculum': return <CurriculumView />;
            case 'departments': return <AcademicDepartments />;
            case 'performance': return <PerformanceStats />;
            case 'ict': return <ICTSection />;
            default: return <CurriculumView />;
        }
    }

    const breadcrumbPath = section ? `/academics/${section}` : '/academics'
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Academics', href: '/academics' },
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

const AcademicDepartments = () => {
    const departments = [
        {
            name: 'Sciences',
            description: 'Physics, Chemistry, and Biology with state-of-the-art laboratories and hands-on learning.',
            subjects: ['Physics', 'Chemistry', 'Biology']
        },
        {
            name: 'Languages',
            description: 'English, French, and other language studies emphasizing communication skills.',
            subjects: ['English', 'French', 'Kiswahili']
        },
        {
            name: 'Mathematics & Technology',
            description: 'Mathematics, Computer Science, and emerging technology programs.',
            subjects: ['Mathematics', 'Computer Science', 'Information Systems']
        },
        {
            name: 'Humanities & Social Sciences',
            description: 'History, Geography, Literature, and Social Studies programs.',
            subjects: ['History', 'Geography', 'Literature', 'Social Studies']
        }
    ]

    return (
        <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {departments.map((dept, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{dept.name}</h3>
                        <p className="text-gray-600 mb-6">{dept.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {dept.subjects.map((subject, sidx) => (
                                <span key={sidx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                    {subject}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const ICTSection = () => {
    return (
        <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Digital Innovation Hub</h2>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        BCK SSS is at the forefront of digital transformation in education. Our ICT Hub is equipped with modern computer systems, high-speed internet, and software designed to enhance both teaching and student learning.
                    </p>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                        We integrate technology across all curricula, preparing students for the digital economy while maintaining academic rigor and ethical digital citizenship.
                    </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Technology Initiatives</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Digital E-Voting System for transparent student elections</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Modern ICT Lab with latest software and hardware</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Computer Science and Information Systems programs</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">E-Learning platform integration for online resources</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 font-bold mr-3">✓</span>
                            <span className="text-gray-700">Digital literacy and coding workshops</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-blue-600 text-white rounded-2xl p-12">
                <h2 className="text-2xl font-bold mb-4">E-Governance</h2>
                <p className="mb-6 leading-relaxed">
                    Our commitment to transparency and accountability is demonstrated through our innovative E-Governance system, which includes digital voting, electronic record-keeping, and transparent communication channels between school administration, students, and parents.
                </p>
            </div>
        </div>
    )
}

export default AcademicsPage
