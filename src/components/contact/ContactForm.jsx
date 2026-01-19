import React, { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const subjects = ['General Inquiry', 'Admissions', 'Fees & Finance', 'Technical Support']

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: 'General Inquiry',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Name is too short')
        .required('Full Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      subject: Yup.string()
        .required('Subject is required'),
      message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .required('Message is required')
    }),
    onSubmit: (values, { resetForm }) => {
      // Handle form submission here
      console.log('Form data:', values)
      setSubmitted(true)
      resetForm()
      setTimeout(() => setSubmitted(false), 5000)
    }
  })

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
      <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">Send us a Message</h2>
      <p className="text-gray-600 mb-8">We'll get back to you as soon as possible</p>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            {...formik.getFieldProps('name')}
            placeholder="Your name"
            className={`w-full px-4 py-3 border-2 rounded-lg outline-none transition-colors ${
              formik.touched.name && formik.errors.name 
                ? 'border-red-500 focus:border-red-600' 
                : 'border-gray-200 focus:border-bck-blue'
            }`}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="mt-1 text-sm text-red-600 font-medium">{formik.errors.name}</p>
          ) : null}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            {...formik.getFieldProps('email')}
            placeholder="your@email.com"
            className={`w-full px-4 py-3 border-2 rounded-lg outline-none transition-colors ${
              formik.touched.email && formik.errors.email 
                ? 'border-red-500 focus:border-red-600' 
                : 'border-gray-200 focus:border-bck-blue'
            }`}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="mt-1 text-sm text-red-600 font-medium">{formik.errors.email}</p>
          ) : null}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
            Subject
          </label>
          <select
            id="subject"
            {...formik.getFieldProps('subject')}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-bck-blue outline-none transition-colors bg-white"
          >
            {subjects.map(subj => (
              <option key={subj} value={subj}>{subj}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            {...formik.getFieldProps('message')}
            placeholder="Your message..."
            rows="6"
            className={`w-full px-4 py-3 border-2 rounded-lg outline-none transition-colors resize-none ${
              formik.touched.message && formik.errors.message 
                ? 'border-red-500 focus:border-red-600' 
                : 'border-gray-200 focus:border-bck-blue'
            }`}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <p className="mt-1 text-sm text-red-600 font-medium">{formik.errors.message}</p>
          ) : null}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full py-4 px-6 bg-linear-to-r from-bck-blue to-blue-600 disabled:opacity-50 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          {formik.isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {/* Success Message */}
        {submitted && (
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
            <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-900">Message Sent Successfully!</p>
              <p className="text-sm text-green-700">Thank you for reaching out. We'll be in touch soon.</p>
            </div>
          </div>
        )}

        {/* Info */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
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
