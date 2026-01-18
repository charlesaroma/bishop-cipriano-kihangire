import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import contactData from '../../data/contactData.json'

const ContactPage = () => {
    const { contactInfo, form } = contactData;

    return (
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                    Get in Touch
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {contactInfo.description}
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="bg-bck-blue text-white rounded-3xl p-10 shadow-xl relative overflow-hidden">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>

                    <h2 className="text-2xl font-serif font-bold mb-8 relative z-10">{contactInfo.title}</h2>

                    <div className="space-y-8 relative z-10">
                        <div className="flex items-start space-x-4">
                            <div className="bg-white/10 p-3 rounded-lg">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">{contactInfo.location.label}</h3>
                                <p className="text-blue-100">{contactInfo.location.addressLine1}</p>
                                <p className="text-blue-100">{contactInfo.location.addressLine2}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-white/10 p-3 rounded-lg">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">{contactInfo.phone.label}</h3>
                                <p className="text-blue-100">{contactInfo.phone.number}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-white/10 p-3 rounded-lg">
                                <Mail className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">{contactInfo.email.label}</h3>
                                <p className="text-blue-100">{contactInfo.email.address}</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-white/10 p-3 rounded-lg">
                                <Clock className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-1">{contactInfo.hours.label}</h3>
                                <p className="text-blue-100">{contactInfo.hours.time}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                    <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">{form.title}</h2>
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bck-blue outline-none transition-all" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bck-blue outline-none transition-all" placeholder="Doe" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bck-blue outline-none transition-all" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                            <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bck-blue outline-none transition-all">
                                {form.subjects.map(subject => <option key={subject}>{subject}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea rows="4" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-bck-blue outline-none transition-all" placeholder="How can we help you?"></textarea>
                        </div>
                        <button type="button" className="w-full bg-bck-blue text-white py-4 rounded-xl font-bold shadow-lg shadow-bck-blue/20 hover:shadow-bck-blue/30 hover:-translate-y-1 transition-all">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
