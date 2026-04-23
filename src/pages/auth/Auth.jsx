import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Chrome,
  ShieldCheck,
  UserCircle,
  BookOpen
} from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('student'); // 'student', 'teacher', 'admin'
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    navigate(`/${role}`);
  };

  const roles = [
    { id: 'student', label: 'Student', icon: UserCircle, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    { id: 'teacher', label: 'Teacher', icon: BookOpen, color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
    { id: 'admin', label: 'Admin', icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for a "premium" feel
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans antialiased selection:bg-blue-100 selection:text-blue-900 overflow-hidden">
      {/* Background Decoration */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-400/10 blur-[120px] rounded-full"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-emerald-400/10 blur-[120px] rounded-full"
        ></motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] flex flex-col md:flex-row overflow-hidden relative z-10 border border-slate-100"
      >
        
        {/* Left Side: Visual/Brand */}
        <div className="w-full md:w-1/2 bg-slate-900 p-10 flex flex-col justify-between relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[size:24px_24px]"></div>
          </motion.div>
          
          <div className="relative z-10">
            <motion.div variants={childVariants} className="flex items-center gap-3 text-white mb-12">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">EduVerse</span>
            </motion.div>
            
            <motion.h2 variants={childVariants} className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Empowering the <span className="text-blue-400">Future</span> of Education.
            </motion.h2>
            <motion.p variants={childVariants} className="text-slate-400 text-lg max-w-md leading-relaxed">
              Join thousands of students and teachers in a modern, collaborative learning environment designed for excellence.
            </motion.p>
          </div>

          <motion.div variants={childVariants} className="relative z-10 mt-12 md:mt-0">
            <div className="flex -space-x-3 mb-4">
              {[1, 2, 3, 4].map(i => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + (i * 0.1) }}
                  className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold text-white"
                >
                  {String.fromCharCode(64 + i)}
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                className="w-10 h-10 rounded-full border-2 border-slate-900 bg-blue-500 flex items-center justify-center text-xs font-bold text-white"
              >
                +2k
              </motion.div>
            </div>
            <p className="text-sm text-slate-500">
              Trusted by <span className="text-white font-medium">2,000+</span> educational institutions worldwide.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 relative flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={isLogin ? 'login' : 'signup'}
              initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md mx-auto w-full"
            >
              <div className="mb-6 text-center md:text-left">
                <motion.h1 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl font-bold text-slate-900 mb-1"
                >
                  {isLogin ? 'Welcome Back!' : 'Create Account'}
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm text-slate-500"
                >
                  {isLogin ? 'Please enter your details to sign in.' : 'Start your journey with EduVerse today.'}
                </motion.p>
              </div>

              {/* Role Selection */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-3 gap-3 mb-6"
              >
                {roles.map((r) => (
                  <motion.button
                    key={r.id}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setRole(r.id)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ${
                      role === r.id 
                        ? `${r.border} ${r.bg} shadow-md` 
                        : 'border-slate-100 hover:border-slate-200 bg-white'
                    }`}
                  >
                    <r.icon className={`w-6 h-6 ${role === r.id ? r.color : 'text-slate-400'}`} />
                    <span className={`text-xs font-bold ${role === r.id ? 'text-slate-900' : 'text-slate-500'}`}>
                      {r.label}
                    </span>
                  </motion.button>
                ))}
              </motion.div>

              <form onSubmit={handleAuth} className="space-y-4">
                <AnimatePresence>
                  {!isLogin && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="space-y-1.5 overflow-hidden"
                    >
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                        <input 
                          type="text" 
                          placeholder="John Doe"
                          className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 font-medium placeholder:text-slate-400"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-1.5"
                >
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                      type="email" 
                      placeholder="name@company.com"
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 font-medium placeholder:text-slate-400"
                    />
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-1.5"
                >
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-sm font-bold text-slate-700">Password</label>
                    {isLogin && (
                      <button type="button" className="text-xs font-bold text-blue-600 hover:text-blue-700">
                        Forgot Password?
                      </button>
                    )}
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <input 
                      type="password" 
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-slate-900 font-medium placeholder:text-slate-400"
                    />
                  </div>
                </motion.div>

                <motion.button 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group"
                >
                  {isLogin ? 'Sign In' : 'Create Account'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="my-6 flex items-center gap-4"
              >
                <div className="h-[1px] flex-1 bg-slate-100"></div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Or continue with</span>
                <div className="h-[1px] flex-1 bg-slate-100"></div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col gap-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.01, backgroundColor: '#f8fafc' }}
                  whileTap={{ scale: 0.99 }}
                  className="flex items-center justify-center gap-3 py-3 border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-bold text-slate-700 text-sm w-full group"
                >
                  <Chrome className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Continue with Google
                </motion.button>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-6 text-center text-sm font-medium text-slate-500"
              >
                {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-600 font-bold hover:underline"
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
