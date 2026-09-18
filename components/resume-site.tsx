'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Check, Download, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

const portrait = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YWxaWtzJB3JjqLLeDdMVd0AswiNuTm.png'

const expertise = [
  { number: '01', title: 'Backend engineering', text: 'Java, Spring Boot, REST APIs and microservices built for clarity, reliability and scale.', tags: ['Java', 'Spring Boot', 'Microservices'] },
  { number: '02', title: 'Cloud architecture', text: 'Cloud-native platforms with the operational discipline to stay fast, resilient and observable.', tags: ['AWS', 'EKS', 'Terraform'] },
  { number: '03', title: 'Distributed systems', text: 'Event-driven systems designed around throughput, failure modes and graceful recovery.', tags: ['Kafka', 'SQS / SNS', 'Redis'] },
  { number: '04', title: 'AI engineering', text: 'Exploring generative and agentic AI as a new layer in practical software engineering.', tags: ['GenAI', 'Agents', 'Automation'] },
]

const tech = ['Java', 'Spring Boot', 'AWS', 'Kubernetes', 'EKS', 'ECS', 'Docker', 'Kafka', 'Redis', 'DynamoDB', 'S3', 'SQS', 'SNS', 'Terraform', 'Helm', 'PostgreSQL', 'MongoDB', 'React', 'Next.js', 'TypeScript', 'Playwright', 'GitHub Copilot']

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <motion.div className={className} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>{children}</motion.div>
}

