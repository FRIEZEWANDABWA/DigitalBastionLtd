'use client'

import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Blog() {
  const blogPosts = [
    {
      title: 'The Rise of AI-Powered Cyber Attacks: What Businesses Need to Know',
      excerpt: 'Artificial intelligence is revolutionizing cybersecurity, but it\'s also being weaponized by cybercriminals. Learn how to protect your business.',
      image: '/images/pexels-tranmautritam-58709.jpg',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI Security',
      slug: 'ai-powered-cyber-attacks'
    },
    {
      title: 'Zero Trust Architecture: Implementation Guide for SMBs',
      excerpt: 'Small and medium businesses can benefit from Zero Trust security models. Here\'s a practical guide to getting started.',
      image: '/images/pexels-fotografiagmazg-7522609.jpg',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Network Security',
      slug: 'zero-trust-architecture-guide'
    },
    {
      title: 'Cloud Security Best Practices for Remote Teams',
      excerpt: 'With remote work becoming permanent, securing cloud infrastructure is more critical than ever. Essential practices every team should follow.',
      image: '/images/pexels-shvetsa-3987020.jpg',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Cloud Security',
      slug: 'cloud-security-remote-teams'
    },
    {
      title: 'Ransomware Recovery: Lessons from Recent Attacks',
      excerpt: 'Analysis of recent ransomware incidents and actionable strategies to prevent, detect, and recover from attacks.',
      image: '/images/pexels-ekaterinabelinskaya-4744711.jpg',
      author: 'Sarah Johnson',
      date: '2023-12-28',
      readTime: '10 min read',
      category: 'Incident Response',
      slug: 'ransomware-recovery-lessons'
    },
    {
      title: 'IoT Security: Protecting Connected Devices in Enterprise',
      excerpt: 'The Internet of Things brings new vulnerabilities. Learn how to secure IoT devices and networks in enterprise environments.',
      image: '/images/pexels-ron-lach-9144541.jpg',
      author: 'Michael Chen',
      date: '2023-12-20',
      readTime: '7 min read',
      category: 'IoT Security',
      slug: 'iot-security-enterprise'
    },
    {
      title: 'Compliance Made Simple: GDPR, HIPAA, and SOX Requirements',
      excerpt: 'Navigate complex compliance requirements with practical guidance for GDPR, HIPAA, and SOX regulations.',
      image: '/images/pexels-magda-ehlers-pexels-2660262.jpg',
      author: 'Emily Rodriguez',
      date: '2023-12-15',
      readTime: '12 min read',
      category: 'Compliance',
      slug: 'compliance-gdpr-hipaa-sox'
    }
  ]

  const categories = ['All', 'AI Security', 'Network Security', 'Cloud Security', 'Incident Response', 'IoT Security', 'Compliance']

  return (
    <div className=\"pt-16\">
      {/* Hero Section */}
      <section className=\"relative bg-gradient-to-br from-primary-900 to-cyber-900 text-white section-padding overflow-hidden\">
        <div className=\"absolute inset-0 z-0\">
          <img 
            src=\"/images/christopher-gower-m_HRfLhgABo-unsplash (1).webp\" 
            alt=\"Blog background\" 
            className=\"w-full h-full object-cover opacity-30\"
          />
          <div className=\"absolute inset-0 bg-gradient-to-br from-primary-900/80 to-cyber-900/80\"></div>
        </div>
        <div className=\"max-w-4xl mx-auto text-center relative z-10\">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className=\"text-5xl font-bold mb-6\">Cybersecurity Insights</h1>
            <p className=\"text-xl text-gray-300\">
              Stay informed with the latest cybersecurity trends, threats, and best practices 
              from our team of security experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className=\"bg-white dark:bg-gray-900 py-8\">
        <div className=\"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8\">
          <div className=\"flex flex-wrap justify-center gap-4\">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className=\"bg-gray-50 dark:bg-gray-800 section-padding\">
        <div className=\"max-w-6xl mx-auto\">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=\"grid lg:grid-cols-2 gap-12 items-center\"
          >
            <div>
              <span className=\"bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block\">
                Featured Post
              </span>
              <h2 className=\"text-3xl font-bold mb-4\">{blogPosts[0].title}</h2>
              <p className=\"text-gray-600 dark:text-gray-400 mb-6\">{blogPosts[0].excerpt}</p>
              
              <div className=\"flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400 mb-6\">
                <div className=\"flex items-center\">
                  <User className=\"h-4 w-4 mr-2\" />
                  {blogPosts[0].author}
                </div>
                <div className=\"flex items-center\">
                  <Calendar className=\"h-4 w-4 mr-2\" />
                  {new Date(blogPosts[0].date).toLocaleDateString()}
                </div>
                <div className=\"flex items-center\">
                  <Clock className=\"h-4 w-4 mr-2\" />
                  {blogPosts[0].readTime}
                </div>
              </div>
              
              <Link 
                href={`/blog/${blogPosts[0].slug}`}
                className=\"btn-primary inline-flex items-center\"
              >
                Read More <ArrowRight className=\"ml-2 h-5 w-5\" />
              </Link>
            </div>
            
            <div>
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className=\"rounded-lg shadow-xl\"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className=\"section-padding bg-white dark:bg-gray-900\">
        <div className=\"max-w-6xl mx-auto\">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className=\"text-center mb-16\"
          >
            <h2 className=\"text-4xl font-bold mb-4\">Latest Articles</h2>
            <p className=\"text-xl text-gray-600 dark:text-gray-400\">
              Expert insights on cybersecurity trends and best practices
            </p>
          </motion.div>

          <div className=\"grid md:grid-cols-2 lg:grid-cols-3 gap-8\">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className=\"card hover:shadow-xl transition-all duration-300 group\"
              >
                <div className=\"relative overflow-hidden rounded-lg mb-4\">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className=\"w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300\"
                  />
                  <div className=\"absolute top-4 left-4\">
                    <span className=\"bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium\">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <h3 className=\"text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors\">
                  {post.title}
                </h3>
                <p className=\"text-gray-600 dark:text-gray-400 mb-4 text-sm\">
                  {post.excerpt}
                </p>
                
                <div className=\"flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4\">
                  <div className=\"flex items-center\">
                    <User className=\"h-4 w-4 mr-1\" />
                    {post.author}
                  </div>
                  <div className=\"flex items-center\">
                    <Clock className=\"h-4 w-4 mr-1\" />
                    {post.readTime}
                  </div>
                </div>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className=\"text-primary-600 hover:text-primary-700 font-medium inline-flex items-center\"
                >
                  Read Article <ArrowRight className=\"ml-1 h-4 w-4\" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className=\"bg-primary-600 text-white section-padding\">
        <div className=\"max-w-4xl mx-auto text-center\">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className=\"text-4xl font-bold mb-6\">Stay Updated</h2>
            <p className=\"text-xl mb-8 text-primary-100\">
              Subscribe to our newsletter for the latest cybersecurity insights and updates.
            </p>
            <div className=\"flex flex-col sm:flex-row gap-4 max-w-md mx-auto\">
              <input
                type=\"email\"
                placeholder=\"Enter your email\"
                className=\"flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-primary-300 focus:outline-none\"
              />
              <button className=\"bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200\">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}