import React, { useState } from 'react'
import { CheckCircle } from 'lucide-react'

const InnovationSpotlight = () => {
  const innovationSpotlight = {
    tag: 'Innovation Spotlight',
    titlePrefix: 'Reinventing School Democracy through',
    titleHighlight: 'Digital E-Voting',
    description: 'Experience the future of student leadership. Our transparent, secure, and instant digital voting system empowers students to choose their leaders with accountability and ease. Promoting transparency since 2025.',
    features: ['Real-time Results Processing', 'Biometric Verification', 'Audit Trail Transparency'],
    cta: 'View E-Voting Demo',
    participationLabel: 'Participation',
    participationValue: '98.5%'
  }
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-20 px-8 sm:px-6 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                {innovationSpotlight.tag}
              </span>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mt-4">
                {innovationSpotlight.titlePrefix}{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600">
                  {innovationSpotlight.titleHighlight}
                </span>
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              {innovationSpotlight.description}
            </p>

            <div className="space-y-3">
              {innovationSpotlight.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {innovationSpotlight.cta}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-linear-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 border border-blue-200">
              <div className="space-y-6">
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🗳️</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">E-Voting System</h3>
                  <p className="text-gray-700">Secure • Transparent • Instant Results</p>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <p className="text-sm text-gray-600 mb-2">{innovationSpotlight.participationLabel}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-blue-600">
                      {innovationSpotlight.participationValue}
                    </span>
                    <span className="text-gray-600">Student Participation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InnovationSpotlight
