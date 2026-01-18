import React from 'react'
import Hero from '../../components/1.home/Hero'
import ImpactStats from '../../components/1.home/ImpactStats'
import InnovationSpotlight from '../../components/1.home/InnovationSpotlight'
import FoundersCorner from '../../components/1.home/FoundersCorner'
import homeData from '../../data/homeData.json'

const HomePage = () => {
    return (
        <>
            <Hero />
            <ImpactStats />
            <InnovationSpotlight />
            <FoundersCorner />
        </>
    )
}

export default HomePage