import React from 'react'
import Icon from './Icon.jsx'

const items = [
  { icon: 'eye',     color: 'cyan',    title: 'Unified Visibility', desc: 'Bring siloed data into one structured, queryable layer.'},
  { icon: 'sparkles',color: 'fuchsia', title: 'Instant Insight',    desc: 'Ask questions in plain English — get structured answers you can trust.'},
  { icon: 'bolt',    color: 'rose',    title: 'Faster Action',      desc: 'Trigger alerts, share dashboards, and drive decisions — without vendor delays.'},
]

export default function ValueProps() {
  return (
    <section aria-labelledby="valueprops-title">
      <h2 id="valueprops-title" className="h2 mb-6">
        Why teams choose <span className="text-oi-brand">OpenIndustrial</span>
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="card">
            <div className="mb-3"><Icon name={it.icon} color={it.color} /></div>
            <h3 className="text-xl font-semibold">
              {it.title}
            </h3>
            <p className="p mt-2">
              {it.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
