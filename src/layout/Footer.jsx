import React from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#002366] text-white overflow-hidden relative">

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-400/5 rounded-full blur-[80px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-3">
                <img 
                  src="/BCK_Logo.png" 
                  alt="BCK SSS Logo" 
                  className="w-14 h-14 object-contain brightness-0 invert opacity-90"
                />
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white font-serif">Bishop Cipriano <br/> Kihangire S.S.S</h3>
                </div>
              </div>
            </Link>
            <p className="text-blue-100/70 text-sm leading-relaxed max-w-sm">
              Empowering the next generation through holistic education, spiritual growth, and academic excellence since 1999.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-105 transition-all duration-300 border border-white/10 group">
                <Facebook className="w-4 h-4 text-white group-hover:text-blue-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-105 transition-all duration-300 border border-white/10 group">
                <Twitter className="w-4 h-4 text-white group-hover:text-blue-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-105 transition-all duration-300 border border-white/10 group">
                <Instagram className="w-4 h-4 text-white group-hover:text-blue-300" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-105 transition-all duration-300 border border-white/10 group">
                <Linkedin className="w-4 h-4 text-white group-hover:text-blue-300" />
              </a>
            </div>
          </div>

          {/* Quick Links (Span 2) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-lg font-semibold text-white mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li>
                  <Link to="/about" className="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-2">
                    About Us
                  </Link>
              </li>
              <li>
                  <Link to="/academics" className="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-2">
                    Academics
                  </Link>
              </li>
              <li>
                  <Link to="/admissions" className="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-2">
                    Admissions
                  </Link>
              </li>
              <li>
                  <Link to="/news" className="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-2">
                    News & Events
                  </Link>
              </li>
              <li>
                  <Link to="/contact" className="text-blue-100/70 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-2">
                    Contact Us
                  </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-6 font-serif">Contact Us</h4>
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white/10 transition-colors">
                    <MapPin className="w-4 h-4 text-blue-300" />
                </div>
                <div>
                  <p className="font-medium text-white mb-0.5">Location</p>
                  <p className="text-blue-100/60 leading-relaxed">Bbiina, Luzira<br/>Kampala, Uganda</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white/10 transition-colors">
                    <Phone className="w-4 h-4 text-blue-300" />
                </div>
                <div>
                  <p className="font-medium text-white mb-0.5">Phone</p>
                  <p className="text-blue-100/60">+256 414 250 404</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-white/10 transition-colors">
                    <Mail className="w-4 h-4 text-blue-300" />
                </div>
                <div>
                  <p className="font-medium text-white mb-0.5">Email</p>
                  <p className="text-blue-100/60">admissions@bck.ac.ug</p>
                </div>
              </div>
            </div>
          </div>

          {/* Banking / Utility (Span 2) */}
           <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-6 font-serif">Banking</h4>
             <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <p className="text-[10px] uppercase tracking-widest text-blue-300 mb-2 font-medium">Bank Details</p>
                <p className="text-white font-medium text-sm mb-1">Centenary Bank</p>
                <div className="h-px w-full bg-white/10 my-3 group-hover:bg-white/20 transition-colors" />
                <p className="text-xs text-blue-100/60">Entebbe Road Branch</p>
                <p className="text-xs text-blue-100/60 font-mono mt-1">Ac: BCK SSS</p>
             </div>
           </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/80">
            <p className="text-sm text-center md:text-left">
            &copy; {currentYear} Bishop Cipriano Kihangire S.S.S. All rights reserved.
            </p>
            <p className="text-xs text-center md:text-right uppercase tracking-wider font-medium opacity-80">
            For Unity, Academic Excellence and Moral Uprightness
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
