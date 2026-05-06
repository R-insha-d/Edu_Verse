import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Preloader from '../../components/Preloader';
import { 
  GraduationCap, 
  ArrowRight, 
  BookOpen, 
  Users, 
  ShieldCheck, 
  Video,
  Layout,
  MessageCircle,
  Zap,
  CheckCircle2,
  Globe,
  Star,
  PlayCircle,
  Trophy,
  Award
} from 'lucide-react';

const Landing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
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

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const features = [
    { 
      icon: Video, 
      title: "Interactive Live Classes", 
      desc: "Experience high-definition video streaming with synchronized whiteboards and real-time student engagement tools.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    { 
      icon: Layout, 
      title: "Intelligent Dashboards", 
      desc: "Data-driven insights for teachers and personalized learning paths for students, all in one centralized hub.",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "border-indigo-100"
    },
    { 
      icon: MessageCircle, 
      title: "Seamless Collaboration", 
      desc: "Foster a community with instant messaging, group discussions, and collaborative project spaces for every course.",
      color: "text-violet-600",
      bg: "bg-violet-50",
      border: "border-violet-100"
    },
    { 
      icon: Zap, 
      title: "Accelerated Feedback", 
      desc: "AI-powered grading systems and real-time performance analytics help students identify and bridge learning gaps instantly.",
      color: "text-fuchsia-600",
      bg: "bg-fuchsia-50",
      border: "border-fuchsia-100"
    }
  ];

  const courses = [
    { title: "Advanced React Patterns", students: "12k+", rating: 4.9, price: "$49", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800" },
    { title: "UI/UX Design Masterclass", students: "8k+", rating: 4.8, price: "$39", image: "https://images.unsplash.com/photo-1586717791821-3f44a563de4c?auto=format&fit=crop&q=80&w=800" },
    { title: "Fullstack MERN Guide", students: "15k+", rating: 5.0, price: "$59", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" },
    { title: "Data Science with Python", students: "10k+", rating: 4.7, price: "$45", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
  ];

  const steps = [
    { number: "01", title: "Join the Verse", desc: "Create your professional profile and set your learning goals in seconds." },
    { number: "02", title: "Select Your Path", desc: "Choose from thousands of curated courses led by world-class industry experts." },
    { number: "03", title: "Master the Skill", desc: "Learn through high-speed live sessions and interactive project environments." },
    { number: "04", title: "Scale Your Future", desc: "Earn globally recognized certifications and connect with top-tier employers." },
  ];

  const faqs = [
    { q: "Is EduVerse free for students?", a: "We offer a generous free tier for individual learners, while premium courses and specialized certifications carry a nominal fee." },
    { q: "Can I teach on the platform?", a: "Absolutely. We welcome industry experts and certified educators to join our elite teaching faculty after a vetting process." },
    { q: "Are certifications recognized?", a: "Yes, our certifications are globally recognized and verified by our partner institutions and top-tier employers." },
    { q: "How do live classes work?", a: "Live classes use our proprietary low-latency streaming technology with integrated interactive whiteboards and real-time Q&A." },
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      <div className={`min-h-screen bg-slate-50 font-sans antialiased overflow-x-hidden selection:bg-blue-100 selection:text-blue-900 ${loading ? 'h-screen overflow-hidden' : ''}`} id='main' >
        {/* Premium Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/30 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-400/30 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[30%] left-[40%] w-[30%] h-[30%] bg-violet-400/20 blur-[120px] rounded-full" />
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-6 mt-4">
            <div className="bg-white/70 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg shadow-slate-200/50 px-6 h-16 flex items-center justify-between">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:rotate-12 transition-transform duration-300">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <a href='#main'><span className="text-xl font-black tracking-tight text-slate-900 uppercase">Edu<span className="text-blue-600">Verse</span></span></a>
              </motion.div>
              
              <div className="hidden md:flex items-center gap-10">
                {['Features', 'Courses', 'About', 'FAQ'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors tracking-wide uppercase">
                    {item}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Link to="/auth" className="hidden sm:block text-sm font-bold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wide">
                  Sign In
                </Link>
                <Link to="/auth" className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/10 hover:shadow-blue-500/20 active:scale-95">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {!loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Hero Section */}
              <section className="relative pt-48 pb-32 px-6">
                <motion.div 
                  className="max-w-7xl mx-auto text-center relative z-10"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-slate-100 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 shadow-sm mb-10">
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                    </span>
                    Next-Gen Learning Experience
                  </motion.div>
                  
                  <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-10">
                    Learn Beyond <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">Boundaries.</span>
                  </motion.h1>
                  
                  <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-14 font-medium leading-relaxed">
                    EduVerse is the premier ecosystem for digital education. We bridge the gap between inspiration and achievement through a high-performance platform.
                  </motion.p>
                  
                  <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link to="/auth" className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/40 flex items-center justify-center gap-3 group active:scale-95">
                      Launch Platform
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-lg shadow-slate-200/50 flex items-center justify-center gap-3 group active:scale-95">
                      <PlayCircle className="w-5 h-5 text-blue-600" />
                      Watch Vision
                    </button>
                  </motion.div>

                  {/* Hero Image Mockup */}
                  <motion.div 
                    variants={itemVariants}
                    className="mt-24 relative max-w-6xl mx-auto group"
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-violet-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
                    <div className="relative rounded-[2.5rem] overflow-hidden border border-white/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-white p-2">
                      <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2000" 
                        alt="EduVerse Platform Preview" 
                        className="rounded-[2rem] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    {/* Floating UI Elements */}
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotateZ: [0, 2, 0]
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/50 hidden lg:flex items-center gap-4 z-20"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Status: Success</p>
                <p className="text-sm font-black text-slate-900 uppercase leading-tight">Class Completed</p>
                <p className="text-[10px] font-bold text-slate-400">Advanced React Architecture</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ 
                y: [0, 20, 0],
                rotateZ: [0, -2, 0]
              }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white/80 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/50 hidden lg:flex items-center gap-4 z-20"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -10, zIndex: 50 }}
                    className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center shadow-lg overflow-hidden"
                  >
                    <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Avatar" />
                  </motion.div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-blue-600 flex items-center justify-center text-[10px] font-black text-white shadow-lg">
                  +2k
                </div>
              </div>
              <div className="text-left pr-4">
                <p className="text-sm font-black text-slate-900 uppercase leading-tight">2.4k+ Students</p>
                <p className="text-[10px] font-bold text-slate-400">Learning live right now</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Social Proof Section */}
      <section className="pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-12">Empowering Excellence at Scale</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {['Stanford', 'MIT', 'Harvard', 'Oxford', 'Cambridge'].map((uni) => (
              <motion.span 
                key={uni} 
                whileHover={{ scale: 1.1, color: "#2563eb", opacity: 1 }}
                className="text-2xl font-black text-slate-900 tracking-tighter uppercase cursor-default"
              >
                {uni}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="inline-block px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6"
                >
                  The Workflow
                </motion.div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
                >
                  Master Any Skill in <br />
                  <span className="text-indigo-600">Four Simple Steps.</span>
                </motion.h2>
              </div>

              <div className="grid gap-8">
                {steps.map((step, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white border border-slate-100 rounded-2xl flex items-center justify-center text-indigo-600 font-black text-lg shadow-sm group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-indigo-600/20 blur-[100px] rounded-full" />
              <div className="relative bg-white p-4 rounded-[3rem] border border-slate-100 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
                  alt="Step Preview" 
                  className="rounded-[2.5rem] w-full"
                />
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute top-1/2 -left-12 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden md:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                      <Trophy className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-900 uppercase">Certified</p>
                      <p className="text-[10px] font-bold text-slate-400">Ready to Hire</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section id="courses" className="py-32 bg-slate-50/50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6"
              >
                Course Library
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight"
              >
                Elite Content for <span className="text-blue-600">Elite Learners.</span>
              </motion.h2>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white border border-slate-200 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-900 hover:bg-slate-50 transition-all flex items-center gap-3 shadow-sm"
            >
              Browse All Courses <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -15 }}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-xl text-xs font-black text-blue-600 shadow-sm">
                    {course.price}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => <Star key={i} className={`w-3 h-3 ${i === 4 ? 'fill-transparent' : 'fill-current'}`} />)}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{course.rating} Rating</span>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">{course.title}</h4>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-400" />
                      <span className="text-xs font-bold text-slate-500">{course.students}</span>
                    </div>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-blue-600 cursor-pointer"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
              <section id="features" className="py-32 bg-white px-6 relative">
                <div className="max-w-7xl mx-auto">
                  <div className="text-center mb-24">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6"
                    >
                      Core Capabilities
                    </motion.div>
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6"
                    >
                      Everything You Need to <span className="text-blue-600 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Succeed.</span>
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-slate-500 max-w-2xl mx-auto font-medium"
                    >
                      Our ecosystem is engineered to remove technical barriers and amplify the learning potential of every student and educator.
                    </motion.p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                      <motion.div 
                        key={idx}
                        variants={featureVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, delay: idx * 0.1 }}
                        whileHover={{ y: -12, scale: 1.02 }}
                        className={`bg-white p-10 rounded-[2.5rem] border ${feature.border} shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden`}
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 -z-0" />
                        <div className={`w-14 h-14 ${feature.bg} ${feature.color} rounded-2xl flex items-center justify-center mb-8 relative z-10 shadow-lg ${feature.border}`}>
                          <feature.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-black text-slate-900 mb-4 relative z-10 tracking-tight">{feature.title}</h3>
                        <p className="text-slate-500 leading-relaxed text-sm font-medium relative z-10">{feature.desc}</p>
                        <motion.div 
                          initial={{ x: -20, opacity: 0 }}
                          whileHover={{ x: 0, opacity: 1 }}
                          className="mt-6 flex items-center gap-2 text-xs font-black text-blue-600 uppercase tracking-widest cursor-pointer relative z-10"
                        >
                          Learn More <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Stats Section */}
              <section id="about" className="py-32 px-6">
                <div className="max-w-7xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-2xl shadow-slate-950/20">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full" />
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div>
                      <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-8">
                        Global Impact <br />
                        <span className="text-blue-400">Driven by Data.</span>
                      </h2>
                      <p className="text-slate-400 text-lg font-medium mb-12 leading-relaxed">
                        We are not just a platform; we are a global movement towards decentralized, high-quality education accessible to all.
                      </p>
                      <div className="grid grid-cols-2 gap-8">
                        {[
                          { icon: Globe, label: "Countries", value: "140+" },
                          { icon: Trophy, label: "Success Rate", value: "98%" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400 border border-white/10">
                              <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                              <div className="text-2xl font-black text-white">{item.value}</div>
                              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.label}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { label: "Active Students", value: "50k+", icon: Users, color: "text-blue-400" },
                        { label: "Elite Teachers", value: "2k+", icon: Award, color: "text-indigo-400" },
                        { label: "Premium Courses", value: "15k+", icon: BookOpen, color: "text-violet-400" },
                        { label: "Global Partners", value: "120+", icon: Star, color: "text-fuchsia-400" }
                      ].map((stat, idx) => (
                        <motion.div 
                          key={idx}
                          whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                          className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] text-center backdrop-blur-sm transition-all"
                        >
                          <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
                          <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Testimonials Wall */}
              <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-16"
                  >
                    <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4 italic leading-tight">
                      "The most intuitive educational <br /> ecosystem I've ever experienced."
                    </h2>
                    <div className="flex items-center justify-center gap-4 mt-8">
                      <img src="https://i.pravatar.cc/150?u=sarah" alt="Testimonial" className="w-14 h-14 rounded-full border-4 border-blue-50 shadow-lg" />
                      <div className="text-left">
                        <p className="text-sm font-black text-slate-900 uppercase">Dr. Sarah Jenkins</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Professor of CS, Stanford</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* FAQ Section */}
      <section id="faq" className="py-32 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6"
            >
              Support Center
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-black text-slate-900 tracking-tight"
            >
              Frequently Asked <span className="text-indigo-600">Questions.</span>
            </motion.h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group cursor-pointer"
              >
                <h4 className="text-lg font-black text-slate-900 mb-3 flex items-center justify-between group-hover:text-indigo-600 transition-colors">
                  {faq.q}
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h4>
                <p className="text-slate-500 font-medium leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
              <section className="py-32 px-6 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10">
                  <div className="absolute top-0 left-0 w-full h-full bg-blue-600/5 blur-[100px] rounded-full" />
                </div>
                
                <div className="max-w-4xl mx-auto">
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-black text-slate-900 mb-10 tracking-tight"
                  >
                    Ready to Redefine Your <span className="text-blue-600">Future?</span>
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-slate-500 mb-14 font-medium"
                  >
                    Join thousands of visionary learners and educators. <br /> Your transformation starts with a single click.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link to="/auth" className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white rounded-[2rem] text-sm font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-2xl shadow-slate-950/20 hover:shadow-blue-500/40 group active:scale-95">
                      Start Your Journey Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </section>

              {/* Footer */}
      <footer className="pt-24 pb-12 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 p-12 bg-slate-900 rounded-[3rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-md text-center lg:text-left">
                <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Stay Ahead of the Curve.</h3>
                <p className="text-slate-400 font-medium">Join our weekly newsletter for elite learning resources and platform updates.</p>
              </div>
              <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white outline-none focus:ring-2 focus:ring-blue-500/50 transition-all min-w-[300px]"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-blue-600 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        <span className="text-2xl font-black tracking-tight text-slate-900 uppercase">Edu<span className="text-blue-600">Verse</span></span>
                      </div>
                      <p className="text-slate-400 max-w-sm font-medium leading-relaxed">
                        Building the infrastructure for the next generation of global education. Empowering minds, one interaction at a time.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 mb-8">Ecosystem</h4>
                      <ul className="space-y-4">
                        {['For Students', 'For Teachers', 'For Schools', 'Enterprise'].map(item => (
                          <li key={item}><a href="#" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">{item}</a></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 mb-8">Legal</h4>
                      <ul className="space-y-4">
                        {['Privacy Policy', 'Terms of Service', 'Security', 'Compliance'].map(item => (
                          <li key={item}><a href="#" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">{item}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">© 2026 EduVerse Global Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                      <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors transition-transform hover:scale-110"><ShieldCheck className="w-5 h-5" /></a>
                      <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors transition-transform hover:scale-110"><Users className="w-5 h-5" /></a>
                      <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors transition-transform hover:scale-110"><BookOpen className="w-5 h-5" /></a>
                    </div>
                  </div>
                </div>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Landing;
