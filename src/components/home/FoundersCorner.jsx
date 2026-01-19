import React from 'react'

const FoundersCorner = () => {
  const foundersCorner = {
    quotePrefix: 'Poverty and ignorance combined are a',
    quoteHighlight: 'double tragedy',
    quoteSuffix: '.',
    author: 'Bishop Cipriano Kihangire',
    years: '1918 – 1990'
  }

  return (
    <section className="py-20 px-8 sm:px-6 lg:px-24 bg-linear-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-200">Founder's Wisdom</span>

          <blockquote className="space-y-4">
            <p className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              "{foundersCorner.quotePrefix}{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-200 to-yellow-100">
                {foundersCorner.quoteHighlight}
              </span>
              {foundersCorner.quoteSuffix}"
            </p>
          </blockquote>

          <div className="pt-8 border-t border-blue-400/30">
            <p className="text-xl font-semibold">{foundersCorner.author}</p>
            <p className="text-sm text-blue-200">{foundersCorner.years}</p>
          </div>

          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
            This guiding principle continues to drive our mission to provide transformative education that lifts students and families out of poverty through knowledge and moral excellence.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FoundersCorner
