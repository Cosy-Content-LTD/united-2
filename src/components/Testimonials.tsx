import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'James Hartley',
    role: 'Homeowner, Bermondsey',
    rating: 5,
    text: 'United 2 responded within the hour when our boiler broke down in winter. The engineer was professional, explained everything clearly, and had us back up and running the same day. Truly outstanding service.',
    avatar: 'JH',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Property Manager, Borough',
    rating: 5,
    text: 'We manage a portfolio of residential properties in Southwark and United 2 are our go-to plumbers. Reliable, skilled, and always on time. Their communication is second to none.',
    avatar: 'SM',
  },
  {
    name: 'David Chen',
    role: 'Restaurant Owner, Butler\'s Wharf',
    rating: 5,
    text: "Had a major leak discovered the night before a big event. United 2's emergency team arrived within 30 minutes and resolved everything. They literally saved our business that evening. Highly recommended.",
    avatar: 'DC',
  },
  {
    name: 'Emma Thompson',
    role: 'Flat Owner, London Bridge',
    rating: 5,
    text: 'The bathroom installation they completed for me is absolutely beautiful. Top quality materials, expert fitting, and they left my home spotless. Worth every penny. I wouldn\'t use anyone else.',
    avatar: 'ET',
  },
  {
    name: 'Michael Okafor',
    role: 'Office Manager, Southwark',
    rating: 5,
    text: 'Very professional team. They carried out our annual maintenance contract and have been proactive in spotting potential issues before they become problems. Great value for money.',
    avatar: 'MO',
  },
  {
    name: 'Priya Sharma',
    role: 'Homeowner, Bermondsey Village',
    rating: 5,
    text: 'Brilliant service from start to finish. The quote was fair and transparent, the work was completed on schedule, and the quality is exceptional. United 2 are the real deal.',
    avatar: 'PS',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a] via-[#060f1e] to-[#050d1a]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-blue-700/6 blur-[100px]" />

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
            Client Stories
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-800 text-white mb-5 tracking-tight">
            What Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-blue-100/50 text-lg max-w-xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what the people of London have to say about United 2.
          </p>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-4 mt-8 px-6 py-4 rounded-2xl bg-blue-900/20 border border-blue-500/20">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="w-px h-8 bg-blue-500/20" />
            <div>
              <span className="text-white font-bold text-lg">5.0</span>
              <span className="text-blue-100/50 text-sm ml-2">from 100+ reviews</span>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl bg-gradient-to-br from-blue-900/25 to-[#0a1628]/70 border border-blue-500/10 hover:border-blue-500/30 p-7 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 to-transparent" />

              {/* Quote icon */}
              <div className="flex items-start justify-between mb-5">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-blue-500/30" />
              </div>

              <p className="text-blue-100/70 text-sm leading-relaxed mb-6 relative z-10">&ldquo;{t.text}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-blue-400/60 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
