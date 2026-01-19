import React from 'react'
import PageHero from '../../components/common/PageHero'
import SchoolOverview from '../../components/2.about/SchoolOverview'

const TheSchoolPage = () => {
    return (
        <div>
            <PageHero 
                title="School Overview"
                subtitle="Discover the heart of Bishop Cipriano Kihangire SSS and our commitment to excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About', href: '/about' },
                    { label: 'School Overview', href: '/about' }
                ]}
            />
            
            <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <SchoolOverview />
            </div>
        </div>
    )
}

export default TheSchoolPage
