'use client'

import { motion } from 'framer-motion'
import { Shield, Network, Lock, Users, ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security assessments, threat detection, and incident response services.'
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Design, implementation, and management of secure network architectures.'
    },
    {
      icon: Lock,
      title: 'Access Control Systems',
      description: 'Advanced authentication and authorization solutions for enterprise security.'
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT guidance and digital transformation consulting services.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Clients Protected' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Security Monitoring' },
    { number: '10+', label: 'Years Experience' }
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-cyber-900 text-white section-padding min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/alex-knight-2EJCSULRwC8-unsplash (1).webp" 
            alt="Cybersecurity background" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/80 to-cyber-900/80"></div>
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Secure Your
              <span className="text-cyber-400 block">Digital Future</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Digital Bastion Ltd provides enterprise-grade cybersecurity solutions, 
              network infrastructure, and access control systems to protect your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-cyber-500/20 to-primary-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <Shield className="h-32 w-32 mx-auto text-cyber-400 mb-4" />
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Protecting your digital assets with cutting-edge technology</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-white dark:bg-gray-900 section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pexels-pixabay-60504.jpg" 
            alt="Statistics background" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-gray-50 dark:bg-gray-800 section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pexels-timmossholder-942317.jpg" 
            alt="Services background" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gray-50/85 dark:bg-gray-800/85"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive cybersecurity and IT solutions tailored to protect and empower your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-shadow duration-300"
              >
                <service.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Get a free security assessment and discover how we can protect your digital assets.
            </p>
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}