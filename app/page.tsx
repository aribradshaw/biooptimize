'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className={`min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 ${isLoaded ? 'loaded' : ''}`}>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-molecular-pattern opacity-10"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8 fade-in-up">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              Bio<span className="text-blue-300">Optimize</span>
            </h1>
            <div className="w-32 h-1 bg-blue-400 mx-auto mb-6"></div>
          </div>

          {/* Tagline */}
          <div className="mb-12 fade-in-up delay-200">
            <h2 className="text-xl md:text-2xl text-blue-100 font-light mb-4">
              Research Peptides & Scientific Optimization
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Advancing scientific research with premium peptides and compounds designed for optimization and discovery.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 fade-in-up delay-400">
            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Research Grade</h3>
              <p className="text-blue-200 text-sm">Premium quality peptides for advanced research applications</p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Optimization</h3>
              <p className="text-blue-200 text-sm">Cutting-edge compounds designed for peak performance</p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Certified</h3>
              <p className="text-blue-200 text-sm">Rigorous testing and quality assurance standards</p>
            </div>
          </div>

          {/* CTA */}
          <div className="fade-in-up delay-600">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-xl">
              Coming Soon
            </button>
            <p className="text-blue-300 mt-4 text-sm">
              Sign up for early access and exclusive updates
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 fade-in-up delay-800">
          <div className="flex flex-col items-center text-blue-300">
            <span className="text-sm mb-2">Learn More</span>
            <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-300 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4 bg-blue-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Scientific Excellence</h2>
          <p className="text-xl text-blue-200 leading-relaxed mb-12">
            BioOptimize is dedicated to advancing scientific research through the development and distribution 
            of high-quality research peptides. Our commitment to excellence ensures that researchers have 
            access to the most reliable compounds for their investigations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-blue-200 leading-relaxed">
                To accelerate scientific discovery by providing researchers with premium peptides 
                and compounds that meet the highest standards of purity and efficacy.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Quality Assurance</h3>
              <p className="text-blue-200 leading-relaxed">
                Every product undergoes rigorous testing and quality control processes to ensure 
                consistency, purity, and reliability for research applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-blue-950">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">BioOptimize</h3>
          <p className="text-blue-300 mb-6">Research Peptides & Scientific Optimization</p>
          <p className="text-blue-400 text-sm">
            © 2025 BioOptimize. All rights reserved. Research use only.
          </p>
        </div>
      </footer>
    </main>
  )
}
