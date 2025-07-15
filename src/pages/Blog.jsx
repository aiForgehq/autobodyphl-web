import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      slug: 'top-5-questions-collision-repair-philadelphia',
      title: 'Top 5 Questions About Collision Repair in Philadelphia',
      excerpt: 'Get answers to the most common questions about collision repair services in Philadelphia, Manayunk, and Roxborough. Learn about insurance claims, repair timelines, and what to expect.',
      author: 'Mike Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Collision Repair',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      featured: true
    },
    {
      id: 2,
      slug: 'lease-return-prep-manayunk',
      title: 'How to Prepare Your Car for Lease Return in Manayunk',
      excerpt: 'Avoid costly lease return fees with our comprehensive guide to preparing your vehicle. Learn what damage is acceptable and how to handle repairs cost-effectively.',
      author: 'Sarah Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Lease Return',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      featured: true
    },
    {
      id: 3,
      slug: 'winter-car-care-philadelphia',
      title: 'Winter Car Care Tips for Philadelphia Drivers',
      excerpt: 'Protect your vehicle from harsh Philadelphia winters. Learn about rust prevention, paint protection, and seasonal maintenance tips from our experts.',
      author: 'David Chen',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Maintenance',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      featured: false
    },
    {
      id: 4,
      slug: 'insurance-claims-process-guide',
      title: 'Navigating Auto Insurance Claims: A Complete Guide',
      excerpt: 'Step-by-step guide to filing and managing auto insurance claims for collision repair. Learn how to work with adjusters and maximize your coverage.',
      author: 'Mike Johnson',
      date: '2024-01-01',
      readTime: '8 min read',
      category: 'Insurance',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      featured: false
    },
    {
      id: 5,
      slug: 'paintless-dent-repair-benefits',
      title: 'Benefits of Paintless Dent Repair (PDR)',
      excerpt: 'Discover why paintless dent repair is often the best choice for minor dents. Learn about the process, benefits, and when PDR is the right solution.',
      author: 'Sarah Rodriguez',
      date: '2023-12-28',
      readTime: '4 min read',
      category: 'Dent Repair',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      featured: false
    },
    {
      id: 6,
      slug: 'choosing-auto-body-shop-philadelphia',
      title: 'How to Choose the Right Auto Body Shop in Philadelphia',
      excerpt: 'Essential tips for selecting a trustworthy auto body shop in Philadelphia. Learn what to look for in certifications, reviews, and service quality.',
      author: 'David Chen',
      date: '2023-12-25',
      readTime: '6 min read',
      category: 'Tips',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      featured: false
    }
  ]

  const categories = [
    'All Posts',
    'Collision Repair',
    'Lease Return',
    'Maintenance',
    'Insurance',
    'Dent Repair',
    'Tips'
  ]

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-dark-900 to-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Auto Body <span className="gradient-text">Expert Tips</span> & Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed with the latest auto body repair tips, industry insights, and maintenance advice 
              from Philadelphia's trusted collision repair experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              <span className="gradient-text">Featured</span> Articles
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-dark group hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary-400 hover:text-primary-300 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read More</span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-display font-bold mb-8 text-center">
              All <span className="gradient-text">Articles</span>
            </h2>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-lg font-medium transition-all duration-300 bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white"
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-dark group hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-xs text-gray-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <User size={12} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-primary-400 hover:text-primary-300 font-medium flex items-center space-x-1 text-sm group-hover:translate-x-1 transition-transform"
                    >
                      <span>Read</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Stay Updated
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get the latest auto body repair tips, maintenance advice, and industry insights 
              delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-dark-900 placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-900 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blog
