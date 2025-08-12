import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="container py-10 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© 2025 Fathym, Inc. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="link" href="https://www.fathym.com/privacy-policy/">Privacy</a>
          <a className="link" href="https://www.fathym.com/terms-of-services/">Terms</a>
          <a className="link" href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
