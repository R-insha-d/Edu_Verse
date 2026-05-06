import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Clock,
  BarChart2,
  Star,
  ChevronRight,
  Play,
  Filter,
  Search,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
  Lock,
  Video,
  FileText,
  Download,
  MoreVertical,
  Zap,
  Calendar
} from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Advanced Physics',
    instructor: 'Dr. Alan Smith',
    category: 'Science',
    progress: 72,
    totalLessons: 48,
    completedLessons: 34,
    duration: '38h 20m',
    nextLesson: 'Quantum Entanglement',
    nextLessonTime: 'Today, 09:00 AM',
    rating: 4.8,
    students: 1240,
    color: 'from-blue-500 to-indigo-600',
    lightColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    accentColor: 'text-blue-600',
    badgeColor: 'bg-blue-100 text-blue-700',
    status: 'in-progress',
    tag: 'Live',
    tagColor: 'bg-red-100 text-red-600',
  },
  {
    id: 2,
    title: 'Calculus & Linear Algebra',
    instructor: 'Prof. Sarah Lin',
    category: 'Mathematics',
    progress: 55,
    totalLessons: 60,
    completedLessons: 33,
    duration: '52h 10m',
    nextLesson: 'Eigenvalues & Eigenvectors',
    nextLessonTime: 'Today, 10:30 AM',
    rating: 4.9,
    students: 3105,
    color: 'from-emerald-500 to-teal-600',
    lightColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    accentColor: 'text-emerald-600',
    badgeColor: 'bg-emerald-100 text-emerald-700',
    status: 'in-progress',
    tag: 'Live',
    tagColor: 'bg-red-100 text-red-600',
  },
  {
    id: 3,
    title: 'Computer Science Fundamentals',
    instructor: 'Mr. David Chen',
    category: 'Technology',
    progress: 88,
    totalLessons: 40,
    completedLessons: 35,
    duration: '30h 45m',
    nextLesson: 'Graph Algorithms',
    nextLessonTime: 'Today, 01:00 PM',
    rating: 4.7,
    students: 2780,
    color: 'from-purple-500 to-violet-600',
    lightColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    accentColor: 'text-purple-600',
    badgeColor: 'bg-purple-100 text-purple-700',
    status: 'in-progress',
    tag: 'Upcoming',
    tagColor: 'bg-orange-100 text-orange-600',
  },
  {
    id: 4,
    title: 'World History & Civilizations',
    instructor: 'Ms. Emily Rosé',
    category: 'Humanities',
    progress: 100,
    totalLessons: 36,
    completedLessons: 36,
    duration: '28h 00m',
    nextLesson: null,
    nextLessonTime: null,
    rating: 4.6,
    students: 980,
    color: 'from-amber-500 to-orange-500',
    lightColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    accentColor: 'text-amber-600',
    badgeColor: 'bg-amber-100 text-amber-700',
    status: 'completed',
    tag: 'Completed',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    id: 5,
    title: 'English Literature & Composition',
    instructor: 'Dr. James Fletcher',
    category: 'Language',
    progress: 30,
    totalLessons: 44,
    completedLessons: 13,
    duration: '34h 15m',
    nextLesson: 'Shakespeares Tragedies',
    nextLessonTime: 'Thursday, 11:00 AM',
    rating: 4.5,
    students: 1560,
    color: 'from-rose-500 to-pink-600',
    lightColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    accentColor: 'text-rose-600',
    badgeColor: 'bg-rose-100 text-rose-700',
    status: 'in-progress',
    tag: 'Scheduled',
    tagColor: 'bg-blue-100 text-blue-600',
  },
  {
    id: 6,
    title: 'Chemistry: Organic & Inorganic',
    instructor: 'Dr. Priya Nair',
    category: 'Science',
    progress: 0,
    totalLessons: 52,
    completedLessons: 0,
    duration: '44h 30m',
    nextLesson: 'Introduction to Atoms',
    nextLessonTime: 'Friday, 02:00 PM',
    rating: 4.8,
    students: 2100,
    color: 'from-cyan-500 to-sky-600',
    lightColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    accentColor: 'text-cyan-600',
    badgeColor: 'bg-cyan-100 text-cyan-700',
    status: 'not-started',
    tag: 'New',
    tagColor: 'bg-slate-100 text-slate-600',
  },
];

