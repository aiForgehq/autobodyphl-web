import React from 'react'
import { motion } from 'framer-motion'
import { Phone, CheckCircle, Shield, Clock, Award } from 'lucide-react'

const Services = () => {
  const services = [
    {
      id: 'collision-repair',
      title: 'Collision Repair',
      description: 'Expert collision repair services in Manayunk, Roxborough, and Philadelphia. We restore your vehicle to pre-accident condition using state-of-the-art equipment and techniques.',
      features: [
        'Frame straightening and alignment',
        'Body panel replacement and repair',
        'Paint matching and refinishing',
        'Structural damage assessment',
        'Quality assurance inspection'
      ],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      keywords: 'collision repair manayunk, auto body repair roxborough, philadelphia collision center'
    },
    {
      id: 'bumper-repair',
      title: 'Bumper Repair & Paint',
      description: 'Professional bumper repair and paint services in Philadelphia. From minor scratches to major damage, we restore your bumper to factory condition.',
      features: [
        'Plastic bumper welding and repair',
        'Color matching and painting',
        'Texture restoration',
        'Chrome and trim repair',
        'Same-day service available'
      ],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      keywords: 'bumper repair philadelphia, bumper paint manayunk, auto bumper roxborough'
    },
    {
      id: 'rust-repair',
      title: 'Rust Repair & Refinishing',
      description: 'Complete rust removal and refinishing services in Philadelphia. We stop rust in its tracks and restore your vehicle\'s appearance and structural integrity.',
      features: [
        'Rust assessment and treatment',
        'Metal fabrication and welding',
        'Primer and paint application',
        'Undercoating protection',
        'Warranty on rust repairs'
      ],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      keywords: 'rust repair philadelphia, rust removal manayunk, auto rust treatment roxborough'
    },
    {
      id: 'lease-return',
      title: 'Lease Return Prep',
      description: 'Avoid costly lease return fees with our professional lease return preparation services in Manayunk and Philadelphia area.',
      features: [
        'Damage assessment and repair',
        'Dent and scratch removal',
        'Interior cleaning and repair',
        'Tire and wheel inspection',
        'Cost-effective solutions'
      ],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      keywords: 'lease return prep philadelphia, lease damage repair manayunk, auto lease inspection'
    },
    {
      id: 'dent-removal',
      title: 'Dent Removal',
      description: 'Professional dent removal services including paintless dent repair (PDR) for minor dents and traditional repair for major damage.',
      features: [
        'Paintless dent repair (PDR)',
        'Traditional dent repair',
        'Hail damage restoration',
        'Door ding removal',
        'Quick turnaround times'
      ],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      keywords: 'dent removal philadelphia, paintless dent repair manayunk, hail damage roxborough'
    },
    {
      id: 'insurance-claims',
      title: 'Insurance Claims Assistance',
      description: 'We work directly with all major insurance companies to streamline your claim process and ensure you get the coverage you deserve.',
      features: [
        'Direct insurance billing',
        'Claim documentation assistance',
        'Adjuster coordination',
        'Rental car arrangements',
        'Warranty on all repairs'
      ],
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      keywords: 'insurance claims philadelphia, auto insurance repair manayunk, collision insurance roxborough'
    }
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured auto body shop serving Philadelphia area'
    },
    {
      icon: Award,
      title: 'ASE Certified',
      description: 'Our technicians are ASE certified with years of experience'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Quick and efficient service to get you back on the road'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'We stand behind our work with comprehensive warranties'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-dark-900 to-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Professional <span className="gradient-text">Auto Body Services</span>
              <br />in Philadelphia
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive auto body repair services in Manayunk, Roxborough, and Philadelphia. 
              From collision repair to insurance claims, we've got you covered.
            </p>
            <a href="tel:267-297-7034" className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2">
              <Phone size={20} />
              <span>Call for Free Estimate: 267-297-7034</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="text-primary-400 flex-shrink-0" size={20} />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="tel:267-297-7034" className="btn-primary">
                      Get Free Estimate
                    </a>
                    <a href="/contact" className="btn-secondary">
                      Learn More
                    </a>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img
                    src={service.image}
                    alt={`${service.title} in Philadelphia`}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Why Choose Our <span className="gradient-text">Auto Body Shop</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Trusted by customers throughout Manayunk, Roxborough, and Philadelphia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-dark text-center"
              >
                <item.icon className="text-primary-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Service Areas</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              We proudly serve customers throughout the Philadelphia area
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="card-dark text-center">
                <h3 className="text-xl font-semibold mb-2 text-white">Manayunk</h3>
                <p className="text-gray-400">Auto body repair and collision services in Manayunk, PA</p>
              </div>
              <div className="card-dark text-center">
                <h3 className="text-xl font-semibold mb-2 text-white">Roxborough</h3>
                <p className="text-gray-400">Professional auto body services in Roxborough, PA</p>
              </div>
              <div className="card-dark text-center">
                <h3 className="text-xl font-semibold mb-2 text-white">Philadelphia</h3>
                <p className="text-gray-400">Comprehensive auto body repair throughout Philadelphia</p>
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
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free estimate on any auto body service. We're here to help restore your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:267-297-7034" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2">
                <Phone size={20} />
                <span>Call: 267-297-7034</span>
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

export default Services
