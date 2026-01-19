import React from 'react'
import { CheckCircle2, AlertTriangle } from 'lucide-react'
import ApplicationForm from '../../components/admissions/ApplicationForm'
import admissionsData from '../../data/admissionsData.json'

const ApplicationSection = () => {
    const { requirements } = admissionsData;

    return (
        <div className="space-y-16">
            <div className="grid lg:grid-cols-3 gap-12">
                {/* Left Sidebar: Requirements */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 sticky top-32">
                        <h3 className="text-xl font-serif font-bold text-bck-blue mb-6 border-b pb-4 border-gray-100">
                            Requirements Checklist
                        </h3>
                        <div className="space-y-2 mb-6 text-sm text-amber-700 bg-amber-50 p-4 rounded-lg flex items-start">
                            <AlertTriangle className="w-5 h-5 mr-2 shrink-0" />
                            <p>Ensure you have digital copies of these items before starting.</p>
                        </div>
                        <ul className="space-y-4">
                            {requirements && requirements.map((req) => (
                                <li key={req.id} className="flex items-start">
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 shrink-0" />
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

                {/* Main Form */}
                <div className="lg:col-span-2">
                    <ApplicationForm />
                </div>
            </div>
        </div>
    )
}

export default ApplicationSection
