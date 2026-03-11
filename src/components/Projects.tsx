import React from 'react'
import projects from '../content/projects/projects.json'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div id="projects" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  )
}
