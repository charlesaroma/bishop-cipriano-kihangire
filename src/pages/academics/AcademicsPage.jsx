import React from 'react'
import PageHero from '../../layout/common/PageHero'
import CurriculumView from '../../components/information/CurriculumView'
import PerformanceStats from '../../components/information/PerformanceStats'
import AcademicDepartments from '../../components/information/AcademicDepartments'
import ICTSection from '../../components/information/ICTSection'

const AcademicsPage = ({ section }) => {
    const titles = {
        'overview': { 
            title: 'Academics', 
            subtitle: 'Excellence in education: Nurturing minds and hearts for a brighter future.'
        },
        'curriculum': { 
            title: 'Curriculum', 
            subtitle: 'Our comprehensive academic programs designed to develop well-rounded students.'
        },
        'departments': { 
            title: 'Departments', 
            subtitle: 'Exploring our specialized departments and academic divisions.'
        },
        'performance': { 
            title: 'Academic Performance', 
            subtitle: 'Excellence in achievement: Our students succeed and thrive.'
        },
        'ict': { 
            title: 'E-Governance & ICT', 
            subtitle: 'Leveraging technology for transparency, innovation, and digital leadership.'
        }
    }

    const pageInfo = titles[section] || titles['overview']

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
