'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="container mx-auto flex items-center justify-between max-w-7xl px-6 py-4">
          <Link href="/" className="group">
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="relative">
                <Image
                  src="/logo.jpg"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <span className="font-semibold text-slate-800 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Tushar
              </span>
            </div>
          </Link>
          
          <ul className="flex items-center gap-1 text-sm font-medium">
            <li>
              <Link 
                href="/projects" 
                className="relative px-5 py-2.5 rounded-full text-slate-700 hover:text-indigo-700 transition-all duration-300 group"
              >
                <span className="relative z-10">Projects</span>
                <div className="absolute inset-0 bg-slate-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              </Link>
            </li>
            <li>
              <Link 
                href="/achievements" 
                className="relative px-5 py-2.5 rounded-full text-slate-700 hover:text-indigo-700 transition-all duration-300 group"
              >
                <span className="relative z-10">Achievements</span>
                <div className="absolute inset-0 bg-slate-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto max-w-7xl px-6 py-16 md:py-5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side Text */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Greeting Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium border border-indigo-200">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Available for opportunities
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                <span className="block text-2xl md:text-3xl font-medium text-slate-600 mb-2">
                  👋 Hello, I'm
                </span>
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
                  <Typewriter
                    words={[
                      "Tushar",
                      "a Developer",
                      "a Problem Solver",
                      "a Tech Enthusiast"
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={60}
                    delaySpeed={2000}
                  />
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 font-medium">
                3rd Year BTech Student & Full-Stack Developer
              </p>
            </div>
            
            {/* Description */}
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                I craft fast, user-friendly websites and applications using modern technologies like 
                <span className="font-semibold text-indigo-600"> Next.js</span> and 
                <span className="font-semibold text-indigo-600"> Node.js</span>. 
              </p>
              
              <p>
                My passion for <span className="font-semibold text-slate-700">Data Structures and Algorithms </span> 
                ensures that every solution I build is not just functional, but optimized and reliable.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring cutting-edge technologies, contributing to 
                open-source projects, and diving deep into the fascinating worlds of 
                <span className="font-semibold text-purple-600"> AI and Machine Learning</span>.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/projects"
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View My Work
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-3 border-2 border-indigo-200 text-indigo-700 font-medium rounded-full hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
            
            {/* Tech Stack Icons */}
            {/* <div className="pt-8">
              <p className="text-sm text-slate-500 mb-4">Technologies I work with:</p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'MongoDB'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 font-medium hover:border-indigo-300 hover:text-indigo-700 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div> */}
          </div>

          {/* Right Side Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500 scale-110"></div>
              
              {/* Profile Image */}
              <div className="relative">
                <Image
                  src="/profile.jpg"
                  alt="Tushar's Profile"
                  width={350}
                  height={350}
                  className="relative z-10 rounded-full shadow-2xl object-cover border-4 border-white group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce delay-100 shadow-lg"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-bounce delay-300 shadow-lg"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-pulse shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        {/* <div className="flex justify-center mt-16">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div> */}
      </main>
    </div>
  );
}