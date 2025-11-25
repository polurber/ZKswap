import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Wallet, Github } from 'lucide-react'

const XLogo = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
import { useWalletData } from '../../hooks/useWallet'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { mockWallet } from '../../services/mockWallet'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mockWalletConnected, setMockWalletConnected] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { connected, getBalance, getWalletAddress, disconnectWallet } = useWalletData()
  
  // Listen for mock wallet connection events to update UI
  useEffect(() => {
    const handleMockWalletConnected = (event: any) => {
      console.log('🎯 Navbar received mock wallet connection event:', event.detail)
      setMockWalletConnected(true)
      // Force UI re-render
      window.dispatchEvent(new CustomEvent('forceUIUpdate'))
    }

    const handleMockWalletDisconnected = () => {
      console.log('🎯 Navbar received mock wallet disconnect event')
      setMockWalletConnected(false)
      // Force UI re-render
      window.dispatchEvent(new CustomEvent('forceUIUpdate'))
    }

    const handleForceUpdate = () => {
      console.log('🎯 Navbar received force UI update event')
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
  const { setVisible } = useWalletModal()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Trading', href: '/trading' },
    { name: 'Features', href: '/features' },
    { name: 'Technology', href: '/technology' },
    { name: 'Security', href: '/security' },
    { name: 'Community', href: '/community' },
    { name: 'Documentation', href: '/docs' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-neo-bg border-b-3 border-neo-border py-2">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Paling Kiri */}
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="w-16 h-16 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <img src="/logo.png" alt="ZKswap Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-3xl font-black text-neo-text tracking-tighter group-hover:text-neo-primary transition-colors">ZKswap</span>
          </Link>

          {/* Desktop Navigation - Tengah */}
          <div className="hidden md:flex items-center space-x-1 flex-1 justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-bold px-4 py-2 rounded-neo border-2 border-transparent transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-neo-accent text-neo-text border-neo-border shadow-neo-sm -translate-y-1'
                    : 'text-neo-text hover:bg-white hover:border-neo-border hover:shadow-neo-sm hover:-translate-y-1'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Section: Wallet & Social Icons - Paling Kanan */}
          <div className="hidden md:flex items-center space-x-6 flex-shrink-0">
            {/* Wallet Status & Connect Button */}
            <div className="flex items-center space-x-4">
              {isWalletConnected ? (
                <div className="flex items-center space-x-3">
                  <div className="bg-neo-success border-3 border-neo-border rounded-neo px-4 py-2 shadow-neo-sm">
                    <div className="flex items-center space-x-2">
                      <Wallet className="h-5 w-5 text-neo-text" />
                      <div>
                        <p className="text-xs font-bold text-neo-text">{getBalance()}</p>
                        <p className="text-xs font-mono text-neo-text">
                          {getWalletAddress()?.slice(0, 6)}...{getWalletAddress()?.slice(-4)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={disconnectWallet}
                    className="text-sm font-bold text-neo-text hover:underline decoration-2"
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setVisible(true)}
                  className="btn-primary flex items-center space-x-2"
                >
                  <Wallet className="h-5 w-5" />
                  <span>Connect Wallet</span>
                </button>
              )}
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 border-l-3 border-neo-border pl-6">
              <a href="#" className="text-neo-text hover:text-neo-primary transition-transform hover:-translate-y-1">
                <span className="sr-only">X (Twitter)</span>
                <XLogo size={20} />
              </a>
              <a href="#" className="text-neo-text hover:text-neo-primary transition-transform hover:-translate-y-1">
                <span className="sr-only">GitHub</span>
                <Github size={20} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-neo border-3 border-neo-border bg-white text-neo-text hover:bg-neo-accent shadow-neo-sm"
            >
              {isOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-3 border-neo-border bg-neo-bg">
            <div className="space-y-2 px-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-neo font-bold border-3 transition-all ${
                    isActive(item.href)
                      ? 'bg-neo-accent text-neo-text border-neo-border shadow-neo'
                      : 'bg-white text-neo-text border-transparent hover:border-neo-border hover:shadow-neo'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Wallet Status */}
              <div className="border-t-3 border-neo-border pt-4 mt-4">
                {isWalletConnected ? (
                  <div className="space-y-3">
                    <div className="bg-neo-success border-3 border-neo-border rounded-neo p-4 shadow-neo">
                      <div className="flex items-center space-x-2">
                        <Wallet className="h-5 w-5 text-neo-text" />
                        <div>
                          <p className="text-sm font-bold text-neo-text">Connected: {getBalance()}</p>
                          <p className="text-xs font-mono text-neo-text">
                            {getWalletAddress()?.slice(0, 6)}...{getWalletAddress()?.slice(-4)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={disconnectWallet}
                      className="w-full btn-secondary text-center"
                    >
                      Disconnect Wallet
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={() => {
                      setVisible(true)
                      setIsOpen(false)
                    }}
                    className="w-full btn-primary flex items-center justify-center space-x-2"
                  >
                    <Wallet className="h-5 w-5" />
                    <span>Connect Wallet</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}