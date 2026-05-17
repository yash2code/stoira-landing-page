import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const NAV_LINKS = [
  { label: 'Pipeline', href: '#pipeline' },
  { label: 'Capabilities', href: '#features' },
  { label: 'Partnership', href: '#partnership' },
  { label: 'Operational Manual', href: '#' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none',
        scrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-zinc-800'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between pointer-events-auto">
        <a href="#" className="font-mono text-sm md:text-base tracking-[0.3em] text-white font-black uppercase shrink-0">
          STOIRA<span className="text-stoira-amber">.CORE</span>
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[10px] tracking-[0.2em] text-white/40 hover:text-stoira-amber transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:contact@stoira.com"
          className="border border-zinc-800 px-4 md:px-6 py-2 font-mono text-[9px] md:text-[10px] tracking-widest text-stoira-amber hover:bg-stoira-amber hover:text-black transition-all uppercase whitespace-nowrap"
        >
          CONTACT CORE
        </a>
      </div>
    </motion.nav>
  )
}
