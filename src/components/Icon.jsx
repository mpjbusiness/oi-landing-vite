import React from 'react';

const base = 'inline-flex items-center justify-center shrink-0 rounded-lg bg-white/5 border border-white/10';
const size = 'h-10 w-10';
const paths = {
  bolt: (cls) => (
    <svg viewBox="0 0 24 24" fill="none" className={`h-5 w-5 ${cls}`} stroke="currentColor" strokeWidth="1.8">
      <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
    </svg>
  ),
  chart: (cls) => (
    <svg viewBox="0 0 24 24" fill="none" className={`h-5 w-5 ${cls}`} stroke="currentColor" strokeWidth="1.8">
      <path d="M4 19h16M7 16V8m5 8V5m5 11v-6" />
    </svg>
  ),
  shield: (cls) => (
    <svg viewBox="0 0 24 24" fill="none" className={`h-5 w-5 ${cls}`} stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l8 4v5c0 5-3.4 8.6-8 9-4.6-.4-8-4-8-9V7l8-4z" />
    </svg>
  ),
  link: (cls) => (
    <svg viewBox="0 0 24 24" fill="none" className={`h-5 w-5 ${cls}`} stroke="currentColor" strokeWidth="1.8">
      <path d="M10 13a5 5 0 007.07 0l1.41-1.41a5 5 0 00-7.07-7.07L10 5m4 6a5 5 0 00-7.07 0L5.5 12.43a5 5 0 007.07 7.07L14 19" />
    </svg>
  ),
  cloud: (cls) => (
    <svg viewBox="0 0 24 24" fill="none" className={`h-5 w-5 ${cls}`} stroke="currentColor" strokeWidth="1.8">
      <path d="M7 18h10a4 4 0 000-8 6 6 0 10-11.3 3.3A3 3 0 007 18z" />
    </svg>
  ),
  eye: (cls) => (
    <svg viewBox="0 0 24 24" fill="none" className={`h-5 w-5 ${cls}`} stroke="currentColor" strokeWidth="1.8">
      <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  sparkles: (cls) => (
    <svg viewBox="0 0 24 24" fill="none" className={`h-5 w-5 ${cls}`} stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12l2-2 2 2-2 2-2-2zm7-7l2-2 2 2-2 2-2-2zm0 14l3-3 3 3-3 3-3-3z" />
    </svg>
  ),
  clock: (cls) => (
    <svg viewBox="0 0 24 24" fill="none" className={`h-5 w-5 ${cls}`} stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </svg>
  ),
};

const colors = {
  cyan: 'text-oi-cyan',
  rose: 'text-oi-rose',
  fuchsia: 'text-oi-fuchsia',
};

export default function Icon({ name = 'sparkles', color = 'cyan' }) {
  const Path = paths[name] || paths.sparkles;
  const cls = colors[color] || colors.cyan;
  return (
    <span className={`${base} ${size}`}>
      {Path(cls)}
    </span>
  );
}
