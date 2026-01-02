import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";
import { span } from "framer-motion/client";

const Contact = () => {
  const socialLinks = [
    {
      href: "https://github.com/mukeshchau407",
      icon: <Github size={24} />,
    },
    {
      href: "https://linkedin.com/in/mukeshchaud407/",
      icon: <Linkedin size={24} />,
    },
    {
      href: "https://facebook.com/mukeshchaud407",
      icon: <Facebook size={24} />,
    },
    {
      href: "https://instagram.com/paxton_boom/",
      icon: <Instagram size={24} />,
    },
  ];

  return (
    <section id="contact" className="pt-42">
      <div className="w-full max-h-screen px-8 bg-linear-to-b from-black/90 to-gray-900/30 pt-8 shadow-2xl border border-slate-700/50 left-2 right-2">
        <div className="grid ">
          {/* Contact Information */}
          <div>
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-white/60 font-bold font-['Caveat',cursive] text-2xl mb-4">
                “Code is like humor. When you have to explain it, it’s bad.”
              </h2>
              <h3 className="text-2xl text-center font-bold mb-8 text-gray-200">
                Get in Touch ();
              </h3>

              {/* Social Links */}
              <div className="mb-16">
                <div className="flex gap-6 items-center justify-center">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group p-3 rounded-full border-2 border-white/70 bg-transparent dark:bg-black/20 backdrop-blur-md
                      shadow-md dark:shadow-black/30 hover:bg-orange-600 hover:border-orange-600 hover:shadow-lg text-gray-200 transition-all duration-300 ease-in-out
                      flex items-center justify-center"
                    >
                      <span className="transition-transform duration-300 group-hover:scale-110">
                        {link.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center py-6 bg-black text-gray-400 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Mukesh Chaudhary. All rights
          reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
