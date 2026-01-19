import React from 'react'
import PageHero from '../../components/common/PageHero'
import RequirementsSection from '../../components/admissions/RequirementsSection'
import ApplicationSection from '../../components/admissions/ApplicationSection'

const AdmissionsPage = ({ section = 'apply' }) => {
  return (
    <div>
      <PageHero 
        title="Admissions"
        subtitle="Join the Bishop Cipriano Kihangire SSS family and start your journey to excellence."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Admissions', href: '/admissions' }
        ]}
      />
      
      <div className="py-20 px-8 sm:px-6 lg:px-24 max-w-7xl mx-auto">
        {section === 'requirements' ? (
          <RequirementsSection />
        ) : (
          <ApplicationSection />
        )}
      </div>
    </div>
  )
}

export default AdmissionsPage