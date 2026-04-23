import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'

interface FormState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const contactInfo = [
  {
    icon: MapPin,
    label: 'Our Location',
    value: 'The Queen\'s Walk, Butler\'s Wharf',
    sub: 'Bermondsey Village, SE1 2RL, London',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+44 (0)20 7123 4567',
    sub: '24/7 Emergency Line Available',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@united2plumbing.co.uk',
    sub: 'We reply within 2 hours',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon - Fri: 7am - 8pm',
    sub: 'Emergency: 24/7',
  },
]

const serviceOptions = [
  'Emergency Plumbing',
  'Leak Detection & Repair',
  'Boiler Services',
  'Bathroom Installation',
  'Pipe Installation',
  'General Maintenance',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email address'
    if (!form.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    await new Promise((res) => setTimeout(res, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050d1a] to-[#030810]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-blue-700/8 blur-[100px]" />

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
            Get In Touch
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-800 text-white mb-5 tracking-tight">
            Request a{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Free Quote</span>
          </h2>
          <p className="text-blue-100/50 text-lg max-w-xl mx-auto">
            Get in touch with our expert team today. We&apos;ll respond quickly with a transparent,
            no-obligation quote for any plumbing work.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-5 rounded-2xl bg-blue-900/15 border border-blue-500/10 hover:border-blue-500/25 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-blue-400/70 text-xs font-medium uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-white text-sm font-semibold">{item.value}</p>
                  <p className="text-blue-100/40 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl bg-gradient-to-br from-blue-900/25 to-[#0a1628]/70 border border-blue-500/15 p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="font-display text-2xl font-700 text-white mb-3">Message Sent!</h3>
                  <p className="text-blue-100/60 max-w-sm">
                    Thank you for contacting United 2. One of our expert plumbers will be in
                    touch with you within 2 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }}
                    className="mt-8 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-blue-300/80 text-xs font-medium uppercase tracking-wider mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={`w-full px-4 py-3 rounded-xl bg-blue-950/50 border text-white text-sm placeholder-blue-400/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 ${
                          errors.name ? 'border-red-500/60' : 'border-blue-500/20 hover:border-blue-500/40'
                        }`}
                      />
                      {errors.name && <p className="mt-1 text-red-400 text-xs">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-blue-300/80 text-xs font-medium uppercase tracking-wider mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-blue-950/50 border text-white text-sm placeholder-blue-400/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 ${
                          errors.email ? 'border-red-500/60' : 'border-blue-500/20 hover:border-blue-500/40'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-red-400 text-xs">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-blue-300/80 text-xs font-medium uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+44 7700 900000"
                        className="w-full px-4 py-3 rounded-xl bg-blue-950/50 border border-blue-500/20 hover:border-blue-500/40 text-white text-sm placeholder-blue-400/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-blue-300/80 text-xs font-medium uppercase tracking-wider mb-2">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-