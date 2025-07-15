import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AB</span>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-white">Auto Body Shop</h3>
                <p className="text-sm text-gray-400">Philadelphia</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Professional auto body and collision repair services in Manayunk, Roxborough, and Philadelphia. 
              Quality work, fair prices, and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-primary-400 transition-colors">Gallery</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Collision Repair</span></li>
              <li><span className="text-gray-400">Bumper Repair & Paint</span></li>
              <li><span className="text-gray-400">Rust Repair & Refinishing</span></li>
              <li><span className="text-gray-400">Lease Return Prep</span></li>
              <li><span className="text-gray-400">Dent Removal</span></li>
              <li><span className="text-gray-400">Insurance Claims</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a href="tel:267-297-7034" className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-colors">
                <Phone size={18} />
                <span>267-297-7034</span>
              </a>
              <a href="mailto:maacophl@gmail.com" className="flex items-center space-x-3 text-gray-400 hover:text-primary-400 transition-colors">
                <Mail size={18} />
                <span>maacophl@gmail.com</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin size={18} className="mt-1" />
                <span>Serving Manayunk, Roxborough & Philadelphia, PA</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400">
                <Clock size={18} className="mt-1" />
                <div>
                  <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Auto Body Shop Philadelphia. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
