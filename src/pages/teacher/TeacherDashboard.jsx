import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Video, 
  FileText, 
  CheckCircle2, 
  PlusCircle, 
  ArrowRight,
  MoreHorizontal,
  MessageSquare,
  BookOpen,
  GraduationCap
} from 'lucide-react';

const TeacherDashboard = () => {
  const upcomingSessions = [
    { id: 1, title: 'Advanced Calculus', time: '10:00 AM', duration: '60 min', students: 24, type: 'Live Class' },
    { id: 2, title: 'Linear Algebra Review', time: '02:30 PM', duration: '45 min', students: 18, type: 'Q&A Session' },
  ];

  const pendingSubmissions = [
    { id: 1, assignment: 'Integration Homework', course: 'Calculus I', count: 12, dueDate: 'Today' },
    { id: 2, assignment: 'Final Project Draft', course: 'Linear Algebra', count: 5, dueDate: 'Tomorrow' },
  ];

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
      {/* Decorative background elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -z-10" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-between">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-slate-900 tracking-tight"
            >
              Welcome back, <span className="text-indigo-600">Sarah!</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-500 font-medium mt-1"
            >
              You have 2 classes scheduled for today.
            </motion.p>
          </div>
          <motion.div variants={itemVariants}>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 group"
            >
              <PlusCircle className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              Assign New Work
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Sessions */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div variants={itemVariants} className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Upcoming Sessions</h2>
              <motion.button 
                whileHover={{ x: 5 }}
                className="text-indigo-600 text-sm font-bold hover:underline flex items-center gap-1"
              >
                View Schedule <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
            <div className="grid gap-4">
              {upcomingSessions.map((session, idx) => (
                <motion.div 
                  key={session.id} 
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8, 
                    borderColor: "rgba(79, 70, 229, 0.3)",
                    boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)" 
                  }}
                  className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-5">
                      <motion.div 
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm"
                      >
                        <Video className="w-7 h-7" />
                      </motion.div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900">{session.title}</h3>
                        <div className="flex items-center gap-4 mt-2">
                          <span className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                            <Clock className="w-4 h-4 text-indigo-500" /> {session.time}
                          </span>
                          <span className="text-slate-300">•</span>
                          <span className="text-sm font-semibold text-indigo-600 bg-indigo-50/80 px-3 py-1 rounded-lg">
                            {session.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {idx === 0 && (
                        <div className="flex flex-col items-end mr-2">
                          <motion.span 
                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="text-[10px] font-bold text-red-500 uppercase tracking-wider mb-1"
                          >
                            Live Now
                          </motion.span>
                          <motion.div 
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="h-1.5 w-12 bg-red-100 rounded-full overflow-hidden"
                          >
                            <motion.div 
                              animate={{ x: [-48, 48] }}
                              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                              className="h-full w-1/2 bg-red-500"
                            />
                          </motion.div>
                        </div>
                      )}
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={idx === 0 ? { 
                          boxShadow: ["0 0 0px rgba(79, 70, 229, 0)", "0 0 25px rgba(79, 70, 229, 0.4)", "0 0 0px rgba(79, 70, 229, 0)"]
                        } : {}}
                        transition={idx === 0 ? { repeat: Infinity, duration: 2 } : {}}
                        className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                          idx === 0 
                            ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-200' 
                            : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                        }`}
                      >
                        {idx === 0 ? 'Start Class' : 'Prepare'}
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div variants={itemVariants} className="pt-4">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                {[
                  { label: 'Create Quiz', icon: FileText, color: 'bg-orange-50 text-orange-600', shadow: 'shadow-orange-100' },
                  { label: 'Post Update', icon: MessageSquare, color: 'bg-blue-50 text-blue-600', shadow: 'shadow-blue-100' },
                  { label: 'Attendance', icon: CheckCircle2, color: 'bg-green-50 text-green-600', shadow: 'shadow-green-100' },
                  { label: 'Resources', icon: BookOpen, color: 'bg-purple-50 text-purple-600', shadow: 'shadow-purple-100' },
                ].map((action, idx) => (
                  <motion.button 
                    key={idx} 
                    variants={cardVariants}
                    whileHover={{ 
                      y: -10, 
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)" 
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center gap-4 p-6 bg-white rounded-3xl border border-slate-200 shadow-sm transition-all group`}
                  >
                    <motion.div 
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`w-14 h-14 ${action.color} rounded-2xl flex items-center justify-center shadow-lg ${action.shadow} group-hover:scale-110 transition-transform`}
                    >
                      <action.icon className="w-7 h-7" />
                    </motion.div>
                    <span className="text-sm font-bold text-slate-700">{action.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Pending Submissions */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900">Submissions</h2>
            <motion.div 
              variants={cardVariants}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Pending Review</span>
                <motion.div whileHover={{ rotate: 90 }} className="p-1 cursor-pointer">
                  <MoreHorizontal className="w-5 h-5 text-slate-400" />
                </motion.div>
              </div>
              <div className="divide-y divide-slate-100">
                {pendingSubmissions.map((item, idx) => (
                  <motion.div 
                    key={item.id} 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    whileHover={{ backgroundColor: "#fcfdff" }}
                    className="p-6 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-indigo-600 px-2.5 py-1 bg-indigo-50 rounded-lg">{item.course}</span>
                      <motion.span 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ repeat: Infinity, duration: 2, delay: idx * 0.5 }}
                        className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-50 text-red-500 border border-red-100"
                      >
                        Due {item.dueDate}
                      </motion.span>
                    </div>
                    <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors text-lg leading-tight">{item.assignment}</h4>
                    <div className="flex items-center justify-between mt-5">
                      <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                          <motion.div 
                            key={i} 
                            whileHover={{ y: -5, zIndex: 10 }}
                            className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-600 shadow-sm"
                          >
                            {String.fromCharCode(64 + i + (idx * 3))}
                          </motion.div>
                        ))}
                        <div className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-md">
                          +{item.count - 3}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xs font-bold text-slate-900">{item.count} new</span>
                        <span className="text-[10px] font-medium text-slate-400">submissions</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.button 
                whileHover={{ backgroundColor: "#f8fafc" }}
                className="w-full py-4 text-sm font-bold text-indigo-600 border-t border-slate-100 transition-colors"
              >
                Review All Submissions
              </motion.button>
            </motion.div>

            {/* Tips Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-indigo-600 p-6 rounded-3xl text-white relative overflow-hidden shadow-xl shadow-indigo-100"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold">Teacher Tip</h3>
                </div>
                <p className="text-indigo-100 text-sm leading-relaxed">
                  Use the "Live Class" feature to record your sessions for students who couldn't attend.
                </p>
              </div>
              <Video className="absolute -bottom-4 -right-4 w-24 h-24 text-white/10 rotate-12" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default TeacherDashboard;
