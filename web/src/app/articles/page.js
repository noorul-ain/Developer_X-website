'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ArticlePage() {
  const [activeSection, setActiveSection] = useState('introduction');

  const articleSections = [
    { id: 'introduction', title: 'Introduction: AI Meets Software Development' },
    { id: 'automation', title: 'From Automation to Intelligence' },
    { id: 'code-generation', title: 'Smarter Code Generation' },
    { id: 'debugging', title: 'Intelligent Debugging and Testing' },
    { id: 'learning', title: 'Personalized Learning for Developers' },
    { id: 'collaboration', title: 'Collaboration Between Humans and Machines' },
    { id: 'next-phase', title: 'The Next Phase: Autonomous Problem Solvers' },
    { id: 'conclusion', title: 'Conclusion: Empowering Developers with AI' }
  ];

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const topRankingLists = [
    'Top AI Developers',
    'Top Machine Learning Developers', 
    'Top Big Data Developers',
    'Top Robotics Developers',
    'Top IT Services Companies',
    'Top Software Developers',
    'Top Software Developers in the USA'
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section - First Image */}
      <section className="relative h-[60vh] overflow-hidden" style={{background: 'linear-gradient(90deg, #794D21 0%, #DF8E3D 100%)'}}>
      
        
        {/* Laptop Screen Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-4xl mx-auto px-6">
            <div className="relative">
              <Image
                src="/vector.png"
                alt="Laptop Screen Interface"
                width={400}
                height={400}
                className="w-40 h-40 sm:w-64 sm:h-64 md:w-[400px] md:h-[400px] rounded-lg shadow-2xl mx-auto mt-10 sm:mt-20 md:mt-40"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Sarah Chen Profile Card - Bottom Left */}
        <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 sm:ml-8">
          <div className="bg-black/80 backdrop-blur-sm rounded-lg p-2 sm:p-3 max-w-xs">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-xs sm:text-sm">SC</span>
              </div>
              <div>
                <div className="text-white font-semibold text-xs sm:text-sm">Sarah Chen</div>
                <div className="text-gray-300 text-[10px] sm:text-xs">Marketing Manager</div>
                <div className="text-gray-400 text-[10px] sm:text-xs">Developer X</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Section - Second Image */}
      <section className="bg-[#f6efe1] py-6 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Left Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-4 sm:top-6 md:top-8">
                <nav className="space-y-1 mb-8">
                  {articleSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => handleSectionClick(section.id)}
                      className={`block w-full text-left px-2 py-1 text-sm transition-colors ${
                        activeSection === section.id
                          ? 'text-blue-700 font-medium'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
                
                {/* Top Ranking Lists */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Check our top ranking lists:</h4>
                  <ul className="space-y-1">
                    {topRankingLists.map((item, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-600">
                        <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-2 text-blue-600 hover:text-blue-700 text-xs font-medium">
                    View all ratings
                  </button>
                </div>
                
                {/* ADS-BG Banners */}
                <div className="space-y-4">
                  <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                    <div className="text-blue-600 font-bold text-sm">ADS-BG</div>
                  </div>
                  <div className="bg-white border border-blue-200 rounded-lg p-4 text-center">
                    <div className="text-blue-600 font-bold text-sm">ADS-BG</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Article Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-lg p-4 sm:p-6 md:p-8">
                <header className="mb-4 sm:mb-6">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                    The Future of AI-Powered Development: How Machine Learning is Revolutionizing Code
                  </h1>
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                    <span>September 18, 2023</span>
                  </div>
                </header>

                {/* Article Sections */}
                <div className="prose max-w-none">
                  <section id="introduction" className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">Introduction: AI Meets Software Development</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      The intersection of artificial intelligence and software development is creating 
                      unprecedented opportunities for innovation. As AI technologies become more 
                      sophisticated, they're not just tools for developers—they're becoming 
                      collaborative partners in the development process.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      This transformation is reshaping how we think about coding, problem-solving, 
                      and the very nature of software development itself.
                    </p>
                  </section>

                  <section id="automation" className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">From Automation to Intelligence</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      The evolution from simple automation to intelligent assistance represents a 
                      fundamental shift in how developers interact with their tools. Modern AI 
                      systems can understand context, learn from patterns, and provide 
                      increasingly sophisticated support.
                    </p>
                  </section>

                  <section id="code-generation" className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">Smarter Code Generation</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      AI-powered code generation is moving beyond simple autocomplete to 
                      understanding project requirements, suggesting architectural patterns, 
                      and even generating entire functions based on natural language descriptions.
                    </p>
                  </section>

                  <section id="debugging" className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">Intelligent Debugging and Testing</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      AI systems can now analyze code for potential bugs, suggest fixes, and 
                      even generate comprehensive test suites. This intelligent assistance 
                      significantly reduces debugging time and improves code quality.
                    </p>
                  </section>

                  <section id="learning" className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">Personalized Learning for Developers</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      AI is transforming how developers learn and grow. Intelligent platforms analyze 
                      individual coding patterns, identify knowledge gaps, and provide personalized 
                      learning paths. These systems adapt to each developer's learning style and 
                      pace, creating truly customized educational experiences.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      The future of developer education lies in AI-powered learning platforms that 
                      understand your coding style, identify your strengths and weaknesses, and 
                      provide targeted learning experiences that accelerate your growth as a developer.
                    </p>
                  </section>

                  <section id="collaboration" className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">Collaboration Between Humans and Machines</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      The future of development lies in seamless collaboration between human creativity 
                      and machine intelligence. AI assistants that understand project context, team 
                      dynamics, and business requirements are becoming essential partners in the 
                      development process, creating more efficient and innovative development ecosystems.
                    </p>
                    
                    {/* Laptop Screen Image Simulation */}
                    <div className="my-6 p-6 bg-gray-900 rounded-lg">
                      <div className="bg-white rounded-lg p-4 max-w-xl mx-auto">
                        <div className="text-center">
                          <h3 className="text-lg font-semibold text-gray-800 mb-4">What can I help with?</h3>
                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="bg-blue-50 rounded-lg p-3 text-center">
                              <div className="w-6 h-6 bg-blue-500 rounded-full mx-auto mb-1"></div>
                              <span className="text-xs font-medium">Create image</span>
                            </div>
                            <div className="bg-green-50 rounded-lg p-3 text-center">
                              <div className="w-6 h-6 bg-green-500 rounded-full mx-auto mb-1"></div>
                              <span className="text-xs font-medium">Documentation</span>
                            </div>
                            <div className="bg-purple-50 rounded-lg p-3 text-center">
                              <div className="w-6 h-6 bg-purple-500 rounded-full mx-auto mb-1"></div>
                              <span className="text-xs font-medium">Code</span>
                            </div>
                            <div className="bg-orange-50 rounded-lg p-3 text-center">
                              <div className="w-6 h-6 bg-orange-500 rounded-full mx-auto mb-1"></div>
                              <span className="text-xs font-medium">Write</span>
                            </div>
                          </div>
                          <div className="bg-gray-100 rounded-lg p-2">
                            <input 
                              type="text" 
                              placeholder="Just anything" 
                              className="w-full bg-transparent outline-none text-sm"
                            />
                          </div>
                          <div className="flex justify-center space-x-2 mt-2">
                            <div className="w-4 h-4 bg-gray-400 rounded"></div>
                            <div className="w-4 h-4 bg-gray-400 rounded"></div>
                            <div className="w-4 h-4 bg-gray-400 rounded"></div>
                            <div className="w-4 h-4 bg-gray-400 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="next-phase" className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">The Next Phase: Autonomous Problem Solvers</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      The next phase of AI-powered development will focus on autonomous problem solvers 
                      that can understand complex requirements, design solutions, and implement them 
                      with minimal human intervention. These systems will be able to analyze business 
                      requirements, suggest optimal architectures, and even generate complete applications.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      Future AI development tools will understand context at a deeper level, enabling 
                      them to make intelligent decisions about code structure, performance optimization, 
                      and scalability considerations without explicit human guidance.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 ml-4">
                      <li>Optimizing code for performance and efficiency</li>
                      <li>Natural language programming interfaces</li>
                      <li>Building robust, scalable applications</li>
                      <li>Autonomous code review and optimization</li>
                      <li>Intelligent system architecture design</li>
                    </ul>
                  </section>

                  <section id="conclusion" className="mb-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">Conclusion: Empowering Developers with AI</h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      AI-powered development is not about replacing developers—it's about empowering them 
                      to achieve more than ever before. By combining human creativity with machine 
                      intelligence, we're creating a future where the boundaries between human and 
                      artificial intelligence blur, leading to unprecedented innovation and productivity.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      The developers who embrace AI as a collaborative partner will find themselves 
                      at the forefront of this technological revolution, creating solutions that were 
                      previously impossible to imagine. The future of software development is not just 
                      about writing code—it's about orchestrating intelligence.
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      As we move forward, the most successful development teams will be those that 
                      learn to work seamlessly with AI, leveraging its capabilities while maintaining 
                      the human touch that makes software truly valuable to users.
                    </p>
                  </section>
                </div>

                {/* Call to Action */}
                <div className="mt-8 bg-gray-100 rounded-lg p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Discover the leading AI development companies</h3>
                  <p className="text-sm text-gray-600 mb-3">Explore our curated list of top AI development companies and find the perfect partner for your next project.</p>
                  <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm">
                    Learn more →
                  </button>
                </div>

                {/* Author Profile */}
                <div className="mt-6  rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">WW</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm">Wade Warren</h4>
                      <p className="text-xs text-gray-600 mb-2">Company Manager</p>
                      <div className="flex space-x-2 mb-2">
                        <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-400 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </a>
                      </div>
                      <p className="text-xs text-gray-600">
                        Wade Warren is a seasoned technology manager with over 10 years of experience 
                        in AI and software development. He leads the Developer.X team in creating 
                        innovative solutions for modern development challenges.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
