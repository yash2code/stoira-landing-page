import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SplineHero from './components/canvas/SplineHero'
import Hero from './components/dom/Hero'
import Navbar from './components/dom/Navbar'
import BentoGrid from './components/dom/BentoGrid'
import PipelineSection from './components/dom/PipelineSection'
import Footer from './components/dom/Footer'
import StudioWorkbench from './components/studio/StudioWorkbench'

function LandingPage() {
  return (
    <div className="relative min-h-screen bg-[#030303] overflow-x-hidden">
      {/* Layer 1: Spline Interactive Hero Asset (Main Background) */}
      <div className="fixed inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-black flex items-center justify-center text-white font-mono text-xs">LOADING CORE...</div>}>
          <SplineHero />
        </Suspense>
      </div>

      {/* Layer 2: DOM Content (Text + Bento Grid) */}
      <div className="relative z-10 pointer-events-none">
        <Navbar />
        <Hero />
        <PipelineSection />
        <BentoGrid />
        <Footer />
      </div>
    </div>
  )
}

export default function App() {
  return (
    <Router basename="/stoira-landing-page">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/studio" element={<StudioWorkbench />} />
      </Routes>
    </Router>
  )
}
