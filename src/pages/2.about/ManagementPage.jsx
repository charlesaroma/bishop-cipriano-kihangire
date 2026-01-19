import React from 'react'
import PageHero from '../../components/common/PageHero'
import ManagementTeam from '../../components/2.about/ManagementTeam'

const ManagementPage = () => {
    return (
        <div>
            <PageHero 
                title="Administration"
                subtitle="Meet the visionary leaders guiding BCK SSS towards academic excellence and moral uprightness."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About', href: '/about' },
                    { label: 'Administration', href: '/about/administration' }
                ]}
            />
            
            <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <ManagementTeam />
            </div>
        </div>
    )
}

export default ManagementPage
