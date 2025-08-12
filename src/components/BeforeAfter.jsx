import React from 'react'

export default function BeforeAfter() {
  return (
    <section className="text-center">
      <h2 className="h2 mb-2">Slow and Siloed → Instant and Integrated</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Before Section */}
        <div className="card flex flex-col items-center">
          <h3 className="font-semibold mb-2 text-oi-rose">Before OpenIndustrial</h3>
          <ul className="list-disc pl-5 space-y-1 text-left md:text-left">
            {[
              'Data trapped in OPC servers, flat files, or vendor tools',
              'Simple questions required scripting or support tickets',
              'Reports arrived too late to act on',
              'Integration projects stalled or never launched',
              'No unified view, no governed access, no APIs'
            ].map((item, i) => (
              <li key={i} className="marker:text-oi-rose text-white">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* After Section */}
        <div className="card flex flex-col items-center">
          <h3 className="font-semibold mb-2 text-oi-fuchsia">After OpenIndustrial</h3>
          <ul className="list-disc pl-5 space-y-1 text-left md:text-left">
            {[
              'Live telemetry structured and queryable instantly',
              'Ask in plain English — get accurate answers fast',
              'Streamline insight to dashboards, alerts, and apps',
              'Connect systems without glue code or vendor delays',
              'Built-in governance, tokens, auditability — in your cloud'
            ].map((item, i) => (
              <li key={i} className="marker:text-oi-fuchsia text-white">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
