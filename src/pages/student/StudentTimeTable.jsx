import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  Clock,
  Video,
  ChevronLeft,
  ChevronRight,
  MapPin,
  User,
  BookOpen,
  Filter,
  Download,
  ArrowRight,
  Zap,
  Coffee,
  Moon,
} from 'lucide-react';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const FULL_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const timetableData = {
  Mon: [
    { id: 1, subject: 'Physics', instructor: 'Dr. Smith', time: '09:00', end: '09:45', room: 'Online Room A', color: 'blue', type: 'Live' },
    { id: 2, subject: 'Advanced Mathematics', instructor: 'Prof. Sarah', time: '10:30', end: '11:30', room: 'Live Studio 2', color: 'emerald', type: 'Live' },
    { id: 3, subject: 'Computer Science', instructor: 'Mr. David', time: '13:00', end: '14:30', room: 'Tech Lab 1', color: 'purple', type: 'Lab' },
    { id: 4, subject: 'English Literature', instructor: 'Ms. Priya', time: '15:00', end: '15:45', room: 'Room 204', color: 'amber', type: 'Lecture' },
  ],
  Tue: [
    { id: 5, subject: 'Chemistry', instructor: 'Dr. Rajan', time: '08:30', end: '09:30', room: 'Chem Lab B', color: 'rose', type: 'Lab' },
    { id: 6, subject: 'History', instructor: 'Prof. Anita', time: '11:00', end: '11:45', room: 'Room 102', color: 'amber', type: 'Lecture' },
    { id: 7, subject: 'Computer Science', instructor: 'Mr. David', time: '14:00', end: '15:00', room: 'Tech Lab 1', color: 'purple', type: 'Lab' },
  ],
  Wed: [
    { id: 8, subject: 'Physics', instructor: 'Dr. Smith', time: '09:00', end: '09:45', room: 'Online Room A', color: 'blue', type: 'Live' },
    { id: 9, subject: 'Advanced Mathematics', instructor: 'Prof. Sarah', time: '10:30', end: '11:30', room: 'Live Studio 2', color: 'emerald', type: 'Live' },
    { id: 10, subject: 'Biology', instructor: 'Dr. Meena', time: '13:30', end: '14:30', room: 'Bio Lab C', color: 'teal', type: 'Lab' },
  ],
  Thu: [
    { id: 11, subject: 'Chemistry', instructor: 'Dr. Rajan', time: '08:30', end: '09:30', room: 'Chem Lab B', color: 'rose', type: 'Lab' },
    { id: 12, subject: 'English Literature', instructor: 'Ms. Priya', time: '11:00', end: '11:45', room: 'Room 204', color: 'amber', type: 'Lecture' },
    { id: 13, subject: 'Physics', instructor: 'Dr. Smith', time: '14:00', end: '14:45', room: 'Online Room A', color: 'blue', type: 'Live' },
    { id: 14, subject: 'History', instructor: 'Prof. Anita', time: '15:30', end: '16:15', room: 'Room 102', color: 'amber', type: 'Lecture' },
  ],
  Fri: [
    { id: 15, subject: 'Advanced Mathematics', instructor: 'Prof. Sarah', time: '09:00', end: '10:00', room: 'Live Studio 2', color: 'emerald', type: 'Live' },
    { id: 16, subject: 'Biology', instructor: 'Dr. Meena', time: '11:00', end: '12:00', room: 'Bio Lab C', color: 'teal', type: 'Lab' },
    { id: 17, subject: 'Computer Science', instructor: 'Mr. David', time: '14:00', end: '15:30', room: 'Tech Lab 1', color: 'purple', type: 'Live' },
  ],
  Sat: [
    { id: 18, subject: 'Guest Lecture', instructor: 'Dr. Chen (MIT)', time: '10:00', end: '11:30', room: 'Auditorium', color: 'rose', type: 'Special' },
    { id: 19, subject: 'Exam Prep', instructor: 'Multiple Faculty', time: '13:00', end: '15:00', room: 'Study Hall', color: 'slate', type: 'Session' },
  ],
};

const colorMap = {
  blue:    { border: 'border-blue-500',   bg: 'bg-blue-50',   badge: 'bg-blue-100 text-blue-700',   dot: 'bg-blue-500',   icon: 'text-blue-500',   hover: 'hover:border-blue-300' },
  emerald: { border: 'border-emerald-500', bg: 'bg-emerald-50', badge: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500', icon: 'text-emerald-500', hover: 'hover:border-emerald-300' },
  purple:  { border: 'border-purple-500',  bg: 'bg-purple-50',  badge: 'bg-purple-100 text-purple-700',  dot: 'bg-purple-500',  icon: 'text-purple-500',  hover: 'hover:border-purple-300' },
  amber:   { border: 'border-amber-500',   bg: 'bg-amber-50',   badge: 'bg-amber-100 text-amber-700',   dot: 'bg-amber-500',   icon: 'text-amber-500',   hover: 'hover:border-amber-300' },
  rose:    { border: 'border-rose-500',    bg: 'bg-rose-50',    badge: 'bg-rose-100 text-rose-700',    dot: 'bg-rose-500',    icon: 'text-rose-500',    hover: 'hover:border-rose-300' },
  teal:    { border: 'border-teal-500',    bg: 'bg-teal-50',    badge: 'bg-teal-100 text-teal-700',    dot: 'bg-teal-500',    icon: 'text-teal-500',    hover: 'hover:border-teal-300' },
  slate:   { border: 'border-slate-400',   bg: 'bg-slate-50',   badge: 'bg-slate-100 text-slate-700',   dot: 'bg-slate-400',   icon: 'text-slate-400',   hover: 'hover:border-slate-300' },
};

const typeIcon = { Live: Video, Lab: Zap, Lecture: BookOpen, Special: Coffee, Session: Moon };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 16 } },
};

