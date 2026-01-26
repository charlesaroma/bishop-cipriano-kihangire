import React from 'react'
import Hero from '../../components/home/Hero'
import ImpactStats from '../../components/home/ImpactStats'
import InnovationSpotlight from '../../components/home/InnovationSpotlight'
import FoundersCorner from '../../components/home/FoundersCorner'
import NewsPreview from '../../components/home/NewsPreview'

const HomePage = () => {
    return (
        <>
            <Hero />
            <ImpactStats />
            <InnovationSpotlight />
            <NewsPreview />
            <FoundersCorner />
        </>
    )
}

export default HomePage