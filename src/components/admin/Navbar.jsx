import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Search, User, Settings, HelpCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 relative z-20"
    >
      <div className="flex items-center flex-1">
        <motion.div 
          initial={{ width: "20rem", opacity: 0 }}
          animate={{ width: "24rem", opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search users, courses, settings..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
          />
        </motion.div>
      </div>

      <div className="flex items-center gap-3">
        <motion.button 
          whileHover={{ scale: 1.1, backgroundColor: "#f8fafc" }}
          whileTap={{ scale: 0.9 }}
          className="p-2.5 text-slate-500 rounded-xl transition-colors relative"
        >
          <Bell className="w-5 h-5" />
          <motion.span 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute top-2.5 right-2.5 w-2 h-2 bg-blue-500 rounded-full border-2 border-white"
          />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.1, backgroundColor: "#f8fafc" }}
          whileTap={{ scale: 0.9 }}
          className="p-2.5 text-slate-500 rounded-xl transition-colors"
        >
          <HelpCircle className="w-5 h-5" />
        </motion.button>
        <div className="h-6 w-[1px] bg-slate-200 mx-1"></div>
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 p-1.5 pr-3 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-100"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shadow-lg shadow-blue-200">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <p className="text-xs font-bold text-slate-900 leading-tight">Admin</p>
            <p className="text-[10px] font-medium text-slate-500 leading-tight">Super Admin</p>
          </div>
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Navbar;
