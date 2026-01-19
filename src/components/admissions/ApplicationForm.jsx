import React, { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import admissionsData from '../../data/admissionsData.json'

const ApplicationForm = () => {
  const { formSections } = admissionsData
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple validation
    if (Object.keys(formData).length > 0) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {formSections.map((section, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{section.title}</h3>
          {section.description && (
            <p className="text-gray-600 text-sm mb-6">{section.description}</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.fields.map((field, fieldIdx) => (
              <div key={fieldIdx} className={field.type === 'file' ? 'md:col-span-2' : ''}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {field.label}
                </label>

                {field.type === 'select' ? (
                  <select
                    name={field.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-bck-blue focus:outline-none transition-colors"
                  >
                    <option value="">Select {field.label}</option>
                    {field.options.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : field.type === 'file' ? (
                  <input
                    type={field.type}
                    name={field.name}
                    accept={field.accept}
                    multiple={field.multiple}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg focus:border-bck-blue focus:outline-none transition-colors cursor-pointer"
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={`Enter ${field.label.toLowerCase()}`}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-bck-blue focus:outline-none transition-colors"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Submit Section */}
      <div className="space-y-4">
        <button
          type="submit"
          className="w-full py-4 px-6 bg-linear-to-r from-bck-blue to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Submit Application
        </button>

        {submitted && (
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-900">Application Submitted</p>
              <p className="text-sm text-green-700">Thank you for applying! We will review your application and contact you soon.</p>
            </div>
          </div>
        )}

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-blue-900">Note</p>
            <p className="text-sm text-blue-700">For official applications, please visit the admissions office or call us at +256 392 264 164</p>
          </div>
        </div>
      </div>
    </form>
  )
}

export default ApplicationForm
