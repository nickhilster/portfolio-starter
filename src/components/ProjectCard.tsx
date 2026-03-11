import React from 'react'
import { marked } from 'marked'

type Project = {
  id: string
  title: string
  summary: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="border rounded-lg p-6 bg-white shadow-sm">
      <h3 className="font-semibold mb-2">{project.title}</h3>
      <div className="text-sm text-slate-600" dangerouslySetInnerHTML={{ __html: marked.parse(project.summary) }} />
    </article>
  )
}
