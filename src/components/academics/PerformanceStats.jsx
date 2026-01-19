import React, { useMemo } from 'react'
import informationData from '../../data/informationData.json'
import PerformanceTable from './PerformanceTable'

/**
 * PerformanceStats Component
 * Displays academic excellence metrics and historical examination results for UCE and UACE.
 */
const PerformanceStats = () => {
  const { performance } = informationData

  // UCE Table Column Definitions
  const uceColumns = useMemo(() => [
    {
      header: 'Year',
      accessorKey: 'year',
    },
    {
      header: 'Total Candidates',
      accessorKey: 'total',
    },
    {
      header: 'Division 1',
      accessorKey: 'div1',
      cell: info => <span className="font-bold text-bck-blue">{info.getValue()}</span>
    },
    {
      header: 'Division 2',
      accessorKey: 'div2',
    },
    {
      header: 'Division 3+',
      accessorKey: 'div3',
    },
  ], [])

  // UACE Table Column Definitions
  const uaceColumns = useMemo(() => [
    {
      header: 'Year',
      accessorKey: 'year',
    },
    {
      header: 'Total Sat',
      accessorKey: 'total',
    },
    {
      header: '3 Principal Passes',
      accessorKey: 'p3',
      cell: info => <span className="font-bold text-blue-700">{info.getValue()}</span>
    },
    {
      header: '2 Principal Passes',
      accessorKey: 'p2',
    },
    {
      header: '1 Principal Pass',
      accessorKey: 'p1',
    },
    {
      header: 'No Principal Pass',
      accessorKey: 'p0',
    },
  ], [])

  return (
    <div className="space-y-16">
      {/* Intro Section */}
      <div className="bg-linear-to-r from-blue-50 to-transparent p-8 rounded-2xl border border-blue-100">
        <p className="text-gray-700 leading-relaxed text-lg italic">
          "{performance.intro}"
        </p>
      </div>

      {/* Snapshot Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {performance.stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 text-center shadow-sm hover:shadow-md transition-shadow group">
            <p className="text-xs text-gray-400 mb-2 font-bold uppercase tracking-widest">{stat.label}</p>
            <p className="text-5xl font-extrabold text-bck-blue group-hover:scale-110 transition-transform duration-300">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* UCE Results Table */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
          <h3 className="text-2xl font-serif font-bold text-gray-900">UCE Performance Summary</h3>
        </div>
        <PerformanceTable data={performance.uceResults} columns={uceColumns} />
      </div>

      {/* UACE Results Table */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-8 w-1 bg-blue-600 rounded-full"></div>
          <h3 className="text-2xl font-serif font-bold text-gray-900">UACE Performance Table (Last 5 Years)</h3>
        </div>
        <PerformanceTable data={performance.uaceResults} columns={uaceColumns} />
      </div>

      {/* Highlights Section */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg">
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8 flex items-center gap-2">
          🏅 Academic Highlights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {performance.highlights.map((highlight, index) => (
            <div key={index} className="flex items-start bg-blue-50/50 p-6 rounded-xl border border-blue-100">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 mr-4 text-xs font-bold">
                ★
              </span>
              <span className="text-gray-700 leading-relaxed font-semibold">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PerformanceStats
