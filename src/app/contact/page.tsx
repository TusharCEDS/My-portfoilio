'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiGithub, FiLinkedin, FiFileText, FiHome } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

export default function Contact() {
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
                href="/" 
                className="relative px-5 py-2.5 rounded-full text-slate-700 hover:text-indigo-700 transition-all duration-300 group"
              >
                <span className="relative z-10">Home</span>
                <div className="absolute inset-0 bg-slate-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              </Link>
            </li>
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

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-20">
          
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat about technology? I'd love to hear from you. 
            Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>

        {/* Social Links + Resume Button */}
        <div className="space-y-10">
          {/* Social Links Row */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/" className="group p-4 w-32 h-32 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:bg-indigo-200 transition-colors duration-300">
                <FiHome className="w-6 h-6 text-indigo-600" />
              </div>
              <span className="font-semibold text-slate-700 group-hover:text-indigo-700 text-center">Portfolio</span>
            </a>

            <a href="https://www.linkedin.com/in/tushar-11b51a312/" target="_blank" rel="noopener noreferrer" className="group p-4 w-32 h-32 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <FiLinkedin className="w-6 h-6 text-blue-600" />
              </div>
              <span className="font-semibold text-slate-700 group-hover:text-blue-700 text-center">LinkedIn</span>
            </a>

            <a href="https://github.com/TUSHARCEDS" target="_blank" rel="noopener noreferrer" className="group p-4 w-32 h-32 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                <FiGithub className="w-6 h-6 text-slate-700" />
              </div>
              <span className="font-semibold text-slate-700 group-hover:text-slate-800 text-center">GitHub</span>
            </a>

            <a href="https://leetcode.com/Tushar_2005/" target="_blank" rel="noopener noreferrer" className="group p-4 w-32 h-32 bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                <SiLeetcode className="w-6 h-6 text-orange-600" />
              </div>
              <span className="font-semibold text-slate-700 group-hover:text-orange-700 text-center">LeetCode</span>
            </a>
          </div>

          {/* Download Resume Button */}
          <div className="flex justify-center">
            <a href="https://drive.google.com/file/d/1M5Pk-C8I76o1GRpAkN2wFE0KxB_mMtfK/view?usp=drive_link" download className="group w-auto px-6 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-2xl shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-[1.02]">
              <FiFileText className="w-6 h-6" />
              <span className="font-semibold text-lg">Download My Resume</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200/50 bg-white/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-6 py-8">
          <div className="text-center space-y-4">
            <p className="text-slate-600">
              Thanks for visiting! Feel free to reach out anytime.
            </p>
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Tushar. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
