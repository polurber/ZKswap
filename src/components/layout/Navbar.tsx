import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Wallet } from 'lucide-react'
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
    { name: 'Beranda', href: '/' },
    { name: 'Trading', href: '/trading' },
    { name: 'Fitur', href: '/features' },
    { name: 'Teknologi', href: '/technology' },
    { name: 'Keamanan', href: '/security' },
    { name: 'Komunitas', href: '/community' },
    { name: 'Dokumentasi', href: '/docs' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-neo-bg border-b-3 border-neo-border py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-neo-primary border-3 border-neo-border shadow-neo-sm rounded-neo flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <span className="text-white font-black text-2xl">Z</span>
            </div>
            <span className="text-3xl font-black text-neo-text tracking-tighter group-hover:text-neo-primary transition-colors">ZKswap</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
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

          {/* Wallet Status & Connect Button */}
          <div className="hidden md:flex items-center space-x-4">
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
                  Putuskan
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setVisible(true)}
                className="btn-primary flex items-center space-x-2"
              >
                <Wallet className="h-5 w-5" />
                <span>Hubungkan Wallet</span>
              </button>
            )}
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
                          <p className="text-sm font-bold text-neo-text">Terhubung: {getBalance()}</p>
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
                      Putuskan Wallet
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
                    <span>Hubungkan Wallet</span>
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