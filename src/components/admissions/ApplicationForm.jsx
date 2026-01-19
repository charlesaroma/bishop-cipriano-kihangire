import React, { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import admissionsData from '../../data/admissionsData.json'

const ApplicationForm = () => {
  const { formSections } = admissionsData
  const [submitted, setSubmitted] = useState(false)

  // Generate dynamic initial values and validation schema
  const initialValues = {};
  const validationSchemaFields = {};

  formSections.forEach(section => {
    section.fields.forEach(field => {
      initialValues[field.name] = '';
      
      // Basic validation for all fields
      let validator = Yup.string().required(`${field.label} is required`);
      
      if (field.type === 'email') {
        validator = validator.email('Invalid email address');
      }
      
      validationSchemaFields[field.name] = validator;
    });
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object(validationSchemaFields),
    onSubmit: (values, { resetForm }) => {
      console.log('Application data:', values)
      setSubmitted(true)
      resetForm()
      setTimeout(() => setSubmitted(false), 5000)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-8">
      {formSections.map((section, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">{section.title}</h3>
          {section.description && (
            <p className="text-gray-600 text-sm mb-6">{section.description}</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.fields.map((field, fieldIdx) => {
              const hasError = formik.touched[field.name] && formik.errors[field.name];
              
              return (
                <div key={fieldIdx} className={field.type === 'file' ? 'md:col-span-2' : ''}>
                  <label htmlFor={field.name} className="block text-sm font-semibold text-gray-700 mb-2">
                    {field.label}
                  </label>

                  {field.type === 'select' ? (
                    <select
                      id={field.name}
                      {...formik.getFieldProps(field.name)}
                      className={`w-full px-4 py-3 border-2 rounded-lg outline-none transition-colors bg-white ${
                        hasError ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-bck-blue'
                      }`}
                    >
                      <option value="">Select {field.label}</option>
                      {field.options.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : field.type === 'file' ? (
                    <input
                      id={field.name}
                      type={field.type}
                      name={field.name}
                      accept={field.accept}
                      multiple={field.multiple}
                      onChange={(event) => {
                        formik.setFieldValue(field.name, event.currentTarget.files);
                      }}
                      onBlur={formik.handleBlur}
                      className={`w-full px-4 py-3 border-2 border-dashed rounded-lg focus:outline-none transition-colors cursor-pointer ${
                        hasError ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-bck-blue'
                      }`}
                    />
                  ) : (
                    <input
                      id={field.name}
                      type={field.type}
                      {...formik.getFieldProps(field.name)}
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                      className={`w-full px-4 py-3 border-2 rounded-lg outline-none transition-colors ${
                        hasError ? 'border-red-500 focus:border-red-600' : 'border-gray-200 focus:border-bck-blue'
                      }`}
                    />
                  )}
                  {hasError && (
                    <p className="mt-1 text-sm text-red-600 font-medium">{formik.errors[field.name]}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Submit Section */}
      <div className="space-y-4">
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full py-4 px-6 bg-linear-to-r from-bck-blue to-blue-600 disabled:opacity-50 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          {formik.isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>

        {submitted && (
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
            <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-900">Application Submitted</p>
              <p className="text-sm text-green-700">Thank you for applying! We will review your application and contact you soon.</p>
            </div>
          </div>
        )}

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
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
