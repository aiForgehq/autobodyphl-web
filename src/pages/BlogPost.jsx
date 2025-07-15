import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'

const BlogPost = () => {
  const { slug } = useParams()

  // This would typically come from your CMS or API
  const blogPosts = {
    'top-5-questions-collision-repair-philadelphia': {
      title: 'Top 5 Questions About Collision Repair in Philadelphia',
      author: 'Mike Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'Collision Repair',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      excerpt: 'Get answers to the most common questions about collision repair services in Philadelphia, Manayunk, and Roxborough.',
      content: `
        <p>When your vehicle is involved in a collision in Philadelphia, you likely have many questions about the repair process. As a trusted auto body shop serving Manayunk, Roxborough, and Philadelphia, we've compiled answers to the most frequently asked questions.</p>

        <h2>1. How Long Will My Collision Repair Take?</h2>
        <p>The timeline for collision repair in Philadelphia depends on several factors:</p>
        <ul>
          <li>Extent of damage to your vehicle</li>
          <li>Availability of parts for your specific make and model</li>
          <li>Insurance approval process</li>
          <li>Current workload at the shop</li>
        </ul>
        <p>Most collision repairs in our Philadelphia shop take between 3-10 business days. We'll provide you with a detailed timeline during your initial estimate.</p>

        <h2>2. Will My Insurance Cover the Collision Repair?</h2>
        <p>Insurance coverage for collision repair in Philadelphia depends on your policy and the circumstances of the accident. We work with all major insurance companies and can help you navigate the claims process. Our team will:</p>
        <ul>
          <li>Review your insurance policy details</li>
          <li>Communicate directly with your adjuster</li>
          <li>Provide detailed repair estimates</li>
          <li>Handle all necessary documentation</li>
        </ul>

        <h2>3. Can I Choose My Own Auto Body Shop in Philadelphia?</h2>
        <p>Yes! In Pennsylvania, you have the right to choose your preferred auto body shop for collision repair. While your insurance company may recommend certain shops, you're not required to use them. Choose a shop based on:</p>
        <ul>
          <li>Reputation and reviews</li>
          <li>Certifications and qualifications</li>
          <li>Quality of previous work</li>
          <li>Customer service experience</li>
        </ul>

        <h2>4. What Should I Do Immediately After a Collision?</h2>
        <p>If you're involved in a collision in Philadelphia, Manayunk, or Roxborough, follow these steps:</p>
        <ul>
          <li>Ensure everyone's safety and call 911 if needed</li>
          <li>Document the scene with photos</li>
          <li>Exchange insurance information</li>
          <li>Contact your insurance company</li>
          <li>Get a police report if required</li>
          <li>Contact a trusted auto body shop for an estimate</li>
        </ul>

        <h2>5. How Do I Know if the Repair Quality is Good?</h2>
        <p>A quality collision repair in Philadelphia should meet these standards:</p>
        <ul>
          <li>Paint matches perfectly with no visible differences</li>
          <li>Panel gaps are even and consistent</li>
          <li>All safety systems function properly</li>
          <li>No rattles or unusual noises</li>
          <li>Warranty provided on all work</li>
        </ul>

        <h2>Why Choose Our Philadelphia Auto Body Shop?</h2>
        <p>Our collision repair center in Philadelphia offers:</p>
        <ul>
          <li>ASE-certified technicians</li>
          <li>State-of-the-art equipment</li>
          <li>Direct insurance billing</li>
          <li>Lifetime warranty on repairs</li>
          <li>Free estimates</li>
        </ul>

        <p>If you need collision repair in Philadelphia, Manayunk, or Roxborough, contact us today at <a href="tel:267-297-7034">267-297-7034</a> for your free estimate.</p>
      `
    },
    'lease-return-prep-manayunk': {
      title: 'How to Prepare Your Car for Lease Return in Manayunk',
      author: 'Sarah Rodriguez',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Lease Return',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      excerpt: 'Avoid costly lease return fees with our comprehensive guide to preparing your vehicle.',
      content: `
        <p>Returning a leased vehicle in Manayunk can be stressful, especially when you're worried about potential fees. Our auto body shop has helped hundreds of customers prepare their vehicles for lease return, saving them thousands in unnecessary charges.</p>

        <h2>Understanding Lease Return Standards</h2>
        <p>Most lease agreements allow for "normal wear and tear" but charge for excessive damage. Here's what's typically considered acceptable:</p>
        
        <h3>Normal Wear and Tear:</h3>
        <ul>
          <li>Minor scratches less than 2 inches</li>
          <li>Small stone chips in the paint</li>
          <li>Minor interior wear</li>
          <li>Tire wear within acceptable limits</li>
        </ul>

        <h3>Excessive Damage (Subject to Fees):</h3>
        <ul>
          <li>Dents larger than a quarter</li>
          <li>Scratches longer than 2 inches</li>
          <li>Rust or corrosion</li>
          <li>Cracked or broken glass</li>
          <li>Missing parts or accessories</li>
        </ul>

        <h2>Pre-Return Inspection Checklist</h2>
        <p>Before returning your lease in Manayunk, conduct a thorough inspection:</p>

        <h3>Exterior Inspection:</h3>
        <ul>
          <li>Check all panels for dents and scratches</li>
          <li>Inspect bumpers for cracks or damage</li>
          <li>Examine wheels for curb rash</li>
          <li>Look for rust spots, especially around wheel wells</li>
          <li>Check all lights and mirrors</li>
        </ul>

        <h3>Interior Inspection:</h3>
        <ul>
          <li>Check seats for tears or excessive wear</li>
          <li>Inspect carpets and floor mats</li>
          <li>Test all electronic systems</li>
          <li>Ensure all keys and remotes are present</li>
        </ul>

        <h2>Cost-Effective Repair Strategies</h2>
        <p>Our lease return prep service in Manayunk focuses on cost-effective repairs that prevent excessive fees:</p>

        <h3>Paintless Dent Repair (PDR):</h3>
        <p>For small dents without paint damage, PDR is often the most economical solution. This process:</p>
        <ul>
          <li>Costs significantly less than traditional bodywork</li>
          <li>Maintains original paint finish</li>
          <li>Can be completed quickly</li>
          <li>Prevents lease return penalties</li>
        </ul>

        <h3>Touch-Up Paint Services:</h3>
        <p>Minor scratches and chips can be addressed with professional touch-up services:</p>
        <ul>
          <li>Color-matched paint application</li>
          <li>Professional blending techniques</li>
          <li>Clear coat protection</li>
          <li>Much less expensive than panel repainting</li>
        </ul>

        <h2>When to Repair vs. Pay the Fee</h2>
        <p>Sometimes it's more economical to pay the lease-end fee rather than repair damage. Consider repair when:</p>
        <ul>
          <li>Repair cost is less than 70% of the estimated fee</li>
          <li>Multiple small damages can be fixed together</li>
          <li>The damage affects vehicle safety or function</li>
        </ul>

        <h2>Timeline for Lease Return Prep</h2>
        <p>Start preparing your vehicle 60-90 days before your lease ends:</p>
        <ul>
          <li><strong>90 days before:</strong> Schedule pre-inspection</li>
          <li><strong>60 days before:</strong> Complete necessary repairs</li>
          <li><strong>30 days before:</strong> Final inspection and touch-ups</li>
          <li><strong>Return day:</strong> Clean vehicle thoroughly</li>
        </ul>

        <h2>Our Lease Return Prep Service</h2>
        <p>Our Manayunk auto body shop offers comprehensive lease return preparation:</p>
        <ul>
          <li>Detailed pre-return inspection</li>
          <li>Cost analysis of repairs vs. fees</li>
          <li>Professional repair services</li>
          <li>Final preparation and cleaning</li>
          <li>Documentation for your records</li>
        </ul>

        <p>Don't let lease return fees catch you off guard. Contact our Manayunk auto body shop at <a href="tel:267-297-7034">267-297-7034</a> to schedule your lease return preparation today.</p>
      `
    }
  }

  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="pt-20 section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  const relatedPosts = [
    {
      title: 'Winter Car Care Tips for Philadelphia Drivers',
      slug: 'winter-car-care-philadelphia',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg'
    },
    {
      title: 'Navigating Auto Insurance Claims: A Complete Guide',
      slug: 'insurance-claims-process-guide',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg'
    }
  ]

  return (
    <div className="pt-20">
      {/* Article Header */}
      <section className="section-padding bg-gradient-to-r from-dark-900 to-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Blog</span>
            </Link>

            <div className="mb-6">
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
            </div>

            <p className="text-xl text-gray-300 max-w-3xl">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-80 object-cover rounded-xl mb-8"
              />

              <div 
                className="prose prose-lg prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  color: '#d1d5db',
                  lineHeight: '1.7'
                }}
              />

              {/* Share Buttons */}
              <div className="mt-12 pt-8 border-t border-dark-700">
                <h3 className="text-lg font-semibold text-white mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    <Facebook size={18} />
                    <span>Facebook</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors">
                    <Twitter size={18} />
                    <span>Twitter</span>
                  </button>
                  <button className="flex items-center space-x-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-1"
            >
              {/* Contact CTA */}
              <div className="card-dark mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Need Auto Body Repair?</h3>
                <p className="text-gray-400 mb-4">
                  Get a free estimate from Philadelphia's trusted auto body experts.
                </p>
                <a href="tel:267-297-7034" className="btn-primary w-full text-center">
                  Call: 267-297-7034
                </a>
              </div>

              {/* Related Posts */}
              <div className="card-dark">
                <h3 className="text-lg font-semibold text-white mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost, index) => (
                    <Link
                      key={index}
                      to={`/blog/${relatedPost.slug}`}
                      className="block group"
                    >
                      <div className="flex space-x-3">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div>
                          <h4 className="text-white group-hover:text-primary-400 transition-colors text-sm font-medium line-clamp-2">
                            {relatedPost.title}
                          </h4>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Ready for Professional Auto Body Repair?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact our Philadelphia auto body shop today for expert collision repair, 
              bumper repair, and all your auto body needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:267-297-7034" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Call: 267-297-7034
              </a>
              <Link to="/contact" className="bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-900 transition-colors">
                Get Free Estimate
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BlogPost
