import React, { useState, useEffect } from 'react'
import { Phone, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const StickyCallBar = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-primary-600 shadow-lg"
        >
          <div className="container-custom">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-2">
                <Phone size={20} className="text-white" />
                <span className="text-white font-semibold">267-297-7034</span>
                <span className="text-primary-100 text-sm hidden sm:inline">| Free Estimate</span>
              </div>
              <div className="flex space-x-2">
                <a
                  href="tel:267-297-7034"
                  className="bg-white text-primary-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
                <a
                  href="sms:267-297-7034"
                  className="bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-primary-800 transition-colors flex items-center space-x-2"
                >
                  <MessageCircle size={16} />
                  <span className="hidden sm:inline">Text</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default StickyCallBar
