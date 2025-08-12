import React from 'react'
import Icon from './Icon.jsx'

const bullets = [
  {icon: 'link',   color: 'cyan',    title: 'Connect', text: 'Telemetry from OPC UA, MQTT, SQL, or CSV.'},
  {icon: 'chart',  color: 'fuchsia', title: 'Structure', text: 'Explore data — no modeling required.'},
  {icon: 'sparkles', color: 'rose',  title: 'Ask', text: 'Natural-language questions — translated into governed KQL.'},
  {icon: 'cloud',  color: 'cyan',    title: 'Share', text: 'Dashboards, triggers, alerts, secure APIs.'},
  {icon: 'clock',  color: 'fuchsia', title: 'Deploy', text: 'In your Azure tenant — auditable and under your control.'},
]

export default function InstantInsight() {
  return (
    <section>
      <h2 className="h2 mb-4">
        Get <span className="text-oi-cyan">instant insight</span> from live industrial data — no pipelines, no scripting
      </h2>
      <ul className="grid gap-3 md:grid-cols-2">
        {bullets.map((b, i) => (
          <li key={b.title}
              className={`card flex flex-col items-center text-center gap-3 
                ${i === bullets.length - 1 ? 'md:col-span-2 md:justify-self-center md:w-1/2' : ''}`}
            >
            <Icon name={b.icon} color={b.color} />
            <div>
              <p className="font-semibold">{b.title}</p>
              <p className="p">{b.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
