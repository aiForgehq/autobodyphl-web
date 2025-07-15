import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Star, Shield, Clock, Award, ArrowRight, CheckCircle, Truck } from 'lucide-react'

const Home = () => {
  const services = [
    {
      title: 'Collision Repair',
      description: 'Expert collision repair services in Manayunk and Roxborough',
      icon: '🚗',
      link: '/services#collision-repair'
    },
    {
      title: 'Bumper Repair',
      description: 'Professional bumper repair and paint matching in Philadelphia',
      icon: '🔧',
      link: '/services#bumper-repair'
    },
    {
      title: 'Rust Repair',
      description: 'Complete rust removal and refinishing services',
      icon: '⚡',
      link: '/services#rust-repair'
    },
    {
      title: 'Fleet Services',
      description: 'Specialized repair services for Amazon DSPs and commercial fleets',
      icon: '🚛',
      link: '/fleet-repair-philadelphia'
    }
  ]

  const reviews = [
    {
      name: 'Sarah Johnson',
      location: 'Manayunk, PA',
      rating: 5,
      text: 'Outstanding work on my collision repair. The team was professional and my car looks brand new!'
    },
    {
      name: 'Mike Rodriguez',
      location: 'Roxborough, PA',
      rating: 5,
      text: 'Best auto body shop in Philadelphia! Fair prices and excellent customer service.'
    },
    {
      name: 'Jennifer Chen',
      location: 'Philadelphia, PA',
      rating: 5,
      text: 'They handled my insurance claim perfectly and the repair work exceeded my expectations.'
    }
  ]

  const trustBadges = [
    { icon: Shield, text: 'Licensed & Insured' },
    { icon: Award, text: 'ASE Certified' },
    { icon: Clock, text: '20+ Years Experience' },
    { icon: Star, text: '5-Star Reviews' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg"
            alt="Auto body repair shop in Philadelphia"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/90 to-dark-900/70"></div>
        </div>

        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8"
            >
              <span className="gradient-text">Auto Body Shop</span>
              <br />
              <span className="text-ultra-white">in Manayunk, Roxborough</span>
              <br />
              <span className="text-ultra-white">& Philadelphia</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Professional collision repair, bumper repair, and auto body services. 
              <strong className="text-primary-400"> Free estimates</strong> and insurance claims assistance.
              <br />
              <span className="text-primary-300">Now serving Amazon DSPs and commercial fleets!</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <a href="tel:267-297-7034" className="btn-primary text-lg px-10 py-5 flex items-center space-x-3 hover:scale-105 transition-all duration-300">
                <Phone size={22} />
                <span>Call Now: 267-297-7034</span>
              </a>
              <Link to="/contact" className="btn-secondary text-lg px-10 py-5 hover:scale-105 transition-all duration-300">
                Get Free Estimate
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center p-6 bg-dark-800/60 rounded-xl backdrop-blur-sm border border-dark-700/50 hover:border-primary-600/50 transition-all duration-300 group hover-lift"
                >
                  <badge.icon className="text-primary-400 mb-3 group-hover:scale-110 transition-transform duration-300" size={28} />
                  <span className="text-sm text-gray-300 font-medium">{badge.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="padding-luxury bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="gradient-text">Auto Body Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive auto body repair services for Manayunk, Roxborough, and Philadelphia
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-dark group hover:scale-105 transition-all duration-500 hover-glow"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-ultra-white group-hover:text-primary-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <a
                  href={service.link}
                  className="text-primary-400 hover:text-primary-300 font-medium flex items-center space-x-2 group-hover:translate-x-2 transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/services" className="btn-primary text-lg px-8 py-4 hover:scale-105 transition-all duration-300">
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Fleet Services Highlight */}
      <section className="padding-luxury bg-gradient-to-r from-primary-900/20 to-primary-800/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Truck className="text-primary-400" size={32} />
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                <span className="gradient-text">Fleet & Commercial</span> Services
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Specialized auto body repair for Amazon DSPs, rental car companies, used car dealers, and corporate fleets
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/fleet-repair-philadelphia" className="btn-primary text-lg px-8 py-4">
                Fleet Services
              </Link>
              <a href="tel:267-297-7034" className="btn-secondary text-lg px-8 py-4">
                Fleet Estimate
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Before & After Preview */}
      <section className="padding-luxury">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Before & After</span> Gallery
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See the quality of our auto body repair work in Philadelphia
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                before: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
                after: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
                title: 'Collision Repair - Manayunk'
              },
              {
                before: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
                after: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
                title: 'Bumper Repair - Roxborough'
              },
              {
                before: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
                after: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
                title: 'Fleet Vehicle - Philadelphia'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-dark hover-lift"
              >
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div>
                    <p className="text-sm text-gray-400 mb-2 font-medium">Before</p>
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={item.before}
                      alt={`Before ${item.title}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2 font-medium">After</p>
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={item.after}
                      alt={`After ${item.title}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-ultra-white">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link to="/gallery" className="btn-primary text-lg px-8 py-4">
              View Full Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="padding-luxury bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trusted by hundreds of customers in Manayunk, Roxborough, and Philadelphia
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-dark hover-lift"
              >
                <div className="flex items-center mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current hover:scale-110 transition-transform duration-300" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-ultra-white">{review.name}</p>
                  <p className="text-sm text-primary-400">{review.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="padding-luxury">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-16 hover-glow"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Ready to Restore Your Vehicle?
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Get a free estimate today! We serve Manayunk, Roxborough, and all of Philadelphia with professional auto body repair services.
              <br />
              <strong>Now offering specialized fleet services for commercial operations.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:267-297-7034" className="bg-white text-primary-600 px-10 py-5 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105">
                <Phone size={22} />
                <span>Call: 267-297-7034</span>
              </a>
              <Link to="/contact" className="bg-primary-800 text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-primary-900 transition-all duration-300 hover:scale-105">
                Get Free Estimate
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
