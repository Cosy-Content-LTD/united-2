import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, MapPin, Star, Wrench } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

const highlights = [
  'Available 24/7 for Emergencies',
  'Fully Licensed & Insured',
  'Same-Day Service',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#020810] via-[#050d1a] to-[#0a1628]" />
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] rounded-full bg-blue-700/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/8 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-blue-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-blue-500/8" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8"
            >
              <MapPin className="w-4 h-4 text-blue-400" />
              Butler&apos;s Wharf &bull; Bermondsey &bull; The Borough
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-display text-5xl md:text-6xl lg:text-7xl font-800 leading-[1.05] tracking-tight text-white mb-6"
            >
              London&apos;s
              <span className="block bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
                Premier
              </span>
              Plumbing
              <span className="block text-white">Experts</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-blue-100/60 text-lg leading-relaxed mb-8 max-w-lg"
            >
              United 2 delivers world-class plumbing solutions across Southwark and Greater London.
              From emergency repairs to complete installations, we&apos;re your trusted local specialists.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-3 mb-10"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-blue-100/80 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="group flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-base hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-xl shadow-blue-700/30 hover:shadow-blue-500/50 hover:gap-3"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="flex items-center gap-2 px-7 py-4 rounded-2xl border border-blue-500/30 text-blue-300 font-semibold text-base hover:bg-blue-500/10 hover:border-blue-400/50 transition-all duration-300"
              >
                Our Services
              </a>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 60 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block relative"
          >
            {/* Main card */}
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-blue-900/20 blur-2xl" />
              <div className="relative rounded-3xl bg-gradient-to-br from-blue-900/40 to-[#0a1628]/80 border border-blue-500/20 p-8 backdrop-blur-sm">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6 shadow-2xl shadow-blue-500/30">
                  <Wrench className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display text-2xl font-700 text-white mb-2">United 2</h3>
                <p className="text-blue-300/80 text-sm mb-6">Professional Plumbing Services</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { value: '500+', label: 'Projects Done' },
                    { value: '15+', label: 'Years Experience' },
                    { value: '98%', label: 'Satisfaction Rate' },
                    { value: '24/7', label: 'Emergency Cover' },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-xl bg-blue-500/10 border border-blue-500/20 p-4">
                      <div className="text-2xl font-display font-800 text-blue-300">{stat.value}</div>
                      <div className="text-xs text-blue-100/50 mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white text-sm font-semibold">5.0</span>
                  <span className="text-blue-100/50 text-xs">Rated Excellent</span>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 px-4 py-3 rounded-2xl bg-[#0a1628]/90 border border-blue-500/30 backdrop-blur-sm shadow-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-xs font-semibold">Available Now</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-6 px-4 py-3 rounded-2xl bg-[#0a1628]/90 border border-blue-500/30 backdrop-blur-sm shadow-xl"
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-white text-xs font-semibold">SE1 2RL, London</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050d1a] to-transparent" />
    </section>
  )
}
