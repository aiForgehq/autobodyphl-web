import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Clock, Shield, Wrench, Heart } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '5000+', label: 'Cars Repaired' },
    { number: '100%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Emergency Service' }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Family-Owned Business',
      description: 'We treat every customer like family and every car like our own. Personal service is our priority.'
    },
    {
      icon: Award,
      title: 'Quality Craftsmanship',
      description: 'Our ASE-certified technicians use the latest equipment and techniques for superior results.'
    },
    {
      icon: Shield,
      title: 'Honest & Transparent',
      description: 'No hidden fees, no surprises. We provide upfront pricing and honest assessments.'
    },
    {
      icon: Clock,
      title: 'Timely Service',
      description: 'We understand you need your car back quickly. We work efficiently without compromising quality.'
    }
  ]

  const team = [
    {
      name: 'Mike Johnson',
      role: 'Owner & Master Technician',
      experience: '25 years',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      bio: 'Mike founded our shop with a vision to provide honest, quality auto body repair to the Philadelphia community.'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'Paint Specialist',
      experience: '15 years',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      bio: 'Sarah is our color-matching expert, ensuring every paint job looks factory-perfect.'
    },
    {
      name: 'David Chen',
      role: 'Collision Repair Specialist',
      experience: '18 years',
      image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg',
      bio: 'David specializes in frame straightening and structural repairs, bringing cars back to life.'
    }
  ]

  const certifications = [
    'ASE Certified Technicians',
    'I-CAR Gold Class Collision Center',
    'PPG Certified Paint Shop',
    'Better Business Bureau A+ Rating',
    'State Licensed & Insured',
    'EPA Compliant Facility'
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
              <span className="gradient-text">Family-Owned</span> Auto Body Shop
              <br />Serving Philadelphia Since 2004
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              For over 20 years, we've been the trusted choice for auto body repair in Manayunk, 
              Roxborough, and Philadelphia. Our commitment to quality and customer service sets us apart.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2004 by Mike Johnson, our auto body shop began as a small family business 
                  with a simple mission: provide honest, quality auto body repair services to our neighbors 
                  in Manayunk, Roxborough, and Philadelphia.
                </p>
                <p>
                  What started as a one-man operation has grown into a full-service collision center, 
                  but we've never lost sight of our core values. We still treat every customer like family 
                  and every repair job with the same attention to detail that built our reputation.
                </p>
                <p>
                  Today, we're proud to be the go-to auto body shop for thousands of customers throughout 
                  the Philadelphia area. Our team of ASE-certified technicians combines decades of experience 
                  with the latest technology to deliver results that exceed expectations.
                </p>
                <p>
                  We're not just fixing cars – we're helping our community get back on the road safely 
                  and confidently. That's what drives us every day.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg"
                alt="Auto body shop in Philadelphia"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we do at our auto body shop
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-dark text-center"
              >
                <value.icon className="text-primary-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Meet Our <span className="gradient-text">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our ASE-certified technicians bring decades of combined experience to every repair
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-dark text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                <p className="text-primary-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.experience} experience</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Process */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg"
                alt="Auto body shop equipment"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                State-of-the-Art <span className="gradient-text">Equipment</span>
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We invest in the latest technology and equipment to ensure every repair meets 
                  the highest standards. Our facility features:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <Wrench className="text-primary-400 flex-shrink-0" size={20} />
                    <span>Computer-controlled frame straightening system</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Wrench className="text-primary-400 flex-shrink-0" size={20} />
                    <span>Computerized paint mixing and matching system</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Wrench className="text-primary-400 flex-shrink-0" size={20} />
                    <span>Down-draft spray booth for perfect finishes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Wrench className="text-primary-400 flex-shrink-0" size={20} />
                    <span>Aluminum welding capabilities</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Wrench className="text-primary-400 flex-shrink-0" size={20} />
                    <span>3D measuring systems for precision alignment</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Certifications</span> & Credentials
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our commitment to excellence is recognized by industry leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-dark text-center"
              >
                <Award className="text-primary-400 mx-auto mb-4" size={48} />
                <h3 className="text-lg font-semibold text-white">{cert}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="gradient-text">Community</span> Involvement
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're proud to be part of the Manayunk, Roxborough, and Philadelphia communities. 
              We support local schools, sponsor youth sports teams, and participate in community events 
              throughout the year. When you choose us, you're supporting a local business that gives back.
            </p>
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
              Experience the Difference
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their auto body repair needs. 
              Contact us today for your free estimate.
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

export default About
