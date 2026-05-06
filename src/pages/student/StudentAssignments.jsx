import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckSquare,
  FileText,
  BookOpen,
  FlaskConical,
  Clock,
  Calendar,
  ArrowRight,
  Filter,
  Search,
  CheckCircle2,
  Circle,
  AlertTriangle,
  ChevronDown,
  Upload,
  Eye,
  MoreHorizontal,
  Paperclip,
  Star,
  TrendingUp,
  BarChart2,
} from 'lucide-react';

const assignments = [
  {
    id: 1,
    title: 'Lab Report: Newton\'s Laws',
    subject: 'Physics',
    instructor: 'Dr. Smith',
    due: '2025-05-06T11:00:00',
    dueLabel: 'Due in 2 hours',
    priority: 'High',
    status: 'pending',
    type: 'Report',
    icon: FlaskConical,
    color: 'border-red-400 bg-red-50',
    iconBg: 'bg-red-100 text-red-500',
    subjectColor: 'bg-blue-100 text-blue-700',
    progress: 70,
    attachments: 2,
    points: 50,
  },
  {
    id: 2,
    title: 'Calculus Problem Set — Chapter 7',
    subject: 'Mathematics',
    instructor: 'Prof. Sarah',
    due: '2025-05-07T09:00:00',
    dueLabel: 'Tomorrow, 9:00 AM',
    priority: 'Medium',
    status: 'pending',
    type: 'Quiz',
    icon: CheckCircle2,
    color: 'border-orange-400 bg-orange-50',
    iconBg: 'bg-orange-100 text-orange-500',
    subjectColor: 'bg-emerald-100 text-emerald-700',
    progress: 40,
    attachments: 0,
    points: 30,
  },
  {
    id: 3,
    title: 'Read & Annotate Chapter 4',
    subject: 'History',
    instructor: 'Ms. Rebecca',
    due: '2025-05-09T17:00:00',
    dueLabel: 'Friday, 5:00 PM',
    priority: 'Low',
    status: 'pending',
    type: 'Reading',
    icon: BookOpen,
    color: 'border-blue-400 bg-blue-50',
    iconBg: 'bg-blue-100 text-blue-500',
    subjectColor: 'bg-amber-100 text-amber-700',
    progress: 10,
    attachments: 1,
    points: 20,
  },
  {
    id: 4,
    title: 'Algorithm Design Essay',
    subject: 'Computer Science',
    instructor: 'Mr. David',
    due: '2025-05-08T23:59:00',
    dueLabel: 'Thu, 11:59 PM',
    priority: 'High',
    status: 'submitted',
    type: 'Essay',
    icon: FileText,
    color: 'border-purple-400 bg-purple-50',
    iconBg: 'bg-purple-100 text-purple-500',
    subjectColor: 'bg-purple-100 text-purple-700',
    progress: 100,
    attachments: 1,
    points: 40,
    grade: '92/100',
  },
  {
    id: 5,
    title: 'Organic Chemistry Worksheet',
    subject: 'Chemistry',
    instructor: 'Dr. Patel',
    due: '2025-05-04T09:00:00',
    dueLabel: 'Overdue',
    priority: 'High',
    status: 'overdue',
    type: 'Worksheet',
    icon: FlaskConical,
    color: 'border-rose-500 bg-rose-50',
    iconBg: 'bg-rose-100 text-rose-500',
    subjectColor: 'bg-rose-100 text-rose-700',
    progress: 50,
    attachments: 0,
    points: 25,
  },
  {
    id: 6,
    title: 'Presentation: Industrial Revolution',
    subject: 'History',
    instructor: 'Ms. Rebecca',
    due: '2025-05-12T10:00:00',
    dueLabel: 'Next Monday',
    priority: 'Medium',
    status: 'pending',
    type: 'Presentation',
    icon: FileText,
    color: 'border-teal-400 bg-teal-50',
    iconBg: 'bg-teal-100 text-teal-600',
    subjectColor: 'bg-amber-100 text-amber-700',
    progress: 0,
    attachments: 3,
    points: 60,
  },
];

const filters = ['All', 'Pending', 'Submitted', 'Overdue'];

const statusConfig = {
  pending: { label: 'Pending', color: 'bg-amber-100 text-amber-700', dot: 'bg-amber-500' },
  submitted: { label: 'Submitted', color: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500' },
  overdue: { label: 'Overdue', color: 'bg-red-100 text-red-600', dot: 'bg-red-500' },
};

const priorityConfig = {
  High: 'bg-red-100 text-red-600',
  Medium: 'bg-orange-100 text-orange-600',
  Low: 'bg-blue-100 text-blue-600',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 18 },
  },
  exit: { opacity: 0, y: -12, scale: 0.97, transition: { duration: 0.18 } },
};

