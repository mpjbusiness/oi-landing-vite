import React from 'react'

export default function Integration() {
  return (
    <section>
      <h2 className="h2 mb-2">Seamless Integration — Built for the Stack You Already Run</h2>
      <p className="p">Plug into systems and protocols already powering operations — no brittle scripts, no lock‑in. Connect, observe, orchestrate.</p>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="card">
          <h3 className="font-semibold">Protocols</h3>
          <p className="p">OPC UA, MQTT, REST, SQL</p>
          <h3 className="font-semibold mt-4">Middleware</h3>
          <p className="p">HighByte, HiveMQ, Ignition</p>
        </div>
        <div className="card">
          <h3 className="font-semibold">Systems</h3>
          <p className="p">DCS, MES, SCADA, LIMS (e.g., DeltaV, Syncade)</p>
          <h3 className="font-semibold mt-4">Apps</h3>
          <p className="p">Mobius suite (ProofCheck™, AlertTrack+, QuickView+)</p>
        </div>
      </div>
    </section>
  )
}
