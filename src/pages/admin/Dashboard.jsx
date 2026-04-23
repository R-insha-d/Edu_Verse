import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  GraduationCap, 
  TrendingUp,
  ArrowUpRight,
  MoreVertical,
  Activity,
  UserPlus
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Students', value: '1,234', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50', trend: '+12.5%', shadow: 'shadow-blue-100' },
    { label: 'Active Courses', value: '42', icon: BookOpen, color: 'text-emerald-600', bg: 'bg-emerald-50', trend: '+3.2%', shadow: 'shadow-emerald-100' },
    { label: 'Instructors', value: '18', icon: GraduationCap, color: 'text-indigo-600', bg: 'bg-indigo-50', trend: '+2', shadow: 'shadow-indigo-100' },
    { label: 'Total Revenue', value: '$12,450', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50', trend: '+18.4%', shadow: 'shadow-orange-100' },
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
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute top-1/2 -left-24 w-64 h-64 bg-indigo-200/20 rounded-full blur-3xl -z-10" />

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
              Admin <span className="text-blue-600">Dashboard</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-slate-500 font-medium mt-1"
            >
              Welcome back, here's what's happening today.
            </motion.p>
          </div>
          <motion.div variants={itemVariants} className="flex gap-3">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white text-slate-700 px-4 py-2.5 rounded-xl font-bold border border-slate-200 shadow-sm hover:bg-slate-50 transition-all"
            >
              <Activity className="w-4 h-4" />
              Reports
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              <UserPlus className="w-4 h-4" />
              Add User
            </motion.button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                borderColor: "rgba(59, 130, 246, 0.3)",
                boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)" 
              }}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm transition-all group relative overflow-hidden"
            >
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                    <span className={`text-[10px] font-bold ${stat.color} bg-white px-1.5 py-0.5 rounded border border-slate-100 shadow-sm flex items-center gap-0.5`}>
                      <TrendingUp className="w-2.5 h-2.5" />
                      {stat.trend}
                    </span>
                  </div>
                </div>
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  className={`${stat.bg} ${stat.color} p-4 rounded-2xl shadow-lg ${stat.shadow} group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-6 h-6" />
                </motion.div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Updated 2 mins ago
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm min-h-[300px] relative overflow-hidden group"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-500" />
                Platform Activity
              </h3>
              <motion.button whileHover={{ rotate: 90 }} className="p-1.5 hover:bg-slate-50 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-slate-400" />
              </motion.button>
            </div>
            <div className="h-48 flex items-center justify-center text-slate-400 italic bg-slate-50/50 rounded-2xl border-2 border-dashed border-slate-200">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                </div>
                <span>Activity Chart Placeholder</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm min-h-[300px] relative overflow-hidden group"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-500" />
                Recent Enrollments
              </h3>
              <motion.button whileHover={{ x: 5 }} className="text-blue-600 text-xs font-bold hover:underline flex items-center gap-1">
                View All <ArrowUpRight className="w-3 h-3" />
              </motion.button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((_, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + (i * 0.1) }}
                  className="flex items-center justify-between p-4 bg-slate-50/50 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer border border-transparent hover:border-slate-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center font-bold text-blue-600 shadow-sm">
                      {String.fromCharCode(65 + i)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Student {i + 1}</p>
                      <p className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">Advanced Calculus</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400">2m ago</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
