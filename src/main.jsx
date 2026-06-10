import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  siCplusplus,
  siDocker,
  siEspressif,
  siGit,
  siGooglecloud,
  siLinux,
  siNvidia,
  siPytorch,
  siPython,
  siRos,
} from 'simple-icons';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Cpu,
  FileText,
  Github,
  GraduationCap,
  Home,
  Mountain,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Route,
  Trophy,
  Wrench,
} from 'lucide-react';
import { portfolio } from './portfolioData.js';
import './styles.css';
import heroPhoto from './assets/main.jpg';

const iconMap = {
  programming: Cpu,
  learning: Network,
  systems: Wrench,
};

const dockIconMap = {
  python: siPython,
  cpp: siCplusplus,
  cuda: siNvidia,
  ros2: siRos,
  pytorch: siPytorch,
  docker: siDocker,
  linux: siLinux,
  git: siGit,
  esp32: siEspressif,
  cloud: siGooglecloud,
};

function App() {
  return (
    <div className="site-shell">
      <Header />
      <ScrollRider />
      <main>
        <Hero />
        <SkillsDock />
        <Experience />
        <Projects />
        <Education />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function ScrollRider() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef(null);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setScrollProgress(Math.min(1, Math.max(0, nextProgress)));
      setVisible(true);
      clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => setVisible(false), 1000);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
      clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <div className="scroll-rider" aria-hidden="true" style={{ opacity: visible ? 1 : 0, transition: visible ? 'opacity 0.2s ease' : 'opacity 0.5s ease' }}>
      <div className="scroll-rider-track" />
      <img
        alt=""
        className="scroll-rider-bike"
        style={{ top: `calc(${scrollProgress * 100}% - 32px)` }}
        src="/assets/racing-bike-top-down.svg?v=blue-1"
      />
    </div>
  );
}

