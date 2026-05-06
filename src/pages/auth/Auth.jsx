import { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

import { signinApi, signupApi } from "../../services/allApi";


export default function EduVerseAuth({ register }) {

  const [view, setView] = useState("signin");
  const [signUpRole, setSignUpRole] = useState("student");
  const [signInRole, setSignInRole] = useState("student");

  const navigate = useNavigate();

  const roles = [
    { id: "student", label: "Student" },
    { id: "teacher", label: "Teacher" },
    { id: "admin", label: "Admin" },
  ];

  const activeRole = view === "signup" ? signUpRole : signInRole;
  const setActiveRole = view === "signup" ? setSignUpRole : setSignInRole;

  const [user, setUser] = useState({
    username: "", email: "", password: ""
  });

  const handleRegister = async () => {
    const { username, email, password } = user;
    if (!username || !password || !email) {
      toast.info("Enter Valid Data");
    } else {
      const response = await signupApi({ ...user, role: signUpRole });
      if (response.status === 200) {
        toast.success("Signup Successful");
        setUser({ username: "", email: "", password: "" });
        navigate('/auth');
      } else {
        toast.error("Signup failed");
      }
    }
  };

  const handleLogin = async () => {
    const { email, password } = user;
    if (!email || !password) {
      toast.info("Enter Valid Inputs");
    } else {
      const response = await signinApi({ ...user, role: signInRole });
      if (response.status === 200) {
        sessionStorage.setItem('token', response?.data?.token);
        sessionStorage.setItem('uname', response?.data?.username);
        sessionStorage.setItem('dp', response?.data?.profile);
        sessionStorage.setItem('bio', response?.data?.bio);
        sessionStorage.setItem('role', response?.data?.role);
        toast.success("Signin Successful");
        setUser({ username: "", email: "", password: "" });
        if (response?.data?.role === "admin") {
          navigate('/admin');
        } else if (response?.data?.role === "teacher") {
          navigate('/teacher');
        } else if (response?.data?.role === "student") {
          navigate('/student');
        }
      } else {
        toast.error(response?.data);
      }
    }
  };

  return (
    <div
      className="min-h-screen bg-slate-100 flex items-center justify-center p-4 sm:p-6"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ── Back to Home Button ── */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-4 left-4 z-50 flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold px-4 py-2 rounded-xl shadow-md border border-slate-200 transition-all hover:shadow-lg"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        <span className="hidden sm:inline">Back to Home</span>
        <span className="sm:hidden">Home</span>
      </button>

      <div
        className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
        style={{ minHeight: "auto" }}
      >

        {/* ── Left Panel ── */}
        <div
          className="relative w-full md:w-[44%] md:flex-shrink-0 flex flex-col justify-between p-8 md:p-10 overflow-hidden"
          style={{
            background: "linear-gradient(155deg, #0f172a 55%, #1e3a5f 100%)",
            minHeight: "220px",
          }}
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, transparent 1px, transparent 40px, rgba(255,255,255,0.04) 40px),
                repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, transparent 1px, transparent 40px, rgba(255,255,255,0.04) 40px)
              `,
            }}
          />

          {/* Logo */}
          <div className="flex items-center gap-2 z-10">
            <div className="w-9 h-9 rounded-xl bg-blue-500 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <span className="text-white font-bold text-lg tracking-tight">EduVerse</span>
          </div>

          {/* Hero — hidden on small screens to save space */}
          <div className="z-10 mt-6 md:mt-0">
            <h1
              className="text-white font-extrabold leading-tight mb-4"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}
            >
              Empowering the<br />
              <span className="text-blue-400">Future</span> of<br />
              Education.
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs hidden sm:block">
              Join thousands of students and teachers in a modern, collaborative learning environment designed for excellence.
            </p>
          </div>

          {/* Social proof — hidden on mobile */}
          <div className="z-10 hidden md:block">
            <div className="flex items-center mb-2">
              {["A", "B", "C", "D"].map((l, i) => (
                <div
                  key={l}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{
                    background: ["#475569", "#64748b", "#94a3b8", "#cbd5e1"][i],
                    boxShadow: "0 0 0 2px #0f172a",
                    marginLeft: i === 0 ? 0 : "-8px",
                  }}
                >
                  {l}
                </div>
              ))}
              <div
                className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold"
                style={{ boxShadow: "0 0 0 2px #0f172a", marginLeft: "-8px" }}
              >
                +2k
              </div>
            </div>
            <p className="text-slate-400 text-xs">
              Trusted by <span className="text-white font-semibold">2,000+</span> educational institutions worldwide.
            </p>
          </div>
        </div>

        {/* ── Right Panel ── */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 py-8 sm:py-10 overflow-y-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
            {view === "signup" ? "Create Account" : "Welcome Back!"}
          </h2>
          <p className="text-sm text-gray-400 mb-5">
            {view === "signup"
              ? "Start your journey with EduVerse today."
              : "Please enter your details to sign in."}
          </p>

          {/* Role Tabs */}
          <div className="flex gap-2 sm:gap-3 mb-5">
            {roles.map(({ id, label }) => {
              const active = activeRole === id;
              const icons = {
                student: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#22c55e" : "#9ca3af"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                ),
                teacher: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#22c55e" : "#9ca3af"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                ),
                admin: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#22c55e" : "#9ca3af"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                ),
              };
              return (
                <button
                  key={id}
                  onClick={() => setActiveRole(id)}
                  className={`flex-1 flex flex-col items-center gap-1 py-2.5 sm:py-3 rounded-xl border transition-all cursor-pointer ${active ? "bg-green-50 border-green-200" : "bg-white border-gray-200 hover:bg-gray-50"}`}
                >
                  {icons[id]}
                  <span className={`text-xs font-semibold ${active ? "text-gray-800" : "text-gray-400"}`}>
                    {label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Full Name (signup only) */}
          {view === "signup" && (
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={user.username}
                  onChange={(e) => setUser({ ...user, username: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 sm:py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="name@company.com"
                className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 sm:py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-sm font-semibold text-gray-700">Password</label>
              {view === "signin" && (
                <a href="#" className="text-sm text-blue-600 font-medium hover:underline">
                  Forgot Password?
                </a>
              )}
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <input
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="••••••••"
                className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 sm:py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Submit */}
          {view === "signin" ? (
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer mt-1 mb-4"
            >
              Sign In
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <button
              onClick={handleRegister}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer mt-1 mb-4"
            >
              Create Account
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Divider */}
          <div className="flex items-center gap-3 my-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium tracking-widest whitespace-nowrap">OR CONTINUE WITH</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google */}
          <button className="w-full border border-gray-200 hover:bg-gray-50 py-2.5 sm:py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium text-gray-600 transition-colors cursor-pointer mb-4">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          {/* Toggle */}
          <p className="text-center text-sm text-gray-500">
            {view === "signup" ? "Already have an account?" : "Don't have an account?"}{" "}
            {view === "signup" ? (
              <button
                onClick={() => setView("signin")}
                className="text-blue-600 font-semibold hover:underline cursor-pointer"
              >
                Sign In
              </button>
            ) : (
              <button
                onClick={() => setView("signup")}
                className="text-blue-600 font-semibold hover:underline cursor-pointer"
              >
                Sign Up
              </button>
            )}
          </p>
        </div>

      </div>
    </div>
  );
}