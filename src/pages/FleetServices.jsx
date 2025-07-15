import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Truck, Clock, Shield, Award, CheckCircle, Users, Wrench, Calendar, Star, Building, Target } from 'lucide-react'

const FleetServices = () => {
  const targetClients = [
    {
      icon: Truck,
      title: 'Amazon DSPs',
      description: 'Delivery Service Partners requiring fast, reliable collision repair with minimal downtime',
      benefits: ['Priority scheduling', '24-48 hour turnaround', 'Fleet volume pricing', 'Direct billing support']
    },
    {
      icon: Building,
      title: 'Rental Car Companies',
      description: 'Enterprise, Hertz, Budget, and independent rental agencies needing consistent quality repairs',
      benefits: ['Bulk repair discounts', 'Standardized processes', 'Quality guarantees', 'Rapid reconditioning']
    },
    {
      icon: Users,
      title: 'Used Car Dealers',
      description: 'Automotive dealers requiring reconditioning and cosmetic repair services',
      benefits: ['Lot-ready finishing', 'Competitive pricing', 'Flexible scheduling', 'Wholesale rates']
    },
    {
      icon: Wrench,
      title: 'Corporate Fleets',
      description: 'HVAC, construction, logistics, and service companies with vehicle fleets',
      benefits: ['Single point of contact', 'Fleet management support', 'Insurance coordination', 'Preventive maintenance']
    }
  ]

  const fleetCapabilities = [
    {
      title: 'High-Volume Processing',
      description: 'Dedicated bay space and streamlined workflows for fleet vehicles',
      icon: Target
    },
    {
      title: 'Priority Scheduling',
      description: 'Fleet vehicles get expedited service to minimize operational downtime',
      icon: Clock
    },
    {
      title: 'Volume Discounts',
      description: 'Competitive pricing tiers based on monthly and annual repair volumes',
      icon: Award
    },
    {
      title: 'Insurance Coordination',
      description: 'Direct billing and claims management for fleet insurance policies',
      icon: Shield
    },
    {
      title: 'Quality Assurance',
      description: 'Standardized repair processes with detailed documentation and warranties',
      icon: CheckCircle
    },
    {
      title: 'Fleet Management Support',
      description: 'Dedicated account management and reporting for fleet operations',
      icon: Users
    }
  ]

  const fleetPartners = [
    { name: 'Amazon DSP Network', logo: '📦', description: 'Authorized repair partner' },
    { name: 'Enterprise Holdings', logo: '🚗', description: 'Preferred vendor status' },
    { name: 'Philadelphia Fleet Association', logo: '🏢', description: 'Member organization' },
    { name: 'Commercial Auto Insurance', logo: '🛡️', description: 'Direct billing approved' }
  ]

  const testimonials = [
    {
      company: 'Philadelphia Logistics DSP',
      contact: 'Operations Manager',
      text: 'Their fleet repair service has been a game-changer for our Amazon delivery operation. Fast turnaround and competitive pricing keep our vans on the road.',
      rating: 5
    },
    {
      company: 'Metro Used Cars',
      contact: 'General Manager', 
      text: 'Professional reconditioning work that helps our inventory move faster. They understand the used car business and deliver lot-ready vehicles.',
      rating: 5
    },
    {
      company: 'Northeast HVAC Services',
      contact: 'Fleet Coordinator',
      text: 'Managing repairs for 25+ service vehicles was a headache until we found this shop. Single point of contact and transparent pricing.',
      rating: 5
    }
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
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg"
            alt="Fleet auto body repair in Philadelphia"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 to-dark-900/80"></div>
        </div>

        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                Fleet & Commercial Services
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
              <span className="gradient-text">Trusted Collision</span>
              <br />
              <span className="text-white">& Body Repair for</span>
              <br />
              <span className="gradient-text">Fleets in Philadelphia</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Specialized auto body repair services for <strong className="text-primary-400">Amazon DSPs</strong>, 
              rental car companies, used car dealers, and corporate fleets in Manayunk, Roxborough & Philadelphia.
              <br />
              <span className="text-primary-300">Priority scheduling • Volume discounts • Single point of contact</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <a href="tel:267-297-7034" className="btn-primary text-lg px-10 py-5 flex items-center space-x-3 transform hover:scale-105 transition-all duration-300">
                <Phone size={22} />
                <span>Book Fleet Estimate: 267-297-7034</span>
              </a>
              <a href="#fleet-contact" className="btn-secondary text-lg px-10 py-5 hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all duration-300">
                Schedule Fleet Walkthrough
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {[
                { icon: Shield, text: 'Licensed & Insured', subtext: 'Full commercial coverage' },
                { icon: Award, text: 'Fleet Certified', subtext: 'Specialized training' },
                { icon: Clock, text: '24-48 Hour Service', subtext: 'Priority scheduling' },
                { icon: Star, text: 'Volume Discounts', subtext: 'Competitive fleet rates' }
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center p-6 bg-dark-800/60 rounded-xl backdrop-blur-sm border border-dark-700/50 hover:border-primary-600/50 transition-all duration-300 group"
                >
                  <badge.icon className="text-primary-400 mb-3 group-hover:scale-110 transition-transform duration-300" size={28} />
                  <span className="text-white font-semibold mb-1">{badge.text}</span>
                  <span className="text-xs text-gray-400">{badge.subtext}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Target Clients Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Fleet Clients</span> We Serve
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized auto body repair services tailored for high-volume commercial operations in Philadelphia
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {targetClients.map((client, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-dark group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-primary-600/10"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-primary-600/20 p-4 rounded-xl group-hover:bg-primary-600/30 transition-colors duration-300">
                    <client.icon className="text-primary-400 group-hover:scale-110 transition-transform duration-300" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-primary-300 transition-colors duration-300">
                      {client.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{client.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {client.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center space-x-2">
                      <CheckCircle className="text-primary-400 flex-shrink-0" size={16} />
                      <span className="text-sm text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fleet Capabilities */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="gradient-text">Fleet Capabilities</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive fleet auto body repair services designed for high-volume operations
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {fleetCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-dark text-center group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/20"
              >
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <capability.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary-300 transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fleet Partners */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Trusted</span> Fleet Partners
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Authorized and preferred vendor relationships with major fleet operators
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {fleetPartners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-dark text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{partner.name}</h3>
                <p className="text-sm text-primary-400">{partner.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              What <span className="gradient-text">Fleet Managers</span> Say
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trusted by fleet operations throughout Philadelphia, Manayunk, and Roxborough
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-dark group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.company}</p>
                  <p className="text-sm text-primary-400">{testimonial.contact}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Fleet Contact CTA */}
      <section id="fleet-contact" className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Ready to Partner with Philadelphia's
              <br />
              <span className="text-primary-100">Premier Fleet Repair Shop?</span>
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Get priority scheduling, volume discounts, and dedicated account management for your fleet operations. 
              Serving Amazon DSPs, rental companies, dealers, and corporate fleets throughout Philadelphia.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                <h3 className="text-xl font-semibold text-white mb-4">Fleet Estimate</h3>
                <p className="text-primary-100 mb-4">Get competitive pricing for your fleet repair needs</p>
                <a href="tel:267-297-7034" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
                  <Phone size={18} />
                  <span>Call: 267-297-7034</span>
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                <h3 className="text-xl font-semibold text-white mb-4">Fleet Walkthrough</h3>
                <p className="text-primary-100 mb-4">Schedule an on-site consultation for your operation</p>
                <a href="/contact" className="bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-900 transition-colors">
                  Schedule Consultation
                </a>
              </div>
            </div>

            <div className="text-center">
              <p className="text-primary-200 text-lg mb-4">
                <strong>Fleet Services Available:</strong> Collision Repair • Bumper Repair • Rust Repair • Reconditioning • Insurance Claims
              </p>
              <p className="text-primary-300">
                Serving Manayunk, Roxborough, Philadelphia & Surrounding Areas
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FleetServices
