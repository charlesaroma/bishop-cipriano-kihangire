import React from 'react'
import AuroraBackground from '../global/AuroraBackground'

const Hero = () => {
  const hero = {
    badge: 'Celebrating 25 Years of Excellence',
    title: 'Bishop Cipriano',
    titleHighlight: 'Kihangire SSS',
    description: 'Empowering the next generation through holistic education, discipline, and spiritual growth. Join a legacy of academic excellence and moral integrity.',
    primaryCta: 'Apply for 2025',
    secondaryCta: 'Watch Our Story'
  }

  return (
    <div className="relative min-h-screen bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      <AuroraBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-6 lg:px-24 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full text-sm text-blue-200">
                {hero.badge}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
              {hero.title}{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
                {hero.titleHighlight}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="/admissions/apply" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                {hero.primaryCta}
              </a>
              <button className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 rounded-lg font-semibold transition-colors">
                {hero.secondaryCta}
              </button>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative w-full h-96 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-400/30 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏫</div>
                <p className="text-gray-300">Bishop Cipriano Kihangire</p>
                <p className="text-sm text-gray-400">Senior Secondary School</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-white to-transparent opacity-5"></div>
    </div>
  )
}

export default Hero
