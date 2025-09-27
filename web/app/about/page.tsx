'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Award, Target, CheckCircle } from 'lucide-react'

export default function About() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Security Officer',
      image: '/images/pexels-divinetechygirl-1181354.webp',
      bio: 'Former NSA cybersecurity expert with 15+ years in enterprise security.'
    },
    {
      name: 'Michael Chen',
      role: 'Lead Network Engineer',
      image: '/images/pexels-git-stephen-gitau-302905-1686467.jpg',
      bio: 'Cisco certified expert specializing in secure network architectures.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Security Analyst',
      image: '/images/focused-woman-testing-vr-headset.jpg',
      bio: 'Penetration testing specialist with expertise in threat detection.'
    }
  ]

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Every solution we implement prioritizes security without compromising functionality.'
    },
    {
      icon: Users,
      title: 'Client Focus',
      description: 'We build lasting partnerships by understanding and exceeding client expectations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Continuous improvement and industry-leading practices drive our success.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Staying ahead of emerging threats with cutting-edge security technologies.'
    }
  ]

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-primary-900 to-cyber-900 text-white section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pexels-canvastudio-3194519.jpg" 
            alt="Team collaboration" 
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
            <h1 className="text-5xl font-bold mb-6">About Digital Bastion</h1>
            <p className="text-xl text-gray-300">
              Protecting businesses worldwide with innovative cybersecurity solutions 
              and unmatched expertise since 2014.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative section-padding bg-white dark:bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pexels-souvenirpixels-1519088.jpg" 
            alt="Mission background" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-white/85 dark:bg-gray-900/85"></div>
        </div>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              To empower businesses with robust cybersecurity solutions that protect 
              their digital assets, ensure compliance, and enable secure growth in 
              an increasingly connected world.
            </p>
            <div className="space-y-4">
              {[
                'Comprehensive security assessments',
                'Proactive threat monitoring',
                'Regulatory compliance support',
                'Employee security training'
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>{item}</span>
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
              src="/images/pexels-mart-production-7252563.jpg" 
              alt="Cybersecurity team" 
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      <section className="relative bg-gray-50 dark:bg-gray-800 section-padding overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/pexels-followalice-667200.jpg" 
            alt="Values background" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gray-50/85 dark:bg-gray-800/85"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center"
              >
                <value.icon className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}