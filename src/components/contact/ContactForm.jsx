import React, { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const subjects = ['General Inquiry', 'Admissions', 'Fees & Finance', 'Technical Support']

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Send us a Message</h2>
      <p className="text-gray-600 mb-8">We'll get back to you as soon as possible</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-bck-blue focus:outline-none transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-bck-blue focus:outline-none transition-colors"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Subject
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-bck-blue focus:outline-none transition-colors"
          >
            {subjects.map(subj => (
              <option key={subj} value={subj}>{subj}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            required
            rows="6"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-bck-blue focus:outline-none transition-colors resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 px-6 bg-linear-to-r from-bck-blue to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Send Message
        </button>

        {/* Success Message */}
        {submitted && (
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-900">Message Sent Successfully!</p>
              <p className="text-sm text-green-700">Thank you for reaching out. We'll be in touch soon.</p>
            </div>
          </div>
        )}

        {/* Info */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-blue-900">Response Time</p>
            <p className="text-sm text-blue-700">We typically respond to inquiries within 24 business hours.</p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
