import { motion } from 'framer-motion'
import { Droplets, Flame, Wrench, ShowerHead, AlertTriangle, Settings2, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: AlertTriangle,
    title: 'Emergency Plumbing',
    description: 'Round-the-clock emergency response for burst pipes, severe leaks, and critical plumbing failures. We arrive fast.',
    accent: 'from-red-500 to-orange-500',
    glow: 'shadow-red-500/20',
  },
  {
    icon: Droplets,
    title: 'Leak Detection & Repair',
    description: 'Advanced non-invasive leak detection technology to locate and fix hidden leaks before they cause costly damage.',
    accent: 'from-blue-500 to-cyan-500',
    glow: 'shadow-blue-500/20',
  },
  {
    icon: Flame,
    title: 'Boiler Services',
    description: 'Complete boiler installation, servicing, repairs and maintenance. Gas Safe registered engineers at your service.',
    accent: 'from-orange-500 to-yellow-500',
    glow: 'shadow-orange-500/20',
  },
  {
    icon: ShowerHead,
    title: 'Bathroom Installation',
    description: 'Full bathroom fitting including showers, baths, basins, and toilets. Transforming your bathroom from concept to reality.',
    accent: 'from-purple-500 to-blue-500',
    glow: 'shadow-purple-500/20',
  },
  {
    icon: Wrench,
    title: 'Pipe Installation',
    description: 'Expert installation of new pipework for extensions, renovations, and replacements using premium materials.',
    accent: 'from-blue-600 to-indigo-500',
    glow: 'shadow-indigo-500/20',
  },
  {
    icon: Settings2,
    title: 'General Maintenance',
    description: 'Regular planned maintenance programmes to keep your plumbing systems running efficiently and prevent future issues.',
    accent: 'from-teal-500 to-blue-500',
    glow: 'shadow-teal-500/20',
  },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#050d1a]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-blue-700/8 blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
            What We Offer
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-800 text-white mb-5 tracking-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-blue-100/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive plumbing solutions for residential and commercial properties across London.
            Quality workmanship you can rely on, every time.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl bg-gradient-to-br from-blue-900/20 to-[#0a1628]/60 border border-blue-500/10 p-7 hover:border-blue-500/30 transition-all duration-300 cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 to-transparent" />

              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.accent} flex items-center justify-center mb-5 shadow-lg ${service.glow} group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-display text-xl font-700 text-white mb-3">{service.title}</h3>
              <p className="text-blue-100/50 text-sm leading-relaxed mb-5">{service.description}</p>

              <div className="flex items-center gap-2 text-blue-400 text-sm font-medium group/link cursor-pointer">
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 duration-200" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
