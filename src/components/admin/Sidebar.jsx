import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  Settings, 
  LayoutDashboard,
  GraduationCap,
  ArrowRight
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: Users, label: 'User Management', path: '/admin/users' },
    { icon: BookOpen, label: 'Course Creation', path: '/admin/courses' },
    { icon: Settings, label: 'System Settings', path: '/admin/settings' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20, filter: 'blur(5px)' },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: 'blur(0px)',
      transition: { type: "spring", stiffness: 100, damping: 12 }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-64 bg-slate-900 text-white h-screen flex flex-col sticky top-0 shrink-0 z-30 shadow-2xl shadow-slate-950/50"
    >
      <div className="p-8 flex items-center gap-3 shrink-0">
        <motion.div
          initial={{ rotate: -20, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/10"
        >
          <GraduationCap className="w-6 h-6 text-blue-400" />
        </motion.div>
        <span className="text-xl font-bold tracking-tight text-white">EduVerse <span className="text-blue-500">Admin</span></span>
      </div>
      
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <motion.div key={item.path} variants={itemVariants}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group relative overflow-hidden ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeTabBackgroundAdmin"
                    className="absolute inset-0 bg-blue-600 -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <item.icon className={`w-5 h-5 transition-colors ${isActive ? 'text-white' : 'group-hover:text-blue-400'}`} />
                </motion.div>
                <span className="font-semibold text-sm tracking-wide">{item.label}</span>
                {isActive && (
                  <motion.div 
                    layoutId="activeTabMarkerAdmin"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      <motion.div 
        variants={itemVariants}
        className="p-6 border-t border-white/5 shrink-0 bg-slate-950/40 backdrop-blur-md"
      >
        <motion.div 
          whileHover={{ x: 5 }}
          className="flex items-center gap-3 px-2 py-2 group cursor-pointer"
        >
          <motion.div 
            whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
            className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold border-2 border-white/10 text-white shadow-xl"
          >
            A
          </motion.div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-white truncate">Admin User</p>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider truncate">System Controller</p>
          </div>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowRight className="w-3 h-3 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
