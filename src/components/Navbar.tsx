import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Droplets, Menu, X, Phone } from 'lucide-react'
import { cn } from '../utils/cn'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#050d1a]/90 backdrop-blur-xl border-b border-blue-900/30 shadow-lg shadow-blue-950/20'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/60 transition-shadow duration-300">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -inset-1 rounded-xl bg-blue-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div>
              <span className="font-display font-800 text-xl text-white tracking-tight">United <span className="text-blue-400">2</span></span>
              <p className="text-xs text-blue-400/70 tracking-widest uppercase font-medium -mt-0.5">Plumbing</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-blue-100/70 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+442071234567"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg shadow-blue-700/30 hover:shadow-blue-500/40"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-blue-900/30 text-blue-300 hover:text-white hover:bg-blue-800/50 transition-all duration-200"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#050d1a]/95 backdrop-blur-xl border-t border-blue-900/30"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-blue-100/80 hover:text-white font-medium py-2 border-b border-blue-900/20 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+442071234567"
                className="flex items-center justify-center gap-2 mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
