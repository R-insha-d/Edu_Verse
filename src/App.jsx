import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// admin
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import UserManagement from './pages/admin/UserManagement';
import CourseCreation from './pages/admin/CourseCreation';
import SystemSettings from './pages/admin/SystemSettings';

// student

import StudentDashboard from './pages/student/StudentDashboard';
import StudentLayout from './components/student/StudentLayout';
import StudentCourse from './pages/student/StudentCourse';
import StudentTimeTable from './pages/student/StudentTimeTable';
import StudentAssignments from './pages/student/StudentAssignments';
import StudentNotification from './pages/student/StudentNotification';
import StudentProfile from './pages/student/StudentProfile';

// teacher
import TeacherDashboard from './pages/teacher/TeacherDashboard';
import TeacherLayout from './components/teacher/TeacherLayout';

import Auth from './pages/auth/Auth';
import Landing from './pages/landing/Landing';
import {ToastContainer} from 'react-toastify'



function App() {
  return (
    <>
      <Routes>
        {/* Redirect root to Landing page */}
        <Route path="/" element={<Landing />} />

        {/* Authentication Route */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Auth />} />

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
          <Route path='/student/courses' element={<StudentCourse />} />
          <Route path='/student/timetable' element={<StudentTimeTable />} />
          <Route path='/student/assignments' element={<StudentAssignments />} />
          <Route path='/student/notifications' element={<StudentNotification />} />
          <Route path='/student/profile' element={<StudentProfile />} />
          
        </Route>
      </Routes>
      <ToastContainer/>
    </>
  );
}

export default App;
