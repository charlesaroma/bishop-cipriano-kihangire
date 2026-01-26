import React from 'react'
import PageHero from '../../layout/common/PageHero'
import ContactInfo from '../../components/contact/ContactInfo'
import ContactForm from '../../components/contact/ContactForm'

const ContactPage = () => {
  return (
    <div>
      <PageHero 
        title="Contact Us"
        subtitle="Have a question? We'd love to hear from you. Get in touch with our team."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' }
        ]}
      />
      
      <section className="py-20 px-8 sm:px-6 lg:px-24 max-w-7xl mx-auto">
        <ContactInfo />
      </section>

      <section className="py-20 px-8 sm:px-6 lg:px-24 max-w-3xl mx-auto">
        <ContactForm />
      </section>
    </div>
  )
}

export default ContactPage