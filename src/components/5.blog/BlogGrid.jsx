import React from 'react'
import { Calendar, User, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import blogData from '../../data/blogData.json'

const BlogGrid = () => {
    const { posts } = blogData;

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
                <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all group"
                >
                    {/* Image Placeholder */}
                    <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-sm font-medium relative overflow-hidden">
                        <div className="absolute inset-0 bg-bck-blue/10 group-hover:bg-bck-blue/20 transition-colors"></div>
                        {post.imagePlaceholder}
                    </div>

                    <div className="p-6">
                        <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                            <span className="bg-blue-50 text-bck-blue px-2 py-1 rounded-md font-semibold">{post.category}</span>
                            <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                        </div>

                        <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-bck-blue transition-colors">
                            {post.title}
                        </h3>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                            <span className="flex items-center text-xs text-gray-500">
                                <User className="w-3 h-3 mr-1" /> {post.author}
                            </span>
                            <button className="text-bck-blue text-sm font-bold flex items-center hover:translate-x-1 transition-transform">
                                Read More <ArrowRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default BlogGrid