function Header() {
  const sectionOrder = [
    { id: 'top', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];
  const navItems = [
    { id: 'top', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollTarget = window.scrollY + 150;
      const nextActive = sectionOrder.reduce((active, item) => {
        const element = document.getElementById(item.id);
        if (!element) {
          return active;
        }

        return element.offsetTop <= scrollTarget ? item.id : active;
      }, 'top');

      setActiveSection(nextActive);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <header className="topbar">
      <a
        className={`brand ${activeSection === 'top' ? 'active' : ''}`}
        href="#top"
        aria-label="Mohit Yadav home"
      >
        <Home size={20} aria-hidden="true" />
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            className={activeSection === item.id ? 'active' : undefined}
            href={`#${item.id}`}
            key={item.id}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-animate" id="top">
      <div className="hero-copy">
        <h1>{portfolio.name}</h1>
        <p className="role">{portfolio.role}</p>
        <p className="intro">{portfolio.summary}</p>
        <div className="hero-actions">
          <a className="button primary" href={`mailto:${portfolio.contact.email}`}>
            <Mail size={18} aria-hidden="true" />
            Email
          </a>
          <a className="button" href={portfolio.contact.github} target="_blank" rel="noreferrer">
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
          <a className="button" href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} aria-hidden="true" />
            LinkedIn
          </a>
          <a className="button" href={portfolio.contact.cv} target="_blank" rel="noreferrer">
            <FileText size={18} aria-hidden="true" />
            CV
          </a>
        </div>
        <div className="location-note">
          <MapPin size={16} aria-hidden="true" />
          {portfolio.location}
        </div>
      </div>

      <div className="hero-visual" aria-label="Robotics software profile visual">
        <img src={heroPhoto} alt="Mohit Yadav working with a quadruped robot in a robotics lab" />
      </div>
    </section>
  );
}

function SkillsDock() {
  return (
    <section className="skills-dock-section section-animate" id="skills" aria-label="Skills">
      <div className="skills-dock">
        {portfolio.skillsDock.map((skill) => {
          const icon = dockIconMap[skill.id];
          return (
            <div className="dock-item" key={skill.label}>
              <button className="dock-button" type="button" aria-label={skill.label}>
                {icon ? (
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d={icon.path} />
                  </svg>
                ) : (
                  <Wrench size={28} aria-hidden="true" />
                )}
              </button>
              <span>{skill.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section section-animate" id="experience">
      <SectionHeading eyebrow="Experience" />
      <div className="timeline">
        {portfolio.experience.map((item) => (
          <article className="timeline-item" key={`${item.company}-${item.title}`}>
            <div className="timeline-meta">
              <span>{item.period}</span>
              <BriefcaseBusiness size={18} aria-hidden="true" />
            </div>
            <div className="timeline-card">
              {item.logo && <img src={item.logo} alt={item.company} className="experience-logo" />}
              <h3>{item.title}</h3>
              <p className="company">{item.company}</p>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="section muted section-animate" id="projects">
      <SectionHeading eyebrow="Projects" />
      <div className="project-grid">
        {portfolio.projects.map((project) => {
          const ytLink = project.links.find((l) => l.href.includes('youtu'));
          const ytId = ytLink?.href.match(/(?:youtu\.be\/|v=)([\w-]{11})/)?.[1];
          return (
            <article className="project-card" key={project.name}>
              {ytId && (
                <a href={ytLink.href} target="_blank" rel="noreferrer" className="project-thumbnail">
                  <img
                    src={`https://img.youtube.com/vi/${ytId}/hqdefault.jpg`}
                    alt={`${project.name} video thumbnail`}
                  />
                </a>
              )}
              <div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-links">
                {project.links.map((link) => (
                  <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                    {link.label}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section section-animate" id="skills">
      <SectionHeading eyebrow="Skills" />
      <div className="skills-grid">
        {portfolio.skills.map((group) => {
          const Icon = iconMap[group.id] || Wrench;
          return (
            <article className="skill-card" key={group.label}>
              <Icon size={24} aria-hidden="true" />
              <h3>{group.label}</h3>
              <p>{group.items.join(', ')}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section education section-animate" id="education">
      <SectionHeading eyebrow="Education" />
      <div className="education-list">
        {portfolio.education.map((item) => (
          <article className="education-item" key={item.school}>
            {item.logo
              ? <img src={item.logo} alt={item.school} className="education-logo" />
              : <GraduationCap size={22} aria-hidden="true" />
            }
            <div>
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
              <span>{item.year}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Hobbies() {
  const hobbyIcons = {
    motorcycling: Route,
    hiking: Mountain,
    volleyball: Trophy,
  };

  return (
    <section className="section hobbies-section section-animate" id="hobbies">
      <SectionHeading eyebrow="Life Outside Work" />
      <div className="hobbies-grid">
        {portfolio.hobbies.map((hobby) => {
          const Icon = hobbyIcons[hobby.id] || Wrench;
          return (
            <article className="hobby-card" key={hobby.label}>
              <Icon size={24} aria-hidden="true" />
              <div>
                <h3>{hobby.label}</h3>
                <p>{hobby.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section section-animate" id="contact">
      <SectionHeading eyebrow="Contact" />
      <div className="contact-panel">
        <a className="contact-card" href={`mailto:${portfolio.contact.email}`}>
          <span className="contact-card-title">
            <Mail size={24} aria-hidden="true" />
            Email
          </span>
          <strong>{portfolio.contact.email}</strong>
        </a>
        <a className="contact-card" href={portfolio.contact.github} target="_blank" rel="noreferrer">
          <span className="contact-card-title">
            <Github size={24} aria-hidden="true" />
            GitHub
          </span>
          <strong>/mohitydv09</strong>
        </a>
        <a className="contact-card" href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">
          <span className="contact-card-title">
            <Linkedin size={24} aria-hidden="true" />
            LinkedIn
          </span>
          <strong>/in/mohitydv09</strong>
        </a>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow }) {
  return (
    <div className="section-heading">
      <p>{eyebrow}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {portfolio.name}</p>


    </footer>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
