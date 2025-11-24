import React, { useState } from 'react'
import { BookOpen, Code, Zap, ArrowRight, Search, ExternalLink, Copy, CheckCircle } from 'lucide-react'

export function DocumentationPage() {
  const [activeSection, setActiveSection] = useState('getting-started')
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedCode, setCopiedCode] = useState('')

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(text)
    setTimeout(() => setCopiedCode(''), 2000)
  }

  const sections = [
    { id: 'getting-started', title: 'Getting Started', icon: Zap },
    { id: 'api-reference', title: 'API Reference', icon: Code },
    { id: 'sdk-integration', title: 'SDK Integration', icon: BookOpen },
    { id: 'privacy-modes', title: 'Privacy Modes', icon: Search },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: ExternalLink },
  ]

  return (
    <div className="min-h-screen bg-background-base">
      {/* Page Header */}
      <section className="bg-background-base py-16 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-hero font-bold text-neutral-900 mb-4">
              Documentation
            </h1>
            <p className="text-body-large text-neutral-700 max-w-3xl mx-auto mb-8">
              Comprehensive guide untuk mengintegrasikan ZKswap ke dalam aplikasi Anda, 
              memahami privacy modes, dan memulai development.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-neutral-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-neutral-300 rounded-lg leading-5 bg-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar Navigation */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <nav className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        activeSection === section.id
                          ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500'
                          : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                      }`}
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      {section.title}
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Getting Started */}
            {activeSection === 'getting-started' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-title font-bold text-neutral-900 mb-6">Getting Started</h2>
                  <p className="text-body text-neutral-700 mb-8">
                    Panduan lengkap untuk memulai development dengan ZKswap. Dari setup environment 
                    hingga first trade yang privat.
                  </p>
                </div>

                {/* Quick Start */}
                <div className="card p-8">
                  <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Quick Start</h3>
                  <p className="text-body text-neutral-700 mb-6">
                    Mulai trading dengan ZKswap dalam beberapa langkah sederhana:
                  </p>
                  <ol className="space-y-4 text-body text-neutral-700">
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">1</span>
                      <div>
                        <strong>Connect Wallet:</strong> Hubungkan dompet Solana Anda menggunakan adapter WalletConnect atau Phantom
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">2</span>
                      <div>
                        <strong>Select Privacy Level:</strong> Pilih level privasi (Standard, Private, atau Maximum Privacy)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">3</span>
                      <div>
                        <strong>Choose Trading Pair:</strong> Pilih pair aset yang ingin ditradingkan
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5">4</span>
                      <div>
                        <strong>Execute Trade:</strong> Set slippage tolerance dan confirm transaksi
                      </div>
                    </li>
                  </ol>
                </div>

                {/* Code Example */}
                <div className="card p-8">
                  <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Basic Integration</h3>
                  <p className="text-body text-neutral-700 mb-6">
                    Contoh sederhana penggunaan ZKswap SDK untuk integrasi ke aplikasi Anda:
                  </p>
                  <div className="relative">
                    <pre className="bg-neutral-900 text-neutral-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`import { ZKswap } from '@zkswap/sdk'

// Initialize ZKswap
const zkswap = new ZKswap({
  network: 'mainnet',
  privacyLevel: 'standard'
})

// Connect wallet
await zkswap.connectWallet('phantom')

// Get quote
const quote = await zkswap.getQuote({
  fromToken: 'SOL',
  toToken: 'USDC',
  amount: '1.0'
})

// Execute trade
const result = await zkswap.swap({
  fromToken: 'SOL',
  toToken: 'USDC',
  amount: '1.0',
  privacyLevel: 'private',
  slippage: '0.5'
})`}</code>
                    </pre>
                    <button
                      onClick={() => copyToClipboard(`import { ZKswap } from '@zkswap/sdk'

// Initialize ZKswap
const zkswap = new ZKswap({
  network: 'mainnet',
  privacyLevel: 'standard'
})

// Connect wallet
await zkswap.connectWallet('phantom')

