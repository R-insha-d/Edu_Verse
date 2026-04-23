import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Video,
  FileText,
  Trophy,
  CheckSquare,
  Bell
} from 'lucide-react';

const StudentDashboard = () => {
  const timetable = [
    { id: 1, subject: 'Physics', instructor: 'Dr. Smith', time: '09:00 AM', duration: '45 min', room: 'Online Room A', color: 'border-blue-500 bg-blue-50' },
    { id: 2, subject: 'Advanced Mathematics', instructor: 'Prof. Sarah', time: '10:30 AM', duration: '60 min', room: 'Live Studio 2', color: 'border-emerald-500 bg-emerald-50' },
    { id: 3, subject: 'Computer Science', instructor: 'Mr. David', time: '01:00 PM', duration: '90 min', room: 'Tech Lab 1', color: 'border-purple-500 bg-purple-50' },
  ];

  const currentTasks = [
    { id: 1, task: 'Complete Lab Report', subject: 'Physics', due: 'In 2 hours', priority: 'High', icon: FileText, iconColor: 'text-red-500' },
    { id: 2, task: 'Calculus Quiz', subject: 'Mathematics', due: 'Tomorrow', priority: 'Medium', icon: CheckCircle2, iconColor: 'text-emerald-500' },
    { id: 3, task: 'Read Chapter 4', subject: 'History', due: 'Friday', priority: 'Low', icon: BookOpen, iconColor: 'text-blue-500' },
  ];

  const announcements = [
    { id: 1, title: 'Final Exam Schedule Posted', date: '2 hours ago', content: 'The final examination schedule for the spring semester is now available on the portal.', type: 'Academic' },
    { id: 2, title: 'Guest Lecture: AI in Healthcare', date: 'Yesterday', content: 'Join us this Friday for an insightful session with Dr. Chen from MIT.', type: 'Event' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6 
      }
    }
  };

  const cardHover = {
    initial: { scale: 1, y: 0, shadow: "0px 2px 4px rgba(0,0,0,0.05)" },
    hover: { 
      scale: 1.01, 
      y: -5,
      shadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Header with Welcome Message and Progress */}
      <motion.div 
        variants={itemVariants}
        className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
      >
        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Hello, Alex! 👋</h1>
          <p className="text-slate-500 font-medium">You have 3 classes and 2 pending assignments today.</p>
        </div>
        <div className="flex items-center gap-4 bg-emerald-50 px-6 py-4 rounded-2xl border border-emerald-100">
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-200"
          >
            <Trophy className="w-6 h-6" />
          </motion.div>
          <div>
            <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Current Rank</p>
            <p className="text-xl font-extrabold text-emerald-900">Top 5%</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Timetable and Tasks */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Timetable Section */}
          <motion.section variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-600" />
                Today's Timetable
              </h2>
              <button className="text-emerald-600 text-sm font-bold hover:underline flex items-center gap-1">
                Full Schedule <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <div className="grid gap-4">
              {timetable.map((item, idx) => (
                <motion.div 
                  key={item.id} 
                  variants={itemVariants}
                  whileHover="hover"
                  initial="initial"
                  animate="visible"
                  custom={idx}
                  className={`p-5 rounded-2xl border-l-4 shadow-sm transition-all ${item.color} group relative overflow-hidden`}
                >
                  <motion.div 
                    className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        whileHover={{ rotate: [-2, 2, -2, 0] }}
                        className="w-14 h-14 bg-white rounded-xl flex flex-col items-center justify-center shadow-sm border border-slate-100"
                      >
                        <span className="text-sm font-bold text-slate-900">{item.time.split(' ')[0]}</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">{item.time.split(' ')[1]}</span>
                      </motion.div>
                      <div>
                        <motion.h3 
                          className="font-bold text-slate-900 text-lg group-hover:text-emerald-700 transition-colors"
                        >
                          {item.subject}
                        </motion.h3>
                        <p className="text-sm text-slate-500 font-medium">{item.instructor} • {item.room}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {idx === 0 && (
                        <motion.span 
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="flex h-2 w-2 rounded-full bg-red-500"
                        />
                      )}
                      <motion.button 
                        whileHover={{ scale: 1.05, backgroundColor: "#000" }}
                        whileTap={{ scale: 0.95 }}
                        animate={idx === 0 ? { 
                          boxShadow: ["0px 0px 0px rgba(16, 185, 129, 0)", "0px 0px 20px rgba(16, 185, 129, 0.4)", "0px 0px 0px rgba(16, 185, 129, 0)"]
                        } : {}}
                        transition={idx === 0 ? { repeat: Infinity, duration: 2 } : {}}
                        className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
                      >
                        <Video className="w-4 h-4" />
                        Join Class
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tasks Section */}
          <motion.section variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-emerald-600" />
                Current Tasks
              </h2>
              <button className="text-emerald-600 text-sm font-bold hover:underline flex items-center gap-1">
                All Assignments <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentTasks.map((task) => (
                <motion.div 
                  key={task.id} 
                  whileHover={{ y: -5 }}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-200 transition-colors group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-2 rounded-lg bg-slate-50 ${task.iconColor}`}>
                      <task.icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter ${
                      task.priority === 'High' ? 'bg-red-100 text-red-600' : 
                      task.priority === 'Medium' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {task.priority} Priority
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">{task.task}</h3>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                    <span className="text-xs font-bold text-slate-400">{task.subject}</span>
                    <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" /> {task.due}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Right Column: Announcements */}
        <div className="space-y-8">
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 px-2 flex items-center gap-2">
              <Bell className="w-5 h-5 text-emerald-600" />
              Recent Announcements
            </h2>
            <div className="space-y-4">
              {announcements.map((news) => (
                <motion.div 
                  key={news.id} 
                  whileHover={{ x: -4 }}
                  className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-emerald-200 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-extrabold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded-lg">
                      {news.type}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">
                      {news.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 leading-tight group-hover:text-emerald-600 transition-colors">{news.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                    {news.content}
                  </p>
                  <button className="mt-4 text-xs font-bold text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-3 h-3" />
                  </button>
                </motion.div>
              ))}
            </div>
            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full py-4 bg-emerald-50 text-emerald-700 text-sm font-bold rounded-2xl hover:bg-emerald-100 transition-colors border border-emerald-100"
            >
              See All Announcements
            </motion.button>
          </motion.section>

          {/* Quick Stats/Links Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 rounded-3xl text-white shadow-xl shadow-emerald-100 relative overflow-hidden cursor-pointer"
          >
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4">Exam Prep Kit</h3>
              <p className="text-emerald-50 text-sm leading-relaxed mb-6">
                All your study materials and past papers are now organized for your finals.
              </p>
              <button className="bg-white text-emerald-700 px-6 py-3 rounded-xl text-sm font-bold hover:bg-emerald-50 transition-all w-full shadow-lg">
                Access Materials
              </button>
            </div>
            <AlertCircle className="absolute -bottom-4 -right-4 w-32 h-32 text-white/10 rotate-12" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentDashboard;
