"use client";
import Link from "next/link";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useState } from "react";
import ProjectPage from "@/components/ProjectPage";
export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section>
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
                href="https://drive.google.com/file/d/1iYuDUcUPAt2yCxI0_Idh-9mBkZj4No7m/view?usp=sharing"
                className="block px-4 py-2 rounded-lg hover:bg-slate-100 transition"
              >
                <span className="relative z-10">Resume</span>
                <div className="absolute inset-0 bg-slate-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
              </Link>
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

      {/* Main Content */}
      
      <div className="container mx-auto max-w-7xl px-6 py-16 md:py-5">
        <h1 className="text-4xl mt-5 flex justify-center font-extrabold text-slate-800 tracking-tight ">
          My Projects
        </h1>
      </div>
      <div className="container mx-auto max-w-7xl px-6 py-16 md:py-5 mt-0">
        <h1 className="text-2xl mt-5 flex justify-center font-medium text-slate-700 tracking-tight ">
          Explore some of the projects I&apos;ve built , ranging AI powered apps to responsivs UIs.
        </h1>
      </div>
      {/* 
      <div className="grid grid-cols-2 gap-0 px-6 py-5">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Travel World
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              A modern travel website that allows users to book tours, find
              destinations, and share experiences.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/project1.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-center rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                as="a"
                href="https://github.com/TusharCEDS/Book-and-Travel"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Github
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                onClick={() =>
                  window.open(
                    "https://github.com/TusharCEDS/Book-and-Travel",
                    "_blank"
                  )
                }
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer"
              >
                Live
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              News Pulse AI
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              A modern news website that provides the latest news articles,
              sentiment analysis, and user friendly navigation.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/project2.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-center rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-10">
              <CardItem
                translateZ={20}
                as="a"
                href="https://github.com/TusharCEDS/News-Aggregator-and-Sentiment-Analysis"
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Github
                 
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                onClick={() =>
                  window.open(
                    "https://github.com/TusharCEDS/News-Aggregator-and-Sentiment-Analysis",
                    "_blank"
                  )
                }
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer"
              >
                Live
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div> */}
      <ProjectPage/>
    </section>
  );
}
