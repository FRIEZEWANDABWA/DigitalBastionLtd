'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Shield } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: 'Enterprise Network Security Overhaul',
      client: 'Fortune 500 Financial Institution',
      image: '/images/pexels-designecologist-1779487.jpg',
      description: 'Complete network security redesign including firewall implementation, intrusion detection systems, and employee training.',
      results: ['99.9% uptime achieved', '50% reduction in security incidents', '100% compliance with regulations'],
      category: 'Network Security',
      year: '2024'
    },
    {
      title: 'Cloud Infrastructure Security',
      client: 'Healthcare Technology Company',
      image: '/images/pexels-pixabay-373543 (1).jpg',
      description: 'Secured cloud migration with advanced access controls, data encryption, and compliance monitoring.',
      results: ['HIPAA compliance achieved', 'Zero data breaches', '40% cost reduction'],
      category: 'Cloud Security',
      year: '2023'
    },
    {
      title: 'Cybersecurity Training Program',
      client: 'Manufacturing Corporation',
      image: '/images/pexels-mart-production-7251096.jpg',
      description: 'Comprehensive security awareness training and phishing simulation program for 500+ employees.',
      results: ['95% training completion', '80% reduction in phishing clicks', 'Enhanced security culture'],
      category: 'Training',
      year: '2023'
    }
  ]

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '500+', label: 'Clients Protected' },
    { number: '99.9%', label: 'Success Rate' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-primary-900 to-cyber-900 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pexels-tranmautritam-326502.jpg" 
            alt="Portfolio background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 to-cyber-900/80"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-300">
              Successful cybersecurity implementations that have protected businesses 
              and enabled secure digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 section-padding">
        <div className="max-w-6xl mx-auto">
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

      <section className="bg-gray-50 dark:bg-gray-800 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Real-world cybersecurity solutions that deliver measurable results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      {project.year}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-primary-600 font-medium mb-3">{project.client}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm">Key Results:</h4>
                  <ul className="space-y-1">
                    {project.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Shield className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Let us help you build a robust cybersecurity foundation for your business.
            </p>
            <a 
              href="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Start Your Project <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}