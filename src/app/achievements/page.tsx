import Link from "next/link";
import Image from "next/image";

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
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
    </div>
  );
}
