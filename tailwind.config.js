/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        'oi-cyan': 'rgb(34 211 238)',
        'oi-rose': 'rgb(248 113 113)',
        'oi-fuchsia': 'rgb(217 70 239)',
        'oi-text': 'rgb(212 212 212)',
        'oi-brand': '#6666ff',
        'oi-bg': '#0a0a0a'
      },
      boxShadow: {
        'glow': '0 0 0 3px rgba(102,102,255,.25)'
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)'
      },
      backgroundSize: {
        'grid': '24px 24px'
      }
    },
  },
  plugins: [],
}