import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Trophy,
  Star,
  Clock,
  Calendar,
  Edit3,
  Camera,
  CheckCircle2,
  TrendingUp,
  Award,
  Target,
  ArrowRight,
  GraduationCap,
  BarChart2,
  Shield,
  Globe,
} from 'lucide-react';

const StudentProfile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.97 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 16 },
    },
  };

  const student = {
    name: 'Alex Johnson',
    id: 'STU-2024-0891',
    email: 'alex.johnson@university.edu',
    phone: '+1 (555) 234-5678',
    location: 'San Francisco, CA',
    program: 'B.Sc. Computer Science',
    year: '3rd Year',
    gpa: '3.87',
    rank: 'Top 5%',
    attendance: '94%',
    creditsCompleted: 82,
    totalCredits: 120,
    advisor: 'Prof. Sarah Williams',
    joinDate: 'Sept 2022',
    bio: 'Passionate about artificial intelligence and distributed systems. Active member of the coding club and robotics society.',
  };

  const subjects = [
    { name: 'Physics', grade: 'A', score: 92, color: 'bg-blue-500', light: 'bg-blue-50 text-blue-700', instructor: 'Dr. Smith' },
    { name: 'Advanced Mathematics', grade: 'A+', score: 97, color: 'bg-emerald-500', light: 'bg-emerald-50 text-emerald-700', instructor: 'Prof. Sarah' },
    { name: 'Computer Science', grade: 'A', score: 94, color: 'bg-purple-500', light: 'bg-purple-50 text-purple-700', instructor: 'Mr. David' },
    { name: 'History', grade: 'B+', score: 85, color: 'bg-amber-500', light: 'bg-amber-50 text-amber-700', instructor: 'Ms. Clara' },
    { name: 'English Literature', grade: 'A-', score: 89, color: 'bg-rose-500', light: 'bg-rose-50 text-rose-700', instructor: 'Dr. Patel' },
  ];

  const achievements = [
    { title: 'Dean\'s List', semester: 'Spring 2024', icon: Trophy, color: 'bg-amber-50 text-amber-600 border-amber-100' },
    { title: 'Hackathon Winner', semester: 'Feb 2024', icon: Award, color: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
    { title: 'Perfect Attendance', semester: 'Fall 2023', icon: CheckCircle2, color: 'bg-blue-50 text-blue-600 border-blue-100' },
    { title: 'Research Excellence', semester: 'Spring 2023', icon: Star, color: 'bg-purple-50 text-purple-600 border-purple-100' },
  ];

  const activityLog = [
    { action: 'Submitted Lab Report', subject: 'Physics', time: '2 hours ago', icon: BookOpen },
    { action: 'Completed Quiz', subject: 'Mathematics', time: 'Yesterday', icon: CheckCircle2 },
    { action: 'Joined Live Class', subject: 'Computer Science', time: '2 days ago', icon: Globe },
    { action: 'Earned Achievement', subject: 'Dean\'s List', time: '3 days ago', icon: Trophy },
  ];

  const tabs = ['overview', 'academics', 'achievements', 'activity'];

  const creditProgress = Math.round((student.creditsCompleted / student.totalCredits) * 100);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8 font-sans"
    >
      {/* ── Profile Hero Card ── */}
      <motion.div
        variants={itemVariants}
        className="relative bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
      >
        {/* Banner */}
        <div className="h-20 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 relative">
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          />
        </div>

        <div className="px-8 pb-8 mt-8">
          {/* Avatar row */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-13 mb-6">
            <div className="flex items-end gap-5">
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                className="relative w-24 h-24 rounded-2xl border-4 border-white shadow-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shrink-0"
              >
                <span className="text-3xl font-extrabold text-white">AJ</span>
                <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-xl flex items-center justify-center shadow-md hover:bg-emerald-600 transition-colors">
                  <Camera className="w-3.5 h-3.5" />
                </button>
              </motion.div>

              {/* Name & meta */}
              <div className="pb-1">
                <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">{student.name}</h1>
                <p className="text-sm font-medium text-slate-500">{student.program} • {student.year}</p>
                <p className="text-xs font-bold text-slate-400 mt-0.5">{student.id}</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-emerald-600 transition-colors shadow-sm self-start sm:self-auto"
            >
              <Edit3 className="w-4 h-4" /> Edit Profile
            </motion.button>
          </div>

          {/* Quick stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'GPA', value: student.gpa, icon: BarChart2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { label: 'Class Rank', value: student.rank, icon: Trophy, color: 'text-amber-600', bg: 'bg-amber-50' },
              { label: 'Attendance', value: student.attendance, icon: CheckCircle2, color: 'text-blue-600', bg: 'bg-blue-50' },
              { label: 'Credits', value: `${student.creditsCompleted}/${student.totalCredits}`, icon: Target, color: 'text-purple-600', bg: 'bg-purple-50' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -3 }}
                className={`${stat.bg} rounded-2xl p-4 flex items-center gap-3 border border-white`}
              >
                <div className={`${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                  <p className={`text-lg font-extrabold ${stat.color}`}>{stat.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Tabs ── */}
      <motion.div variants={itemVariants} className="flex gap-2 bg-slate-100 p-1.5 rounded-2xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-xl text-sm font-bold capitalize transition-all ${
              activeTab === tab
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* ── Tab Content ── */}
      {activeTab === 'overview' && (
        <motion.div
          key="overview"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Personal Info */}
          <motion.div variants={itemVariants} className="lg:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-5">
            <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
              <User className="w-5 h-5 text-emerald-600" /> Personal Information
            </h2>

            <p className="text-sm text-slate-500 leading-relaxed border-l-4 border-emerald-200 pl-4 italic">
              {student.bio}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                { icon: Mail, label: 'Email', value: student.email },
                { icon: Phone, label: 'Phone', value: student.phone },
                { icon: MapPin, label: 'Location', value: student.location },
                { icon: Calendar, label: 'Joined', value: student.joinDate },
                { icon: GraduationCap, label: 'Advisor', value: student.advisor },
                { icon: Shield, label: 'Student ID', value: student.id },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                  <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                    <Icon className="w-4 h-4 text-slate-500 group-hover:text-emerald-600 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</p>
                    <p className="text-sm font-bold text-slate-800">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Credit Progress + Rank */}
          <div className="space-y-6">
            {/* Credit Progress */}
            <motion.div variants={itemVariants} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
              <h2 className="text-lg font-extrabold text-slate-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-600" /> Credit Progress
              </h2>

              {/* Ring */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-32 h-32">
                  <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#f1f5f9" strokeWidth="12" />
                    <motion.circle
                      cx="60" cy="60" r="50" fill="none"
                      stroke="url(#grad)" strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 50}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 50 * (1 - creditProgress / 100) }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    />
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-extrabold text-slate-900">{creditProgress}%</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Complete</span>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-slate-700">{student.creditsCompleted} of {student.totalCredits} credits</p>
                  <p className="text-xs text-slate-400 mt-1">{student.totalCredits - student.creditsCompleted} credits remaining</p>
                </div>
              </div>
            </motion.div>

            {/* Gradient promo card */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-emerald-600 to-teal-700 p-6 rounded-3xl text-white shadow-xl shadow-emerald-100 relative overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <TrendingUp className="absolute -bottom-4 -right-4 w-28 h-28 text-white/10 rotate-12" />
              <div className="relative z-10">
                <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-200 mb-1">Performance</p>
                <h3 className="text-xl font-extrabold mb-2">Excellent Standing</h3>
                <p className="text-emerald-100 text-sm leading-relaxed mb-4">You're outperforming 95% of your peers this semester.</p>
                <button className="bg-white text-emerald-700 px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-50 transition-all shadow w-full">
                  View Full Report
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {activeTab === 'academics' && (
        <motion.div
          key="academics"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <motion.div variants={itemVariants} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" /> Current Subjects
            </h2>
            <div className="space-y-4">
              {subjects.map((subject, idx) => (
                <motion.div
                  key={subject.name}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors group border border-transparent hover:border-slate-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-sm font-extrabold text-slate-500 shrink-0 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="font-bold text-slate-900 truncate">{subject.name}</p>
                      <div className="flex items-center gap-3 shrink-0 ml-4">
                        <span className={`text-[11px] font-extrabold px-2 py-0.5 rounded-lg border ${subject.light}`}>
                          {subject.grade}
                        </span>
                        <span className="text-sm font-bold text-slate-500 w-10 text-right">{subject.score}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${subject.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${subject.score}%` }}
                        transition={{ duration: 0.9, delay: idx * 0.1, ease: 'easeOut' }}
                      />
                    </div>
                    <p className="text-[11px] text-slate-400 font-medium mt-1">{subject.instructor}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Semester GPA Card */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Semester GPA', value: '3.87', sub: 'Spring 2024', trend: '+0.12 vs last', color: 'border-emerald-200 bg-emerald-50' },
              { label: 'Cumulative GPA', value: '3.74', sub: 'All semesters', trend: 'Consistent', color: 'border-blue-200 bg-blue-50' },
              { label: 'Projected GPA', value: '3.91', sub: 'End of semester', trend: '+0.17 projected', color: 'border-purple-200 bg-purple-50' },
            ].map((g) => (
              <div key={g.label} className={`rounded-2xl border p-5 ${g.color}`}>
                <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">{g.label}</p>
                <p className="text-3xl font-extrabold text-slate-900">{g.value}</p>
                <p className="text-xs text-slate-500 mt-1">{g.sub}</p>
                <p className="text-xs font-bold text-emerald-600 mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> {g.trend}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}

      {activeTab === 'achievements' && (
        <motion.div
          key="achievements"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((ach) => (
            <motion.div
              key={ach.title}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`bg-white border rounded-3xl p-6 text-center shadow-sm hover:shadow-md transition-shadow ${ach.color.split(' ')[0]} border-${ach.color.split(' ')[2]?.replace('border-', '') || 'slate-200'}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 border ${ach.color}`}>
                <ach.icon className="w-7 h-7" />
              </div>
              <h3 className="font-extrabold text-slate-900 text-base mb-1">{ach.title}</h3>
              <p className="text-xs font-bold text-slate-400">{ach.semester}</p>
            </motion.div>
          ))}
        </motion.div>
      )}

      {activeTab === 'activity' && (
        <motion.div
          key="activity"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6"
        >
          <h2 className="text-lg font-extrabold text-slate-900 mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-emerald-600" /> Recent Activity
          </h2>
          <div className="space-y-2">
            {activityLog.map((log, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group"
              >
                <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                  <log.icon className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-900 text-sm">{log.action}</p>
                  <p className="text-xs text-slate-400 font-medium">{log.subject}</p>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-slate-400 shrink-0">
                  <Clock className="w-3 h-3" /> {log.time}
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default StudentProfile;