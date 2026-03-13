import React, { useEffect, useState } from 'react'
import { FileText, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react'
import PrincipleCard from './components/PrincipleCard'
import ProjectCard from './components/ProjectCard'
import principles from './content/principles/principles.json'
import projects from './content/projects/projects.json'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [dark, setDark] = useState(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
    } catch {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const navLink =
    'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors'

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 flex items-center justify-center transition-colors">
                <img
                  src="/portfolio-website-logo.gif"
                  alt="Nikhil Khedkar logo"
                  className="h-10 w-10 object-contain"
                />
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('projects')} className={navLink}>Projects</button>
              <button onClick={() => scrollToSection('principles')} className={navLink}>Principles</button>
              <button onClick={() => scrollToSection('about')} className={navLink}>About</button>
              <button onClick={() => scrollToSection('connect')} className={navLink}>Connect</button>
              <button onClick={() => scrollToSection('connect')} className={navLink}>Resume</button>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setDark(!dark)}
                className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle dark mode"
              >
                {dark ? (
                  <Sun className="w-4 h-4 text-yellow-400" />
                ) : (
                  <Moon className="w-4 h-4 text-gray-500" />
                )}
              </button>
              <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-gray-100 dark:border-gray-700">
              <button onClick={() => scrollToSection('projects')} className={`block w-full text-left ${navLink}`}>Projects</button>
              <button onClick={() => scrollToSection('principles')} className={`block w-full text-left ${navLink}`}>Principles</button>
              <button onClick={() => scrollToSection('about')} className={`block w-full text-left ${navLink}`}>About</button>
              <button onClick={() => scrollToSection('connect')} className={`block w-full text-left ${navLink}`}>Connect</button>
              <button onClick={() => scrollToSection('connect')} className={`block w-full text-left ${navLink}`}>Resume</button>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-gray-900 dark:text-white text-5xl font-semibold">Nikhil Khedkar</h1>
          <h2 className="mb-6 text-gray-700 dark:text-gray-300 text-3xl font-medium">AI Enablement &amp; Systems Designer</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Designing systems where artificial intelligence, human behavior, and organizations meet.
          </p>
          <p className="text-gray-500 dark:text-gray-500">Product Design | UX Research | AI Adoption | Systems Thinking</p>
        </div>
      </section>

      <section id="principles" className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-gray-900 dark:text-white text-4xl font-semibold">Design Principles</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              These principles shape how I approach systems design and human behavior, grounding my work in timeless wisdom and practical insight.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <PrincipleCard
                key={principle.id}
                title={principle.title}
                quote={principle.quote}
                author={principle.author}
                interpretation={principle.interpretation}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-gray-900 dark:text-white text-4xl font-semibold">Selected Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tag={project.tag}
                imageUrl={project.imageUrl}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6 lg:px-8 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-gray-900 dark:text-white text-4xl font-semibold">About</h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I work at the intersection of AI enablement, UX research, and organizational systems design,
              helping teams build intelligent systems that genuinely serve people and adapt to real-world complexity.
            </p>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p className="flex items-start"><span className="text-green-500 mr-3 mt-1">-</span><span>Enterprise AI governance and adoption strategy for large-scale organizations</span></p>
              <p className="flex items-start"><span className="text-green-500 mr-3 mt-1">-</span><span>Frontline workforce enablement systems that bridge technology and human needs</span></p>
              <p className="flex items-start"><span className="text-green-500 mr-3 mt-1">-</span><span>Media research into misinformation ecosystems and information architecture</span></p>
              <p className="flex items-start"><span className="text-green-500 mr-3 mt-1">-</span><span>Production coordination on large-scale projects including Marvel and Disney</span></p>
            </div>
          </div>
        </div>
      </section>

      <section id="connect" className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-gray-900 dark:text-white text-4xl font-semibold">Connect</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                <Mail className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Contact</p>
                <a href="https://linkedin.com/in/nikhilkhedkar" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors">Message me on LinkedIn</a>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                <Linkedin className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                <a href="https://linkedin.com/in/nikhilkhedkar" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors">linkedin.com/in/nikhilkhedkar</a>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-lg flex items-center justify-center group-hover:bg-green-100 dark:group-hover:bg-green-900/40 transition-colors">
                <FileText className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Resume</p>
                <a href="https://linkedin.com/in/nikhilkhedkar" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors">Resume available on request</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 lg:px-8 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>Copyright 2026 Nikhil Khedkar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
