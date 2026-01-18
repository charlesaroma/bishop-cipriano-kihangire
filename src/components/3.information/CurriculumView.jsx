import React from 'react'
import { Book, Globe, Check } from 'lucide-react'
import informationData from '../../data/informationData.json'

const CurriculumView = () => {
    const { curriculum } = informationData;

    return (
        <div className="space-y-16">
            <div className="text-center max-w-3xl mx-auto">
                <p className="text-xl text-gray-600 leading-relaxed">{curriculum.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {curriculum.levels.map((level, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="bg-blue-50 p-3 rounded-xl text-bck-blue">
                                <Book className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-gray-900">{level.title}</h3>
                        </div>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {level.subjects.map((subject) => (
                                <li key={subject} className="flex items-center text-gray-700 text-sm">
                                    <div className="w-1.5 h-1.5 bg-bck-blue rounded-full mr-2"></div>
                                    {subject}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="bg-bck-blue text-white rounded-2xl p-8 md:p-12 text-center">
                <Globe className="w-10 h-10 mx-auto mb-4 text-blue-200" />
                <h3 className="text-2xl font-serif font-bold mb-6">International Languages</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {curriculum.languages.map((lang) => (
                        <span key={lang} className="bg-white/10 px-6 py-2 rounded-full text-lg font-medium backdrop-blur-sm border border-white/20">
                            {lang}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CurriculumView
