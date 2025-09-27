'use client'

import { motion } from 'framer-motion'
import { Shield, Network, Lock, Users, Server, Eye } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const serviceCategories = [
    {
      icon: Shield,
      title: 'Security Services',
      description: 'Comprehensive cybersecurity assessments, penetration testing, and vulnerability management to protect your digital assets.',
      link: '/services/security-services',
      image: '/images/pexels-tranmautritam-326501.jpg'
    },
    {
      icon: Server,
      title: 'Managed Security Services',
      description: '24/7 security monitoring, incident response, and managed security operations center (SOC) services.',
      link: '/services/managed-security',
      image: '/images/pexels-designecologist-1779487.jpg'
    },
    {
      icon: Network,
      title: 'Network Services',
      description: 'Network security architecture, monitoring, and infrastructure protection solutions for enterprise environments.',
      link: '/services/network-services',
      image: '/images/pexels-fotografiagmazg-7522609.jpg'
    },
    {
      icon: Lock,
      title: 'Access Control Services',
      description: 'Identity and access management, privileged access controls, and authentication solutions.',
      link: '/services/access-control',
      image: '/images/pexels-cottonbro-4065617.jpg'
    },
    {
      icon: Eye,
      title: 'Risk Management',
      description: 'Cyber risk quantification, compliance management, and strategic risk assessment services.',
      link: '/services/risk-management',
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
            alt="Services background" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-blue-50/85 to-purple-50/85 dark:from-gray-900/85 dark:via-blue-900/85 dark:to-purple-900/85"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-purple-50/20 to-pink-50/20 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20"></div>
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {category.description}
                </p>
                
                <Link 
                  href={category.link}
                  className="btn-primary w-full text-center block"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}