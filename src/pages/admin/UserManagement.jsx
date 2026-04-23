import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, MoreVertical, Shield, Mail, CheckCircle2, XCircle } from 'lucide-react';

const UserManagement = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Student', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Instructor', status: 'Active' },
    { id: 3, name: 'Robert Brown', email: 'robert@example.com', role: 'Student', status: 'Inactive' },
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

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">User <span className="text-blue-600">Management</span></h1>
          <p className="text-slate-500 font-medium mt-1">Manage students, instructors, and staff members.</p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
        >
          <UserPlus className="w-5 h-5" />
          Add New User
        </motion.button>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-[0.2em]">User Profile</th>
                <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Role</th>
                <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Status</th>
                <th className="px-8 py-5 text-xs font-black text-slate-400 uppercase tracking-[0.2em] text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {users.map((user, idx) => (
                <motion.tr 
                  key={user.id} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + (idx * 0.1) }}
                  whileHover={{ backgroundColor: "#fcfdff" }}
                  className="transition-colors group"
                >
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <motion.div 
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center font-black text-blue-600 border border-blue-100 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                      >
                        {user.name.charAt(0)}
                      </motion.div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{user.name}</p>
                        <p className="text-xs font-medium text-slate-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-xl ${
                      user.role === 'Instructor' 
                        ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' 
                        : 'bg-blue-50 text-blue-600 border border-blue-100'
                    }`}>
                      {user.role === 'Instructor' ? <Shield className="w-3 h-3" /> : <Mail className="w-3 h-3" />}
                      {user.role}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-xl ${
                      user.status === 'Active' 
                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                        : 'bg-slate-50 text-slate-400 border border-slate-100'
                    }`}>
                      <motion.span 
                        animate={user.status === 'Active' ? { scale: [1, 1.2, 1], opacity: [1, 0.7, 1] } : {}}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-300'}`} 
                      />
                      {user.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <motion.button 
                      whileHover={{ scale: 1.1, backgroundColor: "#f8fafc" }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2.5 text-slate-400 hover:text-slate-600 rounded-xl transition-colors"
                    >
                      <MoreVertical className="w-5 h-5" />
                    </motion.button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="p-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between"
        >
          <span className="text-xs font-bold text-slate-400">Showing {users.length} of 1,234 users</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-xs font-bold text-slate-500 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-all">Previous</button>
            <button className="px-4 py-2 text-xs font-bold text-white bg-blue-600 rounded-lg shadow-md shadow-blue-100">Next</button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default UserManagement;
