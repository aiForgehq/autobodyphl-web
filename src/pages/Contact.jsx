import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        vehicleYear: '',
        vehicleMake: '',
        vehicleModel: ''
      })
    }, 3000)
  }

  const services = [
    'Collision Repair',
    'Bumper Repair & Paint',
    'Rust Repair & Refinishing',
    'Lease Return Prep',
    'Dent Removal',
    'Insurance Claims Assistance',
    'Other'
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '267-297-7034',
      action: 'tel:267-297-7034',
      description: 'Call for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'maacophl@gmail.com',
      action: 'mailto:maacophl@gmail.com',
      description: 'Send us a message anytime'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Manayunk, Roxborough & Philadelphia',
      action: null,
      description: 'We come to you!'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri: 8AM-5PM, Sat: 9AM-2PM',
      action: null,
      description: 'Emergency service available'
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
              <span className="gradient-text">Contact Us</span> Today
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to restore your vehicle? Get a free estimate from Philadelphia's trusted 
              auto body repair experts. We serve Manayunk, Roxborough, and all of Philadelphia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-dark text-center group hover:scale-105 transition-transform duration-300"
              >
                <info.icon className="text-primary-400 mx-auto mb-4 group-hover:scale-110 transition-transform" size={48} />
                <h3 className="text-xl font-semibold mb-2 text-white">{info.title}</h3>
                {info.action ? (
                  <a
                    href={info.action}
                    className="text-primary-400 hover:text-primary-300 font-medium text-lg block mb-2 transition-colors"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-300 font-medium text-lg mb-2">{info.details}</p>
                )}
                <p className="text-gray-400 text-sm">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6 text-white">
                Get Your <span className="gradient-text">Free Estimate</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a detailed estimate.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-600/20 border border-green-600 rounded-lg p-6 text-center"
                >
                  <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-green-400 mb-2">Thank You!</h3>
                  <p className="text-gray-300">
                    Your estimate request has been submitted. We'll contact you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="(267) 297-7034"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="vehicleYear" className="block text-sm font-medium text-gray-300 mb-2">
                        Vehicle Year
                      </label>
                      <input
                        type="text"
                        id="vehicleYear"
                        name="vehicleYear"
                        value={formData.vehicleYear}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="2020"
                      />
                    </div>
                    <div>
                      <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-300 mb-2">
                        Vehicle Make
                      </label>
                      <input
                        type="text"
                        id="vehicleMake"
                        name="vehicleMake"
                        value={formData.vehicleMake}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="Honda"
                      />
                    </div>
                    <div>
                      <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-300 mb-2">
                        Vehicle Model
                      </label>
                      <input
                        type="text"
                        id="vehicleModel"
                        name="vehicleModel"
                        value={formData.vehicleModel}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="Civic"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Describe the Damage *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                      placeholder="Please describe the damage to your vehicle and any other details that might help us provide an accurate estimate..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2"
                  >
                    <Send size={20} />
                    <span>Send Free Estimate Request</span>
                  </button>

                  <p className="text-gray-400 text-sm text-center">
                    * Required fields. We'll respond within 24 hours.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-display font-bold mb-6 text-white">
                <span className="gradient-text">Visit Us</span> or We'll Come to You
              </h2>
              
              {/* Google Map Embed */}
              <div className="bg-dark-800 rounded-lg p-4 mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.0123456789!2d-75.2273!3d40.0259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDAxJzMzLjIiTiA3NcKwMTMnMzguMyJX!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Auto Body Shop Philadelphia Location"
                ></iframe>
              </div>

              <div className="space-y-6">
                <div className="card-dark">
                  <h3 className="text-xl font-semibold mb-4 text-white">Business Hours</h3>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <p className="text-primary-400 text-sm mt-4">
                    Emergency service available 24/7
                  </p>
                </div>

                <div className="card-dark">
                  <h3 className="text-xl font-semibold mb-4 text-white">What to Expect</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-400 flex-shrink-0" size={16} />
                      <span>Free detailed estimate within 24 hours</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-400 flex-shrink-0" size={16} />
                      <span>Insurance claim assistance</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-400 flex-shrink-0" size={16} />
                      <span>Rental car coordination</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="text-primary-400 flex-shrink-0" size={16} />
                      <span>Quality guarantee on all work</span>
                    </li>
                  </ul>
                </div>

                <div className="card-dark">
                  <h3 className="text-xl font-semibold mb-4 text-white">Emergency Contact</h3>
                  <p className="text-gray-300 mb-4">
                    Need immediate assistance? We offer 24/7 emergency service for urgent repairs.
                  </p>
                  <a
                    href="tel:267-297-7034"
                    className="btn-primary w-full text-center flex items-center justify-center space-x-2"
                  >
                    <Phone size={20} />
                    <span>Call Emergency Line</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
              Need Help Right Now?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Don't wait! Call us now for immediate assistance or to schedule your free estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:267-297-7034"
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Call: 267-297-7034</span>
              </a>
              <a
                href="sms:267-297-7034"
                className="bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-900 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Text Us</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
