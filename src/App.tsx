import React, { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { ArrowUp, Disc3, Headphones, Linkedin, Menu, Moon, Sun, X } from 'lucide-react'
import CursorRippleTrail from './components/CursorRippleTrail'
import ExplorationCard from './components/ExplorationCard'
import PrincipleCard from './components/PrincipleCard'
import ProjectCard from './components/ProjectCard'
import TechedelicPage from './components/TechedelicPage'
import { explorations } from './content/explorations/explorations'
import principles from './content/principles/principles.json'
import projects from './content/projects/projects.json'

type ProjectEntry = {
  id: string
  title: string
  description: string
  tag: string
  imageUrl: string
  link?: string
}

const getCurrentPath = () => {
  const path = window.location.pathname.replace(/\/+$/, '')
  return path === '' ? '/' : path
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const [dark, setDark] = useState(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored) return stored === 'dark'
    } catch {}
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const currentPath = getCurrentPath()
  const isExplorationsPage = currentPath === '/explorations'
  const isTechedelicPage = currentPath === '/techedelic'
  const isSubpage = isExplorationsPage || isTechedelicPage

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

  useEffect(() => {
    document.title = isExplorationsPage
      ? 'Nikhil Khedkar | Visual Explorations'
      : isTechedelicPage
        ? 'Nikhil Khedkar | Techedelic'
        : 'Nikhil Khedkar | AI Enablement & Systems Designer'
  }, [isExplorationsPage, isTechedelicPage])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const homeHref = isSubpage ? '/' : '#top'
  const homeSectionHref = (id: string) => (isSubpage ? `/#${id}` : `#${id}`)

  const navLink =
    'text-stone-700 dark:text-gray-300 hover:text-stone-950 dark:hover:text-slate-100 transition-colors'

  const connectIconBox =
    'w-12 h-12 rounded-lg border-2 border-[var(--surface-border)] dark:border-slate-700 bg-[#efe5d6] dark:bg-slate-800/70 flex items-center justify-center group-hover:border-[var(--surface-border-hover)] dark:group-hover:border-slate-300 group-hover:bg-[#f9f5ed] dark:group-hover:bg-slate-700/70 transition-all duration-300'

  const connectLink =
    'text-stone-900 dark:text-gray-100 hover:text-stone-950 dark:hover:text-slate-100 transition-colors'

  const connectCard =
    'interactive-card group flex items-center gap-4 rounded-2xl border-2 border-[var(--surface-border)] bg-[var(--surface-bg)] p-5 transition-all duration-300 hover:border-[var(--surface-border-hover)] hover:scale-[1.02] dark:border-gray-600 dark:bg-gray-700 dark:hover:border-slate-300'

  const projectEntries = projects as ProjectEntry[]
  const projectsForHome: ProjectEntry[] = [
    ...projectEntries,
    {
      id: 'p-explorations',
      title: 'Visual Explorations',
      description:
        'A dedicated gallery of browser-based audiovisual experiments, generative worlds, and interactive studies.',
      tag: 'Interactive AV',
      imageUrl: '/projects/visual-explorations.svg',
      link: '/explorations',
    },
  ]

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div id="top" className="min-h-screen bg-[var(--page-bg)] dark:bg-gray-900 transition-colors duration-300">
      <CursorRippleTrail />

      <nav className="fixed top-0 left-0 right-0 bg-[#f7f0e4]/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-[var(--surface-border)] dark:border-gray-700 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-2">
              <div className="brand-mark-shell w-12 h-12 flex items-center justify-center transition-colors">
                <img
                  src="/portfolio-website-logo.svg"
                  alt="Nikhil Khedkar logo"
                  className="brand-mark h-10 w-10 object-contain"
                />
              </div>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              <a href={homeHref} className={navLink}>Home</a>
              <a href={homeSectionHref('principles')} className={navLink}>Principles</a>
              <a href={homeSectionHref('projects')} className={navLink}>Projects</a>
              <a href="/explorations" className={navLink}>Explorations</a>
              <a
                href="https://teambotics.app"
                target="_blank"
                rel="noopener noreferrer"
                className={navLink}
              >
                Teambotics
              </a>
              <a href={homeSectionHref('connect')} className={navLink}>Connect</a>
              <a href={homeSectionHref('about')} className={navLink}>About</a>
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
              <a href={homeHref} className={`block w-full text-left ${navLink}`} onClick={closeMobileMenu}>Home</a>
              <a href={homeSectionHref('principles')} className={`block w-full text-left ${navLink}`} onClick={closeMobileMenu}>Principles</a>
              <a href={homeSectionHref('projects')} className={`block w-full text-left ${navLink}`} onClick={closeMobileMenu}>Projects</a>
              <a href="/explorations" className={`block w-full text-left ${navLink}`} onClick={closeMobileMenu}>Explorations</a>
              <a
                href="https://teambotics.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-left ${navLink}`}
                onClick={closeMobileMenu}
              >
                Teambotics
              </a>
              <a href={homeSectionHref('connect')} className={`block w-full text-left ${navLink}`} onClick={closeMobileMenu}>Connect</a>
              <a href={homeSectionHref('about')} className={`block w-full text-left ${navLink}`} onClick={closeMobileMenu}>About</a>
            </div>
          )}
        </div>
      </nav>

      {isExplorationsPage ? (
        <>
          <section className="pt-32 pb-16 px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <p className="mb-3 text-sm uppercase tracking-[0.16em] text-stone-500 dark:text-gray-400">Visual Explorations</p>
              <h1 className="mb-6 text-stone-900 dark:text-white text-5xl font-semibold">Interactive audiovisual studies and browser-native experiments.</h1>
              <p className="max-w-3xl text-lg text-stone-700 dark:text-gray-300 leading-relaxed">
                This page collects the more immersive side of my practice: generative systems, audio-reactive environments, camera-driven visuals, and interactive sketches published as lightweight live links.
              </p>
            </div>
          </section>

          <section className="pb-24 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {explorations.map((exploration) => (
                  <ExplorationCard key={exploration.id} exploration={exploration} />
                ))}
              </div>
              <div className="mt-6 interactive-card rounded-3xl border-2 border-[var(--surface-border)] bg-[var(--surface-bg)] p-8 dark:border-gray-600 dark:bg-gray-700">
                <p className="mb-3 text-sm uppercase tracking-[0.16em] text-stone-500 dark:text-gray-400">Why Here</p>
                <p className="max-w-4xl text-stone-800 dark:text-gray-300 leading-relaxed">
                  Keeping these live links on their own page lets the homepage stay focused and fast, while still giving the experimental work enough space to feel intentional rather than tucked away.
                </p>
              </div>
            </div>
          </section>
        </>
      ) : isTechedelicPage ? (
        <TechedelicPage />
      ) : (
        <>
          <section className="pt-32 pb-24 px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="mb-4 text-stone-900 dark:text-white text-5xl font-semibold">Nikhil Khedkar</h1>
              <h2 className="mb-6 text-stone-700 dark:text-gray-300 text-3xl font-medium">AI Enablement &amp; Systems Designer</h2>
              <p className="text-xl text-stone-700 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Designing systems where artificial intelligence, human behavior, and organizations meet.
              </p>
              <p className="text-stone-500 dark:text-gray-500">Product Design | UX Research | AI Adoption | Systems Thinking</p>
            </div>
          </section>

          <section id="principles" className="py-24 px-6 lg:px-8 bg-[#f7f0e4] dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12 max-w-3xl">
                <h2 className="mb-4 text-stone-900 dark:text-white text-4xl font-semibold">Design Principles</h2>
                <p className="text-stone-700 dark:text-gray-400 text-lg">
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
                <h2 className="text-stone-900 dark:text-white text-4xl font-semibold">Selected Work</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsForHome.map((project) => (
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

          <section id="about" className="py-24 px-6 lg:px-8 bg-[#f7f0e4] dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8 text-stone-900 dark:text-white text-4xl font-semibold">About</h2>
              <div className="space-y-6">
                <p className="text-lg text-stone-800 dark:text-gray-300 leading-relaxed">
                  I work at the intersection of AI enablement, UX research, and organizational systems design,
                  helping teams build intelligent systems that genuinely serve people and adapt to real-world complexity.
                </p>
                <div className="space-y-3 text-stone-800 dark:text-gray-300">
                  <p className="flex items-start"><span className="text-stone-500 mr-3 mt-1">-</span><span>Enterprise AI governance and adoption strategy for large-scale organizations</span></p>
                  <p className="flex items-start"><span className="text-stone-500 mr-3 mt-1">-</span><span>Frontline workforce enablement systems that bridge technology and human needs</span></p>
                  <p className="flex items-start"><span className="text-stone-500 mr-3 mt-1">-</span><span>Media research into misinformation ecosystems and information architecture</span></p>
                  <p className="flex items-start"><span className="text-stone-500 mr-3 mt-1">-</span><span>Production coordination on large-scale projects including Marvel and Disney</span></p>
                </div>
              </div>
            </div>
          </section>

          <section id="connect" className="py-24 px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="mb-8 text-stone-900 dark:text-white text-4xl font-semibold">Connect</h2>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                <a
                  href="https://linkedin.com/in/nikhilkhedkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={connectCard}
                  aria-label="LinkedIn profile"
                >
                  <div className={`${connectIconBox} shrink-0`}>
                    <Linkedin className="w-5 h-5 text-stone-700 dark:text-slate-200" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 dark:text-gray-400">LinkedIn</p>
                    <p className={connectLink}>Nikhil Khedkar</p>
                  </div>
                </a>

                <a
                  href="https://teambotics.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={connectCard}
                  aria-label="Teambotics website"
                >
                  <div className={`${connectIconBox} shrink-0`}>
                    <img
                      src="/brands/teambotics-logo.png"
                      alt="Teambotics logo"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 dark:text-gray-400">Founder</p>
                    <p className={connectLink}>Teambotics Inc</p>
                  </div>
                </a>

                <a
                  href="https://soundcloud.com/sublumerecords"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={connectCard}
                  aria-label="Sublume Records on SoundCloud"
                >
                  <div className={`${connectIconBox} shrink-0`}>
                    <Disc3 className="w-5 h-5 text-stone-700 dark:text-slate-200" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 dark:text-gray-400">Record Label</p>
                    <p className={connectLink}>Sublume Records</p>
                  </div>
                </a>

                <a
                  href="https://www.mixcloud.com/nickhil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={connectCard}
                  aria-label="DJ sets on Mixcloud"
                >
                  <div className={`${connectIconBox} shrink-0`}>
                    <Headphones className="w-5 h-5 text-stone-700 dark:text-slate-200" />
                  </div>
                  <div>
                    <p className="text-sm text-stone-500 dark:text-gray-400">Mixcloud</p>
                    <p className={connectLink}>DJ sets</p>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      <footer className="py-12 px-6 lg:px-8 bg-[#f7f0e4] dark:bg-gray-800 border-t border-[var(--surface-border)] dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center text-stone-500 dark:text-gray-400 text-sm">
          <p>Copyright 2026 Nikhil Khedkar. All rights reserved.</p>
        </div>
      </footer>

      {showScrollTop ? (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full border-2 border-[var(--surface-border)] dark:border-slate-700 bg-[#f7f0e4]/95 dark:bg-slate-800/95 text-stone-800 dark:text-slate-100 shadow-lg backdrop-blur-sm hover:border-[var(--surface-border-hover)] dark:hover:border-slate-300 hover:scale-105 transition-all duration-300"
          aria-label="Go to top of page"
        >
          <ArrowUp className="mx-auto h-5 w-5" />
        </button>
      ) : null}
      <Analytics />
    </div>
  )
}
