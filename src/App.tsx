import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Principles from './components/Principles'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Nav />
      <main className="max-w-6xl mx-auto px-6">
        <Hero />
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Design Principles</h2>
          <Principles />
        </section>
        <section className="mt-16 mb-24">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <Projects />
        </section>
      </main>
    </div>
  )
}
