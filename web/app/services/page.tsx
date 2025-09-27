'use client'

import { motion } from 'framer-motion'
import { Shield, Network, Lock, Users, Server, Eye, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security audits and vulnerability assessments to identify and mitigate risks.',
      features: [
        'Penetration Testing',
        'Vulnerability Scanning',
        'Risk Assessment',
        'Compliance Auditing',
        'Security Policy Review'
      ],
      price: 'Starting at $2,500'
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Design and implement secure network architectures with advanced monitoring capabilities.',
      features: [
        'Firewall Configuration',
        'Network Segmentation',
        'VPN Setup',
        'Intrusion Detection',
        'Traffic Analysis'
      ],
      price: 'Starting at $5,000'
    },
    {
      icon: Lock,
      title: 'Access Control Systems',
      description: 'Multi-factor authentication and identity management solutions for enterprise security.',
      features: [
        'Multi-Factor Authentication',
        'Single Sign-On (SSO)',
        'Identity Management',
        'Privileged Access Management',
        'Biometric Systems'
      ],
      price: 'Starting at $3,500'
    }
  ]

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-primary-900 to-cyber-900 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/network-operator-upgrading-script-combining-html-code-with-it-language.jpg" 
            alt="Network security" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 to-cyber-900/80"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive cybersecurity solutions tailored to protect your business 
              from evolving digital threats and ensure regulatory compliance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="h-12 w-12 text-primary-600 group-hover:text-cyber-600 transition-colors" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href="/contact" 
                  className="btn-primary w-full text-center block"
                >
                  Get Quote
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}