import { motion } from 'framer-motion'
import clsx from 'clsx'
import StatusBadge from './StatusBadge'
import type { ReactNode } from 'react'

interface BentoCardProps {
  title: string
  description: string
  status: { label: string; status: 'active' | 'deploying' | 'beta' | 'coming-soon' }
  icon?: ReactNode
  span?: 'full' | 'half' | 'third'
  className?: string
  children?: ReactNode
  index?: number
}

export default function BentoCard({
  title,
  description,
  status,
  icon,
  span = 'half',
  className,
  children,
  index = 0,
}: BentoCardProps) {
  const modId = `MOD ${String(index + 1).padStart(2, '0')}`
  const coords = `${(Math.random() * 100).toFixed(1)} / ${(Math.random() * 100).toFixed(1)}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={clsx(
        'industrial-card p-6 md:p-8 group cursor-default',
        'border-zinc-800', 
        span === 'full' && 'md:col-span-2',
        span === 'third' && 'md:col-span-1',
        span === 'half' && 'md:col-span-1',
        className
      )}
    >
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/10 group-hover:border-stoira-amber/40 transition-colors" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/10 group-hover:border-stoira-amber/40 transition-colors" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/10 group-hover:border-stoira-amber/40 transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/10 group-hover:border-stoira-amber/40 transition-colors" />

      {/* Tactical Header */}
      <div className="flex items-center justify-between mb-8">
        <span className="tactical-label">
          [{modId}] // {coords}
        </span>
        <StatusBadge label={status.label} status={status.status} />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          {icon && (
            <div className="w-12 h-12 border border-stoira-amber/20
                            flex items-center justify-center text-stoira-amber bg-stoira-amber/5">
              {icon}
            </div>
          )}
          <div>
            <h3 className="font-sans text-xl font-extrabold text-white tracking-tighter uppercase">{title}</h3>
          </div>
        </div>

        <p className="font-mono text-[11px] text-white/30 leading-relaxed tracking-[0.15em] uppercase">
          {description}
        </p>
      </div>

      <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-100 transition-opacity">
        <div className="w-1 h-1 bg-stoira-amber" />
      </div>

      {children && <div className="mt-4">{children}</div>}
    </motion.div>
  )
}
