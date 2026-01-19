import React from 'react'
import { FileText, CheckCircle2, AlertTriangle } from 'lucide-react'
import admissionsData from '../../data/admissionsData.json'

const RequirementsSection = () => {
    const { requirements, academicLevels, admissionProcess } = admissionsData;

    return (
        <div className="space-y-16">
            {/* Academic Levels */}
            <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Entry Levels</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {academicLevels && academicLevels.map((level, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{level.level}</h3>
                            <p className="text-gray-600 mb-6">{level.description}</p>
                            <div>
                                <p className="font-semibold text-gray-800 mb-3">Typical Entry Requirements:</p>
                                <ul className="space-y-2">
                                    {level.requirements && level.requirements.map((req, ridx) => (
                                        <li key={ridx} className="flex items-start text-gray-700">
                                            <span className="text-blue-600 font-bold mr-2">•</span>
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Document Requirements */}
            <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Required Documents</h2>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <FileText className="w-6 h-6 mr-3 text-blue-600" />
                                Required Documents
                            </h3>
                            <ul className="space-y-3">
                                {requirements && requirements.map((req, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-0.5 shrink-0" />
                                        <div>
                                            <p className="font-semibold text-gray-800">{req.item}</p>
                                            <p className="text-sm text-gray-600">{req.note}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                <AlertTriangle className="w-6 h-6 mr-3 text-amber-600" />
                                Important Notes
                            </h3>
                            <div className="space-y-4 text-gray-800">
                                <div className="bg-white rounded-lg p-4 border-l-4 border-amber-500">
                                    <p className="font-semibold mb-1">Preparation</p>
                                    <p className="text-sm">Ensure you have digital copies of all required documents before starting your application.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                                    <p className="font-semibold mb-1">Academic Records</p>
                                    <p className="text-sm">Original or official copies of your recent academic results (O-Level or A-Level certificates).</p>
                                </div>
                                <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                                    <p className="font-semibold mb-1">Identification</p>
                                    <p className="text-sm">Valid national ID or passport for identification purposes.</p>
                                </div>
                                <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                                    <p className="font-semibold mb-1">Support Documents</p>
                                    <p className="text-sm">Birth certificate and any other relevant supporting documents.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Admission Process */}
            <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">Application Process</h2>
                {admissionProcess && (
                    <div className="space-y-6">
                        {admissionProcess.map((step, idx) => (
                            <div key={idx} className="flex gap-6">
                                <div className="shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold text-lg">
                                        {idx + 1}
                                    </div>
                                </div>
                                <div className="grow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.step}</h3>
                                    <p className="text-gray-600 mb-2">{step.description}</p>
                                    {step.details && (
                                        <ul className="space-y-1 text-gray-600 text-sm ml-4">
                                            {step.details.map((detail, didx) => (
                                                <li key={didx} className="flex items-start">
                                                    <span className="text-blue-600 mr-2">→</span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-12">
                <h2 className="text-2xl font-bold mb-6">Questions?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <p className="text-blue-100 mb-2">Email</p>
                        <p className="font-bold text-lg">admissions@bck.ac.ug</p>
                    </div>
                    <div>
                        <p className="text-blue-100 mb-2">Phone</p>
                        <p className="font-bold text-lg">+256 414 250 404</p>
                    </div>
                    <div>
                        <p className="text-blue-100 mb-2">Location</p>
                        <p className="font-bold text-lg">Bbiina, Luzira, Kampala</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequirementsSection
