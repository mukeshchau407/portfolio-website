import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Facebook,
  Instagram,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-40 bg-gradient-br-to from-slate-900 to-blue-900 text-white"
    >
      <div className="mx-auto px-4 max-w-sm sm:max-w-xl md:max-w-6xl left-2 right-2">
        <div className="grid">
          {/* Contact Information */}
          <div>
            <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-slate-700/50 h-full">
              <h3 className="text-2xl text-center font-bold mb-6 text-gray-200">
                Get in Touch ();
              </h3>
              <p className="text-gray-300 mb-8">
                I'm currently available for freelance work and internship
                opportunities. If you have a project that you want to get
                started or think you need my help with something, then get in
                touch.
              </p>

              {/* Social Links */}
              <div className="mb-16">
                <div className="flex space-x-4 items-center justify-center">
                  <a
                    href="https://github.com/mukeshchau407"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700/50 p-3 rounded-full hover:bg-cyan-600 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/mukeshchaud407/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700/50 p-3 rounded-full hover:bg-cyan-600 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://facebook.com/mukeshchaud407"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700/50 p-3 rounded-full hover:bg-cyan-600 transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://instagram.com/paxton_boom/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700/50 p-3 rounded-full hover:bg-cyan-600 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>

              <div className="space-y-6 grid grid-cols-1 md:grid-cols-3">
                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                    <Mail size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">Email</h4>
                    <a
                      href="mailto:vinod@example.com"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      chymukesh5@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                    <Phone size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">Phone</h4>
                    <a
                      href="tel:+9779709868684"
                      className="text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      +977-970-986-8684
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                    <MapPin size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">Location</h4>
                    <p className="text-gray-300">Lalitpur, Nepal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Response Note */}
        <div className="my-8 text-center">
          <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl p-6 border border-slate-700/50">
            <div className="flex items-center justify-center">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <p className="text-cyan-400 font-medium">
                I typically respond to messages within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
