export default function Footer() {
  return (
    <footer id="contact" className="relative px-6 py-24 border-t border-zinc-900 bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        <div className="max-w-sm">
          <span className="font-mono text-xl tracking-[0.3em] text-white font-black uppercase">
            STOIRA<span className="text-stoira-amber">.CORE</span>
          </span>
          <p className="mt-6 font-mono text-[10px] text-white/20 uppercase tracking-[0.2em] leading-relaxed">
            THE DIRECTOR-FIRST AI PRODUCTION PIPELINE. <br />
            STAY COMMAND. OWN THE IP.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">COMMUNICATION CHANNELS</span>
          <a
            href="mailto:contact@stoira.com"
            className="font-mono text-base text-stoira-amber hover:text-white transition-colors tracking-tighter"
          >
            CONTACT@STOIRA.COM
          </a>
        </div>
      </div>

      <div className="mt-24 flex flex-col md:flex-row items-center justify-between border-t border-zinc-900 pt-8 gap-4">
        <p className="font-mono text-[10px] text-white/10 tracking-[0.3em] uppercase">
          &copy; 2026 STOIRA // PRODUCTION CORE V1.0
        </p>
        <div className="flex gap-8 font-mono text-[9px] text-white/10 tracking-widest uppercase">
          <a href="#" className="hover:text-white transition-colors">PRIVACY PROTOCOL</a>
          <a href="#" className="hover:text-white transition-colors">SERVICE TERMS</a>
        </div>
      </div>
    </footer>
  )
}
