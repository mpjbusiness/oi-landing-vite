import React from 'react'
import Icon from './Icon.jsx'

const items = [
  {t: 'Define schema-aware workflows',                        icon: 'link',     color: 'cyan'},
  {t: 'Deploy adaptive agents that monitor, respond, evolve', icon: 'sparkles', color: 'fuchsia'},
  {t: 'Coordinate action across MES, SCADA, LIMS, and cloud', icon: 'chart',    color: 'rose'},
]

export default function InsightToAction() {
  return (
    <section>
      <h2 className="h2 mb-2">
        From <span className="text-oi-cyan">insight</span> to <span className="text-oi-fuchsia">action</span>
      </h2>
      <p className="p">
        Every telemetry stream you connect builds structured memory. Every question lays the foundation for{' '}
        <span className="text-oi-rose">automated coordination</span>.
      </p>
      <ul className="grid gap-3 md:grid-cols-3 mt-4">
        {items.map((i) => (
          <li key={i.t} className="card flex items-start gap-3">
            <Icon name={i.icon} color={i.color} />
            <span className="p">{i.t}</span>
          </li>
        ))}
      </ul>
      <p className="p mt-6 font-semibold">
        Start with <span className="text-oi-cyan">questions</span>. Grow into{' '}
        <span className="text-oi-fuchsia">orchestration</span>. All inside your existing stack.
      </p>
    </section>
  )
}
