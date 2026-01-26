import React from 'react'
import PageHero from '../../layout/common/PageHero'
import BoardingSection from '../../components/information/student-life/BoardingSection'
import DayScholarSection from '../../components/information/student-life/DayScholarSection'
import SportsSection from '../../components/information/student-life/SportsSection'
import ClubsSection from '../../components/information/student-life/ClubsSection'
import AnthemSection from '../../components/information/student-life/AnthemSection'
import StudentLifeOverview from '../../components/information/student-life/StudentLifeOverview'

const StudentLifePage = ({ section }) => {
    const titles = {
        'overview': { 
            title: 'Student Life', 
            subtitle: 'Developing the whole person: Spiritual, social, physical, and intellectual growth.'
        },
        'boarding': { 
            title: 'Boarding Section', 
            subtitle: 'A home away from home providing exceptional residential care and community.'
        },
        'day-school': { 
            title: 'Day Scholar Section', 
            subtitle: 'Flexibility and excellence for local students with full access to all facilities.'
        },
        'sports': { 
            title: 'Sports & Co-Curricular', 
            subtitle: 'Developing talents beyond the classroom through diverse programs and athletic excellence.'
        },
        'clubs': { 
            title: 'Clubs & Leadership', 
            subtitle: 'Fostering leadership, interests, and talents through student organizations.'
        }
    }

    const pageInfo = titles[section] || titles['overview']

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
            
            <div className="py-20 px-8 sm:px-6 lg:px-24 max-w-7xl mx-auto">
                {renderContent()}
            </div>
        </div>
    )
}

export default StudentLifePage
