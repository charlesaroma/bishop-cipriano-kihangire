import React from 'react'
import { Calendar, User, Tag } from 'lucide-react'
import blogData from '../../data/blogData.json'

const BlogGrid = () => {
  const { posts } = blogData

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
          {/* Image Placeholder */}
          <div className="h-48 bg-linear-to-br from-blue-100 to-cyan-100 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <div className="text-5xl mb-3">📰</div>
              <p className="text-gray-600 text-sm">{post.imagePlaceholder}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Category Tag */}
            <div className="mb-3">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-bck-blue transition-colors">
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="pt-4 border-t border-gray-200 space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-bck-blue" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-bck-blue" />
                <span>{post.author}</span>
              </div>
            </div>

            {/* Read More Button */}
            <button className="mt-6 w-full py-2 px-4 bg-bck-blue text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Read More
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}

export default BlogGrid
