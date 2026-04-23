import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Sparkles } from 'lucide-react';

const Preloader = () => {
  const dots = Array.from({ length: 12 });

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        opacity: 0,
        transition: { duration: 1, ease: [0.7, 0, 0.3, 1] }
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0f] overflow-hidden"
    >
      {/* Cinematic Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: Math.random() * 0.5, 
              scale: Math.random() * 0.5 + 0.5,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%" 
            }}
            animate={{ 
              y: [null, "-100px"],
              opacity: [0, 0.3, 0],
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute w-1 h-1 bg-blue-500 rounded-full blur-[1px]"
          />
        ))}
      </div>

      <div className="relative flex flex-col items-center">
        {/* Advanced Multi-layer Ring System */}
        <div className="relative w-48 h-48 flex items-center justify-center">
          {/* Outer Pulsing Glow */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-blue-600 rounded-full blur-[60px]"
          />

          {/* Rotating Orbital Dots */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            {dots.map((_, i) => (
              <div 
                key={i}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400/30 rounded-full"
                style={{ 
                  transform: `rotate(${i * 30}deg) translateY(0px)`,
                  transformOrigin: '0 96px'
                }}
              />
            ))}
          </motion.div>

          {/* Main Kinetic Rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute w-40 h-48 border-[1px] border-blue-500/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute w-44 h-44 border-t-[3px] border-blue-500 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.4)]"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute w-36 h-36 border-r-[2px] border-indigo-500/40 rounded-full"
          />

          {/* Logo with Magnetic Hover Effect */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ 
              scale: 1, 
              rotate: 0,
              transition: { type: "spring", stiffness: 200, damping: 15 }
            }}
            className="relative z-10 w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] flex items-center justify-center text-white shadow-[0_20px_50px_rgba(59,130,246,0.3)] border border-white/10 overflow-hidden group"
          >
            <motion.div
              animate={{ 
                y: [0, -5, 0],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <GraduationCap className="w-10 h-10" />
            </motion.div>
            
            {/* Logo Shine Effect */}
            <motion.div 
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
            />
          </motion.div>
        </div>

        {/* Sophisticated Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { delay: 0.4 }
          }}
          className="mt-12 flex flex-col items-center"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
            </motion.div>
            <h2 className="text-3xl font-black text-white tracking-[0.2em] uppercase">
              Edu<span className="text-blue-500">Verse</span>
            </h2>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
            </motion.div>
          </div>

          {/* Modern Progress System */}
          <div className="mt-6 w-64 h-[3px] bg-white/5 overflow-hidden rounded-full relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ 
                x: "100%",
                transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute inset-0 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
            />
          </div>
          
          <div className="mt-4 flex items-center gap-4">
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em]">System</span>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  className="w-1 h-1 bg-blue-500 rounded-full"
                />
              ))}
            </div>
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em]">Online</span>
          </div>
        </motion.div>
      </div>

      {/* Luxury Vignette */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.5)]" />
    </motion.div>
  );
};

export default Preloader;

