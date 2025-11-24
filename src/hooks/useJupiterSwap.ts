/**
 * Custom hook untuk Jupiter swap functionality
 * Provides real-time price quotes and swap execution
 */

import { useCallback, useState, useEffect } from 'react'
import { useWallet, useConnection } from '@solana/wallet-adapter-react'
import { 
  getJupiterQuote, 
  executeJupiterSwap, 
  getTokenPrice,
  TOKEN_MINTS,
  type JupiterQuote 
} from '../services/jupiterApi'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import { mockWallet } from '../services/mockWallet'

export interface SwapParams {
  inputToken: string
  outputToken: string
  inputAmount: number
  slippageBps: number
}

export function useJupiterSwap() {
  const wallet = useWallet()
  const { connection } = useConnection()
  const [quote, setQuote] = useState<JupiterQuote | null>(null)
  const [isLoadingQuote, setIsLoadingQuote] = useState(false)
  const [isSwapping, setIsSwapping] = useState(false)
  const [error, setError] = useState<string | null>(null)

  /**
   * Fetch quote from Jupiter for swap route
   */
  const fetchQuote = useCallback(async (params: SwapParams) => {
    setError(null)
    setIsLoadingQuote(true)
    
    try {
      const inputMint = TOKEN_MINTS[params.inputToken as keyof typeof TOKEN_MINTS]
      const outputMint = TOKEN_MINTS[params.outputToken as keyof typeof TOKEN_MINTS]
      
      if (!inputMint || !outputMint) {
        throw new Error('Invalid token pair')
      }

      const quoteData = await getJupiterQuote(
        inputMint,
        outputMint,
        params.inputAmount,
        params.slippageBps
      )

      if (!quoteData) {
        throw new Error('Failed to fetch quote from Jupiter')
      }

      setQuote(quoteData)
      return quoteData
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Failed to fetch quote'
      setError(errorMsg)
      console.error('Quote fetch error:', err)
      return null
    } finally {
      setIsLoadingQuote(false)
    }
  }, [])

  /**
   * Execute swap transaction
   */
  const executeSwap = useCallback(async (currentQuote?: JupiterQuote) => {
    const swapQuote = currentQuote || quote
    
    if (!swapQuote) {
      setError('No quote available')
      return { success: false, error: 'No quote available' }
    }

    // Check if real wallet is connected, otherwise use mock wallet for testing
    let activeWallet = wallet
    if (!wallet.publicKey) {
      console.log('🔧 Using mock wallet for testing...')
      try {
        await mockWallet.connect()
        activeWallet = {
          ...wallet,
          publicKey: mockWallet.publicKey,
          signTransaction: async (tx: any) => {
            console.log('🔧 Mock wallet signing transaction...')
            const signed = await mockWallet.signTransaction(tx)
            
            // Return the signed transaction with custom method for transaction send
            const mockTx = Object.assign({}, signed, {
              _customSendTransaction: async () => {
                console.log('📡 Mock wallet sending transaction...')
                return mockWallet.sendRealTransaction(signed.serialize())
              }
            })
            
            return mockTx
          }
        }
        
        console.log('✅ Mock wallet ready for testing')
        console.log('🔗 Test address:', mockWallet.publicKey.toString())
        
      } catch (mockError) {
        setError('Wallet not connected - please connect Phantom wallet')
        return { success: false, error: 'Wallet not connected' }
      }
    }

    setIsSwapping(true)
    setError(null)

    try {
      const result = await executeJupiterSwap(connection, activeWallet, swapQuote)
      
      if (!result.success) {
        throw new Error(result.error || 'Swap failed')
      }

      // Clear quote after successful swap
      setQuote(null)
      
      return result
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Swap execution failed'
      setError(errorMsg)
      console.error('Swap execution error:', err)
      return { success: false, error: errorMsg }
    } finally {
      setIsSwapping(false)
    }
  }, [quote, wallet, connection])

  return {
    quote,
    fetchQuote,
    executeSwap,
    isLoadingQuote,
    isSwapping,
    error,
    clearQuote: () => setQuote(null),
    clearError: () => setError(null)
  }
}

/**
 * Hook for real-time token prices
 */
export function useTokenPrice(
  inputToken: string,
  outputToken: string,
  refreshInterval: number = 10000 // 10 seconds
) {
  const [price, setPrice] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  const fetchPrice = useCallback(async () => {
    setIsLoading(true)
    try {
      const inputMint = TOKEN_MINTS[inputToken as keyof typeof TOKEN_MINTS]
      const outputMint = TOKEN_MINTS[outputToken as keyof typeof TOKEN_MINTS]
      
      if (!inputMint || !outputMint) {
        return
      }

      const currentPrice = await getTokenPrice(inputMint, outputMint, 1)
      setPrice(currentPrice)
      setLastUpdate(new Date())
    } catch (err) {
      console.error('Price fetch error:', err)
    } finally {
      setIsLoading(false)
    }
  }, [inputToken, outputToken])

  // Auto-refresh price
  useEffect(() => {
    fetchPrice()
    
    const interval = setInterval(fetchPrice, refreshInterval)
    return () => clearInterval(interval)
  }, [fetchPrice, refreshInterval])

  return {
    price,
    isLoading,
    lastUpdate,
    refresh: fetchPrice
  }
}

/**
 * Hook for SPL token balances
 */
export function useTokenBalance(tokenSymbol: string) {
  const { publicKey } = useWallet()
  const { connection } = useConnection()
  const [balance, setBalance] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchBalance = useCallback(async () => {
    if (!publicKey || !connection) {
      setBalance(null)
      return
    }

    setIsLoading(true)
    try {
      if (tokenSymbol === 'SOL') {
        console.log('Fetching SOL balance for:', publicKey.toString())
        const balanceInLamports = await connection.getBalance(publicKey)
        const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL
        console.log('SOL balance:', balanceInSol, 'SOL')
        setBalance(balanceInSol)
      } else {
        // For SPL tokens, we would query token accounts
        // Simplified for now - in production, use getTokenAccountsByOwner
        console.log('SPL token balance not implemented:', tokenSymbol)
        setBalance(0)
      }
    } catch (err) {
      console.error('Balance fetch error:', err)
      setBalance(null)
    } finally {
      setIsLoading(false)
    }
  }, [publicKey, connection, tokenSymbol])

  useEffect(() => {
    // Fetch balance immediately when dependencies change
    fetchBalance()
    
    // Refresh balance every 3 seconds for more responsive updates
    const interval = setInterval(fetchBalance, 3000)
    return () => clearInterval(interval)
  }, [fetchBalance])

  return {
    balance,
    isLoading,
    refresh: fetchBalance
  }
}
