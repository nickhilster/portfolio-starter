import React from 'react'
import principles from '../content/principles/principles.json'

export default function Principles() {
  return (
    <div id="principles" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {principles.map((p) => (
        <article key={p.id} className="border rounded-lg p-6 bg-white shadow-sm">
          <h4 className="font-semibold mb-2">{p.title}</h4>
          <p className="text-sm text-slate-600">{p.description}</p>
        </article>
      ))}
    </div>
  )
}
