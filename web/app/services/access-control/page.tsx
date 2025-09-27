'use client'

import { motion } from 'framer-motion'
import { Lock, Key, UserCheck, Fingerprint, Shield, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function AccessControl() {
  const services = [
    {
      icon: Lock,
      title: 'Identity and Access Management',
      description: 'Comprehensive IAM solutions to manage user identities and access across your organization.',
      features: [
        'Single Sign-On (SSO)',
        'Multi-Factor Authentication',
        'User Provisioning',
        'Access Governance',
        'Identity Federation'
      ]
    },
    {
      icon: Key,
      title: 'Privileged Access Management',
      description: 'Secure and monitor privileged accounts with advanced access controls and monitoring.',
      features: [
        'Privileged Account Discovery',
        'Password Vaulting',
        'Session Recording',
        'Just-in-Time Access',
        'Privileged Analytics'
      ]
    },
    {
      icon: Fingerprint,
      title: 'Biometric Access Control',
      description: 'Advanced biometric authentication systems for physical and logical access control.',
      features: [
        'Fingerprint Recognition',
        'Facial Recognition',
        'Iris Scanning',
        'Voice Authentication',
        'Multi-modal Biometrics'
      ]
    },
    {
      icon: UserCheck,
      title: 'Access Governance',
      description: 'Comprehensive access governance and compliance management solutions.',
      features: [
        'Access Certification',
        'Role-Based Access Control',
        'Segregation of Duties',
        'Compliance Reporting',
        'Risk-Based Access'
      ]
    }
  ]

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-primary-900 to-cyber-900 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pexels-cottonbro-4065617.jpg" 
            alt="Access control services" 
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
            <h1 className="text-5xl font-bold mb-6">Access Control Services</h1>
            <p className="text-xl text-gray-300">
              Advanced identity and access management solutions to secure your systems 
              and ensure only authorized users have access to critical resources.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative section-padding bg-white dark:bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pexels-divinetechygirl-1181354.webp" 
            alt="Access control background" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/90 via-indigo-50/90 to-blue-50/90 dark:from-gray-900/90 dark:via-purple-900/90 dark:to-indigo-900/90"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-30">
                  <img 
                    src={`/images/${index % 4 === 0 ? 'alex-knight-2EJCSULRwC8-unsplash (2).webp' : index % 4 === 1 ? '3 (1).webp' : index % 4 === 2 ? 'christopher-gower-m_HRfLhgABo-unsplash (1).webp' : 'contact-us-communication-support-service-assistance-concept.webp'}`}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-bl-2xl"
                  />
                </div>
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
              <h2 className="text-3xl font-bold mb-6">Zero Trust Access Control</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Implement Zero Trust principles with comprehensive access controls that verify 
                every user and device before granting access to your systems and data.
              </p>
              <ul className="space-y-3">
                {[
                  'Continuous Authentication',
                  'Least Privilege Access',
                  'Micro-Segmentation',
                  'Behavioral Analytics',
                  'Adaptive Access Controls'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Shield className="h-5 w-5 text-primary-600 mr-3" />
                    <span>{feature}</span>
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
                src="/images/focused-woman-testing-vr-headset.jpg" 
                alt="Access control technology" 
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
            <h2 className="text-4xl font-bold mb-6">Secure Access, Simplified Management</h2>
            <p className="text-xl mb-8 text-primary-100">
              Implement robust access controls while maintaining user productivity and experience.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}