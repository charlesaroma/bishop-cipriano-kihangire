import React from 'react'
import PageHero from '../../components/common/PageHero'
import { MapPin, Phone, Mail, Clock, Building2 } from 'lucide-react'
import contactData from '../../data/contactData.json'

const ContactPage = () => {
    const { contactInfo, form } = contactData;

    return (
        <div>
            <PageHero 
                title="Contact Us"
                subtitle="Get in touch with us. We're here to help and answer any questions you might have."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Contact', href: '/contact' }
                ]}
            />

            <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

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

            {/* Banking Information Section */}
            <div className="grid lg:grid-cols-2 gap-12 mt-20 pt-20 border-t border-gray-200">
                <div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Payment & Banking Information</h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Transparent and convenient payment options for fees and school-related expenses. We work with trusted financial institutions to ensure secure and efficient transactions.
                    </p>
                </div>

                <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                    <div className="flex items-start mb-6">
                        <Building2 className="w-8 h-8 text-blue-600 mr-4 shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Primary Bank Account</h3>
                            <div className="space-y-2 text-gray-800">
                                <p><span className="font-semibold">Bank:</span> Centenary Rural Development Bank</p>
                                <p><span className="font-semibold">Branch:</span> Entebbe Road Branch</p>
                                <p><span className="font-semibold">Account Name:</span> Bishop Cipriano Kihangire SSS</p>
                                <p><span className="font-semibold">Account Type:</span> School Operations Account</p>
                                <p className="text-sm text-gray-600 mt-4 italic">
                                    Please contact the school administration for specific account numbers and payment references for tuition and other school fees.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid md:grid-cols-4 gap-6 mt-20 pt-20 border-t border-gray-200">
                <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 text-center hover:shadow-xl transition-shadow duration-300">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
                    <p className="text-sm text-gray-600">
                        Bbiina, Luzira<br/>Kampala, Uganda
                    </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 text-center hover:shadow-xl transition-shadow duration-300">
                    <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
                    <p className="text-sm text-gray-600">
                        +256 414 250 404<br/>
                        Mon - Fri: 8AM - 5PM
                    </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 text-center hover:shadow-xl transition-shadow duration-300">
                    <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
                    <p className="text-sm text-gray-600">
                        admissions@bck.ac.ug<br/>
                        info@bck.ac.ug
                    </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600 text-center hover:shadow-xl transition-shadow duration-300">
                    <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">School Hours</h3>
                    <p className="text-sm text-gray-600">
                        Term Time: 6AM - 6PM<br/>
                        Admin: 8AM - 5PM
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ContactPage
