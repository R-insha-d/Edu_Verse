import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bell,
  BellOff,
  CheckCheck,
  Trash2,
  Filter,
  Calendar,
  BookOpen,
  Trophy,
  AlertTriangle,
  MessageSquare,
  FileText,
  Video,
  Star,
  Info,
  ArrowRight,
  Clock,
  X,
  Settings,
  Dot,
} from 'lucide-react';

const notificationsData = [
  {
    id: 1,
    type: 'assignment',
    title: 'Lab Report Due Soon',
    message: 'Your Physics lab report "Newton\'s Laws" is due in 2 hours. Don\'t forget to submit!',
    time: '10 minutes ago',
    read: false,
    icon: FileText,
    iconBg: 'bg-red-100',
    iconColor: 'text-red-500',
    accent: 'border-red-400',
    tag: 'Physics',
    tagColor: 'bg-blue-100 text-blue-700',
    action: 'View Assignment',
  },
  {
    id: 2,
    type: 'announcement',
    title: 'Final Exam Schedule Posted',
    message: 'The final examination schedule for the Spring Semester 2025 is now live on the portal. Check your exam slots.',
    time: '2 hours ago',
    read: false,
    icon: Calendar,
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    accent: 'border-emerald-400',
    tag: 'Academic',
    tagColor: 'bg-emerald-100 text-emerald-700',
    action: 'View Schedule',
  },
  {
    id: 3,
    type: 'grade',
    title: 'Grade Posted: Algorithm Essay',
    message: 'Dr. David has posted your grade for "Algorithm Design Essay". You scored 92/100. Great work!',
    time: '5 hours ago',
    read: false,
    icon: Star,
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-500',
    accent: 'border-amber-400',
    tag: 'Computer Science',
    tagColor: 'bg-purple-100 text-purple-700',
    action: 'See Feedback',
  },
  {
    id: 4,
    type: 'event',
    title: 'Guest Lecture: AI in Healthcare',
    message: 'Reminder: Guest lecture by Dr. Chen from MIT this Friday at 3:00 PM in Auditorium B. Registration required.',
    time: 'Yesterday',
    read: true,
    icon: Video,
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-500',
    accent: 'border-blue-400',
    tag: 'Event',
    tagColor: 'bg-blue-100 text-blue-700',
    action: 'Register Now',
  },
  {
    id: 5,
    type: 'alert',
    title: 'Overdue: Organic Chemistry Worksheet',
    message: 'You have missed the submission deadline for the Organic Chemistry worksheet. Contact Dr. Patel immediately.',
    time: 'Yesterday',
    read: true,
    icon: AlertTriangle,
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-500',
    accent: 'border-rose-500',
    tag: 'Chemistry',
    tagColor: 'bg-rose-100 text-rose-700',
    action: 'Contact Instructor',
  },
  {
    id: 6,
    type: 'message',
    title: 'New Message from Prof. Sarah',
    message: 'Prof. Sarah has sent you feedback on your Calculus problem set. Check the comments on your submission.',
    time: '2 days ago',
    read: true,
    icon: MessageSquare,
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
    accent: 'border-teal-400',
    tag: 'Mathematics',
    tagColor: 'bg-emerald-100 text-emerald-700',
    action: 'Read Message',
  },
  {
    id: 7,
    type: 'achievement',
    title: 'You\'re in the Top 5%! 🏆',
    message: 'Congratulations! Your consistent performance has placed you in the top 5% of your batch this semester.',
    time: '3 days ago',
    read: true,
    icon: Trophy,
    iconBg: 'bg-yellow-100',
    iconColor: 'text-yellow-500',
    accent: 'border-yellow-400',
    tag: 'Achievement',
    tagColor: 'bg-yellow-100 text-yellow-700',
    action: 'View Rank',
  },
  {
    id: 8,
    type: 'announcement',
    title: 'Library Hours Extended',
    message: 'The university library will remain open until midnight every day during the exam week (May 12–18).',
    time: '4 days ago',
    read: true,
    icon: BookOpen,
    iconBg: 'bg-slate-100',
    iconColor: 'text-slate-500',
    accent: 'border-slate-300',
    tag: 'General',
    tagColor: 'bg-slate-100 text-slate-600',
    action: 'Learn More',
  },
  {
    id: 9,
    type: 'info',
    title: 'Course Material Updated',
    message: 'Mr. David has uploaded new slides for "Sorting Algorithms" in the Computer Science course portal.',
    time: '5 days ago',
    read: true,
    icon: Info,
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-500',
    accent: 'border-indigo-300',
    tag: 'Computer Science',
    tagColor: 'bg-purple-100 text-purple-700',
    action: 'View Material',
  },
];

const filterTabs = ['All', 'Unread', 'Assignments', 'Announcements', 'Grades', 'Events'];

const typeMap = {
  Assignments: 'assignment',
  Announcements: 'announcement',
  Grades: 'grade',
  Events: 'event',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 130, damping: 18 },
  },
  exit: { opacity: 0, x: 40, scale: 0.96, transition: { duration: 0.2 } },
};

