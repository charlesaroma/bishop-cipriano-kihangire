import React from 'react'
import PageHero from '../../components/common/PageHero'
import BlogGrid from '../../components/5.blog/BlogGrid'

const NewsPage = () => {
    return (
        <div>
            <PageHero 
                title="News & Events"
                subtitle="Stay updated with the latest events, academic achievements, and news at Bishop Cipriano Kihangire SSS."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'News & Events', href: '/news' }
                ]}
            />
            
            <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-bck-blue font-semibold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">Latest Updates</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-4 mb-6">
                        School News & Announcements
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover the latest updates, events, achievements, and announcements from our school community.
                    </p>
                </div>
                <BlogGrid />
            </section>
        </div>
    )
}

export default NewsPage
