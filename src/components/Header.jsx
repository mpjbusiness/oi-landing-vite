// src/components/Header.jsx
import React from 'react'

// Robust asset URLs (Vite will fingerprint and rewrite properly)
const logoSrc = new URL('../assets/openIndustrialLogo_whiteOpen.svg', import.meta.url).href
const workspaceSrc = new URL('../assets/OI-live-workspace-example.png', import.meta.url).href

export default function Header() {
  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      {/* Background grid */}
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-20 md:opacity-30 pointer-events-none" />

      <div className="container relative z-10 py-12 sm:py-16 md:py-24 text-center">
        {/* Header image */}
        <div className="mx-auto mb-6 sm:mb-8 w-full max-w-5xl rounded-2xl border border-oi-brand/50 bg-white/5 flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 animate-pulse-glow">
          <img
            src={logoSrc}
            alt="Open Industrial Logo"
            className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain"
          />
        </div>

        <h1 className="h1">
          Ask anything about your plant. <span className="highlight">Get answers instantly.</span>
        </h1>

        <p className="p mt-3 sm:mt-4 max-w-3xl mx-auto px-2">
          Connect industrial systems. Stream telemetry. Ask questions — no pipelines required.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#get-started" className="btn">Get Started</a>
          <a href="#learn" className="btn-outline">Learn More</a>
        </div>

        {/* Workspace example image */}
        <div className="mt-10 flex justify-center animate-pulse-glow">
          <img
            src={workspaceSrc}
            alt="Open Industrial Live Workspace Example"
            className="rounded-xl border border-oi-brand/50 max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
