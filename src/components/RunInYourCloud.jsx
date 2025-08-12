import React from 'react'
import Icon from './Icon.jsx'

const items = [
  {t: 'Your cloud, your data, your access policies', icon: 'cloud',  color: 'cyan'},
  {t: 'Full observability and auditability',         icon: 'eye',    color: 'fuchsia'},
  {t: 'Secure APIs with scoped, token-based access', icon: 'shield', color: 'rose'},
  {t: 'Automated setup, IT-friendly by design',      icon: 'bolt',   color: 'cyan'},
]

export default function RunInYourCloud() {
  return (
    <section>
      <h2 className="h2 mb-2">
        Run in <span className="text-oi-rose">your cloud</span> — stay in <span className="text-oi-cyan">control</span>
      </h2>
      <ul className="grid gap-3 md:grid-cols-2">
        {items.map((i) => (
          <li key={i.t} className="card flex items-start gap-3">
            <Icon name={i.icon} color={i.color} />
            <span className="p">{i.t}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
