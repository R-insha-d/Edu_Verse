import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/admin/AdminLayout';
import TeacherLayout from './components/teacher/TeacherLayout';
import StudentLayout from './components/student/StudentLayout';
import Dashboard from './pages/admin/Dashboard';
import UserManagement from './pages/admin/UserManagement';
import CourseCreation from './pages/admin/CourseCreation';
import SystemSettings from './pages/admin/SystemSettings';
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import StudentDashboard from './pages/student/StudentDashboard';
import Auth from './pages/auth/Auth';
import Landing from './pages/landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to Landing page */}
        <Route path="/" element={<Landing />} />

        {/* Authentication Route */}
        <Route path="/auth" element={<Auth />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="courses" element={<CourseCreation />} />
          <Route path="settings" element={<SystemSettings />} />
        </Route>

        {/* Teacher Routes */}
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<TeacherDashboard />} />
          <Route path="schedule" element={<div className="p-8 text-slate-500 italic">Schedule Page Placeholder</div>} />
          <Route path="courses" element={<div className="p-8 text-slate-500 italic">My Courses Page Placeholder</div>} />
          <Route path="submissions" element={<div className="p-8 text-slate-500 italic">Submissions Page Placeholder</div>} />
          <Route path="students" element={<div className="p-8 text-slate-500 italic">Students Page Placeholder</div>} />
          <Route path="messages" element={<div className="p-8 text-slate-500 italic">Messages Page Placeholder</div>} />
        </Route>

        {/* Student Routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<StudentDashboard />} />
          <Route path="courses" element={<div className="p-8 text-slate-500 italic">My Courses Page Placeholder</div>} />
          <Route path="timetable" element={<div className="p-8 text-slate-500 italic">Timetable Page Placeholder</div>} />
          <Route path="assignments" element={<div className="p-8 text-slate-500 italic">Assignments Page Placeholder</div>} />
          <Route path="notifications" element={<div className="p-8 text-slate-500 italic">Notifications Page Placeholder</div>} />
          <Route path="profile" element={<div className="p-8 text-slate-500 italic">Profile Page Placeholder</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