// Get quote
const quote = await zkswap.getQuote({
  fromToken: 'SOL',
  toToken: 'USDC',
  amount: '1.0'
})

// Execute trade
const result = await zkswap.swap({
  fromToken: 'SOL',
  toToken: 'USDC',
  amount: '1.0',
  privacyLevel: 'private',
  slippage: '0.5'
})`)}
                      className="absolute top-4 right-4 p-2 bg-neutral-800 hover:bg-neutral-700 rounded text-neutral-400 hover:text-white transition-colors"
                    >
                      {copiedCode.includes('import') ? <CheckCircle size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>

                {/* Prerequisites */}
                <div className="card p-8">
                  <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Prerequisites</h3>
                  <ul className="space-y-2 text-body text-neutral-700">
                    <li>• Node.js 18+ dan npm/yarn/pnpm</li>
                    <li>• Solana wallet (Phantom, Solflare, dll)</li>
                    <li>• Basic understanding of Solana programming</li>
                    <li>• Familiarity dengan TypeScript/JavaScript</li>
                  </ul>
                </div>
              </div>
            )}

            {/* API Reference */}
            {activeSection === 'api-reference' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-title font-bold text-neutral-900 mb-6">API Reference</h2>
                  <p className="text-body text-neutral-700 mb-8">
                    Dokumentasi lengkap API ZKswap untuk semua endpoint dan parameter yang tersedia.
                  </p>
                </div>

                {/* API Overview */}
                <div className="card p-8">
                  <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Base URL & Authentication</h3>
                  <div className="bg-neutral-900 text-neutral-100 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">GET</span>
                      <code>https://api.zkswap.com/v1/</code>
                    </div>
                    <p className="text-sm text-neutral-400">
                      Semua requests memerlukan API key di header Authorization
                    </p>
                  </div>
                </div>

                {/* Endpoints */}
                <div className="space-y-6">
                  <div className="card p-8">
                    <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Get Quote</h3>
                    <div className="bg-neutral-900 text-neutral-100 p-4 rounded-lg mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">GET</span>
                        <code>/quotes</code>
                      </div>
                    </div>
                    <p className="text-body text-neutral-700 mb-4">
                      Mendapatkan estimasi harga dan fee untuk trade tertentu
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-neutral-900">Parameters:</h4>
                      <ul className="text-body text-neutral-600 space-y-1">
                        <li>• <code>fromToken</code> (string): Token address atau symbol</li>
                        <li>• <code>toToken</code> (string): Token address atau symbol</li>
                        <li>• <code>amount</code> (string): Amount dalam smallest unit</li>
                        <li>• <code>privacyLevel</code> (string): standard | private | maximum</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card p-8">
                    <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Execute Swap</h3>
                    <div className="bg-neutral-900 text-neutral-100 p-4 rounded-lg mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs">POST</span>
                        <code>/swaps</code>
                      </div>
                    </div>
                    <p className="text-body text-neutral-700 mb-4">
                      Melakukan trade dengan privasi yang dipilih
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-neutral-900">Request Body:</h4>
                      <pre className="bg-neutral-900 text-neutral-100 p-4 rounded-lg text-sm">
                        {`{
  "fromToken": "SOL",
  "toToken": "USDC",
  "amount": "1000000000",
  "privacyLevel": "private",
  "slippage": "0.5",
  "userAddress": "YourWalletAddress"
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SDK Integration */}
            {activeSection === 'sdk-integration' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-title font-bold text-neutral-900 mb-6">SDK Integration</h2>
                  <p className="text-body text-neutral-700 mb-8">
                    Panduan detail untuk mengintegrasikan ZKswap SDK ke dalam aplikasi Anda.
                  </p>
                </div>

                {/* Installation */}
                <div className="card p-8">
                  <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Installation</h3>
                  <div className="bg-neutral-900 text-neutral-100 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-green-400">$</span>
                      <code>npm install @zkswap/sdk</code>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400">$</span>
                      <code>yarn add @zkswap/sdk</code>
                    </div>
                  </div>
                </div>

                {/* Configuration */}
                <div className="card p-8">
                  <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Configuration</h3>
                  <div className="bg-neutral-900 text-neutral-100 p-4 rounded-lg">
                    <pre className="text-sm">
                      {`import { ZKswap } from '@zkswap/sdk'

const zkswap = new ZKswap({
  apiKey: 'your-api-key',
  network: 'mainnet', // mainnet | devnet | testnet
  environment: 'production', // production | development
  defaultPrivacyLevel: 'standard',
  slippageTolerance: '0.5',
  timeout: 30000
})`}
                    </pre>
                  </div>
                </div>

                {/* Usage Examples */}
                <div className="card p-8">
                  <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Usage Examples</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Basic Swap</h4>
                      <pre className="bg-neutral-900 text-neutral-100 p-4 rounded-lg text-sm">
                        {`const result = await zkswap.swap({
  fromToken: 'SOL',
  toToken: 'USDC',
  amount: '1.0',
  privacyLevel: 'private',
  slippage: '0.5'
})`}
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Cross-Chain Swap</h4>
                      <pre className="bg-neutral-900 text-neutral-100 p-4 rounded-lg text-sm">
                        {`const result = await zkswap.crossChainSwap({
  fromChain: 'solana',
  toChain: 'ethereum',
  fromToken: 'SOL',
  toToken: 'ETH',
  amount: '1.0',
  privacyLevel: 'maximum'
})`}
                      </pre>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-2">Batch Operations</h4>
                      <pre className="bg-neutral-900 text-neutral-100 p-4 rounded-lg text-sm">
                        {`const batch = await zkswap.batchSwaps([
  { fromToken: 'SOL', toToken: 'USDC', amount: '0.5', privacyLevel: 'private' },
  { fromToken: 'USDC', toToken: 'BTC', amount: '100', privacyLevel: 'standard' }
])`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Privacy Modes */}
            {activeSection === 'privacy-modes' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-title font-bold text-neutral-900 mb-6">Privacy Modes</h2>
                  <p className="text-body text-neutral-700 mb-8">
                    Memahami berbagai level privacy yang tersedia di ZKswap dan kapan masing-masing digunakan.
                  </p>
                </div>

                {/* Privacy Levels */}
                <div className="space-y-6">
                  <div className="card p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-neutral-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-bold text-neutral-600">1</span>
                      </div>
                      <h3 className="text-subtitle font-semibold text-neutral-900">Standard Privacy</h3>
                      <span className="ml-auto px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-sm">Recommended</span>
                    </div>
                    <p className="text-body text-neutral-700 mb-4">
                      Privasi dasar dengan one-time addresses dan route obfuscation. Cocok untuk penggunaan sehari-hari.
                    </p>
                    <ul className="text-body text-neutral-600 space-y-2">
                      <li>• One-time addresses untuk setiap transaksi</li>
                      <li>• Route obfuscation untuk memutus linkability</li>
                      <li>• Metadata protection (timestamps, amounts hidden)</li>
                      <li>• Execution time: 0-3 menit</li>
                      <li>• Fee: 0.1% protocol + network fees</li>
                    </ul>
                  </div>

                  <div className="card p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-bold text-primary-600">2</span>
                      </div>
                      <h3 className="text-subtitle font-semibold text-neutral-900">Private Mode</h3>
                      <span className="ml-auto px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">Balanced</span>
                    </div>
                    <p className="text-body text-neutral-700 mb-4">
                      Privasi ditingkatkan dengan two-hop routing dan random bridge tokens. Cocok untuk volume sedang.
                    </p>
                    <ul className="text-body text-neutral-600 space-y-2">
                      <li>• Two-hop routing untuk memutus korelasi</li>
                      <li>• Random bridge tokens untuk obfuscation tambahan</li>
                      <li>• Advanced privacy algorithms</li>
                      <li>• Execution time: 5-15 menit</li>
                      <li>• Fee: 0.25% protocol + network fees</li>
                    </ul>
                  </div>

                  <div className="card p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-primary-900 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-bold text-white">3</span>
                      </div>
                      <h3 className="text-subtitle font-semibold text-neutral-900">Maximum Privacy</h3>
                      <span className="ml-auto px-3 py-1 bg-primary-900 text-white rounded-full text-sm">Maximum</span>
                    </div>
                    <p className="text-body text-neutral-700 mb-4">
                      Privasi maksimal dengan ring signatures dan Monero integration. Untuk use case sensitive.
                    </p>
                    <ul className="text-body text-neutral-600 space-y-2">
                      <li>• Ring signatures untuk anonymity set protection</li>
                      <li>• Monero integration untuk maximum privacy</li>
                      <li>• Advanced cryptographic protocols</li>
                      <li>• Execution time: 10-40 menit</li>
                      <li>• Fee: 0.5% protocol + network fees</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Troubleshooting */}
            {activeSection === 'troubleshooting' && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-title font-bold text-neutral-900 mb-6">Troubleshooting</h2>
                  <p className="text-body text-neutral-700 mb-8">
                    Solusi untuk masalah umum yang mungkin Anda hadapi saat menggunakan ZKswap.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="card p-8">
                    <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Common Issues</h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-2">Transaction Failed</h4>
                        <p className="text-body text-neutral-700 mb-2">
                          Transaksi gagal dengan error "insufficient funds" atau "slippage exceeded"
                        </p>
                        <ul className="text-body text-neutral-600 space-y-1">
                          <li>• Periksa saldo token cukup untuk trade + fees</li>
                          <li>• Increase slippage tolerance jika market volatile</li>
                          <li>• Coba dengan privacy level yang berbeda</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-2">Wallet Connection Issues</h4>
                        <p className="text-body text-neutral-700 mb-2">
                          Tidak bisa connect wallet atau wallet tidak terdeteksi
                        </p>
                        <ul className="text-body text-neutral-600 space-y-1">
                          <li>• Pastikan wallet extension terinstall dan aktif</li>
                          <li>• Refresh halaman dan coba connect lagi</li>
                          <li>• Periksa network selected sesuai dengan blockchain</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-2">Slow Transaction Time</h4>
                        <p className="text-body text-neutral-700 mb-2">
                          Transaksi memakan waktu lebih lama dari yang diharapkan
                        </p>
                        <ul className="text-body text-neutral-600 space-y-1">
                          <li>• Private mode memang lebih lambat karena privacy processing</li>
                          <li>• Check network congestion di Solana status page</li>
                          <li>• Consider menggunakan Standard privacy untuk speed</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card p-8">
                    <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Error Codes</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                        <code className="text-sm bg-neutral-100 px-2 py-1 rounded">INSUFFICIENT_BALANCE</code>
                        <span className="text-body text-neutral-600">Saldo tidak cukup untuk transaksi</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                        <code className="text-sm bg-neutral-100 px-2 py-1 rounded">SLIPPAGE_EXCEEDED</code>
                        <span className="text-body text-neutral-600">Slippage tolerance terlalu rendah</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                        <code className="text-sm bg-neutral-100 px-2 py-1 rounded">PRIVACY_LEVEL_INVALID</code>
                        <span className="text-body text-neutral-600">Privacy level tidak valid</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <code className="text-sm bg-neutral-100 px-2 py-1 rounded">NETWORK_CONGESTED</code>
                        <span className="text-body text-neutral-600">Network sedang congestion</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden border-t border-neutral-200 bg-background-surface">
        <div className="px-4 py-3">
          <select
            value={activeSection}
            onChange={(e) => setActiveSection(e.target.value)}
            className="block w-full rounded-md border-neutral-300 py-2 pl-3 pr-10 text-sm focus:border-primary-500 focus:ring-primary-500"
          >
            {sections.map((section) => (
              <option key={section.id} value={section.id}>
                {section.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}