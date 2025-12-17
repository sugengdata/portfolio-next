import Image from "next/image";
import { siteConfig } from "../data/siteConfig";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

const socialLinks = [
  
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/sugengdata",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/sugeng_hernawan",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me/6281312339816",
  },
];

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-5 px-12 md:px-20 pt-34 bg-gradient-to-b from-emerald-200 to-emerald-50">
      
      {/* Foto profil */}
      <div className="relative w-52 h-52 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-emerald-500 animate-floating">
        <Image
          src="/profile.jpg"
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Hello, Myself <br />
          <span className="text-emerald-700">{siteConfig.name}</span>
        </h1>

        <h2 className="mt-2 text-2xl font-semibold text-emerald-600">
          <TypeAnimation
            sequence={[
              "And I'm a Web Developer",
              2000,
              "And I'm a IT Support",
              2000,
              "And I'm a Freelancer",
              2000,
            ]}
            wrapper="span"
            cursor
            repeat={Infinity}
          />
        </h2>

        <p className="mt-4 text-gray-700 max-w-xl mx-auto md:mx-0">
          {siteConfig.description}
        </p>

        {/* Social Media */}
        <div className="mt-6 flex gap-5 justify-center md:justify-start">
          {socialLinks.map(({ name, icon: Icon, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="p-3 rounded-full border border-emerald-600 text-emerald-700
                         hover:bg-emerald-600 hover:text-white
                         transform hover:-translate-y-1 transition duration-300"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>

        {/* Download CV */}
        <div className="mt-6">
          <a
            href={siteConfig.cv}
            className="px-6 py-2 bg-emerald-600 text-white rounded-full shadow hover:bg-emerald-700 transition"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
