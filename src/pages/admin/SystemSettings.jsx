import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Lock, Bell, Eye, Save, ShieldCheck, Cog } from 'lucide-react';

const SystemSettings = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8 
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl space-y-8"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
            <Cog className="w-8 h-8 text-blue-500" />
            System <span className="text-blue-600">Settings</span>
          </h1>
          <p className="text-slate-500 font-medium mt-1">Configure your classroom environment and security parameters.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants} className="md:col-span-1 space-y-2">
            <h3 className="text-lg font-bold text-slate-900">General Settings</h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">Basic platform identity and localization settings.</p>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            className="md:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 space-y-6"
          >
            <div className="space-y-2">
              <label className="text-sm font-black text-slate-400 uppercase tracking-widest">Site Name</label>
              <motion.input 
                whileFocus={{ scale: 1.01 }}
                type="text" 
                defaultValue="EduVerse Learning" 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium text-slate-700" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-black text-slate-400 uppercase tracking-widest">Support Email</label>
              <motion.input 
                whileFocus={{ scale: 1.01 }}
                type="email" 
                defaultValue="support@eduverse.com" 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium text-slate-700" 
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-1 space-y-2">
            <h3 className="text-lg font-bold text-slate-900">Security & Access</h3>
            <p className="text-sm font-medium text-slate-500 leading-relaxed">Authentication protocols and public access controls.</p>
          </motion.div>
          <motion.div 
            variants={cardVariants}
            className="md:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 space-y-4"
          >
            <motion.div 
              whileHover={{ backgroundColor: "#fcfdff" }}
              className="flex items-center justify-between p-4 rounded-2xl border border-transparent hover:border-slate-50 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Lock className="w-6 h-6 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Two-Factor Authentication</p>
                  <p className="text-xs font-medium text-slate-500">Require 2FA for all instructors.</p>
                </div>
              </div>
              <motion.div 
                whileTap={{ scale: 0.9 }}
                className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer shadow-inner"
              >
                <motion.div 
                  layout
                  className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-lg" 
                />
              </motion.div>
            </motion.div>
            
            <motion.div 
              whileHover={{ backgroundColor: "#fcfdff" }}
              className="flex items-center justify-between p-4 rounded-2xl border border-transparent hover:border-slate-50 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
                  <Globe className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Public Registration</p>
                  <p className="text-xs font-medium text-slate-500">Allow new students to sign up.</p>
                </div>
              </div>
              <motion.div 
                whileTap={{ scale: 0.9 }}
                className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer shadow-inner"
              >
                <motion.div 
                  layout
                  className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-lg" 
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="flex justify-end pt-4">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
          >
            <Save className="w-5 h-5" />
            Save System Changes
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SystemSettings;
