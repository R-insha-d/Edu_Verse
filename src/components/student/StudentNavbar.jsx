import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Search, MessageCircle, HelpCircle, Menu, X, Sparkles } from 'lucide-react';

const StudentNavbar = ({ toggleSidebar, sidebarOpen }) => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [hasNotifications] = useState(true);
  const [hasMessages] = useState(3);

  return (
    <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30 shadow-[0_1px_0_0_rgba(0,0,0,0.04),0_4px_16px_-4px_rgba(0,0,0,0.06)]">

      {/* ── Left ── */}
      <div className="flex items-center gap-4 flex-1">

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <AnimatePresence mode="wait" initial={false}>
            {sidebarOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-4 h-4" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu className="w-4 h-4" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Search */}
        <motion.div
          animate={{ width: searchFocused ? '100%' : undefined }}
          className="relative w-full md:max-w-sm"
        >
          <motion.div
            animate={{ color: searchFocused ? '#10b981' : '#94a3b8' }}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
          >
            <Search className="w-4 h-4" />
          </motion.div>

          <input
            type="text"
            placeholder="Search courses, assignments…"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder:text-slate-400 font-medium
              focus:outline-none focus:ring-2 focus:ring-emerald-400/40 focus:border-emerald-400 focus:bg-white
              transition-all duration-200"
          />

          {/* Keyboard hint */}
          <div className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 items-center gap-0.5 pointer-events-none">
            <AnimatePresence>
              {!searchFocused && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center gap-0.5"
                >
                  {/* <kbd className="text-[10px] font-bold text-slate-300 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded-md leading-none">⌘</kbd>
                  <kbd className="text-[10px] font-bold text-slate-300 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded-md leading-none">K</kbd> */}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* ── Right ── */}
      <div className="flex items-center gap-1.5 md:gap-2 ml-4">

        {/* AI Hint pill — desktop only */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="hidden lg:flex items-center gap-1.5 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full cursor-pointer hover:shadow-sm transition-shadow"
        >
          <Sparkles className="w-3 h-3" />
          Ask AI Tutor
        </motion.div>

        <div className="w-px h-6 bg-slate-200 hidden md:block mx-1" />

        {/* Messages */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
          className="relative w-9 h-9 flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-all"
          aria-label="Messages"
        >
          <MessageCircle className="w-[18px] h-[18px]" />
          {hasMessages > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 12 }}
              className="absolute top-1 right-1 w-4 h-4 bg-emerald-500 rounded-full text-[9px] font-extrabold text-white flex items-center justify-center shadow-sm shadow-emerald-200 ring-2 ring-white"
            >
              {hasMessages}
            </motion.span>
          )}
        </motion.button>

        {/* Notifications */}
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
          className="relative w-9 h-9 flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-all"
          aria-label="Notifications"
        >
          <motion.div
            animate={{ rotate: hasNotifications ? [0, -12, 12, -8, 8, 0] : 0 }}
            transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 6 }}
          >
            <Bell className="w-[18px] h-[18px]" />
          </motion.div>
          {hasNotifications && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
              className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"
            />
          )}
        </motion.button>

        {/* Help — desktop only */}
        {/* <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
          className="hidden md:flex w-9 h-9 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition-all"
          aria-label="Help"
        >
          <HelpCircle className="w-[18px] h-[18px]" />
        </motion.button> */}

        <div className="w-px h-6 bg-slate-200 mx-1" />

        {/* Avatar */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2.5 pl-1 pr-3 py-1 rounded-xl hover:bg-slate-100 transition-colors group"
          aria-label="Profile"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-sm shadow-emerald-200 shrink-0">
            <span className="text-xs font-extrabold text-white">AJ</span>
          </div>
          {/* <div className="hidden md:block text-left">
            <p className="text-[11px] font-extrabold text-slate-800 leading-tight">Alex Johnson</p>
            <p className="text-[10px] font-bold text-slate-400 leading-tight">3rd Year • CS</p>
          </div> */}
        </motion.button>
      </div>
    </header>
  );
};

export default StudentNavbar;