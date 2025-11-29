import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Database, 
  Brain, 
  ChevronDown,
  Menu,
  X,
  FileText
} from 'lucide-react';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  // DATA: Extracted from your resume
  const skills = [
    { name: "React.js & Node.js", icon: <Code2 className="w-6 h-6" />, category: "Full Stack" },
    { name: "Python & Java", icon: <Database className="w-6 h-6" />, category: "Core" },
    { name: "SQL & MongoDB", icon: <Database className="w-6 h-6" />, category: "Data" },
    { name: "Generative AI & LLMs", icon: <Brain className="w-6 h-6" />, category: "AI/ML" },
    { name: "Git & GitHub", icon: <Code2 className="w-6 h-6" />, category: "Tools" },
    { name: "Tailwind & DaisyUI", icon: <Code2 className="w-6 h-6" />, category: "UI/UX" },
  ];

  const projects = [
    {
      title: "AI-Studio",
      desc: "Automated product ad creation tool integrating Bria AI's generation APIs. Enables real-time customization for digital campaigns.",
      tags: ["Python", "Streamlit", "GenAI", "API"],
      link: "https://github.com/Jagantripuragiri" 
    },
    {
      title: "Fullstack Todo App",
      desc: "Robust note-taking app with React/Node.js. Features secure CRUD operations and a clean DaisyUI interface.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/Jagantripuragiri"
    },
    {
      title: "E-Learning Portal",
      desc: "Educational platform with video/document management and YouTube integration for seamless content delivery.",
      tags: ["Web Dev", "JS", "Content Mgmt"],
      link: "https://github.com/Jagantripuragiri"
    },
    {
      title: "E-Medical Website",
      desc: "Healthcare information platform focused on intuitive UX and accessible medical service discovery.",
      tags: ["UI/UX", "HTML/CSS", "Design"],
      link: "https://github.com/Jagantripuragiri"
    }
  ];

  const certifications = [
    "Harvard CS50: Intro to CS",
    "ServiceNow Micro-Certification",
    "Deloitte Data Analytics",
    "Generative AI & MCP (Model Context Protocol)",
    "ServiceNow Micro Certification"
  ];

  return (
    <div className="bg-slate-900 text-slate-50 min-h-screen font-sans selection:bg-primary selection:text-slate-900">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary cursor-pointer">
              Jagan<span className="text-white">.dev</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <Link 
                    key={item}
                    to={item.toLowerCase()} 
                    smooth={true} 
                    offset={-70}
                    duration={500}
                    className="hover:text-primary cursor-pointer transition-colors duration-300 font-medium"
                  >
                    {item}
                  </Link>
                ))}
                <a href="/resume.pdf" download className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-slate-900 font-bold hover:bg-sky-300 transition-colors">
                  <FileText className="w-4 h-4" /> Resume
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2">
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-slate-800 border-b border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 cursor-pointer hover:text-primary"
                >
                  {item}
                </Link>
              ))}
              <a href="/resume.pdf" download className="block px-3 py-2 text-primary font-bold">
                Download Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10 animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-mono text-lg mb-4">Hello, I am</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
              Jagan Tripuragiri
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Full Stack Developer & AI Enthusiast.
              <br/>
              <span className="text-slate-500 text-lg">
                Building scalable web solutions integrated with next-gen AI technologies like LLMs and MCP.
              </span>
            </p>
            
            <div className="flex justify-center gap-6 mb-12">
              <a href="https://github.com/Jagantripuragiri" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 hover:scale-110 transition-all border border-slate-700">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/Jagantripuragiri" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 hover:scale-110 transition-all border border-slate-700">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:tripuragirijagan27@gmail.com" className="p-3 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 hover:scale-110 transition-all border border-slate-700">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Link to="skills" smooth={true} offset={-70} className="cursor-pointer">
                <ChevronDown className="w-8 h-8 mx-auto text-slate-500 hover:text-primary" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50 hover:border-primary/50 hover:bg-slate-800 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-slate-800 text-primary group-hover:bg-primary group-hover:text-slate-900 transition-colors">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{skill.name}</h3>
                    <p className="text-sm text-slate-500">{skill.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-secondary mx-auto md:mx-0 rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border border-slate-700 group flex flex-col"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-slate-400 mb-6 flex-grow leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-900 text-xs font-mono rounded-full text-primary border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="text-primary text-3xl">#</span> Education
            </h3>
            <div className="border-l-2 border-slate-700 pl-8 ml-2 space-y-12 relative">
              <div className="relative">
                <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-slate-900 bg-primary"></span>
                <h4 className="text-xl font-bold text-white">B.Tech in CS & IT</h4>
                <p className="text-lg text-primary mt-1">MVGR College of Engineering</p>
                <p className="text-sm text-slate-500 font-mono mt-1">2022 - 2026</p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="text-secondary text-3xl">#</span> Certifications
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, i) => (
                <div key={i} className="bg-slate-900 p-4 rounded-lg border border-slate-700 flex items-center gap-4 hover:border-secondary transition-colors">
                  <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                  <span className="font-medium text-slate-200">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 text-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-slate-400 mb-10 text-lg md:text-xl leading-relaxed">
            I am currently looking for <span className="text-white font-semibold">Internship opportunities</span> and full-stack roles. 
            Whether you have a question about my AI projects or just want to say hi, my inbox is open!
          </p>
          <a 
            href="mailto:tripuragirijagan27@gmail.com" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-slate-900 font-bold text-lg rounded-lg hover:bg-sky-300 transition-all hover:-translate-y-1 shadow-lg shadow-primary/20"
          >
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-800 bg-slate-900">
        <p>Designed & Built by Jagan Tripuragiri © 2025</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/Jagantripuragiri" className="hover:text-primary transition-colors"><Github className="w-5 h-5" /></a>
          <a href="https://linkedin.com/in/Jagantripuragiri" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>
      </footer>

    </div>
  );
};

export default App;