export default function StudentTimetable() {
  const today = new Date();
  const todayIdx = today.getDay() === 0 ? 5 : Math.min(today.getDay() - 1, 5); // Mon=0
  const [selectedDay, setSelectedDay] = useState(todayIdx);
  const [view, setView] = useState('list'); // 'list' | 'week'
  const [selectedClass, setSelectedClass] = useState(null);

  const classes = timetableData[DAYS[selectedDay]] || [];

  // Stats
  const totalWeekClasses = Object.values(timetableData).flat().length;
  const todayClasses = timetableData[DAYS[todayIdx]]?.length || 0;
  const liveCount = Object.values(timetableData).flat().filter(c => c.type === 'Live').length;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Page Header */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-7 rounded-3xl border border-slate-200 shadow-sm"
      >
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
            <Calendar className="w-7 h-7 text-emerald-600" />
            My Timetable
          </h1>
          <p className="text-slate-500 font-medium mt-1">Spring Semester 2025 · Grade 12 – Science</p>
        </div>
        <div className="flex items-center gap-3">
          {/* View toggle */}
          <div className="flex bg-slate-100 rounded-xl p-1 gap-1">
            {['list', 'week'].map(v => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-4 py-1.5 rounded-lg text-sm font-bold transition-all capitalize ${
                  view === v ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {v === 'list' ? 'Day' : 'Week'}
              </button>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-xl"
          >
            <Download className="w-4 h-4" /> Export
          </motion.button>
        </div>
      </motion.div>

      {/* Stats Row */}
      <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
        {[
          { label: 'Classes This Week', value: totalWeekClasses, color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-100' },
          { label: "Today's Classes", value: todayClasses, color: 'text-blue-600', bg: 'bg-blue-50 border-blue-100' },
          { label: 'Live Sessions / Week', value: liveCount, color: 'text-purple-600', bg: 'bg-purple-50 border-purple-100' },
        ].map(s => (
          <div key={s.label} className={`${s.bg} border rounded-2xl p-5 flex flex-col gap-1`}>
            <span className={`text-3xl font-extrabold ${s.color}`}>{s.value}</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{s.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Day Selector */}
      <motion.div variants={itemVariants} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-2 flex gap-1">
        {DAYS.map((d, i) => {
          const count = timetableData[d]?.length || 0;
          const isToday = i === todayIdx;
          const isSelected = i === selectedDay;
          return (
            <button
              key={d}
              onClick={() => { setSelectedDay(i); setSelectedClass(null); }}
              className={`flex-1 flex flex-col items-center py-3 rounded-2xl transition-all relative font-bold text-sm ${
                isSelected
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200'
                  : 'text-slate-500 hover:bg-slate-50'
              }`}
            >
              {isToday && !isSelected && (
                <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-emerald-500" />
              )}
              <span className="text-xs uppercase tracking-widest">{d}</span>
              <span className={`mt-1 text-lg font-extrabold ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                {count}
              </span>
              <span className={`text-[10px] ${isSelected ? 'text-emerald-100' : 'text-slate-400'}`}>
                {count === 1 ? 'class' : 'classes'}
              </span>
            </button>
          );
        })}
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Class List */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-lg font-extrabold text-slate-900">{FULL_DAYS[selectedDay]}</h2>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{classes.length} classes scheduled</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDay}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -10 }}
              className="space-y-3"
            >
              {classes.length === 0 ? (
                <motion.div variants={itemVariants} className="bg-white rounded-3xl border border-slate-200 p-12 text-center">
                  <Calendar className="w-12 h-12 text-slate-200 mx-auto mb-3" />
                  <p className="font-bold text-slate-400">No classes scheduled</p>
                  <p className="text-sm text-slate-300 mt-1">Enjoy your free day!</p>
                </motion.div>
              ) : (
                classes.map((cls, idx) => {
                  const c = colorMap[cls.color];
                  const Icon = typeIcon[cls.type] || BookOpen;
                  const isActive = selectedDay === todayIdx && idx === 0;
                  const isSelected = selectedClass?.id === cls.id;
                  return (
                    <motion.div
                      key={cls.id}
                      variants={itemVariants}
                      whileHover={{ y: -3 }}
                      onClick={() => setSelectedClass(isSelected ? null : cls)}
                      className={`bg-white rounded-2xl border-l-4 border border-slate-200 ${c.border} shadow-sm cursor-pointer transition-all ${
                        isSelected ? 'ring-2 ring-emerald-400 ring-offset-1' : ''
                      }`}
                    >
                      <div className="p-5 flex items-center gap-4">
                        {/* Time block */}
                        <div className={`w-16 shrink-0 ${c.bg} rounded-xl p-2 flex flex-col items-center justify-center`}>
                          <span className={`text-sm font-extrabold ${c.icon}`}>{cls.time}</span>
                          <div className="w-0.5 h-4 bg-slate-200 my-1" />
                          <span className="text-[10px] font-bold text-slate-400">{cls.end}</span>
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-extrabold text-slate-900 text-base truncate">{cls.subject}</h3>
                            {isActive && (
                              <motion.span
                                animate={{ opacity: [1, 0.4, 1] }}
                                transition={{ repeat: Infinity, duration: 1.8 }}
                                className="flex items-center gap-1 text-[10px] font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded-full"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" /> LIVE NOW
                              </motion.span>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 font-medium">
                            <span className="flex items-center gap-1"><User className="w-3 h-3" />{cls.instructor}</span>
                            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{cls.room}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />
                              {(() => {
                                const [sh, sm] = cls.time.split(':').map(Number);
                                const [eh, em] = cls.end.split(':').map(Number);
                                return `${(eh * 60 + em) - (sh * 60 + sm)} min`;
                              })()}
                            </span>
                          </div>
                        </div>

                        {/* Right side */}
                        <div className="shrink-0 flex flex-col items-end gap-2">
                          <span className={`text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full ${c.badge}`}>
                            {cls.type}
                          </span>
                          {isActive && (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={e => e.stopPropagation()}
                              className="flex items-center gap-1.5 bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-xl"
                            >
                              <Video className="w-3.5 h-3.5" /> Join
                            </motion.button>
                          )}
                        </div>
                      </div>

                      {/* Expanded detail */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden border-t border-slate-100"
                          >
                            <div className="px-5 py-4 flex flex-wrap gap-4 items-center">
                              <div className={`flex items-center gap-2 text-sm font-bold ${c.icon}`}>
                                <Icon className="w-4 h-4" />
                                {cls.type} Session
                              </div>
                              <div className="text-sm text-slate-500">Bring your textbook and lab notes.</div>
                              <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="ml-auto flex items-center gap-1.5 text-emerald-700 font-bold text-sm bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-xl"
                              >
                                View Materials <ArrowRight className="w-3.5 h-3.5" />
                              </motion.button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Week Overview */}
        <div className="space-y-4">
          {/* Mini week overview */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 space-y-3">
            <h3 className="font-extrabold text-slate-900 flex items-center gap-2 text-base">
              <Filter className="w-4 h-4 text-emerald-600" /> Week at a Glance
            </h3>
            {DAYS.map((d, i) => {
              const count = timetableData[d]?.length || 0;
              const pct = (count / 5) * 100;
              return (
                <button
                  key={d}
                  onClick={() => { setSelectedDay(i); setSelectedClass(null); }}
                  className="w-full flex items-center gap-3 group"
                >
                  <span className={`text-xs font-extrabold w-8 text-left ${i === selectedDay ? 'text-emerald-600' : 'text-slate-400'}`}>{d}</span>
                  <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.6, delay: i * 0.05 }}
                      className={`h-full rounded-full ${i === selectedDay ? 'bg-emerald-500' : 'bg-slate-300 group-hover:bg-slate-400'}`}
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-500 w-4 text-right">{count}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Subject color legend */}
          <motion.div variants={itemVariants} className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5 space-y-3">
            <h3 className="font-extrabold text-slate-900 text-base">Subjects</h3>
            {[
              { name: 'Physics', color: 'blue' },
              { name: 'Advanced Mathematics', color: 'emerald' },
              { name: 'Computer Science', color: 'purple' },
              { name: 'Chemistry', color: 'rose' },
              { name: 'Biology', color: 'teal' },
              { name: 'English Literature', color: 'amber' },
            ].map(s => (
              <div key={s.name} className="flex items-center gap-3">
                <span className={`w-2.5 h-2.5 rounded-full ${colorMap[s.color].dot}`} />
                <span className="text-sm font-medium text-slate-700">{s.name}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-emerald-600 to-teal-700 p-6 rounded-3xl text-white shadow-xl shadow-emerald-100 cursor-pointer relative overflow-hidden"
          >
            <div className="relative z-10">
              <p className="text-xs font-extrabold uppercase tracking-widest text-emerald-200 mb-2">Upcoming</p>
              <h3 className="text-lg font-extrabold mb-1">Final Exam Week</h3>
              <p className="text-emerald-100 text-sm mb-5">Starts in 12 days. Review your schedule and prep materials.</p>
              <button className="bg-white text-emerald-700 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-emerald-50 transition-all w-full shadow">
                View Exam Schedule
              </button>
            </div>
            <Calendar className="absolute -bottom-4 -right-4 w-28 h-28 text-white/10" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}