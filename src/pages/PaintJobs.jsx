import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Palette, Shield, Clock, Award, CheckCircle, Star, Sparkles, DollarSign, Zap, ChevronDown, ChevronUp } from 'lucide-react'

const PaintJobs = () => {
  const [openFaq, setOpenFaq] = useState(null)

  const paintServices = [
    {
      id: 'single-stage',
      title: 'Single-Stage Paint Jobs',
      price: 'Starting at $1,500',
      description: 'Perfect for daily drivers, older cars, or lease returns. Color and gloss combined in one application for a fresh, affordable look.',
      features: [
        'Color and gloss in one coat',
        'Fast 3-5 day turnaround',
        'Perfect for older vehicles',
        'Great for lease returns',
        'Budget-friendly option',
        '1-year warranty included'
      ],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      icon: DollarSign,
      popular: true
    },
    {
      id: 'two-stage',
      title: 'Premium Two-Stage Resprays',
      price: 'Starting at $2,800',
      description: 'Base coat + clear coat system for showroom-quality finish with superior durability and depth of color.',
      features: [
        'Base coat + clear coat system',
        'Superior gloss and depth',
        'UV protection included',
        'Longer lasting finish',
        'Showroom quality results',
        '3-year warranty included'
      ],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      icon: Sparkles,
      popular: false
    },
    {
      id: 'specialty',
      title: 'Specialty Finishes',
      price: 'Custom Pricing',
      description: 'Matte, metallic, pearl, and custom color matching for unique looks and OEM restoration.',
      features: [
        'Matte finish options',
        'Metallic and pearl effects',
        'Custom color matching',
        'OEM paint codes',
        'Texture restoration',
        'Show car quality'
      ],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      icon: Palette,
      popular: false
    }
  ]

  const beforeAfter = [
    {
      before: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      after: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      title: 'Single-Stage Repaint - Honda Civic',
      location: 'Manayunk, PA',
      service: 'Single-Stage Paint Job'
    },
    {
      before: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      after: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      title: 'Premium Respray - BMW 3 Series',
      location: 'Roxborough, PA',
      service: 'Two-Stage Premium Finish'
    },
    {
      before: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      after: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      title: 'Matte Black Finish - Jeep Wrangler',
      location: 'Philadelphia, PA',
      service: 'Specialty Matte Finish'
    },
    {
      before: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      after: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      title: 'Lease Return Touch-Up - Toyota Camry',
      location: 'Manayunk, PA',
      service: 'Single-Stage Budget Option'
    }
  ]

  const whyChooseUs = [
    {
      icon: DollarSign,
      title: 'Honest Pricing',
      description: 'Transparent pricing for both single-stage and premium options with no hidden fees'
    },
    {
      icon: Shield,
      title: 'Dust-Controlled Booth',
      description: 'Modern paint booth with filtration system ensures flawless finish every time'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Single-stage jobs completed in 3-5 days, premium resprays in 5-7 days'
    },
    {
      icon: Award,
      title: 'Satisfaction Guarantee',
      description: 'We stand behind our work with comprehensive warranties on all paint jobs'
    }
  ]

  const faqs = [
    {
      question: 'What is a single-stage paint job?',
      answer: 'A single-stage paint job combines color and gloss in one application. It\'s a faster, more cost-effective option perfect for drivers on a budget who want their car to look fresh without the higher cost of multi-layer finishes.'
    },
    {
      question: 'How does single-stage compare to base coat + clear coat?',
      answer: 'Two-stage (base + clear) offers deeper gloss, better UV protection, and longer durability. Single-stage is more affordable and great for older cars, basic refreshes, daily drivers, or lease returns where cost is the primary concern.'
    },
    {
      question: 'How much does a full paint job cost in Philadelphia?',
      answer: 'Paint job costs depend on vehicle size, paint system, and condition. Single-stage paint jobs start at $1,500, while premium two-stage resprays start at $2,800. We provide free estimates for accurate pricing.'
    },
    {
      question: 'Do you offer matte, gloss, and metallic options?',
      answer: 'Yes! We offer matte finishes, high-gloss options, metallic effects, pearl finishes, and OEM-matched colors. Our specialty finish options can transform your vehicle with unique looks and textures.'
    },
    {
      question: 'Do you warranty single-stage paint jobs?',
      answer: 'Absolutely! We offer a 1-year warranty on single-stage paint jobs and a 3-year warranty on premium two-stage resprays. All warranties cover paint defects and workmanship issues.'
    },
    {
      question: 'Is single-stage paint good for lease returns?',
      answer: 'Yes! Single-stage paint is perfect for lease return preparation. It\'s cost-effective for addressing minor scratches, fading, or touch-ups needed to avoid lease return fees while staying within budget.'
    },
    {
      question: 'How long does a full car paint job take?',
      answer: 'Single-stage paint jobs typically take 3-5 business days, while premium two-stage resprays take 5-7 days. Timeline depends on vehicle size, prep work needed, and current shop schedule.'
    },
    {
      question: 'Can you match my car\'s original color?',
      answer: 'Yes! We can match OEM paint codes and custom colors. Our color matching system ensures perfect matches for touch-ups or full repaints, whether it\'s a factory color or custom shade.'
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
            alt="Full car paint jobs in Philadelphia"
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
                Full Car Paint Jobs
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
              <span className="text-white">Give Your Car a</span>
              <br />
              <span className="gradient-text">Fresh Look</span>
              <br />
              <span className="text-white">Without Breaking the Bank</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              From <strong className="text-primary-400">premium two-stage resprays</strong> to 
              <strong className="text-primary-400"> cost-effective single-stage paint jobs</strong> — 
              we've got your budget and your car covered in Philadelphia.
              <br />
              <span className="text-primary-300">Perfect for daily drivers, lease returns, and showroom restorations</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <a href="tel:267-297-7034" className="btn-primary text-lg px-10 py-5 flex items-center space-x-3 transform hover:scale-105 transition-all duration-300">
                <Phone size={22} />
                <span>Free Paint Estimate: 267-297-7034</span>
              </a>
              <a href="#paint-options" className="btn-secondary text-lg px-10 py-5 hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all duration-300">
                Compare Paint Options
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
                { icon: DollarSign, text: 'Budget-Friendly', subtext: 'Starting at $1,500' },
                { icon: Sparkles, text: 'Premium Options', subtext: 'Showroom quality' },
                { icon: Clock, text: '3-5 Day Service', subtext: 'Fast turnaround' },
                { icon: Shield, text: 'Warranty Included', subtext: 'All paint jobs' }
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

      {/* Paint Services Section */}
      <section id="paint-options" className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Paint Services</span> We Offer
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose the perfect paint solution for your budget and needs in Philadelphia
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {paintServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`card-dark group hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl hover:shadow-primary-600/10 relative ${
                  service.popular ? 'ring-2 ring-primary-500/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-primary-600/20 p-4 rounded-xl group-hover:bg-primary-600/30 transition-colors duration-300">
                    <service.icon className="text-primary-400 group-hover:scale-110 transition-transform duration-300" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-1 text-white group-hover:text-primary-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-primary-400 font-bold text-lg">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-400 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col gap-3">
                  <a href="tel:267-297-7034" className="btn-primary w-full text-center">
                    Get Free Estimate
                  </a>
                  <a href="/contact" className="btn-secondary w-full text-center">
                    Learn More
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Before & After Showcase */}
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
              <span className="gradient-text">Before & After</span> Paint Jobs
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See the transformation from our single-stage and premium paint services in Philadelphia
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {beforeAfter.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-dark group hover:scale-[1.02] transition-all duration-500"
              >
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-400 mb-2 font-medium">Before</p>
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={item.before}
                      alt={`Before single-stage repaint in ${item.location}`}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-2 font-medium">After</p>
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={item.after}
                      alt={`After ${item.service} in ${item.location}`}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-primary-400 text-sm mb-1">{item.service}</p>
                <p className="text-gray-400 text-sm">{item.location}</p>
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
            <a href="/gallery" className="btn-primary text-lg px-8 py-4">
              View Full Gallery
            </a>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Our <span className="gradient-text">Paint Services</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional paint jobs for every budget in Manayunk, Roxborough, and Philadelphia
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-dark text-center group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary-600/20"
              >
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary-300 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              <span className="gradient-text">Frequently Asked</span> Questions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to know about our paint services in Philadelphia
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card-dark"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-primary-300 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="text-primary-400 flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-primary-400 flex-shrink-0" size={24} />
                  )}
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-dark-700/50 mt-4">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Paint Service Areas</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Professional full car paint jobs throughout the Philadelphia area
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="card-dark text-center">
                <h3 className="text-xl font-semibold mb-2 text-white">Manayunk</h3>
                <p className="text-gray-400">Single-stage and premium paint jobs in Manayunk, PA</p>
              </div>
              <div className="card-dark text-center">
                <h3 className="text-xl font-semibold mb-2 text-white">Roxborough</h3>
                <p className="text-gray-400">Affordable car paint services in Roxborough, PA</p>
              </div>
              <div className="card-dark text-center">
                <h3 className="text-xl font-semibold mb-2 text-white">Philadelphia</h3>
                <p className="text-gray-400">Full car resprays throughout Philadelphia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
              Ready to Upgrade Your Paint Job?
            </h2>
            <p className="text-xl text-primary-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Whether you need a budget-friendly single-stage paint job or a premium showroom-quality respray, 
              we have the perfect solution for your car and your budget in Philadelphia.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                <h3 className="text-xl font-semibold text-white mb-4">Free Paint Estimate</h3>
                <p className="text-primary-100 mb-4">Get accurate pricing for your specific vehicle and needs</p>
                <a href="tel:267-297-7034" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2">
                  <Phone size={18} />
                  <span>Call: 267-297-7034</span>
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                <h3 className="text-xl font-semibold text-white mb-4">Compare Paint Options</h3>
                <p className="text-primary-100 mb-4">Learn about single-stage vs premium paint systems</p>
                <a href="/contact" className="bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-900 transition-colors">
                  Schedule Consultation
                </a>
              </div>
            </div>

            <div className="text-center">
              <p className="text-primary-200 text-lg mb-4">
                <strong>Paint Services Available:</strong> Single-Stage Paint • Premium Resprays • Matte Finishes • Metallic Paint • Lease Return Touch-Ups
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

export default PaintJobs
