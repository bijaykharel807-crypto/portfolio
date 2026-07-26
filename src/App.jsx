import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  MapPin, 
  Phone, 
  Code2,
  Palette,
  Layout,
  Cpu,
  Globe2,
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Database
} from "lucide-react";
import { PROFILE, SKILLS, PROJECTS, EXPERIENCE, EDUCATION, TRAININGS, LANGUAGES } from "./constants.js";

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-16">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-brand-muted max-w-2xl text-lg"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white bg-brand-bg text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-black/[0.04]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter text-slate-900 flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-black text-sm">
              BK
            </span>
            <span>BIJAY.</span>
          </motion.a>
          <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest font-bold text-brand-muted">
            <a href="#projects" className="hover:text-black transition-colors">Projects</a>
            <a href="#skills" className="hover:text-black transition-colors">Skills</a>
            <a href="#experience" className="hover:text-black transition-colors">Experience</a>
            <a href="#certifications" className="hover:text-black transition-colors">Certifications</a>
            <a href="#education" className="hover:text-black transition-colors">Education</a>
          </div>
          <a 
            href={`mailto:${PROFILE.email}`}
            className="hidden sm:inline-flex px-5 py-2.5 bg-black text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden py-20 lg:py-0">
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[120px]" />
          </motion.div>
          
          <div className="max-w-7xl mx-auto w-full z-10 pb-12 lg:pb-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-black/[0.03] text-[11px] uppercase tracking-[0.2em] font-bold mb-8 text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available for Opportunities
                </div>
                
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter mb-8 text-slate-900">
                  {PROFILE.name}
                </h1>
                
                <p className="text-lg sm:text-xl text-slate-600 font-medium mb-6">
                  {PROFILE.role} &bull; <span className="text-slate-500">{PROFILE.location}</span>
                </p>

                <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed mb-10">
                  {PROFILE.summary}
                </p>
                
                <div className="flex flex-wrap items-center gap-4">
                  <a 
                    href={`mailto:${PROFILE.email}`}
                    className="px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-3 shadow-xl shadow-black/10 text-sm"
                  >
                    <Mail size={18} /> Let's Talk
                  </a>
                  
                  <div className="flex items-center gap-3">
                    <a 
                      href={PROFILE.socials.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 glass rounded-full hover:bg-black hover:text-white transition-all text-slate-900"
                      title="GitHub Profile"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={PROFILE.socials.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 glass rounded-full hover:bg-black hover:text-white transition-all text-slate-900"
                      title="LinkedIn Profile"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href={PROFILE.socials.website} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-4 glass rounded-full hover:bg-black hover:text-white transition-all text-slate-900"
                      title="Portfolio Website"
                    >
                      <Globe2 size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: [0, -12, 0] 
                }}
                transition={{ 
                  duration: 1, 
                  delay: 0.2,
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className="lg:col-span-5 hidden lg:block"
              >
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10 ring-1 ring-black/10 bg-slate-200">
                  <img 
                    src={PROFILE.image} 
                    alt={PROFILE.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white p-4 bg-slate-900/80 border border-white/20 rounded-2xl backdrop-blur-md shadow-lg">
                    <p className="font-bold text-sm text-white">{PROFILE.name}</p>
                    <p className="text-xs text-slate-300">{PROFILE.role}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-28 px-6 max-w-7xl mx-auto">
          <SectionHeader 
            title="Selected Works" 
            subtitle="A comprehensive showcase of web design, front-end architecture, AI integrations, and digital platforms."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECTS.map((project, idx) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (idx % 2) * 0.1 }}
                className="group relative flex flex-col justify-between p-8 glass rounded-[2rem] hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="aspect-[16/10] rounded-[1.5rem] overflow-hidden relative mb-6 ring-1 ring-black/5 bg-slate-100">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 px-3 py-1 rounded-full border border-black/10 bg-black/[0.02]">
                      {project.period}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      {project.role}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-black transition-colors text-slate-900">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {project.outcome && (
                    <div className="mb-6 p-3 rounded-xl bg-slate-100/80 text-xs text-slate-700 font-medium">
                      <span className="font-bold text-slate-900">Outcome: </span>
                      {project.outcome}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-semibold text-slate-600 px-2.5 py-1 rounded-md bg-black/[0.04]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-black/10">
                  {project.links.live && project.links.live !== "#" ? (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-bold flex items-center gap-2 text-slate-900 hover:text-blue-600 transition-colors uppercase tracking-wider"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                  ) : <span />}

                  {project.links.github && project.links.github !== "#" ? (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-bold flex items-center gap-2 text-slate-900 hover:text-slate-600 transition-colors uppercase tracking-wider"
                    >
                      GitHub <Github size={16} />
                    </a>
                  ) : <span />}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-28 px-6 bg-slate-100/70 border-y border-black/5">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              title="Capabilities & Skills" 
              subtitle="Technical expertise and practical proficiency built over years of hands-end web development."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {SKILLS.map((skillGroup, idx) => (
                <motion.div 
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-8 glass rounded-[2rem] bg-white hover:shadow-lg transition-all"
                >
                  <div className="mb-6 p-3.5 w-fit bg-black text-white rounded-2xl">
                    {idx === 0 && <Code2 size={24} />}
                    {idx === 1 && <Palette size={24} />}
                    {idx === 2 && <Layout size={24} />}
                    {idx === 3 && <Cpu size={24} />}
                    {idx === 4 && <Database size={24} />}
                  </div>
                  <h4 className="text-lg font-bold mb-4 text-slate-900">{skillGroup.category}</h4>
                  <ul className="space-y-2.5">
                    {skillGroup.items.map(item => (
                      <li key={item} className="text-slate-600 text-sm flex items-center gap-2.5">
                        <ArrowRight size={14} className="text-black shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="experience" className="py-28 px-6 max-w-7xl mx-auto">
          <SectionHeader 
            title="Professional Experience" 
            subtitle="Hands-on history delivering quality front-end solutions and AI integrations."
          />

          <div className="space-y-12">
            {EXPERIENCE.map((exp) => (
              <motion.div 
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 sm:p-10 glass rounded-[2rem] border-l-4 border-l-black relative"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-black/10">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-md bg-black text-white text-xs font-bold uppercase tracking-wider mb-2">
                      {exp.company}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 bg-slate-100 px-4 py-2 rounded-full self-start sm:self-auto">
                    {exp.period}
                  </span>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-3 bg-white/60 p-3.5 rounded-xl border border-black/5">
                      <Briefcase size={16} className="text-slate-800 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trainings & Certifications Section */}
        <section id="certifications" className="py-28 px-6 bg-slate-100/70 border-y border-black/5">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              title="Trainings & Certifications" 
              subtitle="Specialized professional instruction in web design, front-end technologies, and AI."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TRAININGS.map((item) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 glass rounded-[2rem] bg-white shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 bg-black text-white rounded-xl">
                        <Award size={20} />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {item.institution}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-xs font-semibold text-slate-600 mb-4">{item.period} &bull; {item.duration}</p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Languages Section */}
        <section id="education" className="py-28 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Education */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <BookOpen size={28} className="text-black" />
                <h2 className="text-3xl font-bold text-slate-900">Education</h2>
              </div>

              <div className="space-y-6">
                {EDUCATION.map((edu) => (
                  <motion.div 
                    key={edu.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 glass rounded-[1.8rem] relative"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-500 bg-black/5 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{edu.degree}</h3>
                    <p className="text-slate-700 font-medium text-sm mb-3">{edu.institution}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{edu.details}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Languages & Quick Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Globe2 size={28} className="text-black" />
                  <h2 className="text-3xl font-bold text-slate-900">Languages</h2>
                </div>

                <div className="space-y-4">
                  {LANGUAGES.map((lang) => (
                    <div key={lang.name} className="p-5 glass rounded-2xl flex items-center justify-between">
                      <span className="font-bold text-slate-900">{lang.name}</span>
                      <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-black text-white rounded-full">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="p-8 rounded-[2rem] bg-slate-900 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800/40 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-2xl font-bold mb-3 text-white">Direct Contact</h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Looking for a dedicated web designer & developer? Get in touch today!
                </p>

                <div className="space-y-4 text-sm relative z-10">
                  <div className="flex items-center gap-3.5 text-white bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                    <div className="p-2.5 rounded-lg bg-black text-emerald-400 shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Email</span>
                      <a href={`mailto:${PROFILE.email}`} className="font-semibold text-white hover:text-emerald-400 transition-colors">
                        {PROFILE.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 text-white bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                    <div className="p-2.5 rounded-lg bg-black text-emerald-400 shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Phone</span>
                      <span className="font-semibold text-white">{PROFILE.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 text-white bg-slate-800/80 p-3.5 rounded-xl border border-slate-700/60">
                    <div className="p-2.5 rounded-lg bg-black text-emerald-400 shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block">Location</span>
                      <span className="font-semibold text-white">{PROFILE.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 px-6 border-t border-black/10 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-2xl font-bold tracking-tight mb-1">{PROFILE.name}</p>
              <p className="text-xs text-slate-400">{PROFILE.role} &bull; {PROFILE.location}</p>
            </div>

            <div className="flex items-center gap-6">
              <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${PROFILE.email}`} className="text-slate-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>

            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
