'use client'

import { motion } from 'framer-motion'
import { Shield, Network, Lock, Users, Server, Eye, CheckCircle, Database, Monitor } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: 'Cyber Risk Quantification (CVEQ)',
      description: 'Unlike one-time penetration tests, our CVEQ assessment enables simulation of complex attack scenarios with ongoing testing of your cybersecurity posture.',
      features: [
        'Continuous Security Monitoring',
        'Attack Scenario Simulation', 
        'Cyber Visibility Assessment',
        'Risk Exposure Analysis',
        'Threat Response Evaluation'
      ],
      image: '/images/pexels-tranmautritam-326501.jpg'
    },
    {
      icon: Network,
      title: 'Security Assessment and Assurance',
      description: 'Tailored solutions using NIST, ISO 27001, COBIT frameworks to secure critical assets and align with business strategies.',
      features: [
        'Governance and Strategy',
        'Network Architecture Security',
        'Vulnerability Management', 
        'Compliance Frameworks',
        'Risk Management'
      ],
      image: '/images/pexels-designecologist-1779487.jpg'
    },
    {
      icon: Lock,
      title: 'Identity and Access Management',
      description: 'Comprehensive IAM solutions aligned with NIST 800-63 and ISO 27002 to secure sensitive systems and eliminate access risks.',
      features: [
        'Privileged Access Management',
        'User Access Controls',
        'Identity Governance',
        'Access Risk Assessment',
        'IAM Policy Implementation'
      ],
      image: '/images/pexels-cottonbro-4065617.jpg'
    },
    {
      icon: Users,
      title: 'Incident Response and Remediation',
      description: 'Rapid incident response services with comprehensive remediation strategies to minimize impact and restore operations.',
      features: [
        '24/7 Incident Response',
        'Forensic Analysis',
        'Threat Containment',
        'Recovery Planning',
        'Post-Incident Review'
      ],
      image: '/images/pexels-ekaterinabelinskaya-4744711.jpg'
    },
    {
      icon: Monitor,
      title: 'Network Activity Monitoring',
      description: 'Advanced network monitoring solutions to detect suspicious activities and ensure continuous security visibility.',
      features: [
        'Real-time Traffic Analysis',
        'Anomaly Detection',
        'Network Forensics',
        'Bandwidth Monitoring',
        'Security Event Correlation'
      ],
      image: '/images/pexels-fotografiagmazg-7522609.jpg'
    },
    {
      icon: Database,
      title: 'Database Activity Monitoring',
      description: 'Comprehensive database security monitoring to protect sensitive data and ensure compliance with privacy regulations.',
      features: [
        'Database Access Monitoring',
        'Data Loss Prevention',
        'Compliance Reporting',
        'Privileged User Tracking',
        'Real-time Threat Detection'
      ],
      image: '/images/pexels-magda-ehlers-pexels-2660262.jpg'
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

      <section className="relative section-padding bg-white dark:bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pexels-bohlemedia-963713.jpg" 
            alt="Services grid background" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-white/85 dark:bg-gray-900/85"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-20 h-20 opacity-20">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover rounded-bl-lg"
                  />
                </div>
                
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
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      <section className="bg-gray-50 dark:bg-gray-800 section-padding">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We leverage internationally recognized frameworks and locally developed methodologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">Cyber Risk Assessment Framework</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Our unique perspective on cyber risk assesses your organization across 6 dimensions, 
                14 distinct drivers and over 43 quantifiable levers including:
              </p>
              <ul className="space-y-2">
                {[
                  'Cyber Risk Profile and Appetite',
                  'Controls and Visibility Assessment', 
                  'Exposure and Tolerance Analysis',
                  'Asset and User Management',
                  'Incident and Continuity Controls'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{item}</span>
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
                alt="Risk assessment framework" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <img 
                src="/images/pexels-shvetsa-3987020.jpg" 
                alt="Continuous monitoring" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <h3 className="text-2xl font-bold mb-4">Continuous Monitoring & Response</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Unlike traditional one-time assessments, our platform provides ongoing monitoring 
                and testing of your cybersecurity posture with real-time threat detection.
              </p>
              <ul className="space-y-2">
                {[
                  '24/7 Security Operations Center',
                  'Automated Threat Intelligence',
                  'Real-time Incident Response',
                  'Compliance Monitoring',
                  'Performance Analytics'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}