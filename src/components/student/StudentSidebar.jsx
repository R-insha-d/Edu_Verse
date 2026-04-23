import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  CheckSquare, 
  Bell, 
  User,
  GraduationCap
} from 'lucide-react';

const StudentSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/student' },
    { icon: BookOpen, label: 'My Courses', path: '/student/courses' },
    { icon: Calendar, label: 'Timetable', path: '/student/timetable' },
    { icon: CheckSquare, label: 'Assignments', path: '/student/assignments' },
    { icon: Bell, label: 'Notifications', path: '/student/notifications' },
    { icon: User, label: 'Profile', path: '/student/profile' },
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
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-64 bg-emerald-900 text-white h-screen flex flex-col sticky top-0 shrink-0"
    >
      <div className="p-6 flex items-center gap-3 shrink-0">
        <motion.div
          initial={{ rotate: -20, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <GraduationCap className="w-8 h-8 text-emerald-400" />
        </motion.div>
        <span className="text-xl font-bold tracking-tight text-white">EduVerse Student</span>
      </div>
      
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <motion.div key={item.path} variants={itemVariants}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all group ${
                  isActive 
                    ? 'bg-emerald-700 text-white shadow-lg shadow-emerald-900/50' 
                    : 'text-emerald-100 hover:bg-emerald-800 hover:text-white'
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <item.icon className={`w-5 h-5 transition-colors ${isActive ? 'text-emerald-300' : 'group-hover:text-emerald-300'}`} />
                </motion.div>
                <span className="font-medium">{item.label}</span>
                {isActive && (
                  <motion.div 
                    layoutId="activeTab"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.6)]"
                  />
                )}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      <motion.div 
        variants={itemVariants}
        className="p-4 border-t border-emerald-800 shrink-0 bg-emerald-950/50"
      >
        <div className="flex items-center gap-3 px-4 py-2 group cursor-pointer">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold border-2 border-emerald-400 text-white shadow-lg"
          >
            S
          </motion.div>
          <div className="transition-transform group-hover:translate-x-1">
            <p className="text-sm font-semibold text-white">Alex Johnson</p>
            <p className="text-xs text-emerald-300">Grade 12 - Science</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StudentSidebar;
