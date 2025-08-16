"use client";
import Link from "next/link";
import Image from "next/image";
import { CardHoverEffectDemo } from "@/components/achieveList";
import { useState } from "react";
import { FaSleigh } from "react-icons/fa";
export default function AchievementsPage() {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <section>
      <div className=" bg-gradient-to-br from-slate-50 via-white to-indigo-50">
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
              <span className="font-semibold text-slate-800 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Tushar
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-1 text-sm font-medium">
            <li>
              <Link
                href="https://drive.google.com/file/d/1iYuDUcUPAt2yCxI0_Idh-9mBkZj4No7m/view?usp=sharing"
                className="relative px-5 py-2.5 rounded-full text-slate-700 hover:text-indigo-700 transition-all duration-300 group"
              >
                <span className="relative z-10">Resume</span>
                <div className="absolute inset-0 bg-slate-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              </Link>
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-indigo-700 focus:outline-none"
          >
            {menuOpen ? (
              // Close Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col space-y-1 px-6 pb-4 text-sm font-medium bg-white border-t border-slate-200">
            <li>
              <Link
                href="/"
                className="block px-4 py-2 rounded-lg hover:bg-slate-100 transition"
                onClick={() => setMenuOpen(false)}
              >
                Home
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
        )}
      </nav>
      </div>
      {/* Main Content */}
      <div>
        <div className="justify-items-center mt-10">
          <h1 className="text-4xl font-extrabold ">Achievements</h1>
        </div>
        <div className="justify-items-center mt-10 ">
          <p className="text-2xl font-sanserif ">Explore some of the achievements I&apos;ve made</p>
        </div>
      <CardHoverEffectDemo/>
      </div>
    </section>
  );
}
