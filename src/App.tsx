import React, { useState } from 'react'
import { Menu, X, Mail, Linkedin, FileText } from 'lucide-react'
import principles from './content/principles/principles.json'
import projects from './content/projects/projects.json'
import PrincipleCard from './components/PrincipleCard'
import ProjectCard from './components/ProjectCard'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-semibold">NK</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-green-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('principles')} className="text-gray-700 hover:text-green-600 transition-colors">Principles</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-green-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('connect')} className="text-gray-700 hover:text-green-600 transition-colors">Connect</button>
              <a href="#resume" className="text-gray-700 hover:text-green-600 transition-colors">Resume</a>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors">Projects</button>
              <button onClick={() => scrollToSection('principles')} className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors">Principles</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('connect')} className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors">Connect</button>
              <a href="#resume" className="block text-gray-700 hover:text-green-600 transition-colors">Resume</a>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-gray-900 text-5xl font-semibold">Nikhil Khedkar</h1>
          <h2 className="mb-6 text-gray-700 text-3xl font-medium">AI Enablement & Systems Designer</h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Designing systems where artificial intelligence, human behavior, and organizations meet.
          </p>
          <p className="text-gray-500">Product Design • UX Research • AI Adoption • Systems Thinking</p>
        </div>
      </section>

      <section id="principles" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-gray-900 text-4xl font-semibold">Design Principles</h2>
            <p className="text-gray-600 text-lg">
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
            <h2 className="text-gray-900 text-4xl font-semibold">Selected Work</h2>
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

      <section id="about" className="py-24 px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-gray-900 text-4xl font-semibold">About</h2>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I work at the intersection of AI enablement, UX research, and organizational systems design,
              helping teams build intelligent systems that genuinely serve people and adapt to real-world complexity.
            </p>

            <div className="space-y-3 text-gray-700">
              <p className="flex items-start"><span className="text-green-500 mr-3 mt-1">•</span><span>Enterprise AI governance and adoption strategy for large-scale organizations</span></p>
              <p className="flex items-start"><span className="text-green-500 mr-3 mt-1">•</span><span>Frontline workforce enablement systems that bridge technology and human needs</span></p>
              <p className="flex items-start"><span className="text-green-500 mr-3 mt-1">•</span><span>Media research into misinformation ecosystems and information architecture</span></p>
              <p className="flex items-start"><span className="text-green-500 mr-3 mt-1">•</span><span>Production coordination on large-scale projects including Marvel and Disney</span></p>
            </div>
          </div>
        </div>
      </section>

      <section id="connect" className="py-24 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-8 text-gray-900 text-4xl font-semibold">Connect</h2>
          <div className="space-y-6">
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors">
                <Mail className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:nikhil@example.com" className="text-gray-900 hover:text-green-600 transition-colors">nikhil@example.com</a>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors">
                <Linkedin className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <a href="https://linkedin.com/in/nikhilkhedkar" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-green-600 transition-colors">linkedin.com/in/nikhilkhedkar</a>
              </div>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center group-hover:bg-green-100 transition-colors">
                <FileText className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Resume</p>
                <a href="#resume" className="text-gray-900 hover:text-green-600 transition-colors">Download Resume (PDF)</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 Nikhil Khedkar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
