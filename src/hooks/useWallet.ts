import { useWallet, useConnection } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import type { WalletAdapter } from '@solana/wallet-adapter-base'
import { useCallback, useState, useEffect } from 'react'
import { PublicKey, LAMPORTS_PER_SOL, Transaction } from '@solana/web3.js'
import { mockWallet } from '../services/mockWallet'

export function useWalletData() {
  const { wallet, connect, connected, disconnect, publicKey, connecting, disconnecting } = useWallet()
  const { connection } = useConnection()
  const { setVisible } = useWalletModal()
  const [balance, setBalance] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [isManualDisconnect, setIsManualDisconnect] = useState(false)

  // Enhanced wallet connection status logging
  useEffect(() => {
    console.log('🔄 Wallet status update:');
    console.log('  - Connected:', connected);
    console.log('  - Connecting:', connecting);
    console.log('  - Disconnecting:', disconnecting);
    console.log('  - Public key:', publicKey?.toString() || 'None');
    console.log('  - Wallet:', wallet?.adapter?.name || 'None');
  }, [connected, connecting, disconnecting, publicKey, wallet]);

  // Auto-connect mock wallet in testing environment
  useEffect(() => {
    const connectMockWallet = async () => {
      // Check if no real wallet is available and mock wallet not already connected
      const hasRealWallet = wallet && wallet.adapter && !hasRealWalletName(wallet.adapter.name)
      const shouldConnectMock = !connected && !connecting && !hasRealWallet && !mockWallet.connected && !isManualDisconnect
      
      if (shouldConnectMock) {
        try {
          console.log('🔧 Auto-connecting mock wallet for testing...')
          await mockWallet.connect()
          
          // Force UI update by triggering state change
          setTimeout(() => {
            if (mockWallet.connected && mockWallet.publicKey) {
              console.log('✅ Mock wallet auto-connected successfully')
              console.log('📝 Address:', mockWallet.publicKey.toString())
              console.log('🔄 Triggering UI state update...')
              
              // Dispatch custom events to trigger UI updates throughout the app
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('mockWalletConnected', {
                  detail: { 
                    publicKey: mockWallet.publicKey.toString(),
                    connected: true 
                  }
                }))
                
                // Force UI re-render by triggering a custom state update
                setTimeout(() => {
                  window.dispatchEvent(new CustomEvent('triggerUIUpdate', {
                    detail: { type: 'wallet-state-changed' }
                  }))
                }, 100)
              }
            }
          }, 1000)
          
        } catch (error) {
          console.log('⚠️ Mock wallet auto-connect failed:', error)
        }
      }
    }
    
    // Try to connect after a longer delay (3 seconds)
    const timeout = setTimeout(connectMockWallet, 3000)
    return () => clearTimeout(timeout)
  }, [connected, connecting, wallet, mockWallet.connected, isManualDisconnect])

  // Helper function to check if wallet name is not mock
  const hasRealWalletName = (name?: string) => {
    if (!name) return false
    return !name.toLowerCase().includes('mock') && !name.toLowerCase().includes('test')
  }

  // Listen for mock wallet connection events to update UI
  useEffect(() => {
    const handleMockWalletConnected = (event: any) => {
      console.log('🎯 Received mock wallet connection event:', event.detail)
      // This would trigger UI updates to recognize mock wallet connection
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('mockWalletConnected', handleMockWalletConnected)
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mockWalletConnected', handleMockWalletConnected)
      }
    }
  }, [])

  // Fetch balance when wallet is connected with improved loading state
  useEffect(() => {
    if (publicKey && connection) {
      const getBalance = async () => {
        try {
          // Only set loading for the first fetch, not for subsequent polling
          if (balance === null) {
            setLoading(true)
          }
          const balanceInLamports = await connection.getBalance(publicKey)
          const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL
          console.log('💰 Balance fetched:', balanceInSol, 'SOL');
          setBalance(balanceInSol)
          
          // If this is the first successful fetch, clear loading
          if (balance === null) {
            setLoading(false)
          }
        } catch (error) {
          console.error('❌ Error fetching balance:', error)
          setBalance(null)
          setLoading(false) // Clear loading on error
        }
      }

      // Fetch balance immediately
      getBalance()
      // Set up balance polling every 5 seconds for better performance
      const interval = setInterval(getBalance, 5000)
      return () => clearInterval(interval)
    } else {
      console.log('🔄 Wallet not connected, clearing balance');
      setBalance(null)
      setLoading(false) // Clear loading when not connected
    }
  }, [publicKey, connection, balance])

  const connectWallet = useCallback(async () => {
    try {
      console.log('🔗 Attempting wallet connection...')
      console.log('Available wallet:', wallet?.adapter?.name)
      
      if (wallet) {
        console.log('✅ Wallet selected, attempting to connect...')
        await connect()
        console.log('✅ Wallet connection initiated successfully')
      } else {
        console.log('⚠️ No wallet selected. Please select a wallet from the wallet modal.')
        // Trigger wallet modal if needed
        setVisible(true)
      }
    } catch (error) {
      console.error('❌ Error connecting wallet:', error)
      // Enhanced error logging
      if (error instanceof Error) {
        console.error('🔍 Connection error details:', {
          name: error.name,
          message: error.message,
          stack: error.stack
        })
      }
    }
  }, [wallet, connect, setVisible])

  const disconnectWallet = useCallback(async () => {
    try {
      console.log('🔄 Disconnecting wallet...')
      setIsManualDisconnect(true) // Prevent auto-reconnect
      
      // Disconnect real wallet if connected
      if (connected) {
        await disconnect()
        console.log('✅ Real wallet disconnected')
      }
      
      // Disconnect mock wallet if connected
      if (mockWallet.connected) {
        await mockWallet.disconnect()
        console.log('✅ Mock wallet disconnected')
        
        // Dispatch disconnect event for UI updates
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('mockWalletDisconnected'))
          console.log('📢 Mock wallet disconnect event dispatched')
        }
      }
      
      // Clear manual disconnect flag after delay to allow manual reconnect
      setTimeout(() => {
        setIsManualDisconnect(false)
        console.log('🔄 Manual disconnect flag cleared - auto-reconnect enabled')
      }, 3000) // 3 seconds grace period
      
      // Force immediate UI update
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('forceUIUpdate'))
      }, 100)
      
    } catch (error) {
      console.error('❌ Error disconnecting wallet:', error)
    }
  }, [connected, disconnect])

  const getWalletAddress = useCallback(() => {
    if (!publicKey) return null
    return publicKey.toString()
  }, [publicKey])

  const getFormattedBalance = useCallback(() => {
    if (balance === null) return '0 SOL'
    return `${balance.toFixed(4)} SOL`
  }, [balance])

  return {
    wallet,
    connected,
    connecting,
    disconnecting,
    publicKey,
    balance,
    getBalance: getFormattedBalance,
    getWalletAddress,
    connectWallet,
    disconnectWallet,
    isLoading: loading
  }
}

