import BentoCard from './BentoCard'

function FilmIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  )
}

function MusicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

function CpuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="16" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
    </svg>
  )
}

function ZapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

const FEATURES = [
  {
    title: 'Director Orchestration',
    description: 'Every shot, every cut, every camera move — directed by you, executed by AI. Full creative override at every stage.',
    status: { label: 'Active', status: 'active' as const },
    icon: <FilmIcon />,
    span: 'full' as const,
  },
  {
    title: 'Cross-Modal Causality',
    description: 'Music drives camera motion. Story drives sound design. Narrative causality flows bidirectionally.',
    status: { label: 'Active', status: 'active' as const },
    icon: <MusicIcon />,
    span: 'half' as const,
  },
  {
    title: 'Consistent Character',
    description: 'Maintain identity across scenes and angles. Zero drift across high-fidelity cinematic frames.',
    status: { label: 'Beta', status: 'beta' as const },
    icon: <EyeIcon />,
    span: 'half' as const,
  },
  {
    title: 'Multi-Layer Render',
    description: 'Independent foreground, midground, and background layers with proper parallax and depth.',
    status: { label: 'Deploying', status: 'deploying' as const },
    icon: <LayersIcon />,
    span: 'half' as const,
  },
  {
    title: 'Agentic Pipeline',
    description: 'Collaborative AI agents: storyboard, render, sound, and review. Orchestrated precision.',
    status: { label: 'Active', status: 'active' as const },
    icon: <CpuIcon />,
    span: 'half' as const,
  },
  {
    title: 'Real-Time Interface',
    description: 'Direct the cinematic core in real-time. Zero latency from thought to visual feedback.',
    status: { label: 'Alpha', status: 'coming-soon' as const },
    icon: <ZapIcon />,
    span: 'full' as const,
  },
]

export default function BentoGrid() {
  return (
    <section id="features" className="relative px-6 py-32 max-w-7xl mx-auto pointer-events-none">
      {/* Section Corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/5 pointer-events-none" />

      <div className="mb-20 pointer-events-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[1px] bg-stoira-amber" />
          <h2 className="tactical-label">
            CORE SUBSYSTEMS // 0xAF4 // [MOD.ANALYSIS]
          </h2>
        </div>
        <p className="font-sans text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
          Operational <span className="text-stoira-amber">Matrix.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-900 border border-zinc-900">
        {FEATURES.map((feature, index) => (
          <div key={feature.title} className="pointer-events-auto">
            <BentoCard
              index={index}
              title={feature.title}
              description={feature.description}
              status={feature.status}
              icon={feature.icon}
              span={feature.span}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
