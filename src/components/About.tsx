import { motion } from 'framer-motion'
import { Award, Users, Clock, ShieldCheck, MapPin } from 'lucide-react'

const stats = [
  { icon: Award, value: '15+', label: 'Years of Excellence' },
  { icon: Users, value: '500+', label: 'Happy Customers' },
  { icon: Clock, value: '24/7', label: 'Emergency Response' },
  { icon: ShieldCheck, value: '100%', label: 'Satisfaction Guaranteed' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a] via-[#071020] to-[#050d1a]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute left-0 top-1/2 w-[500px] h-[500px] rounded-full bg-blue-600/6 blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-blue-900/50 z-10 rounded-3xl" />
              <div className="w-full h-[480px] bg-gradient-to-br from-blue-900/40 to-[#0a1628] rounded-3xl border border-blue-500/20 flex items-center justify-center">
                {/* Abstract plumbing visual */}
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-pulse" />
                  <div className="absolute inset-4 rounded-full border border-blue-400/20" />
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-600/30 to-blue-900/50 border border-blue-500/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-2xl shadow-blue-500/40">
                      <ShieldCheck className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  {/* Orbiting dots */}
                  {[0, 90, 180, 270].map((deg, i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8 + i * 2, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0"
                      style={{ transformOrigin: 'center' }}
                    >
                      <div
                        className="absolute w-3 h-3 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${deg}deg) translateX(120px) translateY(-50%)`,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 p-5 rounded-2xl bg-[#0a1628]/95 border border-blue-500/30 backdrop-blur-sm shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Based in London</p>
                  <p className="text-blue-400/70 text-xs">SE1 2RL &bull; Serving All of Greater London</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
              About United 2
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-800 text-white mb-6 leading-tight tracking-tight">
              London&apos;s Most{' '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Trusted</span>{' '}
              Plumbers
            </h2>

            <div className="space-y-4 text-blue-100/60 leading-relaxed mb-8">
              <p>
                United 2 has been serving the residents and businesses of London since our founding.
                Based at The Queen&apos;s Walk, Butler&apos;s Wharf in the heart of Bermondsey and Southwark,
                we bring expert plumbing solutions right to your door.
              </p>
              <p>
                Our team of fully qualified, Gas Safe registered engineers take pride in delivering
                exceptional workmanship with honest, transparent pricing. No hidden fees, no surprises
                &mdash; just outstanding results that last.
              </p>
              <p>
                From emergency callouts to full-scale bathroom renovations, United 2 is the name
                London trusts when plumbing matters most.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="p-5 rounded-2xl bg-blue-900/20 border border-blue-500/15 hover:border-blue-500/30 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mb-3">
                    <stat.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="font-display text-2xl font-800 text-white mb-1">{stat.value}</div>
                  <div className="text-blue-100/50 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
