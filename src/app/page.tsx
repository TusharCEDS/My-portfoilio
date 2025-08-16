'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';
import { Menu, X } from 'lucide-react';
import './globals.css';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="container mx-auto flex items-center justify-between max-w-7xl px-6 py-4">
          
          {/* Logo */}
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
              <span className="hidden sm:inline font-semibold text-slate-800 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Tushar
              </span>
            </div>
          </Link>

          {/* Desktop Menu — only visible from lg screens */}
          <ul className="hidden lg:flex items-center gap-1 text-sm font-medium">
            <li>
               <Link
                href="https://drive.google.com/file/d/1iYuDUcUPAt2yCxI0_Idh-9mBkZj4No7m/view?usp=sharing"
                className="relative px-5 py-2.5 rounded-full text-slate-700 hover:text-indigo-700 transition-all duration-300 group"
              >
                <span className="relative z-10">Resume</span>
                <div className="absolute inset-0 bg-slate-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              </Link>
              <Link href="/projects" className="relative px-5 py-2.5 rounded-full text-slate-700 hover:text-indigo-700 transition-all duration-300 group">
                <span className="relative z-10">Projects</span>
                <div className="absolute inset-0 bg-slate-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              </Link>
            </li>
            <li>
              <Link href="/achievements" className="relative px-5 py-2.5 rounded-full text-slate-700 hover:text-indigo-700 transition-all duration-300 group">
                <span className="relative z-10">Achievements</span>
                <div className="absolute inset-0 bg-slate-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile / Tablet Menu Button — visible below lg */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-slate-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile/Tablet Menu Dropdown */}
        {menuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md">
            <ul className="md:hidden flex flex-col space-y-1 px-6 pb-4 text-sm font-medium bg-white border-t border-slate-200">
            <li>
              <Link
                href="https://drive.google.com/file/d/1iYuDUcUPAt2yCxI0_Idh-9mBkZj4No7m/view?usp=sharing"
                className="block px-4 py-2 rounded-lg hover:bg-slate-100 transition"
              >
                <span className="relative z-10">Resume</span>
                <div className="absolute inset-0 bg-slate-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              </Link>
              
            </li>
            <li>
              <Link
                href="/projects"
                className="block px-4 py-2 rounded-lg hover:bg-slate-100 transition"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/achievements"
                className="block px-4 py-2 rounded-lg hover:bg-slate-100 transition"
                onClick={() => setMenuOpen(false)}
              >
                Achievements
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto max-w-7xl px-6 py-16 md:py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium border border-indigo-200">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Available for opportunities
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                <span className="block text-xl sm:text-2xl md:text-3xl font-medium text-slate-600 mb-2">
                  👋 Hello, I&apos;m
                </span>
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
                  <Typewriter
                    words={["Tushar", "a Developer", "a Problem Solver", "a Tech Enthusiast"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={60}
                    delaySpeed={2000}
                  />
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 font-medium">
                3rd Year BTech Student & Full-Stack Developer
              </p>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                I craft fast, user-friendly websites and applications using modern technologies like 
                <span className="font-semibold text-indigo-600"> Next.js</span> and 
                <span className="font-semibold text-indigo-600"> Node.js</span>.
              </p>
              <p>
                My passion for <span className="font-semibold text-slate-700">Data Structures and Algorithms</span> 
                ensures that every solution I build is not just functional, but optimized and reliable.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring cutting-edge technologies, contributing to 
                open-source projects, and diving deep into the fascinating worlds of 
                <span className="font-semibold text-purple-600"> AI and Machine Learning</span>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/projects" className="px-6 sm:px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                View My Work
              </Link>
              <Link href="/contact" className="px-6 sm:px-8 py-3 border-2 border-indigo-200 text-indigo-700 font-medium rounded-full hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300">
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500 scale-110"></div>
              <div className="relative">
                <Image
                  src="/profile.jpg"
                  alt="Tushar's Profile"
                  width={300}
                  height={300}
                  className="relative z-10 rounded-full shadow-2xl object-cover border-4 border-white group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce delay-100 shadow-lg"></div>
                <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-bounce delay-300 shadow-lg"></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-pulse shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
