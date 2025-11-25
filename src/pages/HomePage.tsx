import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Shield, Zap, Users, Globe, Lock, TrendingUp, Wallet } from 'lucide-react'
import { useWalletData } from '../hooks/useWallet'

export function HomePage() {
  const navigate = useNavigate()
  const { connected, getBalance, getWalletAddress, connectWallet } = useWalletData()
  const [mockWalletConnected, setMockWalletConnected] = useState(false)

  // Listen for mock wallet connection events to update UI
  useEffect(() => {
    const handleMockWalletConnected = (event: any) => {
      console.log('🎯 HomePage received mock wallet connection event:', event.detail)
      setMockWalletConnected(true)
      // Force UI re-render
      window.dispatchEvent(new CustomEvent('forceUIUpdate'))
    }

    const handleMockWalletDisconnected = () => {
      console.log('🎯 HomePage received mock wallet disconnect event')
      setMockWalletConnected(false)
      // Force UI re-render
      window.dispatchEvent(new CustomEvent('forceUIUpdate'))
    }

    const handleForceUpdate = () => {
      console.log('🎯 HomePage received force UI update event')
      // This will trigger a re-render to ensure UI state is current
      setMockWalletConnected(prev => prev)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mockWalletConnected', handleMockWalletConnected)
      window.addEventListener('mockWalletDisconnected', handleMockWalletDisconnected)
      window.addEventListener('forceUIUpdate', handleForceUpdate)
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mockWalletConnected', handleMockWalletConnected)
        window.removeEventListener('mockWalletDisconnected', handleMockWalletDisconnected)
        window.removeEventListener('forceUIUpdate', handleForceUpdate)
      }
    }
  }, [])

  // Check if wallet is connected (either real or mock)
  const isWalletConnected = connected || mockWalletConnected

  const handleStartTrading = () => {
    navigate('/trading')
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-neo-accent rounded-full border-3 border-neo-border -z-10 opacity-50 animate-bounce-slow"></div>
        <div className="absolute bottom-40 right-10 w-48 h-48 bg-neo-secondary rounded-full border-3 border-neo-border -z-10 opacity-50 animate-pulse-fast"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-neo-text mb-8 tracking-tighter uppercase leading-tight">
              Private Trading, 
              <br />
              <span className="bg-neo-primary text-white px-4 py-1 border-3 border-neo-border shadow-neo rotate-1 inline-block mt-2">Uncompromised</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-neo-text mb-10 max-w-3xl mx-auto leading-relaxed border-3 border-neo-border bg-white p-6 rounded-neo shadow-neo relative z-10">
              ZKswap is a privacy-first DEX aggregator that combines zero-knowledge proofs 
              with liquidity aggregation to provide the best prices, low fees, and maximum privacy.
            </p>
            
            {/* Wallet Status */}
            {isWalletConnected ? (
              <div className="bg-neo-success border-3 border-neo-border rounded-neo p-4 mb-8 inline-block shadow-neo animate-slide-up">
                <div className="flex items-center space-x-3">
                  <Wallet className="h-6 w-6 text-neo-text" strokeWidth={2.5} />
                  <div className="text-left">
                    <p className="text-base font-black text-neo-text uppercase">Wallet Connected</p>
                    <p className="text-sm font-bold text-neo-text">Balance: {getBalance()}</p>
                    <p className="text-sm font-mono text-neo-text bg-white px-2 border-2 border-neo-border rounded-sm mt-1">
                      {getWalletAddress()?.slice(0, 8)}...{getWalletAddress()?.slice(-8)}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-neo-warning border-3 border-neo-border rounded-neo p-4 mb-8 inline-block shadow-neo animate-slide-up">
                <div className="flex items-center space-x-3">
                  <Wallet className="h-6 w-6 text-neo-text" strokeWidth={2.5} />
                  <div className="text-left">
                    <p className="text-base font-black text-neo-text uppercase">Connect Your Wallet</p>
                    <p className="text-sm font-bold text-neo-text">You need to connect your wallet to start trading</p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-20">
              <button 
                onClick={handleStartTrading}
                className="btn-primary text-xl px-10 py-5"
              >
                Start Trading
                <ArrowRight className="ml-2" size={24} strokeWidth={3} />
              </button>
              <Link to="/technology" className="btn-secondary text-xl px-10 py-5">
                How ZK Works
              </Link>
            </div>
            
            {!isWalletConnected && (
              <div className="mt-8">
                <button 
                  onClick={connectWallet}
                  className="inline-flex items-center px-8 py-3 border-3 border-neo-border bg-white text-neo-text font-bold rounded-neo shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all hover:bg-neo-accent"
                >
                  <Wallet className="h-5 w-5 mr-2" strokeWidth={2.5} />
                  Connect Wallet
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white border-y-3 border-neo-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-neo-bg border-3 border-neo-border rounded-neo shadow-neo hover:shadow-neo-lg transition-transform hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-neo-primary mb-2">$2.5M+</div>
              <div className="text-lg font-bold text-neo-text uppercase tracking-wide">Total Volume</div>
            </div>
            <div className="text-center p-6 bg-neo-accent border-3 border-neo-border rounded-neo shadow-neo hover:shadow-neo-lg transition-transform hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-neo-text mb-2">15,000+</div>
              <div className="text-lg font-bold text-neo-text uppercase tracking-wide">Active Users</div>
            </div>
            <div className="text-center p-6 bg-neo-secondary border-3 border-neo-border rounded-neo shadow-neo hover:shadow-neo-lg transition-transform hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">99.9%</div>
              <div className="text-lg font-bold text-neo-text uppercase tracking-wide">Uptime</div>
            </div>
            <div className="text-center p-6 bg-neo-success border-3 border-neo-border rounded-neo shadow-neo hover:shadow-neo-lg transition-transform hover:-translate-y-1">
              <div className="text-4xl md:text-5xl font-black text-neo-text mb-2">3</div>
              <div className="text-lg font-bold text-neo-text uppercase tracking-wide">Networks</div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-24 bg-neo-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-neo-text mb-6 uppercase tracking-tight">
              Start Trading in <span className="text-neo-primary underline decoration-wavy decoration-3">3 Steps</span>
            </h2>
            <p className="text-2xl font-bold text-neo-text max-w-2xl mx-auto">
              Simple and secure private trading experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-white group hover:bg-neo-primary hover:text-white transition-colors">
              <div className="w-20 h-20 bg-neo-accent border-3 border-neo-border rounded-full flex items-center justify-center mx-auto mb-6 shadow-neo group-hover:shadow-neo-hover group-hover:bg-white transition-all">
                <span className="text-4xl font-black text-neo-text">1</span>
              </div>
              <h3 className="text-2xl font-black text-neo-text mb-4 group-hover:text-white">Connect Wallet</h3>
              <p className="text-lg font-medium text-neo-text group-hover:text-white">
                Securely connect your Solana wallet and start private trading
              </p>
            </div>
            <div className="card bg-white group hover:bg-neo-secondary hover:text-white transition-colors">
              <div className="w-20 h-20 bg-neo-primary border-3 border-neo-border rounded-full flex items-center justify-center mx-auto mb-6 shadow-neo group-hover:shadow-neo-hover group-hover:bg-white transition-all">
                <span className="text-4xl font-black text-white group-hover:text-neo-text">2</span>
              </div>
              <h3 className="text-2xl font-black text-neo-text mb-4 group-hover:text-white">Choose Privacy Level</h3>
              <p className="text-lg font-medium text-neo-text group-hover:text-white">
                Choose privacy level according to your needs: Standard, Private, or Maximum Privacy
              </p>
            </div>
            <div className="card bg-white group hover:bg-neo-accent hover:text-neo-text transition-colors">
              <div className="w-20 h-20 bg-neo-success border-3 border-neo-border rounded-full flex items-center justify-center mx-auto mb-6 shadow-neo group-hover:shadow-neo-hover group-hover:bg-white transition-all">
                <span className="text-4xl font-black text-neo-text">3</span>
              </div>
              <h3 className="text-2xl font-black text-neo-text mb-4">Start Trading</h3>
              <p className="text-lg font-medium text-neo-text">
                Trading with the best prices and guaranteed privacy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-24 bg-white border-y-3 border-neo-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-neo-text mb-6 uppercase tracking-tight">
              Main Features <span className="bg-neo-accent px-2">ZKswap</span>
            </h2>
            <p className="text-2xl font-bold text-neo-text">
              The best combination of privacy, performance, and ease of use
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card hover:bg-neo-bg">
              <div className="w-16 h-16 bg-neo-primary border-3 border-neo-border rounded-neo flex items-center justify-center mb-6 shadow-neo-sm">
                <Shield className="text-white" size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-black text-neo-text mb-4 uppercase">ZK Privacy</h3>
              <p className="text-base font-bold text-neo-text">
                Protect identity and transactions with proven zero-knowledge proofs
              </p>
            </div>
            <div className="card hover:bg-neo-bg">
              <div className="w-16 h-16 bg-neo-success border-3 border-neo-border rounded-neo flex items-center justify-center mb-6 shadow-neo-sm">
                <TrendingUp className="text-neo-text" size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-black text-neo-text mb-4 uppercase">Best Execution</h3>
              <p className="text-base font-bold text-neo-text">
                Get the best prices through cross-DEX liquidity aggregation
              </p>
            </div>
            <div className="card hover:bg-neo-bg">
              <div className="w-16 h-16 bg-neo-warning border-3 border-neo-border rounded-neo flex items-center justify-center mb-6 shadow-neo-sm">
                <Zap className="text-neo-text" size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-black text-neo-text mb-4 uppercase">Low Fees</h3>
              <p className="text-base font-bold text-neo-text">
                Low trading fees with Solana blockchain efficiency
              </p>
            </div>
            <div className="card hover:bg-neo-bg">
              <div className="w-16 h-16 bg-neo-secondary border-3 border-neo-border rounded-neo flex items-center justify-center mb-6 shadow-neo-sm">
                <Globe className="text-white" size={32} strokeWidth={2.5} />
              </div>
              <h3 className="text-xl font-black text-neo-text mb-4 uppercase">Fast UX</h3>
              <p className="text-base font-bold text-neo-text">
                Fast and intuitive user experience for all trader levels
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works (ZK Simplified) */}
      <section className="py-24 bg-neo-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black text-neo-text mb-8 uppercase tracking-tight">
                How It Works: <br/>Zero-Knowledge
              </h2>
              <p className="text-xl font-bold text-neo-text mb-8 leading-relaxed border-l-4 border-neo-primary pl-6">
                ZKswap uses zero-knowledge proofs to minimize on-chain data 
                exposure while ensuring transaction validity.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-6 bg-white p-4 rounded-neo border-3 border-neo-border shadow-neo">
                  <div className="w-12 h-12 bg-neo-primary border-3 border-neo-border rounded-neo flex items-center justify-center flex-shrink-0 shadow-neo-sm transform -rotate-3">
                    <span className="text-xl font-black text-white">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-neo-text mb-1 uppercase">Transaction Input</h3>
                    <p className="text-base font-bold text-neo-text">
                      Transaction details are processed privately without exposure to blockchain
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 bg-white p-4 rounded-neo border-3 border-neo-border shadow-neo ml-4">
                  <div className="w-12 h-12 bg-neo-secondary border-3 border-neo-border rounded-neo flex items-center justify-center flex-shrink-0 shadow-neo-sm transform rotate-3">
                    <span className="text-xl font-black text-white">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-neo-text mb-1 uppercase">ZK Proof Generation</h3>
                    <p className="text-base font-bold text-neo-text">
                      The system generates cryptographic proof that proves transaction validity
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-6 bg-white p-4 rounded-neo border-3 border-neo-border shadow-neo ml-8">
                  <div className="w-12 h-12 bg-neo-accent border-3 border-neo-border rounded-neo flex items-center justify-center flex-shrink-0 shadow-neo-sm transform -rotate-2">
                    <span className="text-xl font-black text-neo-text">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-neo-text mb-1 uppercase">On-Chain Verification</h3>
                    <p className="text-base font-bold text-neo-text">
                      Proofs are verified on-chain without revealing transaction details
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card bg-neo-primary p-8 transform rotate-1 hover:rotate-0 transition-transform">
              <div className="bg-white border-3 border-neo-border rounded-neo p-8 shadow-neo">
                <div className="text-center">
                  <div className="w-24 h-24 bg-neo-bg border-3 border-neo-border rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lock className="w-12 h-12 text-neo-text" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl font-black text-neo-text mb-4 uppercase">
                    Uncompromised Privacy
                  </h3>
                  <p className="text-lg font-bold text-neo-text">
                    ZKswap enables trading with maximum privacy without compromising 
                    blockchain transparency and security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-24 bg-white border-y-3 border-neo-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-neo-text mb-6 uppercase">
              Trusted Performance
            </h2>
            <p className="text-2xl font-bold text-neo-text">
              Performance metrics showing the superiority of ZKswap
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 border-3 border-neo-border bg-neo-bg rounded-neo shadow-neo hover:shadow-neo-lg transition-all">
              <div className="text-5xl font-black text-neo-success mb-2">0.05%</div>
              <div className="text-lg font-bold text-neo-text uppercase">Average Slippage</div>
            </div>
            <div className="text-center p-8 border-3 border-neo-border bg-neo-bg rounded-neo shadow-neo hover:shadow-neo-lg transition-all">
              <div className="text-5xl font-black text-neo-primary mb-2">0.3s</div>
              <div className="text-lg font-bold text-neo-text uppercase">Transaction Confirmation</div>
            </div>
            <div className="text-center p-8 border-3 border-neo-border bg-neo-bg rounded-neo shadow-neo hover:shadow-neo-lg transition-all">
              <div className="text-5xl font-black text-neo-secondary mb-2">95%</div>
              <div className="text-lg font-bold text-neo-text uppercase">Best Price Achievement</div>
            </div>
            <div className="text-center p-8 border-3 border-neo-border bg-neo-bg rounded-neo shadow-neo hover:shadow-neo-lg transition-all">
              <div className="text-5xl font-black text-neo-accent mb-2">15+</div>
              <div className="text-lg font-bold text-neo-text uppercase">Integrated DEXs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-24 bg-neo-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-black text-neo-text mb-8 uppercase tracking-tight">
              Join the <span className="bg-neo-secondary text-white px-3 shadow-neo-sm transform -rotate-2 inline-block">Community</span> of ZKswap
            </h2>
            <p className="text-2xl font-bold text-neo-text mb-12 leading-relaxed">
              Be part of the privacy DeFi revolution and get access to exclusive features, 
              rewards, and ambassador programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/community" className="btn-primary text-xl px-12 py-4">
                Join Community
              </Link>
              <Link to="/docs" className="btn-secondary text-xl px-12 py-4">
                Read Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neo-primary border-t-3 border-neo-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border-3 border-neo-border p-12 rounded-neo shadow-neo-xl max-w-4xl mx-auto transform hover:-translate-y-2 transition-transform">
            <h2 className="text-5xl font-black text-neo-text mb-8 uppercase">
              Ready for Private Trading?
            </h2>
            <p className="text-2xl font-bold text-neo-text mb-10 max-w-2xl mx-auto">
              Start a revolutionary trading experience with maximum privacy and cutting-edge performance.
            </p>
            <button 
              onClick={handleStartTrading}
              className="bg-neo-text text-white font-black text-xl px-12 py-5 rounded-neo shadow-neo hover:bg-neo-accent hover:text-neo-text border-3 border-transparent hover:border-neo-border transition-all duration-200 hover:shadow-neo-lg"
            >
              Start Trading Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}