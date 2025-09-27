'use client'

import { motion } from 'framer-motion'
import { Server, Monitor, AlertCircle, Clock, Users, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ManagedSecurity() {
  const services = [
    {
      icon: Monitor,
      title: '24/7 Security Operations Center',
      description: 'Round-the-clock monitoring and threat detection by certified security analysts.',
      features: [
        'Continuous Security Monitoring',
        'Real-time Threat Detection',
        'Security Event Analysis',
        'Incident Escalation',
        'Monthly Security Reports'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Incident Response',
      description: 'Rapid response to security incidents with expert remediation and recovery.',
      features: [
        'Immediate Incident Response',
        'Forensic Investigation',
        'Threat Containment',
        'System Recovery',
        'Post-Incident Analysis'
      ]
    },
    {
      icon: Server,
      title: 'Managed SIEM',
      description: 'Security Information and Event Management with expert analysis and tuning.',
      features: [
        'SIEM Platform Management',
        'Custom Rule Development',
        'Log Analysis',
        'Correlation Rules',
        'Compliance Reporting'
      ]
    },
    {
      icon: Users,
      title: 'Threat Intelligence',
      description: 'Proactive threat intelligence to stay ahead of emerging security threats.',
      features: [
        'Global Threat Intelligence',
        'Industry-Specific Threats',
        'IOC Monitoring',
        'Threat Hunting',
        'Risk Assessment Updates'
      ]
    }
  ]

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-primary-900 to-cyber-900 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pexels-designecologist-1779487.jpg" 
            alt="Managed security services" 
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
            <h1 className="text-5xl font-bold mb-6">Managed Security Services</h1>
            <p className="text-xl text-gray-300">
              24/7 security monitoring and management services to protect your business 
              around the clock with expert security operations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="h-12 w-12 text-primary-600 mr-4" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-800 section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Managed Security?</h2>
              <ul className="space-y-4">
                {[
                  'Expert security analysts available 24/7/365',
                  'Advanced threat detection and response',
                  'Reduced security overhead and costs',
                  'Compliance and regulatory support',
                  'Scalable security operations'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <Clock className="h-5 w-5 text-primary-600 mr-3" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/images/pexels-mart-production-7252563.jpg" 
                alt="Security operations center" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-primary-600 text-white section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Protect Your Business 24/7</h2>
            <p className="text-xl mb-8 text-primary-100">
              Get enterprise-level security monitoring and response capabilities.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}