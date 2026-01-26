import React, { useMemo } from 'react'
import informationData from '../../data/informationData.json'
import PerformanceTable from './PerformanceTable'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Award, GraduationCap } from 'lucide-react'

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
      cell: info => <span className="font-semibold text-gray-900">{info.getValue()}</span>
    },
    {
      header: 'Candidates',
      accessorKey: 'total',
    },
    {
      header: 'Division 1',
      accessorKey: 'div1',
      cell: info => <span className="font-bold text-[#003399] bg-blue-50 px-2 py-1 rounded inline-block min-w-12 text-center">{info.getValue()}</span>
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
      cell: info => <span className="font-semibold text-gray-900">{info.getValue()}</span>
    },
    {
      header: 'Total Sat',
      accessorKey: 'total',
    },
    {
      header: '3 Principal',
      accessorKey: 'p3',
      cell: info => <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded inline-block min-w-12 text-center">{info.getValue()}</span>
    },
    {
      header: '2 Principal',
      accessorKey: 'p2',
    },
    {
      header: '1 Principal',
      accessorKey: 'p1',
    },
    {
      header: 'Subsidiary',
      accessorKey: 'p0',
    },
  ], [])

  return (
    <div className="space-y-20">
      {/* Intro Section */}
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-[#003399] font-bold uppercase tracking-widest text-xs mb-3 block">Excellence in Numbers</span>
        <p className="text-xl md:text-2xl font-serif text-gray-900 italic">
          "{performance.intro}"
        </p>
      </motion.div>

      {/* Snapshot Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {performance.stats.map((stat, index) => (
          <motion.div 
            key={index} 
            className="bg-white rounded-2xl border border-gray-100 p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="inline-flex mb-4 p-3 bg-blue-50 rounded-xl text-[#003399]">
                 {index === 0 ? <TrendingUp className="w-6 h-6" /> : index === 1 ? <GraduationCap className="w-6 h-6" /> : <Award className="w-6 h-6" />}
            </div>
            <p className="text-sm text-gray-400 mb-2 font-bold uppercase tracking-widest">{stat.label}</p>
            <p className="text-5xl font-extrabold text-[#003399] tracking-tight">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {/* UCE Results Table */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
            <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-1 bg-[#003399] rounded-full"></div>
            <h3 className="text-2xl font-serif font-bold text-gray-900">UCE Performance</h3>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                 <PerformanceTable data={performance.uceResults} columns={uceColumns} />
            </div>
        </motion.div>

        {/* UACE Results Table */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
        >
            <div className="flex items-center gap-4 mb-6">
            <div className="h-8 w-1 bg-emerald-600 rounded-full"></div>
            <h3 className="text-2xl font-serif font-bold text-gray-900">UACE Performance</h3>
            </div>
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <PerformanceTable data={performance.uaceResults} columns={uaceColumns} />
            </div>
        </motion.div>
      </div>

      {/* Highlights Section */}
      <motion.div 
        className="bg-[#002366] text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10">
            <h3 className="text-3xl font-serif font-bold mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-yellow-400" />
            Academic Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {performance.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start bg-white/10 p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
                <span className="w-6 h-6 rounded-full bg-yellow-400 text-[#002366] flex items-center justify-center shrink-0 mr-4 mt-0.5 text-xs font-black shadow-lg">
                    ✓
                </span>
                <span className="text-blue-50 leading-relaxed font-medium text-lg">{highlight}</span>
                </div>
            ))}
            </div>
        </div>
      </motion.div>
    </div>
  )
}

export default PerformanceStats
