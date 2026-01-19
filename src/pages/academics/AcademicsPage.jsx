import React from 'react'
import PageHero from '../../components/common/PageHero'
import CurriculumView from '../../components/academics/CurriculumView'
import PerformanceStats from '../../components/academics/PerformanceStats'
import AcademicDepartments from '../../components/academics/AcademicDepartments'
import ICTSection from '../../components/academics/ICTSection'

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
            
            <div className="py-20 px-8 sm:px-6 lg:px-24 max-w-7xl mx-auto">
                {renderContent()}
            </div>
        </div>
    )
}

export default AcademicsPage
