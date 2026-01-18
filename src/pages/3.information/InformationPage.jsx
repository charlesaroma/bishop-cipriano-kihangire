import React from 'react'
import CurriculumView from '../../components/3.information/CurriculumView'
import PerformanceStats from '../../components/3.information/PerformanceStats'
import CoCurricularGrid from '../../components/3.information/CoCurricularGrid'
import FacilitiesGallery from '../../components/3.information/FacilitiesGallery'
import FeesTable from '../../components/3.information/FeesTable'
import { useParams } from 'react-router-dom'

const InformationPage = ({ section }) => {
    // Dynamic content selection
    const renderContent = () => {
        switch (section) {
            case 'curriculum': return <CurriculumView />;
            case 'performance': return <PerformanceStats />;
            case 'co-curricular': return <CoCurricularGrid />;
            case 'facilities': return <FacilitiesGallery />;
            case 'fees': return <FeesTable />;
            default: return <CurriculumView />;
        }
    }

    const titles = {
        'curriculum': 'Our Curriculum',
        'performance': 'School Performance',
        'co-curricular': 'Co-Curricular Activities',
        'facilities': 'School Facilities',
        'fees': 'Fees Structure'
    }

    return (
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <span className="text-bck-blue font-semibold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">Information</span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-4 mb-6">
                    {titles[section] || 'Information'}
                </h1>
            </div>
            {renderContent()}
        </div>
    )
}

export default InformationPage
