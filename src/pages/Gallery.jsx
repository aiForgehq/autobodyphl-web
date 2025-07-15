import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'collision', name: 'Collision Repair' },
    { id: 'bumper', name: 'Bumper Repair' },
    { id: 'rust', name: 'Rust Repair' },
    { id: 'dent', name: 'Dent Removal' }
  ]

  const galleryItems = [
    {
      id: 1,
      category: 'collision',
      title: 'Collision Repair - Manayunk',
      before: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      after: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      description: 'Complete collision repair on a 2020 Honda Civic. Frame straightening, panel replacement, and paint matching.',
      location: 'Manayunk, PA',
      testimonial: 'Excellent work! My car looks brand new again.',
      customer: 'Sarah M.'
    },
    {
      id: 2,
      category: 'bumper',
      title: 'Bumper Repair & Paint - Roxborough',
      before: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      after: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      description: 'Front bumper repair and paint matching on a 2019 Toyota Camry. Perfect color match achieved.',
      location: 'Roxborough, PA',
      testimonial: 'Amazing color match! You can\'t even tell it was damaged.',
      customer: 'Mike R.'
    },
    {
      id: 3,
      category: 'rust',
      title: 'Rust Repair - Philadelphia',
      before: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      after: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      description: 'Extensive rust repair on a 2015 Ford F-150. Metal fabrication and complete refinishing.',
      location: 'Philadelphia, PA',
      testimonial: 'They saved my truck! Professional work at a fair price.',
      customer: 'John D.'
    },
    {
      id: 4,
      category: 'collision',
      title: 'Side Impact Repair - Manayunk',
      before: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      after: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      description: 'Side impact collision repair on a 2018 Subaru Outback. Door replacement and paint work.',
      location: 'Manayunk, PA',
      testimonial: 'Fast service and quality work. Highly recommend!',
      customer: 'Lisa K.'
    },
    {
      id: 5,
      category: 'dent',
      title: 'Hail Damage Repair - Philadelphia',
      before: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      after: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      description: 'Paintless dent repair for hail damage on a 2021 BMW 3 Series. Multiple dents removed.',
      location: 'Philadelphia, PA',
      testimonial: 'Incredible PDR work! Saved me thousands on repainting.',
      customer: 'David L.'
    },
    {
      id: 6,
      category: 'bumper',
      title: 'Rear Bumper Repair - Roxborough',
      before: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      after: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      description: 'Rear bumper repair and refinishing on a 2017 Jeep Cherokee. Texture matching and paint.',
      location: 'Roxborough, PA',
      testimonial: 'Perfect match! Great customer service throughout.',
      customer: 'Maria S.'
    }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const openLightbox = (item) => {
    setSelectedImage(item)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setSelectedImage(filteredItems[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id)
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setSelectedImage(filteredItems[prevIndex])
  }

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
              <span className="gradient-text">Before & After</span> Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the quality of our auto body repair work in Manayunk, Roxborough, and Philadelphia. 
              Every project showcases our commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-dark-900">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-dark group cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Before</p>
                    <img
                      src={item.before}
                      alt={`Before ${item.title}`}
                      className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2">After</p>
                    <img
                      src={item.after}
                      alt={`After ${item.title}`}
                      className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                <p className="text-primary-400 text-sm font-medium">{item.location}</p>
                
                {item.testimonial && (
                  <div className="mt-4 pt-4 border-t border-dark-700">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={14} />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm italic">"{item.testimonial}"</p>
                    <p className="text-gray-400 text-xs mt-1">- {item.customer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-dark-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-display font-bold text-white">{selectedImage.title}</h2>
                <button
                  onClick={closeLightbox}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-400 mb-3">Before</p>
                  <img
                    src={selectedImage.before}
                    alt={`Before ${selectedImage.title}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <p className="text-gray-400 mb-3">After</p>
                  <img
                    src={selectedImage.after}
                    alt={`After ${selectedImage.title}`}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-300 mb-2">{selectedImage.description}</p>
                <p className="text-primary-400 font-medium">{selectedImage.location}</p>
              </div>

              {selectedImage.testimonial && (
                <div className="bg-dark-700 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{selectedImage.testimonial}"</p>
                  <p className="text-gray-400 text-sm mt-2">- {selectedImage.customer}</p>
                </div>
              )}

              <div className="flex justify-between items-center">
                <button
                  onClick={prevImage}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <ChevronLeft size={20} />
                  <span>Previous</span>
                </button>
                <button
                  onClick={nextImage}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              Ready for Quality Auto Body Work?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers in Manayunk, Roxborough, and Philadelphia. 
              Get your free estimate today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:267-297-7034" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Call: 267-297-7034
              </a>
              <a href="/contact" className="bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-900 transition-colors">
                Get Free Estimate
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
