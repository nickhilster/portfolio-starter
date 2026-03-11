import React from 'react'

type PrincipleCardProps = {
  title: string
  quote: string
  author: string
  interpretation: string
}

export default function PrincipleCard({ title, quote, author, interpretation }: PrincipleCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-8 hover:border-green-500 dark:hover:border-green-400 transition-colors duration-300">
      <h3 className="mb-4 text-gray-900 dark:text-white font-medium">{title}</h3>
      <blockquote className="mb-2">
        <p className="text-gray-600 dark:text-gray-300 italic">"{quote}"</p>
      </blockquote>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">- {author}</p>
      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{interpretation}</p>
    </div>
  )
}
