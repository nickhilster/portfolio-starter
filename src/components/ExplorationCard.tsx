import type { ExplorationEntry } from '../content/explorations/explorations'

type ExplorationCardProps = {
  exploration: ExplorationEntry
}

export default function ExplorationCard({ exploration }: ExplorationCardProps) {
  return (
    <a
      href={exploration.link}
      target="_blank"
      rel="noopener noreferrer"
      className="interactive-card group flex h-full flex-col justify-between rounded-3xl border-2 border-[var(--surface-border)] bg-[var(--surface-bg)] p-7 transition-all duration-300 hover:border-[var(--surface-border-hover)] hover:scale-[1.02] dark:border-gray-600 dark:bg-gray-700 dark:hover:border-slate-300"
    >
      <div>
        <div
          className={`mb-6 h-40 rounded-2xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${exploration.panelClass}`}
        />
        <p className="mb-2 text-sm uppercase tracking-[0.16em] text-stone-500 dark:text-gray-400">
          {exploration.eyebrow}
        </p>
        <h3 className="mb-3 text-2xl font-semibold text-stone-900 dark:text-white">{exploration.title}</h3>
        <p className="text-stone-700 dark:text-gray-300 leading-relaxed">{exploration.description}</p>
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="max-w-xs text-sm text-stone-500 dark:text-gray-400">{exploration.note}</p>
        <span className="inline-block rounded-full border border-stone-400/70 bg-stone-300 px-3 py-1 text-xs font-medium tracking-[0.01em] text-stone-900 shadow-sm dark:border-slate-400/40 dark:bg-slate-800 dark:text-slate-100">
          Open live
        </span>
      </div>
    </a>
  )
}
