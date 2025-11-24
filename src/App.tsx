import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { FeaturesPage } from './pages/FeaturesPage'
import { TechnologyPage } from './pages/TechnologyPage'
import { SecurityPage } from './pages/SecurityPage'
import { CommunityPage } from './pages/CommunityPage'
import { DocumentationPage } from './pages/DocumentationPage'
import { TradingPage } from './pages/TradingPage'
import { SolanaProvider } from './contexts/SolanaContext'

function App() {
  return (
    <SolanaProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/trading" element={<TradingPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/security" element={<SecurityPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/docs" element={<DocumentationPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </SolanaProvider>
  )
}

export default App