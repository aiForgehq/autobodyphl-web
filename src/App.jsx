import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import StickyCallBar from './components/StickyCallBar'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import FleetServices from './pages/FleetServices'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-950">
        <Header />
        <StickyCallBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/fleet-repair-philadelphia" element={<FleetServices />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