export function ResumeSite() {
  const reduce = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeExpertise, setActiveExpertise] = useState(0)
  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }

  return (
    <main className="resume-shell">
      <header className="topbar">
        <button className="brand" onClick={() => scrollTo('top')} aria-label="Back to top">ARM<span>.</span></button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {['About', 'Expertise', 'Experience', 'Work', 'Contact'].map((item) => <button key={item} onClick={() => scrollTo(item.toLowerCase())}>{item}</button>)}
        </nav>
        <div className="topbar-right"><span className="availability"><i /> Open to conversations</span><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
      </header>
      {menuOpen && <div className="mobile-menu">{['About', 'Expertise', 'Experience', 'Work', 'Contact'].map((item) => <button key={item} onClick={() => scrollTo(item.toLowerCase())}>{item}<ArrowUpRight size={16} /></button>)}</div>}

      <section id="top" className="hero-section">
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
        <div className="hero-copy">
          <Reveal><p className="eyebrow">Senior Software Engineer / Software Architect</p></Reveal>
          <h1><span>ABHAY</span><span>RAJ</span><span className="outline-word">MALHOTRA</span></h1>
          <div className="hero-bottom"><p>Building scalable systems at the intersection of backend engineering, cloud architecture and AI.</p><div className="hero-actions"><button className="button button-primary" onClick={() => scrollTo('experience')}>View experience <ArrowDownRight size={16} /></button><a className="button button-ghost" href="#contact">Download resume <Download size={16} /></a></div></div>
        </div>
        <div className="hero-meta"><span>08+ years<br />engineering</span><span>01 — 04<br />scroll to explore</span></div>
        <button className="scroll-cue" onClick={() => scrollTo('about')} aria-label="Scroll to introduction"><span>Scroll to explore</span><i /></button>
      </section>

      <section id="about" className="intro-section section-pad">
        <div className="section-label"><span>01</span><span>Introduction</span></div>
        <div className="intro-grid"><Reveal><p className="display-copy">I design the <em>systems behind</em> ambitious products.</p></Reveal><Reveal><div className="intro-detail"><p>My work lives in the space where thoughtful backend engineering meets cloud-native architecture. I build platforms that are dependable under pressure, legible to the teams that own them and ready for what comes next.</p><p className="muted">Currently expanding that practice into Generative AI and Agentic AI — with the same focus on useful abstractions, resilient foundations and real-world outcomes.</p></div></Reveal></div>
        <div className="portrait-wrap"><img src={portrait} alt="Portrait of Abhay Raj Malhotra" /><div className="portrait-caption"><span>ABHAY RAJ MALHOTRA</span></div></div>
      </section>

      <section id="expertise" className="expertise-section section-pad dark-section"><div className="section-label light"><span>02</span><span>Engineering expertise</span></div><div className="expertise-header"><h2>Depth over <em>decoration.</em></h2><p>Four connected disciplines, one consistent approach: make complexity easier to reason about.</p></div><div className="expertise-layout"><div className="expertise-list">{expertise.map((item, index) => <button key={item.number} className={`expertise-item ${activeExpertise === index ? 'active' : ''}`} onMouseEnter={() => setActiveExpertise(index)} onClick={() => setActiveExpertise(index)}><span>{item.number}</span><strong>{item.title}</strong><ArrowUpRight size={18} /></button>)}</div><motion.div className="expertise-detail" key={activeExpertise} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: reduce ? 0 : 0.45 }}><span className="detail-number">{expertise[activeExpertise].number}</span><h3>{expertise[activeExpertise].title}</h3><p>{expertise[activeExpertise].text}</p><div className="tag-row">{expertise[activeExpertise].tags.map(tag => <span key={tag}>{tag}</span>)}</div></motion.div></div></section>

      <section id="experience" className="experience-section section-pad"><div className="section-label"><span>03</span><span>Experience</span></div><div className="experience-header"><h2>Eight years of <em>building.</em></h2><p>Selected chapters from a career spent turning hard technical problems into durable systems.</p></div><div className="timeline"><div className="timeline-line" />{['Senior Software Engineer / Architect', 'Software Engineer', 'The early chapters'].map((role, index) => <Reveal key={role}><div className="timeline-item"><div className="timeline-dot" /><div className="timeline-date">{index === 0 ? '2022 — Present' : index === 1 ? '2019 — 2022' : '2017 — 2019'}</div><div className="timeline-content"><span className="placeholder-label">EMPLOYER NAME / PLACEHOLDER</span><h3>{role}</h3><p>{index === 0 ? 'Leading backend architecture across cloud-native products, distributed services and platform engineering initiatives.' : index === 1 ? 'Building and operating production services with a focus on performance, integration and developer experience.' : 'Learning the craft through hands-on delivery, close collaboration and a growing obsession with how systems behave.'}</p></div><ArrowUpRight className="timeline-arrow" size={20} /></div></Reveal>)}</div></section>

      <section id="work" className="work-section section-pad"><div className="section-label"><span>04</span><span>Selected engineering work</span></div><div className="work-grid"><Reveal><article className="case-study case-dark"><div className="case-top"><span>Case study / 01</span><ArrowUpRight size={20} /></div><h3>Product<br /><em>platform</em></h3><p>Enterprise product platform powered by Java, Spring Boot and AWS — with ETL and integration pipelines designed for scale.</p><div className="architecture-mini"><span>API</span><i /><span>Services</span><i /><span>Events</span><i /><span>Data</span></div><div className="case-tags">AWS · EKS · DynamoDB · Redis · S3</div></article></Reveal><Reveal><article className="case-study case-accent"><div className="case-top"><span>Architecture / 02</span><ArrowUpRight size={20} /></div><h3>Banking<br /><em>platform</em></h3><p>A cloud-native banking architecture connecting secure identity, KYC and payments to scalable backend services.</p><div className="case-stack"><span>Next.js</span><span>Node.js</span><span>PostgreSQL</span><span>MongoDB</span><span>AWS</span></div><div className="case-tags">Architecture / Project case study</div></article></Reveal></div></section>

      <section className="architecture-section section-pad dark-section"><div className="section-label light"><span>05</span><span>Architecture</span></div><div className="architecture-header"><h2>Make complexity<br /><em>flow.</em></h2><p>My mental model for distributed systems is a living chain of responsibility — designed to absorb change, failure and scale.</p></div><div className="flow-diagram">{['API', 'MICROSERVICES', 'MESSAGE QUEUE', 'DATABASE', 'CACHE', 'OBSERVABILITY'].map((item, index) => <div className="flow-node" key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>{index < 5 && <i />}</div>)}</div><div className="principles"><span><Check size={14} /> Horizontal scaling</span><span><Check size={14} /> Circuit breakers</span><span><Check size={14} /> Transactional outbox</span><span><Check size={14} /> SAGA / DLQ</span><span><Check size={14} /> Async processing</span></div></section>

      <section className="technology-section section-pad"><div className="section-label"><span>06</span><span>Technology</span></div><div className="tech-heading"><h2>The tools are<br /><em>part of the thinking.</em></h2><p>A practical stack for building, operating and evolving serious software.</p></div><div className="tech-cloud">{tech.map((item, index) => <span key={item} className={index % 5 === 0 ? 'accent-tech' : ''}>{item}</span>)}</div></section>

      <section className="ai-section section-pad dark-section"><div className="section-label light"><span>07</span><span>AI engineering</span></div><div className="ai-grid"><div><p className="eyebrow lime">The next layer</p><h2>Engineering<br />with <em>intelligence.</em></h2></div><div className="ai-copy"><p>Generative AI and Agentic AI are becoming practical extensions of the systems we already know how to build.</p><p className="muted">I am exploring how models, tools and autonomous workflows can help software teams move from intent to reliable action — responsibly, measurably and with strong engineering foundations.</p><span className="signal">GENAI <i /> AGENTIC AI <i /> SYSTEMS THINKING</span></div></div></section>

      <section className="education-section section-pad"><div className="section-label"><span>08</span><span>Education & certifications</span></div><div className="education-grid"><div><h2>Still learning.<br /><em>Always.</em></h2></div><div className="placeholder-list"><div><span>01</span><strong>Bachelor of Technology, Computer Science Honors</strong><small>University of Delhi, North Campus / 2017</small></div><div><span>02</span><strong>AWS Developer Associate</strong><small>Amazon Web Services</small></div><div><span>03</span><strong>AWS DevOps Engineer - Professional</strong><small>Amazon Web Services</small></div><div><span>04</span><strong>Salsify PIM Certified</strong><small>Salsify</small></div><div><span>05</span><strong>Trained on InRiver Systems</strong><small>Product information management systems</small></div></div></div></section>

      <footer id="contact" className="footer-section dark-section"><div className="footer-top"><div className="section-label light"><span>09</span><span>Contact</span></div><p className="eyebrow lime">Have a complex problem?</p><h2>Let&apos;s build<br /><em>what&apos;s next.</em></h2><a className="contact-link" href="mailto:abhayraj.malhotra@gmail.com">abhayraj.malhotra@gmail.com <ArrowUpRight size={22} /></a></div><div className="footer-bottom"><span>© 2026 Abhay Raj Malhotra</span><div><a href="#contact"><span aria-hidden="true">in</span> LinkedIn</a><a href="#contact"><span aria-hidden="true">gh</span> GitHub</a><a href="mailto:abhayraj.malhotra@gmail.com"><Mail size={17} /> Email</a></div></div></footer>
    </main>
  )
}
