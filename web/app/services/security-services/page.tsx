'use client'

import { motion } from 'framer-motion'
import { Shield, Search, Bug, FileCheck, AlertTriangle, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function SecurityServices() {
  const services = [
    {
      icon: Search,
      title: 'Penetration Testing',
      description: 'Comprehensive security testing to identify vulnerabilities before attackers do.',
      features: [
        'External Network Testing',
        'Internal Network Assessment',
        'Web Application Testing',
        'Mobile App Security Testing',
        'Social Engineering Tests'
      ]
    },
    {
      icon: Bug,
      title: 'Vulnerability Assessment',
      description: 'Systematic identification and classification of security weaknesses in your systems.',
      features: [
        'Automated Vulnerability Scanning',
        'Manual Security Testing',
        'Risk Prioritization',
        'Remediation Guidance',
        'Compliance Reporting'
      ]
    },
    {
      icon: FileCheck,
      title: 'Security Auditing',
      description: 'Thorough evaluation of your security controls and compliance posture.',
      features: [
        'ISO 27001 Audits',
        'PCI DSS Compliance',
        'GDPR Assessment',
        'Policy Review',
        'Control Effectiveness Testing'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Threat Assessment',
      description: 'Analysis of potential threats and attack vectors targeting your organization.',
      features: [
        'Threat Landscape Analysis',
        'Attack Surface Mapping',
        'Threat Intelligence',
        'Risk Modeling',
        'Security Posture Evaluation'
      ]
    }
  ]

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-primary-900 to-cyber-900 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pexels-tranmautritam-326501.jpg" 
            alt="Security services" 
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
            <h1 className="text-5xl font-bold mb-6">Security Services</h1>
            <p className="text-xl text-gray-300">
              Comprehensive cybersecurity assessments and testing services to identify 
              and mitigate security risks across your organization.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative section-padding bg-white dark:bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pexels-michael-burrows-7129654.jpg" 
            alt="Security services background" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-purple-50/90 to-cyan-50/90 dark:from-gray-900/90 dark:via-blue-900/90 dark:to-purple-900/90"></div>
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
                    src={`/images/pexels-${index % 2 === 0 ? 'shvetsa-3987020' : 'ron-lach-9144541'}.jpg`}
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
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Business?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Contact us today to discuss your security assessment needs.
            </p>
            <Link 
              href="/contact" 
              className="btn-primary"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}