const StudentNotification = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const [activeFilter, setActiveFilter] = useState('All');
  const [showSettings, setShowSettings] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const filtered = notifications.filter((n) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Unread') return !n.read;
    return n.type === typeMap[activeFilter];
  });

  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  const markRead = (id) =>
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );

  const dismiss = (id) =>
    setNotifications((prev) => prev.filter((n) => n.id !== id));

  const clearAll = () => setNotifications([]);

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
        className="flex flex-col md:flex-row md:items-center justify-between gap-5 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
      >
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center">
              <Bell className="w-7 h-7 text-emerald-600" />
            </div>
            {unreadCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-md"
              >
                {unreadCount}
              </motion.span>
            )}
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Notifications</h1>
            <p className="text-slate-500 font-medium mt-0.5">
              {unreadCount > 0
                ? <><span className="text-slate-900 font-bold">{unreadCount} unread</span> notifications waiting for you.</>
                : 'You\'re all caught up!'}
            </p>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-3">
          {unreadCount > 0 && (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={markAllRead}
              className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-emerald-100 transition-colors"
            >
              <CheckCheck className="w-4 h-4" /> Mark all read
            </motion.button>
          )}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={clearAll}
            className="flex items-center gap-2 bg-white border border-slate-200 text-slate-500 px-4 py-2.5 rounded-xl text-sm font-bold hover:border-red-200 hover:text-red-500 transition-colors"
          >
            <Trash2 className="w-4 h-4" /> Clear all
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, rotate: 20 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowSettings((s) => !s)}
            className="w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-400 hover:border-emerald-300 hover:text-emerald-600 transition-colors"
          >
            <Settings className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Settings className="w-4 h-4 text-emerald-600" /> Notification Preferences
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Assignments', 'Grades', 'Announcements', 'Events', 'Messages', 'Achievements', 'Alerts', 'General'].map((pref) => (
                  <label key={pref} className="flex items-center gap-3 bg-slate-50 rounded-xl px-4 py-3 cursor-pointer hover:bg-emerald-50 transition-colors group">
                    <input type="checkbox" defaultChecked className="accent-emerald-600 w-4 h-4" />
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-emerald-700 transition-colors">{pref}</span>
                  </label>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filter Tabs */}
      <motion.div variants={itemVariants} className="flex gap-2 flex-wrap">
        <div className="flex gap-2 bg-white border border-slate-200 rounded-2xl p-1.5 shadow-sm flex-wrap">
          {filterTabs.map((tab) => {
            const count =
              tab === 'Unread'
                ? notifications.filter((n) => !n.read).length
                : tab === 'All'
                ? notifications.length
                : notifications.filter((n) => n.type === typeMap[tab]).length;
            return (
              <motion.button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeFilter === tab
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                }`}
              >
                {tab}
                {count > 0 && (
                  <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded-full ${
                    activeFilter === tab ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {count}
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Notification List */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border border-dashed border-slate-200"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                <BellOff className="w-14 h-14 text-slate-200 mb-4" />
              </motion.div>
              <p className="font-bold text-slate-500 text-lg">No notifications here</p>
              <p className="text-sm text-slate-400 mt-1">You're all clear in this category.</p>
            </motion.div>
          ) : (
            filtered.map((notif) => (
              <motion.div
                key={notif.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                whileHover={{ y: -2 }}
                onClick={() => markRead(notif.id)}
                className={`relative bg-white rounded-2xl border border-l-4 ${notif.accent} ${
                  notif.read ? 'border-slate-200 opacity-80' : 'border-slate-200 shadow-md'
                } p-5 cursor-pointer hover:shadow-lg hover:border-emerald-200 transition-all group`}
              >
                {/* Unread dot */}
                {!notif.read && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-12 w-2 h-2 bg-emerald-500 rounded-full"
                  />
                )}

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`p-3 rounded-xl shrink-0 ${notif.iconBg}`}>
                    <notif.icon className={`w-5 h-5 ${notif.iconColor}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className={`font-bold text-base leading-snug transition-colors group-hover:text-emerald-700 ${
                          notif.read ? 'text-slate-600' : 'text-slate-900'
                        }`}>
                          {notif.title}
                        </h3>
                        <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-tight ${notif.tagColor}`}>
                          {notif.tag}
                        </span>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1 shrink-0">
                        <Clock className="w-3 h-3" /> {notif.time}
                      </span>
                    </div>

                    <p className={`text-sm leading-relaxed mt-1.5 ${notif.read ? 'text-slate-400' : 'text-slate-500'}`}>
                      {notif.message}
                    </p>

                    {/* Action Row */}
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-50">
                      <button className="text-xs font-bold text-emerald-600 flex items-center gap-1 hover:gap-2 transition-all">
                        {notif.action} <ArrowRight className="w-3 h-3" />
                      </button>
                      {!notif.read && (
                        <span className="text-[10px] font-extrabold text-emerald-500 uppercase tracking-widest flex items-center gap-1">
                          <Dot className="w-3 h-3" /> New
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Dismiss button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => { e.stopPropagation(); dismiss(notif.id); }}
                    className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-slate-300 hover:bg-red-50 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <X className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Banner */}
      {notifications.length > 0 && (
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-emerald-600 to-teal-600 p-6 rounded-3xl text-white shadow-xl shadow-emerald-100"
        >
          <div>
            <p className="font-extrabold text-lg">Never miss a deadline 🔔</p>
            <p className="text-emerald-100 text-sm mt-1">
              Enable push notifications to get alerts directly on your device.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-white text-emerald-700 px-6 py-3 rounded-xl text-sm font-bold shadow-lg hover:bg-emerald-50 transition-all shrink-0 whitespace-nowrap"
          >
            <Bell className="w-4 h-4" /> Enable Push Alerts <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default StudentNotification;