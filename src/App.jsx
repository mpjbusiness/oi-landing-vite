import React from 'react'
import Header from './components/Header.jsx'
import ValueProps from './components/ValueProps.jsx'
import Overview from './components/Overview.jsx'
import InstantInsight from './components/InstantInsight.jsx'
import MeetAzi from './components/MeetAzi.jsx'
import Integration from './components/Integration.jsx'
import RunInYourCloud from './components/RunInYourCloud.jsx'
import BeforeAfter from './components/BeforeAfter.jsx'
import InsightToAction from './components/InsightToAction.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main className="container space-y-24 py-16">
        <ValueProps />
        <Overview />
        <InstantInsight />
        <MeetAzi />
        <Integration />
        <RunInYourCloud />
        <BeforeAfter />
        <InsightToAction />
      </main>
      <Footer />
    </>
  )
}
