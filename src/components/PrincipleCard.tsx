import React from 'react'

type PrincipleCardProps = {
  title: string
  quote: string
  author: string
  interpretation: string
}

export default function PrincipleCard({ title, quote, author, interpretation }: PrincipleCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-green-500 transition-colors duration-300">
      <h3 className="mb-4 text-gray-900 font-medium">{title}</h3>
      <blockquote className="mb-2">
        <p className="text-gray-600 italic">"{quote}"</p>
      </blockquote>
      <p className="text-sm text-gray-500 mb-4">- {author}</p>
      <p className="text-sm text-gray-700 leading-relaxed">{interpretation}</p>
    </div>
  )
}
