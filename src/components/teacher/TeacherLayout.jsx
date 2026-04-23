import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import TeacherSidebar from './TeacherSidebar';
import TeacherNavbar from './TeacherNavbar';

const TeacherLayout = () => {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-slate-50 font-sans antialiased overflow-hidden">
      <TeacherSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TeacherNavbar />
        <main className="flex-1 overflow-y-auto p-8 relative">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherLayout;
