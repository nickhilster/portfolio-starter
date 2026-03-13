import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import CardParticles from './CardParticles'

type ProjectCardProps = {
  title: string
  description: string
  tag: string
  imageUrl: string
  link?: string
}

export default function ProjectCard({
  title,
  description,
  tag,
  imageUrl,
  link,
}: ProjectCardProps) {
  const isInteractive = Boolean(link)

  const handleClick = () => {
    if (link) {
      if (link.startsWith('/')) {
        window.location.assign(link)
        return
      }

      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div
      className={`interactive-card group bg-[var(--surface-bg)] dark:bg-gray-700 border-2 border-[var(--surface-border)] dark:border-gray-600 rounded-lg transition-all duration-300 ${
        isInteractive
          ? 'cursor-pointer hover:border-[var(--surface-border-hover)] dark:hover:border-slate-300'
          : 'cursor-default'
      }`}
      onClick={isInteractive ? handleClick : undefined}
    >
      <CardParticles />
      <div className="relative z-0 aspect-square overflow-hidden rounded-t-lg bg-[#e7dcc9] dark:bg-gray-600">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="relative z-10 p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="card-title text-stone-900 dark:text-white font-medium">{title}</h3>
          {isInteractive ? (
            <ArrowUpRight className="w-5 h-5 text-stone-500 dark:text-gray-400 group-hover:text-stone-900 dark:group-hover:text-slate-100 transition-colors" />
          ) : null}
        </div>
        <p className="card-copy text-stone-700 dark:text-gray-300 text-sm mb-3">{description}</p>
        <span className="inline-block rounded-full border border-stone-400/70 bg-stone-300 px-3 py-1 text-xs font-medium tracking-[0.01em] text-stone-900 shadow-sm dark:border-slate-400/40 dark:bg-slate-800 dark:text-slate-100">
          {tag}
        </span>
        {!isInteractive ? (
          <p className="mt-3 text-xs text-stone-500 dark:text-gray-400">Details available on request.</p>
        ) : null}
      </div>
    </div>
  )
}
