import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, User } from 'lucide-react'
import { Link } from 'react-router-dom'

const NewsPreview = () => {
  const news = [
    {
      id: 1,
      category: 'Academic',
      title: 'UCE 2024 Results: 100% Division One Performance Confirmed',
      date: 'Feb 12, 2025',
      author: 'Academic Registrar'
    },
    {
      id: 2,
      category: 'Sports',
      title: 'Football Academy Qualifies for National Finals',
      date: 'Jan 28, 2025',
      author: 'Sports Department'
    },
    {
      id: 3,
      category: 'Events',
      title: 'Silver Jubilee Celebrations: Schedule Released',
      date: 'Jan 15, 2025',
      author: 'Administration'
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
             <motion.span 
              className="text-[#003399] font-semibold tracking-wider uppercase text-sm mb-2 block"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
             >
                Latest Updates
             </motion.span>
             <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold text-gray-900"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
             >
               News from the Hill
             </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
             <Link to="/news" className="group flex items-center gap-2 text-[#003399] font-medium hover:text-[#002366] transition-colors">
                View all news
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {news.map((item, index) => (
             <motion.div 
               key={item.id}
               className="group cursor-pointer"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
             >
                <div className="aspect-4/3 bg-gray-100 rounded-2xl mb-6 overflow-hidden relative">
                   {/* Placeholder Image Overlay */}
                   <div className="absolute inset-0 bg-[#003399]/5 group-hover:bg-[#003399]/10 transition-colors duration-300" />
                   <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-[#003399] uppercase tracking-wide">
                        {item.category}
                      </span>
                   </div>
                </div>

                <div className="space-y-3">
                   <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                         <Calendar className="w-4 h-4" />
                         {item.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                         <User className="w-4 h-4" />
                         {item.author}
                      </div>
                   </div>
                   <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#003399] transition-colors line-clamp-2">
                     {item.title}
                   </h3>
                   <p className="text-gray-600 line-clamp-2">
                     Click to read more about this update...
                   </p>
                </div>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  )
}

export default NewsPreview
