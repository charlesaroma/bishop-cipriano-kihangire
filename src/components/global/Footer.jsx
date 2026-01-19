import React from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-linear-to-b from-gray-900 to-gray-950 text-gray-100 mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/BCK_Logo.png" 
                alt="BCK SSS Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-white">BCK SSS</h3>
                <p className="text-xs text-gray-400">Excellence Since 1999</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Bishop Cipriano Kihangire Senior Secondary School - Providing holistic education emphasizing spiritual, social, intellectual, and physical development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="/academics" className="text-gray-400 hover:text-white transition-colors duration-200">Academics</a></li>
              <li><a href="/student-life" className="text-gray-400 hover:text-white transition-colors duration-200">Student Life</a></li>
              <li><a href="/admissions" className="text-gray-400 hover:text-white transition-colors duration-200">Admissions</a></li>
              <li><a href="/news" className="text-gray-400 hover:text-white transition-colors duration-200">News & Events</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-300">Location</p>
                  <p className="text-gray-500">Bbiina, Luzira<br/>Kampala, Uganda</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-300">Phone</p>
                  <p className="text-gray-500">+256 414 250 404</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-300">Email</p>
                  <p className="text-gray-500">admissions@bck.ac.ug</p>
                </div>
              </div>
            </div>
          </div>

          {/* Banking Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Banking Details</h4>
            <div className="bg-gray-800 rounded-lg p-4 space-y-3 text-sm">
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide">Bank</p>
                <p className="text-white font-medium">Centenary Rural Development Bank</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide">Branch</p>
                <p className="text-white font-medium">Entebbe Road Branch</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase tracking-wide">Account Name</p>
                <p className="text-white font-medium">BCK SSS</p>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                &copy; {currentYear} Bishop Cipriano Kihangire Senior Secondary School. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                For the Glory of God | For Unity, Academic Excellence and Moral Uprightness
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* Top Border Accent */}
      <div className="h-1 bg-linear-to-r from-blue-600 via-blue-500 to-transparent"></div>

    </footer>
  )
}

export default Footer