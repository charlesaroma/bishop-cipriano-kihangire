import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const ContactInfo = () => {
  const contactInfo = {
    title: 'Get in Touch',
    description: 'We are always happy to hear from you. Whether you have a question about admissions, academics, or student life, our team is ready to help.',
    location: {
      label: 'Our Location',
      addressLine1: 'Headquarters at Port Bell Road',
      addressLine2: 'Luzira, Kampala, Uganda'
    },
    phone: {
      label: 'Phone Number',
      number: '+256 700 000 000'
    },
    email: {
      label: 'Email Address',
      address: 'info@bck.ac.ug'
    },
    hours: {
      label: 'Office Hours',
      time: 'Mon - Fri: 8:00 AM - 5:00 PM'
    }
  }

  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">{contactInfo.title}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">{contactInfo.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Location */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <MapPin className="w-6 h-6 text-bck-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{contactInfo.location.label}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {contactInfo.location.addressLine1}<br />
                {contactInfo.location.addressLine2}
              </p>
            </div>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Phone className="w-6 h-6 text-bck-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{contactInfo.phone.label}</h3>
              <a href={`tel:${contactInfo.phone.number}`} className="text-sm text-bck-blue hover:underline">
                {contactInfo.phone.number}
              </a>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Mail className="w-6 h-6 text-bck-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{contactInfo.email.label}</h3>
              <a href={`mailto:${contactInfo.email.address}`} className="text-sm text-bck-blue hover:underline">
                {contactInfo.email.address}
              </a>
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Clock className="w-6 h-6 text-bck-blue" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{contactInfo.hours.label}</h3>
              <p className="text-sm text-gray-600">{contactInfo.hours.time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
