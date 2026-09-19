'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const portrait = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YWxaWtzJB3JjqLLeDdMVd0AswiNuTm.png'

const revealVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </motion.div>
  )
}

export function ResumeSite() {
  const reduceMotion = useReducedMotion()
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
    setMenuOpen(false)
  }

  return (
    <main className="resume-shell">
      <header className="topbar">
        <button className="brand" onClick={() => scrollTo('top')} aria-label="Back to top">
          ARM<span>.</span>
        </button>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {['About', 'Expertise', 'Experience', 'Work', 'Contact'].map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())}>{item}</button>
          ))}
        </nav>

        <div className="topbar-right">
          <span className="availability"><i /> Open to conversations</span>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {['About', 'Expertise', 'Experience', 'Work', 'Contact'].map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())}>
              {item}
              <ArrowUpRight size={16} />
            </button>
          ))}
        </motion.div>
      )}

      <section id="top" className="hero-section">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />

        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : 'hidden'}
          animate={reduceMotion ? undefined : 'visible'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.16 } } }}
        >
          <motion.p className="eyebrow" variants={revealVariants}>Senior Software Engineer / Software Architect</motion.p>
          <motion.h1 variants={revealVariants}>
            <span>ABHAY</span>
            <span>RAJ</span>
            <span className="outline-word">MALHOTRA</span>
          </motion.h1>

          <motion.div className="hero-bottom" variants={revealVariants}>
            <p>
              Building scalable systems at the intersection of backend engineering, cloud architecture and AI.
            </p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => scrollTo('experience')}>
                View experience <ArrowDownRight size={16} />
              </button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-meta"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <span>09+ years<br />engineering</span>
          <span>01 — 04<br />scroll to explore</span>
        </motion.div>

        <motion.button
          className="scroll-cue"
          onClick={() => scrollTo('about')}
          aria-label="Scroll to introduction"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <span>Scroll to explore</span>
          <i />
        </motion.button>
      </section>

      <Reveal>
        <section id="about" className="intro-section section-pad">
          <div className="section-label"><span>01</span><span>Introduction</span></div>
          <div className="intro-grid">
            <p className="display-copy">I design the <em>systems behind</em> ambitious products.</p>
            <div className="intro-detail">
              <p>My work lives in the space where thoughtful backend engineering meets cloud-native architecture. I build platforms that are dependable under pressure, legible to the teams that own them and ready for what comes next.</p>
              <p className="muted">Currently exploring how Generative AI and Agentic AI can extend that practice with the same focus on useful abstractions, resilient foundations and real-world outcomes.</p>
            </div>
          </div>
          <motion.div className="portrait-wrap" whileHover={reduceMotion ? undefined : { scale: 1.015 }} transition={{ duration: 0.45 }}>
            <img src={portrait} alt="Portrait of Abhay Raj Malhotra" />
            <div className="portrait-caption"><span>ABHAY RAJ MALHOTRA</span></div>
          </motion.div>
        </section>
      </Reveal>

      <Reveal>
        <section id="expertise" className="expertise-section section-pad dark-section">
          <div className="section-label light"><span>02</span><span>Engineering expertise</span></div>
          <div className="expertise-header"><h2>Depth over <em>decoration.</em></h2><p>Four connected disciplines, one consistent approach: make complexity easier to reason about.</p></div>
        </section>
      </Reveal>

      <Reveal>
        <section id="experience" className="experience-section section-pad">
          <div className="section-label"><span>03</span><span>Experience</span></div>
          <div className="experience-header"><h2>Nine years of <em>building.</em></h2><p>Selected chapters from a career spent turning hard technical problems into dependable systems.</p></div>
        </section>
      </Reveal>

      <Reveal>
        <section id="work" className="work-section section-pad">
          <div className="section-label"><span>04</span><span>Selected engineering work</span></div>
          <motion.div className="work-grid" variants={staggerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            <motion.article className="case-study case-dark" variants={revealVariants} whileHover={reduceMotion ? undefined : { y: -8 }}>
              <div className="case-top"><span>Case study / 01</span><ArrowUpRight size={20} /></div>
              <h3>Product<br /><em>platform</em></h3>
              <p>Enterprise product platform powered by Java, Spring Boot and AWS with ETL and integration pipelines designed for scale.</p>
              <div className="case-stack"><span>AWS</span><span>EKS</span><span>Kafka</span><span>S3</span></div>
            </motion.article>

            <motion.article className="case-study case-accent" variants={revealVariants} whileHover={reduceMotion ? undefined : { y: -8 }}>
              <div className="case-top"><span>Architecture / 02</span><ArrowUpRight size={20} /></div>
              <h3>Banking<br /><em>platform</em></h3>
              <p>A cloud-native banking architecture connecting secure identity, KYC and payments to scalable backend services.</p>
              <div className="case-stack"><span>Next.js</span><span>Node.js</span><span>PostgreSQL</span><span>AWS</span></div>
            </motion.article>
          </motion.div>
        </section>
      </Reveal>

      <Reveal>
        <footer id="contact" className="footer-section dark-section">
          <div className="footer-top">
            <div className="section-label light"><span>09</span><span>Contact</span></div>
            <p className="eyebrow lime">Have a complex problem?</p>
            <h2>Let&apos;s build<br /><em>what&apos;s next.</em></h2>
            <a className="contact-link" href="mailto:abhayraj.malhotra@gmail.com">abhayraj.malhotra@gmail.com <ArrowUpRight size={22} /></a>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Abhay Raj Malhotra</span>
            <div>
              <a href="https://www.linkedin.com/in/abhayrajmalhotra/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="mailto:abhayraj.malhotra@gmail.com">Email</a>
            </div>
          </div>
        </footer>
      </Reveal>
    </main>
  )
}