const filterTabs = ['All Courses', 'In Progress', 'Completed', 'Not Started'];

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

const StatCard = ({ icon: Icon, label, value, sub, color }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -4, scale: 1.02 }}
    className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex items-center gap-4"
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div>
      <p className="text-2xl font-extrabold text-slate-900 leading-none">{value}</p>
      <p className="text-xs font-semibold text-slate-400 mt-1">{label}</p>
      {sub && <p className="text-[10px] text-emerald-500 font-bold mt-0.5">{sub}</p>}
    </div>
  </motion.div>
);

const ProgressRing = ({ progress, size = 52, stroke = 5, color = '#10b981' }) => {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;
  return (
    <svg width={size} height={size} className="rotate-[-90deg]">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#f1f5f9" strokeWidth={stroke} />
      <motion.circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={color} strokeWidth={stroke} strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
      />
    </svg>
  );
};

const CourseCard = ({ course, idx }) => {
  const isCompleted = course.status === 'completed';
  const isNew = course.status === 'not-started';

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6, boxShadow: '0 20px 40px -12px rgba(0,0,0,0.12)' }}
      className={`bg-white rounded-3xl border ${course.borderColor} shadow-sm overflow-hidden group transition-shadow`}
    >
      {/* Top color band */}
      <div className={`h-2 w-full bg-gradient-to-r ${course.color}`} />

      <div className="p-6 space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider ${course.badgeColor}`}>
                {course.category}
              </span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${course.tagColor}`}>
                {course.tag}
              </span>
            </div>
            <h3 className={`font-extrabold text-slate-900 text-lg leading-tight group-hover:${course.accentColor} transition-colors line-clamp-1`}>
              {course.title}
            </h3>
            <p className="text-sm text-slate-400 font-medium mt-0.5">{course.instructor}</p>
          </div>
          <button className="text-slate-300 hover:text-slate-500 transition-colors mt-1">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-4">
          <div className="relative flex-shrink-0">
            <ProgressRing
              progress={course.progress}
              size={56}
              stroke={5}
              color={isCompleted ? '#10b981' : isNew ? '#cbd5e1' : '#1e293b'}
            />
            <span className="absolute inset-0 flex items-center justify-center text-[11px] font-extrabold text-slate-800">
              {course.progress}%
            </span>
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="flex justify-between text-xs font-bold text-slate-500">
              <span>{course.completedLessons} / {course.totalLessons} lessons</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${course.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${course.progress}%` }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 + idx * 0.05 }}
              />
            </div>
          </div>
        </div>

        {/* Meta row */}
        <div className="flex items-center gap-4 text-xs text-slate-400 font-semibold">
          <span className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            {course.rating}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            {course.students.toLocaleString()} students
          </span>
        </div>

        {/* Next lesson or Completed CTA */}
        {isCompleted ? (
          <div className="flex items-center justify-between bg-emerald-50 border border-emerald-100 rounded-2xl px-4 py-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-bold text-emerald-700">Course Completed!</span>
            </div>
            <button className="flex items-center gap-1 text-xs font-bold text-emerald-700 hover:gap-2 transition-all">
              <Award className="w-3.5 h-3.5" /> Certificate
            </button>
          </div>
        ) : isNew ? (
          <div className="flex items-center justify-between bg-slate-50 border border-slate-100 rounded-2xl px-4 py-3">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400" />
              <div>
                <p className="text-xs font-bold text-slate-700">{course.nextLesson}</p>
                <p className="text-[10px] font-semibold text-slate-400">{course.nextLessonTime}</p>
              </div>
            </div>
            <Lock className="w-4 h-4 text-slate-300" />
          </div>
        ) : (
          <div className={`flex items-center justify-between ${course.lightColor} border ${course.borderColor} rounded-2xl px-4 py-3`}>
            <div className="flex items-center gap-2">
              <Video className={`w-4 h-4 ${course.accentColor}`} />
              <div>
                <p className="text-xs font-bold text-slate-800">{course.nextLesson}</p>
                <p className={`text-[10px] font-semibold ${course.accentColor}`}>{course.nextLessonTime}</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 bg-slate-900 rounded-xl flex items-center justify-center shadow-md"
            >
              <Play className="w-3.5 h-3.5 text-white fill-white" />
            </motion.button>
          </div>
        )}

        {/* Bottom actions */}
        <div className="flex items-center gap-2 pt-1 border-t border-slate-50">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex-1 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-700 transition-colors flex items-center justify-center gap-1.5"
          >
            {isCompleted ? 'Review Course' : isNew ? 'Start Course' : 'Continue'}
            <ChevronRight className="w-3.5 h-3.5" />
          </motion.button>
          <button className="p-2.5 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
            <Download className="w-4 h-4 text-slate-400" />
          </button>
          <button className="p-2.5 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
            <FileText className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const StudentCourse = () => {
  const [activeFilter, setActiveFilter] = useState('All Courses');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = courses.filter((c) => {
    const matchFilter =
      activeFilter === 'All Courses' ||
      (activeFilter === 'In Progress' && c.status === 'in-progress') ||
      (activeFilter === 'Completed' && c.status === 'completed') ||
      (activeFilter === 'Not Started' && c.status === 'not-started');
    const matchSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFilter && matchSearch;
  });

  const stats = [
    { icon: BookOpen, label: 'Enrolled Courses', value: courses.length, sub: '+1 this month', color: 'bg-emerald-500' },
    { icon: TrendingUp, label: 'Avg. Progress', value: `${Math.round(courses.reduce((a, c) => a + c.progress, 0) / courses.length)}%`, sub: '↑ 8% from last week', color: 'bg-blue-500' },
    { icon: CheckCircle, label: 'Completed', value: courses.filter(c => c.status === 'completed').length, sub: 'Certificate earned', color: 'bg-amber-500' },
    { icon: Zap, label: 'Study Streak', value: '12 days', sub: 'Personal best!', color: 'bg-purple-500' },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      {/* Page Header */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white px-8 py-6 rounded-3xl border border-slate-200 shadow-sm"
      >
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">My Courses</h1>
          <p className="text-slate-400 font-medium text-sm mt-1">Track your learning journey and pick up right where you left off.</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-2xl text-sm font-bold transition-colors shadow-lg shadow-emerald-100"
        >
          <BookOpen className="w-4 h-4" />
          Browse New Courses
        </motion.button>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      {/* Search & Filters */}
      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        {/* Filter Tabs */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-2xl">
          {filterTabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === tab
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
              whileTap={{ scale: 0.97 }}
            >
              {tab}
              {tab === 'In Progress' && (
                <span className="ml-1.5 bg-emerald-500 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-full">
                  {courses.filter(c => c.status === 'in-progress').length}
                </span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Search + Filter Icon */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-4 py-2.5 text-xs font-semibold bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-400 transition-colors w-48 text-slate-700 placeholder-slate-400"
            />
          </div>
          <button className="p-2.5 bg-white border border-slate-200 rounded-xl hover:border-emerald-300 transition-colors">
            <Filter className="w-4 h-4 text-slate-500" />
          </button>
        </div>
      </motion.div>

      {/* Course Grid */}
      <AnimatePresence mode="wait">
        {filtered.length > 0 ? (
          <motion.div
            key={activeFilter + searchQuery}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            {filtered.map((course, idx) => (
              <CourseCard key={course.id} course={course} idx={idx} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center py-24 text-center"
          >
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-lg font-bold text-slate-700 mb-1">No courses found</h3>
            <p className="text-sm text-slate-400 font-medium">Try adjusting your search or filter.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Banner */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-xl shadow-emerald-100"
      >
        <div className="relative z-10">
          <p className="text-emerald-200 text-xs font-bold uppercase tracking-widest mb-2">Recommendation</p>
          <h3 className="text-white text-2xl font-extrabold leading-tight">Ready to level up?</h3>
          <p className="text-emerald-100 text-sm font-medium mt-2 max-w-sm">
            Based on your progress, we recommend exploring Data Structures & Algorithms next.
          </p>
        </div>
        <div className="flex items-center gap-3 relative z-10">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-emerald-700 font-bold text-sm px-6 py-3 rounded-2xl hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Explore Course
          </motion.button>
          <button className="text-emerald-200 text-sm font-semibold hover:text-white transition-colors">
            Maybe later
          </button>
        </div>
        <BarChart2 className="absolute -right-4 -bottom-4 w-40 h-40 text-white/10 rotate-12" />
      </motion.div>
    </motion.div>
  );
};

export default StudentCourse;