const StudentAssignments = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const filtered = assignments.filter((a) => {
    const matchFilter =
      activeFilter === 'All' ||
      a.status === activeFilter.toLowerCase();
    const matchSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.subject.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFilter && matchSearch;
  });

  const stats = {
    total: assignments.length,
    pending: assignments.filter((a) => a.status === 'pending').length,
    submitted: assignments.filter((a) => a.status === 'submitted').length,
    overdue: assignments.filter((a) => a.status === 'overdue').length,
  };

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
        className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
      >
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <CheckSquare className="w-8 h-8 text-emerald-500" />
            My Assignments
          </h1>
          <p className="text-slate-500 font-medium">
            You have{' '}
            <span className="text-slate-900 font-bold">{stats.pending} pending</span> and{' '}
            <span className="text-red-600 font-bold">{stats.overdue} overdue</span> assignments.
          </p>
        </div>

        {/* Mini stat pills */}
        <div className="flex gap-3 flex-wrap">
          {[
            { label: 'Total', value: stats.total, color: 'bg-slate-100 text-slate-700' },
            { label: 'Pending', value: stats.pending, color: 'bg-amber-100 text-amber-700' },
            { label: 'Submitted', value: stats.submitted, color: 'bg-emerald-100 text-emerald-700' },
            { label: 'Overdue', value: stats.overdue, color: 'bg-red-100 text-red-600' },
          ].map((s) => (
            <div key={s.label} className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm ${s.color}`}>
              <BarChart2 className="w-4 h-4 opacity-70" />
              {s.value} {s.label}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Search + Filter Bar */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
      >
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search assignments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-medium text-slate-700 placeholder-slate-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all shadow-sm"
          />
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 bg-white border border-slate-200 rounded-2xl p-1.5 shadow-sm">
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActiveFilter(f)}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                activeFilter === f
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              {f}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Assignment Cards */}
      <div className="space-y-4">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-slate-200 text-slate-400"
            >
              <CheckCircle2 className="w-12 h-12 mb-3 text-slate-300" />
              <p className="font-bold text-slate-500">No assignments found</p>
              <p className="text-sm mt-1">Try a different filter or search term</p>
            </motion.div>
          ) : (
            filtered.map((assignment) => {
              const isExpanded = expandedId === assignment.id;
              const StatusIcon =
                assignment.status === 'submitted'
                  ? CheckCircle2
                  : assignment.status === 'overdue'
                  ? AlertTriangle
                  : Circle;

              return (
                <motion.div
                  key={assignment.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  whileHover={{ y: -3 }}
                  className={`bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all overflow-hidden`}
                >
                  {/* Card Header */}
                  <div
                    className={`border-l-4 ${assignment.color.split(' ')[0]} p-5 cursor-pointer`}
                    onClick={() => setExpandedId(isExpanded ? null : assignment.id)}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`p-3 rounded-xl shrink-0 ${assignment.iconBg}`}>
                        <assignment.icon className="w-5 h-5" />
                      </div>

                      {/* Main Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 flex-wrap">
                          <div>
                            <h3 className="font-bold text-slate-900 text-base leading-snug">
                              {assignment.title}
                            </h3>
                            <p className="text-sm text-slate-500 mt-0.5 font-medium">
                              {assignment.instructor}
                            </p>
                          </div>

                          {/* Badges */}
                          <div className="flex items-center gap-2 flex-wrap justify-end shrink-0">
                            <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-tight ${priorityConfig[assignment.priority]}`}>
                              {assignment.priority}
                            </span>
                            <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-tight flex items-center gap-1 ${statusConfig[assignment.status].color}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${statusConfig[assignment.status].dot}`} />
                              {statusConfig[assignment.status].label}
                            </span>
                          </div>
                        </div>

                        {/* Meta Row */}
                        <div className="flex items-center gap-4 mt-3 flex-wrap">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${assignment.subjectColor}`}>
                            {assignment.subject}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {assignment.dueLabel}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                            <Star className="w-3 h-3 text-amber-400" /> {assignment.points} pts
                          </span>
                          {assignment.attachments > 0 && (
                            <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                              <Paperclip className="w-3 h-3" /> {assignment.attachments}
                            </span>
                          )}
                          {assignment.grade && (
                            <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" /> {assignment.grade}
                            </span>
                          )}
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-3">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Progress</span>
                            <span className="text-[10px] font-bold text-slate-600">{assignment.progress}%</span>
                          </div>
                          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${assignment.progress}%` }}
                              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                              className={`h-full rounded-full ${
                                assignment.status === 'submitted'
                                  ? 'bg-emerald-500'
                                  : assignment.status === 'overdue'
                                  ? 'bg-red-400'
                                  : 'bg-emerald-400'
                              }`}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Expand Chevron */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-slate-400 shrink-0 mt-1"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expanded Actions */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 border-t border-slate-100 bg-slate-50/50">
                          <div className="flex flex-wrap gap-3 mt-4">
                            {assignment.status !== 'submitted' && (
                              <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-emerald-100 hover:bg-emerald-700 transition-colors"
                              >
                                <Upload className="w-4 h-4" /> Submit Assignment
                              </motion.button>
                            )}
                            <motion.button
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-sm font-bold hover:border-emerald-300 hover:text-emerald-700 transition-colors"
                            >
                              <Eye className="w-4 h-4" /> View Details
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-5 py-2.5 rounded-xl text-sm font-bold hover:border-emerald-300 hover:text-emerald-700 transition-colors"
                            >
                              <Paperclip className="w-4 h-4" /> Attachments
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.03 }}
                              whileTap={{ scale: 0.97 }}
                              className="ml-auto flex items-center gap-2 text-slate-400 px-3 py-2.5 rounded-xl text-sm font-bold hover:text-slate-700 transition-colors"
                            >
                              <MoreHorizontal className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>

      {/* Bottom CTA */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-between bg-gradient-to-r from-emerald-600 to-teal-600 p-6 rounded-3xl text-white shadow-xl shadow-emerald-100"
      >
        <div>
          <p className="font-extrabold text-lg">Stay on top of your work 🎯</p>
          <p className="text-emerald-100 text-sm mt-1">Check your full academic calendar for upcoming deadlines.</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-xl text-sm font-bold shadow-lg hover:bg-emerald-50 transition-all shrink-0"
        >
          <Calendar className="w-4 h-4" /> View Calendar <ArrowRight className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default StudentAssignments;