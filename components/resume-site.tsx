'use client'

import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

const portrait = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YWxaWtzJB3JjqLLeDdMVd0AswiNuTm.png'

export function ResumeSite() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
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
        <div className="mobile-menu">
          {['About', 'Expertise', 'Experience', 'Work', 'Contact'].map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())}>
              {item}
              <ArrowUpRight size={16} />
            </button>
          ))}
        </div>
      )}

      <section id="top" className="hero-section">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />

        <div className="hero-copy">
          <p className="eyebrow">Senior Software Engineer / Software Architect</p>
          <h1>
            <span>ABHAY</span>
            <span>RAJ</span>
            <span className="outline-word">MALHOTRA</span>
          </h1>

          <div className="hero-bottom">
            <p>
              Building scalable systems at the intersection of backend engineering, cloud architecture and AI.
            </p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => scrollTo('experience')}>
                View experience <ArrowDownRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="hero-meta">
          <span>08+ years<br />engineering</span>
          <span>01 — 04<br />scroll to explore</span>
        </div>

        <button className="scroll-cue" onClick={() => scrollTo('about')} aria-label="Scroll to introduction">
          <span>Scroll to explore</span>
          <i />
        </button>
      </section>

      <section id="about" className="intro-section section-pad">
        <div className="section-label"><span>01</span><span>Introduction</span></div>
        <div className="intro-grid">
          <p className="display-copy">
            I design the <em>systems behind</em> ambitious products.
          </p>
          <div className="intro-detail">
            <p>
              My work lives in the space where thoughtful backend engineering meets cloud-native architecture.
              I build platforms that are dependable under pressure, legible to the teams that own them and ready
              for what comes next.
            </p>
            <p className="muted">
              Currently exploring how Generative AI and Agentic AI can extend that practice with the same focus on
              useful abstractions, resilient foundations and real-world outcomes.
            </p>
          </div>
        </div>

        <div className="portrait-wrap">
          <img src={portrait} alt="Portrait of Abhay Raj Malhotra" />
          <div className="portrait-caption">
            <span>ABHAY RAJ MALHOTRA</span>
          </div>
        </div>
      </section>

      <section id="expertise" className="expertise-section section-pad dark-section">
        <div className="section-label light"><span>02</span><span>Engineering expertise</span></div>
        <div className="expertise-header">
          <h2>
            Depth over <em>decoration.</em>
          </h2>
          <p>
            Four connected disciplines, one consistent approach: make complexity easier to reason about.
          </p>
        </div>
      </section>

      <section id="experience" className="experience-section section-pad">
        <div className="section-label"><span>03</span><span>Experience</span></div>
        <div className="experience-header">
          <h2>
            Eight years of <em>building.</em>
          </h2>
          <p>
            Selected chapters from a career spent turning hard technical problems into dependable systems.
          </p>
        </div>
      </section>

      <section id="work" className="work-section section-pad">
        <div className="section-label"><span>04</span><span>Selected engineering work</span></div>
        <div className="work-grid">
          <article className="case-study case-dark">
            <div className="case-top">
              <span>Case study / 01</span>
              <ArrowUpRight size={20} />
            </div>
            <h3>
              Product<br />
              <em>platform</em>
            </h3>
            <p>
              Enterprise product platform powered by Java, Spring Boot and AWS with ETL and integration pipelines
              designed for scale.
            </p>
            <div className="case-tags">
              <span>AWS</span>
              <span>EKS</span>
              <span>Kafka</span>
              <span>S3</span>
            </div>
          </article>

          <article className="case-study case-accent">
            <div className="case-top">
              <span>Architecture / 02</span>
              <ArrowUpRight size={20} />
            </div>
            <h3>
              Banking<br />
              <em>platform</em>
            </h3>
            <p>
              A cloud-native banking architecture connecting secure identity, KYC and payments to scalable backend
              services.
            </p>
            <div className="case-stack">
              <span>Next.js</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
              <span>AWS</span>
            </div>
          </article>
        </div>
      </section>

      <footer id="contact" className="footer-section dark-section">
        <div className="footer-top">
          <div className="section-label light"><span>09</span><span>Contact</span></div>
          <p className="eyebrow lime">Have a complex problem?</p>
          <h2>
            Let&apos;s build<br />
            <em>what&apos;s next.</em>
          </h2>
          <a className="contact-link" href="mailto:abhayraj.malhotra@gmail.com">
            abhayraj.malhotra@gmail.com <ArrowUpRight size={22} />
          </a>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Abhay Raj Malhotra</span>
          <div>
            <a href="https://www.linkedin.com/in/abhayrajmalhotra/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="mailto:abhayraj.malhotra@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
