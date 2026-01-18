import React from 'react'
import ApplicationForm from '../../components/4.admissions/ApplicationForm'
import { CheckCircle2, AlertTriangle } from 'lucide-react'
import admissionsData from '../../data/admissionsData.json'

const ApplyNowPage = () => {
    const { requirements } = admissionsData;

    return (
        <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-bck-blue font-semibold tracking-wider uppercase text-sm bg-blue-50 px-3 py-1 rounded-full">Admissions 2025</span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-4 mb-6">
                    Start Your Journey With Us
                </h1>
                <p className="text-lg text-gray-600">
                    Join a community dedicated to academic excellence. Complete the form below to apply for S.1 or S.5 vacancies.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
                {/* Left Sidebar: Requirements */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-32">
                        <h3 className="text-xl font-serif font-bold text-bck-blue mb-6 border-b pb-4 border-gray-100">
                            Requirements Checklist
                        </h3>
                        <div className="space-y-2 mb-6 text-sm text-amber-700 bg-amber-50 p-4 rounded-lg flex items-start">
                            <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
                            <p>Ensure you have digital copies of these items before starting.</p>
                        </div>
                        <ul className="space-y-4">
                            {requirements.map((req) => (
                                <li key={req.id} className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-800">{req.item}</p>
                                        <p className="text-xs text-gray-500">{req.note}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                            <p className="text-sm text-gray-500 mb-2">Need help?</p>
                            <p className="font-bold text-bck-blue">admissions@bck.ac.ug</p>
                        </div>
                    </div>
                </div>

                {/* Right Content: Form */}
                <div className="lg:col-span-2">
                    <ApplicationForm />
                </div>
            </div>
        </div>
    )
}

export default ApplyNowPage
