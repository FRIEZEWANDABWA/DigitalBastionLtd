'use client'

import { motion } from 'framer-motion'
import { Eye, BarChart, FileText, AlertTriangle, TrendingUp, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function RiskManagement() {
  const services = [
    {
      icon: Eye,
      title: 'Cyber Risk Quantification (CVEQ)',
      description: 'Advanced risk quantification methodology to measure and manage cyber risk exposure.',
      features: [
        'Risk Profile Assessment',
        'Exposure Analysis',
        'Risk Appetite Definition',
        'Tolerance Measurement',
        'Continuous Risk Monitoring'
      ]
    },
    {
      icon: BarChart,
      title: 'Risk Assessment',
      description: 'Comprehensive risk assessments across people, processes, and technology.',
      features: [
        'Asset Risk Analysis',
        'Threat Modeling',
        'Vulnerability Assessment',
        'Impact Analysis',
        'Risk Prioritization'
      ]
    },
    {
      icon: FileText,
      title: 'Compliance Management',
      description: 'Ensure regulatory compliance with industry standards and frameworks.',
      features: [
        'ISO 27001 Compliance',
        'GDPR Assessment',
        'PCI DSS Compliance',
        'NIST Framework',
        'Regulatory Reporting'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Risk Monitoring',
      description: 'Continuous monitoring and reporting of risk posture and security metrics.',
      features: [
        'Risk Dashboard',
        'KRI Monitoring',
        'Trend Analysis',
        'Executive Reporting',
        'Risk Forecasting'
      ]
    }
  ]

  const riskDimensions = [
    'Asset Control & Inventory Management',
    'Configuration & Vulnerability Management',
    'User Access & Privileged Management',
    'Incident Response & Monitoring',
    'Data Protection & Privacy',
    'Business Continuity & Recovery'
  ]

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-primary-900 to-cyber-900 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pexels-magda-ehlers-pexels-2660262.jpg" 
            alt="Risk management" 
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
            <h1 className="text-5xl font-bold mb-6">Risk Management</h1>
            <p className="text-xl text-gray-300">
              Comprehensive cyber risk management services to quantify, monitor, 
              and mitigate security risks across your organization.
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Risk Assessment Framework</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We assess cyber risk across 6 dimensions, 14 distinct drivers and over 43 quantifiable levers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {riskDimensions.map((dimension, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <AlertTriangle className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <h4 className="font-semibold">{dimension}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Risk Quantification Process</h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Risk Profiling', desc: 'Review risks from people, process and technology perspective' },
                  { step: '2', title: 'Maturity Assessment', desc: 'Identify gaps and determine overall security maturity' },
                  { step: '3', title: 'Visibility & Exposure', desc: 'Monitor and track visibility within key domains' },
                  { step: '4', title: 'Reporting & Remediation', desc: 'Present findings with remediation roadmap' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-primary-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/images/pexels-souvenirpixels-1519088.jpg" 
                alt="Risk assessment process" 
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
            <h2 className="text-4xl font-bold mb-6">Quantify and Manage Your Cyber Risk</h2>
            <p className="text-xl mb-8 text-primary-100">
              Get a clear understanding of your organization's cyber risk exposure and tolerance.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
            >
              Start Assessment
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}