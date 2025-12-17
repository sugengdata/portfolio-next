import Link from "next/link";
import { siteConfig } from "../data/siteConfig";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-emerald-700 text-white z-50 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-bold text-xl">
          {siteConfig.name}
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a
            href={siteConfig.cv}
            className="bg-white text-emerald-700 px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
}
