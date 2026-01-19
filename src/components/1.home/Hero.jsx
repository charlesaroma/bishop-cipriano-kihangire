import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Lottie from 'lottie-react';
import heroAnimation from '../../assets/hero_anim.json';

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-[#0a2463]">
      {/* Decorative Circles */}
      <div className="absolute top-20 right-[20%] w-125 h-125 bg-yellow-400 rounded-full opacity-90" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-500/30 rounded-full" />
      <div className="absolute top-1/2 left-[15%] w-16 h-16 bg-blue-400/40 rounded-full" />
      
      {/* Top gradient for navbar */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-[#0a2463] to-transparent z-10" />

      {/* Main Content */}
      <div className="relative z-20 h-full flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-blue-200 text-sm md:text-base max-w-md leading-relaxed"
              >
                A premier secondary school in Kampala, Uganda dedicated to academic excellence, character development, and nurturing future leaders.
              </motion.p>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-100 leading-tight italic"
              >
                SHAPING<br />
                TOMORROW'S<br />
                LEADERS!
              </motion.h1>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="pt-4"
              >
                <a
                  href="/admissions/apply"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-400 text-[#0a2463] font-bold text-sm uppercase tracking-wide rounded-full hover:bg-yellow-300 transition-colors shadow-lg"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Dots indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 pt-8"
              >
                <span className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span className="w-2 h-2 bg-white/30 rounded-full" />
                <span className="w-2 h-2 bg-white/30 rounded-full" />
              </motion.div>
            </div>

            {/* Right Content - Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex justify-end items-center relative"
            >
              <div className="relative z-10 w-full max-w-md h-125 flex items-center justify-center">
                <Lottie
                  animationData={heroAnimation}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full"
                />
              </div>
              
              {/* Decorative element behind animation */}
              <div className="absolute top-10 right-0 w-24 h-24 bg-yellow-400 rounded-full opacity-80" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
