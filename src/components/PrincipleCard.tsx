import React from 'react'
import CardParticles from './CardParticles'

type PrincipleCardProps = {
  title: string
  quote: string
  author: string
  interpretation: string
}

export default function PrincipleCard({ title, quote, author, interpretation }: PrincipleCardProps) {
  return (
    <div className="interactive-card group bg-[var(--surface-bg)] dark:bg-gray-700 border-2 border-[var(--surface-border)] dark:border-gray-600 rounded-lg p-8 hover:border-[var(--surface-border-hover)] dark:hover:border-slate-300 hover:scale-[1.02] transition-all duration-300">
      <CardParticles />
      <div className="relative z-10">
        <h3 className="card-title mb-4 text-stone-900 dark:text-white font-medium">{title}</h3>
        <blockquote className="mb-2">
          <p className="card-copy text-stone-700 dark:text-gray-300 italic transition-transform duration-300 group-hover:scale-[1.01]">"{quote}"</p>
        </blockquote>
        <p className="text-sm text-stone-500 dark:text-gray-400 mb-4">- {author}</p>
        <p className="card-copy text-sm text-stone-800 dark:text-gray-300 leading-relaxed">{interpretation}</p>
      </div>
    </div>
  )
}
