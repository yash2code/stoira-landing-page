import { motion } from 'framer-motion'
import StatusBadge from './StatusBadge'

const TIERS = [
  {
    name: 'Creator Package',
    tagline: 'For indie filmmakers & content creators',
    features: [
      'Single-project pipeline access',
      'Character consistency engine',
      'Storyboard + render automation',
      'Community support',
    ],
    cta: 'Start Creating',
    highlighted: false,
    status: { label: 'Available', status: 'active' as const },
  },
  {
    name: 'Studio Previz',
    tagline: 'For production houses & agencies',
    features: [
      'Multi-project orchestration',
      'Full pipeline (5 stages)',
      'Cross-modal causality engine',
      'Priority render queue',
      'Dedicated support',
    ],
    cta: 'Request Access',
    highlighted: true,
    status: { label: 'Beta', status: 'beta' as const },
  },
  {
    name: 'Enterprise Partner',
    tagline: 'For OTT originals & cinematic universes',
    features: [
      'Custom pipeline configuration',
      'On-premise deployment option',
      'Gaming cinematics vertical',
      'SLA + dedicated engineering',
      'IP co-development support',
    ],
    cta: 'Contact Us',
    highlighted: false,
    status: { label: 'Invite Only', status: 'deploying' as const },
  },
]

export default function PricingTiers() {
  return (
    <section id="partnership" className="relative px-6 py-32 max-w-7xl mx-auto pointer-events-none">
      <div className="mb-20 pointer-events-auto text-left">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[1px] bg-stoira-amber" />
          <h2 className="tactical-label">
            PARTNERSHIP MODELS // SCALE ORCHESTRATION
          </h2>
        </div>
        <p className="font-sans text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
          Own the IP. <span className="text-stoira-amber">Scale.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
        {TIERS.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className={`industrial-card p-8 flex flex-col pointer-events-auto bg-[#0a0a0a] group ${
              tier.highlighted
                ? 'border-stoira-amber/20'
                : ''
            }`}
          >
            <div className="flex items-center justify-between mb-8">
              <span className="tactical-label">MODEL {String(i + 1).padStart(2, '0')}</span>
              <StatusBadge label={tier.status.label} status={tier.status.status} />
            </div>

            <h3 className="font-sans text-2xl font-black text-white uppercase tracking-tighter mb-2">{tier.name}</h3>
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em] mb-8">{tier.tagline}</p>

            <ul className="flex-1 space-y-4 mb-12">
              {tier.features.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1 h-1 bg-stoira-amber flex-shrink-0" />
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>

            <a
              href={`mailto:contact@stoira.com?subject=Partnership:%20${encodeURIComponent(tier.name)}`}
              className={`btn-tactical text-center text-xs py-4 ${
                tier.highlighted
                  ? 'bg-stoira-amber text-black'
                  : ''
              }`}
            >
              {tier.cta} .
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
