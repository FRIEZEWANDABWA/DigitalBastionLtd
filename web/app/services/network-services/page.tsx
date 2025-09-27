'use client'

import { motion } from 'framer-motion'
import { Network, Wifi, Shield, Monitor, Server, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function NetworkServices() {
  const services = [
    {
      icon: Network,
      title: 'Network Security Architecture',
      description: 'Design and implement secure network infrastructures with defense-in-depth strategies.',
      features: [
        'Network Segmentation',
        'Firewall Configuration',
        'VPN Implementation',
        'Network Access Control',
        'Security Policy Design'
      ]
    },
    {
      icon: Monitor,
      title: 'Network Monitoring',
      description: 'Continuous monitoring of network traffic and activities for threat detection.',
      features: [
        'Real-time Traffic Analysis',
        'Anomaly Detection',
        'Bandwidth Monitoring',
        'Performance Analytics',
        'Security Event Logging'
      ]
    },
    {
      icon: Wifi,
      title: 'Wireless Security',
      description: 'Secure wireless network implementation and management for enterprise environments.',
      features: [
        'Wireless Network Design',
        'WPA3 Implementation',
        'Guest Network Isolation',
        'Wireless Intrusion Detection',
        'Mobile Device Management'
      ]
    },
    {
      icon: Server,
      title: 'Network Infrastructure',
      description: 'Robust and scalable network infrastructure setup and maintenance.',
      features: [
        'Switch Configuration',
        'Router Management',
        'Load Balancing',
        'Redundancy Planning',
        'Performance Optimization'
      ]
    }
  ]

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-primary-900 to-cyber-900 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pexels-fotografiagmazg-7522609.jpg" 
            alt="Network services" 
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
            <h1 className="text-5xl font-bold mb-6">Network Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive network security and infrastructure services to build 
              and maintain secure, reliable network environments.
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
              <img 
                src="/images/pexels-timmossholder-942317.jpg" 
                alt="Network infrastructure" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Enterprise Network Solutions</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our network services provide the foundation for secure and efficient business operations 
                with scalable infrastructure and advanced security controls.
              </p>
              <ul className="space-y-3">
                {[
                  'Zero Trust Network Architecture',
                  'Software-Defined Networking (SDN)',
                  'Network Automation and Orchestration',
                  'Cloud Network Integration',
                  'Disaster Recovery Planning'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Shield className="h-5 w-5 text-primary-600 mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
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
            <h2 className="text-4xl font-bold mb-6">Secure Your Network Infrastructure</h2>
            <p className="text-xl mb-8 text-primary-100">
              Build a robust and secure network foundation for your business.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              Get Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}