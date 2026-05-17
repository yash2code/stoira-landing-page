import clsx from 'clsx'

interface StatusBadgeProps {
  label: string
  status: 'active' | 'deploying' | 'beta' | 'coming-soon'
}

const STATUS_STYLES = {
  active: 'text-emerald-500 border-emerald-500/20 bg-emerald-500/5',
  deploying: 'text-stoira-amber border-stoira-amber/20 bg-stoira-amber/5',
  beta: 'text-stoira-amber border-stoira-amber/20 bg-stoira-amber/5',
  'coming-soon': 'text-white/20 border-white/10 bg-white/5',
}

export default function StatusBadge({ label, status }: StatusBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-2 px-3 py-1',
        'font-mono text-[9px] tracking-[0.2em] uppercase border bg-black/50 backdrop-blur-sm',
        STATUS_STYLES[status]
      )}
    >
      <span className="w-1 h-1 bg-current" />
      {label}
    </span>
  )
}
