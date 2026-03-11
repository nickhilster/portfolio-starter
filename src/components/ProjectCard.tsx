import React from 'react'
import { ArrowUpRight } from 'lucide-react'

type ProjectCardProps = {
  title: string
  description: string
  tag: string
  imageUrl: string
  link?: string
}

export default function ProjectCard({ title, description, tag, imageUrl, link }: ProjectCardProps) {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div
      className="group cursor-pointer bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden hover:border-green-500 dark:hover:border-green-400 transition-all duration-300 hover:shadow-lg dark:hover:shadow-green-900/20"
      onClick={handleClick}
    >
      <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-600">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-gray-900 dark:text-white font-medium">{title}</h3>
          <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" />
        </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{description}</p>
        <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">
          {tag}
        </span>
      </div>
    </div>
  )
}
