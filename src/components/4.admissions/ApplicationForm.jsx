import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Upload, X, CheckCircle, AlertCircle } from 'lucide-react'
import homeData from '../../data/admissionsData.json'

const ApplicationForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Validation Schema
    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        dob: Yup.date().required('Date of Birth is required'),
        gender: Yup.string().required('Gender is required'),
        formerSchool: Yup.string().required('Former School is required'),
        level: Yup.string().required('Level is required'),
        aggregates: Yup.number().required('Aggregates are required').positive().integer(),
        // File validations handled manually in standard input for simplicity or via test functions
        passportPhotos: Yup.mixed().test('fileCount', 'Exactly 3 passport photos are required', (value) => {
            return value && value.length === 3;
        }),
        resultSlip: Yup.mixed().required('Result slip is required')
    });

    const formik = useFormik({
        initialValues: {
            firstName: '', lastName: '', dob: '', gender: '',
            formerSchool: '', level: '', aggregates: '',
            passportPhotos: [],
            resultSlip: null
        },
        validationSchema,
        onSubmit: (values) => {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                console.log(values);
                setIsSubmitting(false);
                setSubmitted(true);
            }, 2000);
        }
    });

    const handleFileChange = (e, fieldName) => {
        if (fieldName === 'passportPhotos') {
            const files = Array.from(e.target.files);
            formik.setFieldValue(fieldName, files);
        } else {
            formik.setFieldValue(fieldName, e.target.files[0]);
        }
    };

    if (submitted) {
        return (
            <div className="bg-green-50 p-10 rounded-2xl text-center border border-green-200">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-green-800 mb-2">Application Received!</h3>
                <p className="text-green-700">Thank you for applying to Bishop Cipriano Kihangire SSS. We will review your documents and contact you shortly.</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-green-700 underline font-semibold hover:text-green-900"
                >
                    Submit another application
                </button>
            </div>
        )
    }

    return (
        <form onSubmit={formik.handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-bck-blue mb-8 border-b pb-4 border-gray-100">
                New Student Application
            </h3>

            {/* Render Form Sections based on Data if possible, or hardcoded for better control over layout */}

            {/* 1. Student Info */}
            <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-bck-blue flex items-center justify-center text-xs mr-2">1</span>
                    Student Information
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                            type="text"
                            {...formik.getFieldProps('firstName')}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bck-blue focus:border-transparent outline-none transition-all"
                        />
                        {formik.touched.firstName && formik.errors.firstName && (
                            <div className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{formik.errors.firstName}</div>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                            type="text"
                            {...formik.getFieldProps('lastName')}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bck-blue focus:border-transparent outline-none transition-all"
                        />
                        {formik.touched.lastName && formik.errors.lastName && (
                            <div className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{formik.errors.lastName}</div>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                        <input
                            type="date"
                            {...formik.getFieldProps('dob')}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bck-blue focus:border-transparent outline-none transition-all"
                        />
                        {formik.touched.dob && formik.errors.dob && (
                            <div className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{formik.errors.dob}</div>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                        <select
                            {...formik.getFieldProps('gender')}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bck-blue focus:border-transparent outline-none transition-all"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {formik.touched.gender && formik.errors.gender && (
                            <div className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{formik.errors.gender}</div>
                        )}
                    </div>
                </div>
            </div>

            {/* 2. Academic Info */}
            <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-bck-blue flex items-center justify-center text-xs mr-2">2</span>
                    Academic Background
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Former School</label>
                        <input
                            type="text"
                            {...formik.getFieldProps('formerSchool')}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bck-blue focus:border-transparent outline-none transition-all"
                        />
                        {formik.touched.formerSchool && formik.errors.formerSchool && (
                            <div className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{formik.errors.formerSchool}</div>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Class Applying For</label>
                        <select
                            {...formik.getFieldProps('level')}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bck-blue focus:border-transparent outline-none transition-all"
                        >
                            <option value="">Select Class</option>
                            <option value="S.1">S.1</option>
                            <option value="S.2">S.2</option>
                            <option value="S.3">S.3</option>
                            <option value="S.5 Arts">S.5 (Arts)</option>
                            <option value="S.5 Sciences">S.5 (Sciences)</option>
                        </select>
                        {formik.touched.level && formik.errors.level && (
                            <div className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{formik.errors.level}</div>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Aggregates / Points</label>
                        <input
                            type="number"
                            {...formik.getFieldProps('aggregates')}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bck-blue focus:border-transparent outline-none transition-all"
                        />
                        {formik.touched.aggregates && formik.errors.aggregates && (
                            <div className="text-red-500 text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{formik.errors.aggregates}</div>
                        )}
                    </div>
                </div>
            </div>

            {/* 3. Documents */}
            <div className="mb-10">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-bck-blue flex items-center justify-center text-xs mr-2">3</span>
                    Document Uploads
                </h4>
                <div className="space-y-6">
                    {/* Passport Photos */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-bck-blue transition-colors bg-gray-50/50">
                        <div className="flex flex-col items-center text-center">
                            <Upload className="w-8 h-8 text-gray-400 mb-2" />
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Passport Photos (Max 3)
                            </label>
                            <p className="text-xs text-gray-500 mb-4">Please upload exactly 3 recent clear photos.</p>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={(e) => handleFileChange(e, 'passportPhotos')}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-bck-blue hover:file:bg-blue-100 cursor-pointer"
                            />
                            {formik.touched.passportPhotos && formik.errors.passportPhotos && (
                                <div className="text-red-500 text-xs mt-2 font-medium flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{formik.errors.passportPhotos}</div>
                            )}
                            {formik.values.passportPhotos.length > 0 && (
                                <div className="mt-2 text-sm text-green-600 flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-1" />
                                    {formik.values.passportPhotos.length} files selected
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Result Slips */}
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 hover:border-bck-blue transition-colors bg-gray-50/50">
                        <div className="flex flex-col items-center text-center">
                            <Upload className="w-8 h-8 text-gray-400 mb-2" />
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Result Slip / Report Card
                            </label>
                            <input
                                type="file"
                                accept=".pdf,image/*"
                                onChange={(e) => handleFileChange(e, 'resultSlip')}
                                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-bck-blue hover:file:bg-blue-100 cursor-pointer"
                            />
                            {formik.touched.resultSlip && formik.errors.resultSlip && (
                                <div className="text-red-500 text-xs mt-2 font-medium flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{formik.errors.resultSlip}</div>
                            )}
                            {formik.values.resultSlip && (
                                <div className="mt-2 text-sm text-green-600 flex items-center">
                                    <CheckCircle className="w-4 h-4 mr-1" />
                                    {formik.values.resultSlip.name}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all transform active:scale-95 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-bck-blue hover:shadow-bck-blue/30 hover:-translate-y-1'
                    }`}
            >
                {isSubmitting ? 'Processing Application...' : 'Submit Application'}
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">
                By submitting, you declare that all information provided is accurate and true.
            </p>
        </form>
    )
}

export default ApplicationForm
