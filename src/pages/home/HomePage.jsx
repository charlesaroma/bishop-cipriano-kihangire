import React from 'react'
import Hero from '../../components/home/Hero'
import ImpactStats from '../../components/home/ImpactStats'
import InnovationSpotlight from '../../components/home/InnovationSpotlight'
import FoundersCorner from '../../components/home/FoundersCorner'

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