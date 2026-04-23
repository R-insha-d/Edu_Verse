import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Image, Video, FileText, Sparkles, ArrowRight } from 'lucide-react';

const ImageIcon = Image;

const CourseCreation = () => {
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
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10 animate-pulse" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl space-y-8"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-blue-500" />
            Create New <span className="text-blue-600">Course</span>
          </h1>
          <p className="text-slate-500 font-medium mt-1">Launch a new learning journey for your students.</p>
        </motion.div>

        <motion.div 
          variants={cardVariants}
          className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 space-y-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full -mr-32 -mt-32 -z-10" />

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-black text-slate-400 uppercase tracking-widest">Course Title</label>
              <motion.input 
                whileFocus={{ scale: 1.01 }}
                type="text" 
                placeholder="e.g. Advanced Web Development with React" 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium text-slate-700"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-black text-slate-400 uppercase tracking-widest">Category</label>
                <div className="relative">
                  <select className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer font-medium text-slate-700">
                    <option>Programming</option>
                    <option>Design</option>
                    <option>Business</option>
                    <option>Marketing</option>
                  </select>
                  <ArrowRight className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 rotate-90 pointer-events-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-black text-slate-400 uppercase tracking-widest">Price (USD)</label>
                <motion.input 
                  whileFocus={{ scale: 1.01 }}
                  type="number" 
                  placeholder="49.99" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium text-slate-700"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-black text-slate-400 uppercase tracking-widest">Course Description</label>
              <motion.textarea 
                whileFocus={{ scale: 1.01 }}
                rows="4"
                placeholder="Describe what students will learn..." 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all resize-none font-medium text-slate-700"
              ></motion.textarea>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-black text-slate-400 uppercase tracking-widest">Course Materials</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { label: 'Add Thumbnail', icon: Image, color: 'hover:text-blue-600 hover:bg-blue-50' },
                  { label: 'Upload Intro', icon: Video, color: 'hover:text-emerald-600 hover:bg-emerald-50' },
                  { label: 'Add Syllabus', icon: FileText, color: 'hover:text-purple-600 hover:bg-purple-50' },
                ].map((item, i) => (
                  <motion.button 
                    key={i}
                    whileHover={{ y: -5, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex flex-col items-center justify-center gap-3 p-8 border-2 border-dashed border-slate-100 rounded-3xl transition-all text-slate-400 group ${item.color}`}
                  >
                    <item.icon className="w-8 h-8 transition-transform group-hover:scale-110" />
                    <span className="text-xs font-black uppercase tracking-widest">{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-slate-50 flex justify-end gap-4">
              <motion.button 
                whileHover={{ backgroundColor: "#f8fafc" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-2xl font-bold text-slate-500 border border-slate-200 transition-all"
              >
                Save Draft
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-2xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-all flex items-center gap-2 shadow-xl shadow-blue-100"
              >
                <Plus className="w-5 h-5" />
                Create Course
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CourseCreation;
