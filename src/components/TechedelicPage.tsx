import React from 'react'
import { techedelicStory } from '../content/case-studies/techedelic'

export default function TechedelicPage() {
  return (
    <>
      <section className="pt-32 pb-14 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.16em] text-stone-500 dark:text-gray-400">
              {techedelicStory.eyebrow}
            </p>
            <h1 className="mb-6 text-stone-900 dark:text-white text-5xl font-semibold leading-tight">
              {techedelicStory.title}
            </h1>
            <p className="max-w-2xl text-lg text-stone-700 dark:text-gray-300 leading-relaxed">
              {techedelicStory.summary}
            </p>
          </div>

          <div className="interactive-card overflow-hidden rounded-[1.75rem] border-2 border-[var(--surface-border)] bg-[var(--surface-bg)] p-3 dark:border-gray-600 dark:bg-gray-700">
            <div className="overflow-hidden rounded-[1.2rem] bg-black">
              <img
                src={techedelicStory.coverImageUrl}
                alt="Techedelic project artwork"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-10 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-4 md:grid-cols-3">
          {techedelicStory.quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="interactive-card rounded-3xl border-2 border-[var(--surface-border)] bg-[var(--surface-bg)] p-6 dark:border-gray-600 dark:bg-gray-700"
            >
              <p className="mb-2 text-xs uppercase tracking-[0.14em] text-stone-500 dark:text-gray-400">
                {fact.label}
              </p>
              <p className="text-lg font-medium text-stone-900 dark:text-white">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-14 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="interactive-card rounded-[2rem] border-2 border-[var(--surface-border)] bg-[var(--surface-bg)] p-8 md:p-10 dark:border-gray-600 dark:bg-gray-700">
            <p className="mb-3 text-sm uppercase tracking-[0.16em] text-stone-500 dark:text-gray-400">
              The City
            </p>
            <p className="text-lg text-stone-800 dark:text-gray-300 leading-relaxed">
              {techedelicStory.overview}
            </p>
          </div>

          <div className="interactive-card rounded-[2rem] border-2 border-[var(--surface-border)] bg-[var(--surface-bg)] p-8 md:p-10 dark:border-gray-600 dark:bg-gray-700">
            <p className="mb-3 text-sm uppercase tracking-[0.16em] text-stone-500 dark:text-gray-400">
              {techedelicStory.responsibilityTitle}
            </p>
            <div className="space-y-3">
              {techedelicStory.responsibilityAreas.map((area) => (
                <p key={area} className="flex items-start text-stone-800 dark:text-gray-300 leading-relaxed">
                  <span className="mr-3 mt-1 text-stone-500 dark:text-gray-500">-</span>
                  <span>{area}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="interactive-card rounded-[2rem] border-2 border-[var(--surface-border)] bg-[var(--surface-bg)] p-8 md:p-10 dark:border-gray-600 dark:bg-gray-700">
            <p className="mb-3 text-sm uppercase tracking-[0.16em] text-stone-500 dark:text-gray-400">
              From the Scene Archive
            </p>
            <p className="mb-4 text-3xl font-medium leading-tight text-stone-900 dark:text-white">
              {techedelicStory.archiveLine}
            </p>
            <p className="max-w-3xl text-stone-800 dark:text-gray-300 leading-relaxed">
              {techedelicStory.archiveSummary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {techedelicStory.archiveSections.map((section) => (
                <span
                  key={section}
                  className="inline-flex rounded-full border border-stone-400/70 bg-stone-300 px-4 py-2 text-sm font-medium text-stone-900 shadow-sm dark:border-slate-400/40 dark:bg-slate-800 dark:text-slate-100"
                >
                  {section}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 lg:px-8 bg-[#f7f0e4] dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.16em] text-stone-500 dark:text-gray-400">
              The Scene
            </p>
            <h2 className="text-stone-900 dark:text-white text-4xl font-semibold">
              How a city, a sound, and a platform came together.
            </h2>
          </div>

          <div className="space-y-6">
            {techedelicStory.storyBlocks.map((block) => (
              <div key={block.title} className="interactive-card rounded-3xl border-2 border-[var(--surface-border)] bg-[var(--surface-bg)] p-7 dark:border-gray-600 dark:bg-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-stone-900 dark:text-white">{block.title}</h3>
                <p className="text-stone-800 dark:text-gray-300 leading-relaxed">{block.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 max-w-4xl">
            <p className="mb-3 text-sm uppercase tracking-[0.16em] text-stone-500 dark:text-gray-400">
              {techedelicStory.deliverablesTitle}
            </p>
            <div className="flex flex-wrap gap-3">
              {techedelicStory.deliverables.map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-full border border-stone-400/70 bg-stone-300 px-4 py-2 text-sm font-medium text-stone-900 shadow-sm dark:border-slate-400/40 dark:bg-slate-800 dark:text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.16em] text-stone-500 dark:text-gray-400">
              What It Required
            </p>
            <h2 className="mb-4 text-stone-900 dark:text-white text-4xl font-semibold">
              The instincts needed to hold a moving culture.
            </h2>
            <p className="text-lg text-stone-700 dark:text-gray-300 leading-relaxed">
              {techedelicStory.skillsIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {techedelicStory.skillCards.map((skill) => (
              <div
                key={skill.title}
                className="interactive-card rounded-3xl border-2 border-[var(--surface-border)] bg-[var(--surface-bg)] p-7 dark:border-gray-600 dark:bg-gray-700"
              >
                <h3 className="mb-3 text-xl font-semibold text-stone-900 dark:text-white">{skill.title}</h3>
                <p className="text-stone-800 dark:text-gray-300 leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="interactive-card rounded-[2rem] border-2 border-[var(--surface-border)] bg-[var(--surface-bg)] p-8 md:p-10 dark:border-gray-600 dark:bg-gray-700">
            <p className="mb-4 text-sm uppercase tracking-[0.16em] text-stone-500 dark:text-gray-400">
              Why It Still Belongs Here
            </p>
            <p className="mb-6 text-lg text-stone-800 dark:text-gray-300 leading-relaxed">
              {techedelicStory.reflection}
            </p>
            <p className="text-2xl font-medium leading-relaxed text-stone-900 dark:text-white">
              {techedelicStory.closingLine}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
