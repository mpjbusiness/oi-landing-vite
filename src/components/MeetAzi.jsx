import React from 'react'
import Icon from './Icon.jsx'

const examples = [
  'Show flow anomalies for Line 4 over the past 24 hours',
  'Compare batch temperatures for Reactor 2',
  'List top causes of downtime last week'
]

export default function MeetAzi() {
  return (
    <section>
      <h2 className="h2 mb-4">
        Meet <span className="text-oi-fuchsia">Azi</span> — your AI query assistant for <span className="text-oi-rose">industrial insight</span>
      </h2>
      <p className="p">
        Ask questions in plain English — Azi translates them into governed KQL and queries your{' '}
        <span className="text-oi-cyan">live telemetry</span> in real time.
      </p>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {examples.map((e, i) => (
          <div key={e} className="card flex gap-3">
            <Icon name={i === 0 ? 'eye' : i === 1 ? 'chart' : 'sparkles'} color={i === 0 ? 'cyan' : i === 1 ? 'fuchsia' : 'rose'} />
            <code className="text-sm text-white/90">“{e}”</code>
          </div>
        ))}
      </div>

      <ul className="mt-6 grid gap-3 md:grid-cols-3">
        {[
          {t: 'Secure by design',           icon: 'shield',  color: 'rose'},
          {t: 'Built for live industrial data', icon: 'cloud',   color: 'cyan'},
          {t: 'Explains every query it runs',  icon: 'sparkles',color: 'fuchsia'},
        ].map((i) => (
          <li key={i.t} className="card flex items-center gap-3">
            <Icon name={i.icon} color={i.color} />
            <span>{i.t}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
