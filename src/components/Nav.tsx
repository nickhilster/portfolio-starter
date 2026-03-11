import React from 'react'

export default function Nav() {
  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-green-600 font-bold rounded-md bg-green-50 px-3 py-1">NK</div>
        <nav className="space-x-6 text-sm text-slate-600">
          <a className="hover:underline" href="#projects">Projects</a>
          <a className="hover:underline" href="#principles">Principles</a>
          <a className="hover:underline" href="#about">About</a>
          <a className="hover:underline" href="#connect">Connect</a>
        </nav>
      </div>
    </header>
  )
}