export function useTrading() {
  const { connected, publicKey } = useWallet()
  const { connection } = useConnection()
  const [trading, setTrading] = useState(false)
  const [lastTransaction, setLastTransaction] = useState<string | null>(null)

  const executeTrade = useCallback(async (tradeData: {
    tokenA: string
    tokenB: string
    amountA: number
    amountB: number
    priceImpact: number
  }) => {
    if (!connected || !publicKey) {
      throw new Error('Wallet not connected')
    }

    try {
      setTrading(true)
      
      // Simulate trade execution
      const transaction = new Transaction()
      const transactionId = `tx_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      
      // Simulate transaction delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setLastTransaction(transactionId)
      return {
        success: true,
        transactionId,
        ...tradeData
      }
    } catch (error) {
      console.error('Trade execution failed:', error)
      throw error
    } finally {
      setTrading(false)
    }
  }, [connected, publicKey, connection])

  const getTradeHistory = useCallback(() => {
    // Mock trade history - dalam implementasi real, ini akan query database
    return [
      {
        id: 'tx_123456',
        tokenA: 'SOL',
        tokenB: 'USDC',
        amountA: 0.1,
        amountB: 2.45,
        timestamp: new Date(Date.now() - 3600000).toISOString(),
        status: 'confirmed'
      },
      {
        id: 'tx_123457',
        tokenA: 'SOL',
        tokenB: 'USDT',
        amountA: 0.05,
        amountB: 1.22,
        timestamp: new Date(Date.now() - 7200000).toISOString(),
        status: 'confirmed'
      }
    ]
  }, [])

  return {
    connected,
    trading,
    lastTransaction,
    executeTrade,
    getTradeHistory
  }
}