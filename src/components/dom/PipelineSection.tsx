import { motion } from 'framer-motion'

const PIPELINE_STEPS = [
  { id: '01', label: 'STRATEGY', desc: 'Beat sheets, character arcs, narrative structure' },
  { id: '02', label: 'VISUALS', desc: 'AI-generated shot compositions with director override' },
  { id: '03', label: 'CORE.ENGINE', desc: 'Multi-model rendering with consistency enforcement' },
  { id: '04', label: 'AUDIO', desc: 'Music-driven camera sync, spatial audio design' },
  { id: '05', label: 'DEPLOY', desc: 'Quality gate with human-in-the-loop approval' },
]

export default function PipelineSection() {
  return (
    <section id="pipeline" className="relative px-6 py-32 max-w-7xl mx-auto pointer-events-none">
      {/* Section Corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/5 pointer-events-none" />

      <div className="mb-20 pointer-events-auto">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-[1px] bg-stoira-amber" />
          <h2 className="tactical-label">
            PROCEDURAL.FLOW // PHASE.01 // [SEQ.ID.0442]
          </h2>
        </div>
        <p className="font-sans text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
          The <span className="text-stoira-amber">Pipeline.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-zinc-900 border border-zinc-900 pointer-events-auto">
        {PIPELINE_STEPS.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="industrial-card p-8 bg-[#0a0a0a] min-h-[220px] flex flex-col group"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-white/20">
                SEQ.{step.id}
              </span>
              <div className="w-1.5 h-1.5 bg-zinc-800 group-hover:bg-stoira-amber transition-colors" />
            </div>

            <h3 className="mt-auto font-sans text-xl font-black tracking-tighter uppercase text-white group-hover:text-stoira-amber transition-colors">
              {step.label}
            </h3>

            <p className="mt-4 font-mono text-[10px] text-white/30 leading-relaxed uppercase tracking-widest">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
