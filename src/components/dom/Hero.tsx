import { motion } from 'framer-motion'
import StatusBadge from './StatusBadge'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mb-8 pointer-events-auto flex flex-col items-center gap-2"
      >
        <StatusBadge label="SYSTEM.OPERATIONAL" status="active" />
        <span className="font-mono text-[8px] text-white/20 tracking-[0.4em]">COORD: 34.0522° N, 118.2437° W</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        className="font-sans text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.85] max-w-6xl mx-auto pointer-events-auto select-none text-center"
      >
        <span className="text-white">COMMAND THE</span>
        <br />
        <span className="text-stoira-amber">PRODUCTION.</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-4 font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase pointer-events-auto"
      >
        [ STOIRA CORE V1.0 // INDUSTRIAL AI PIPELINE ]
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7 }}
        className="mt-8 font-mono text-xs md:text-sm text-white/40 max-w-xl leading-relaxed tracking-widest pointer-events-auto"
      >
        THE DIRECTOR-FIRST AI PRODUCTION PIPELINE. 
        PRECISION ORCHESTRATION OF STORYBOARDS, CINEMATICS, AND SOUND.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="mt-12 flex flex-col sm:flex-row gap-6 pointer-events-auto"
      >
        <a
          href="mailto:contact@stoira.com"
          className="btn-tactical"
        >
          Initialize Partnership
        </a>
        <a
          href="#pipeline"
          className="px-8 py-3.5 font-mono text-xs tracking-[0.2em] text-white/40
                     hover:text-stoira-amber transition-colors uppercase border border-transparent hover:border-zinc-800"
        >
          Access Pipeline .
        </a >
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <div className="w-px h-16 bg-zinc-800" />
      </motion.div>
    </section>
  )
}
