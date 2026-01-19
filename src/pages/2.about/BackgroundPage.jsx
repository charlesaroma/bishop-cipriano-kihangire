import React from 'react'
import PageHero from '../../components/common/PageHero'
import HistoryTimeline from '../../components/2.about/HistoryTimeline'

const BackgroundPage = () => {
    return (
        <div>
            <PageHero 
                title="History & Background"
                subtitle="Celebrating 25 years of academic excellence and moral formation since our foundation in 1999."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About', href: '/about' },
                    { label: 'History & Background', href: '/about/history' }
                ]}
            />
            
            <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <HistoryTimeline />
            </div>
        </div>
    )
}

export default BackgroundPage
