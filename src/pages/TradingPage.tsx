import React, { useState, useEffect } from 'react'
import { useWalletData } from '../hooks/useWallet'
import { useJupiterSwap, useTokenPrice, useTokenBalance } from '../hooks/useJupiterSwap'
import { WalletIcon, ArrowsUpDownIcon, Cog6ToothIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { formatAmount, formatOutputAmount } from '../services/jupiterApi'
import { isRealBlockchainMode } from '../config/blockchain'
import { mockWallet } from '../services/mockWallet'

// Helper function to get token decimals
function getTokenDecimals(token: string): number {
  const tokenDecimals: Record<string, number> = {
    'SOL': 9,     // SOL has 9 decimals (lamports)
    'USDC': 6,    // USDC has 6 decimals
    'USDT': 6,    // USDT has 6 decimals
    'RAY': 6,     // RAY has 6 decimals
    'SRM': 6,     // SRM has 6 decimals
    'MNGO': 6,    // MNGO has 6 decimals
  }
  return tokenDecimals[token] || 9
}

export function TradingPage() {
  const { connected, balance, getBalance, getWalletAddress, publicKey, connecting, isLoading } = useWalletData()
  const { setVisible } = useWalletModal()
  const { fetchQuote, executeSwap, quote, isLoadingQuote, isSwapping, error, clearError } = useJupiterSwap()
  
  const [swapData, setSwapData] = useState({
    inputToken: 'SOL',
    outputToken: 'USDC',
    inputAmount: '',
    outputAmount: '',
    slippageBps: 50 // 0.5% default
  })

  const [showSettings, setShowSettings] = useState(false)
  const [lastTxId, setLastTxId] = useState<string | null>(null)

  // Real-time price for display
  const { price: currentPrice, lastUpdate } = useTokenPrice(swapData.inputToken, swapData.outputToken)
  
  // Token balance for validation
  const { balance: inputTokenBalance } = useTokenBalance(swapData.inputToken)

  const tokens = ['SOL', 'USDC', 'USDT', 'RAY', 'SRM', 'MNGO']

  // Fetch quote when input amount changes
  useEffect(() => {
    if (swapData.inputAmount && parseFloat(swapData.inputAmount) > 0) {
      const timer = setTimeout(() => {
        fetchQuote({
          inputToken: swapData.inputToken,
          outputToken: swapData.outputToken,
          inputAmount: parseFloat(swapData.inputAmount),
          slippageBps: swapData.slippageBps
        })
      }, 500) // Debounce untuk menghindari too many requests

      return () => clearTimeout(timer)
    }
  }, [swapData.inputAmount, swapData.inputToken, swapData.outputToken, swapData.slippageBps, fetchQuote])

  // Update output amount from quote
  useEffect(() => {
    if (quote) {
      // Use the new formatOutputAmount function with correct decimals
      const outputAmt = formatOutputAmount(quote) 
      setSwapData(prev => ({ ...prev, outputAmount: outputAmt.toFixed(6) }))
    }
  }, [quote])

  // Listen for mock wallet connection events to trigger UI updates
  useEffect(() => {
    const handleMockWalletConnected = (event: any) => {
      console.log('🎯 TradingPage: Mock wallet connected event received:', event.detail)
      // Force re-render by updating a state or triggering useWalletData hook
      if (typeof window !== 'undefined') {
        // Dispatch another event to trigger useWalletData refresh
        window.dispatchEvent(new CustomEvent('forceWalletStateUpdate'))
      }
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

  const handleSwapTokens = () => {
    setSwapData({
      ...swapData,
      inputToken: swapData.outputToken,
      outputToken: swapData.inputToken,
      inputAmount: swapData.outputAmount,
      outputAmount: swapData.inputAmount
    })
  }

  // Check if any wallet is connected (real wallet or mock wallet)
  const isWalletConnected = connected || (mockWallet.connected && mockWallet.publicKey)
  
  const handleExecuteSwap = async () => {
    if (!isWalletConnected) {
      setVisible(true)
      return
    }

    if (!swapData.inputAmount || parseFloat(swapData.inputAmount) <= 0) {
      alert('Masukkan jumlah yang valid')
      return
    }

    if (inputTokenBalance && parseFloat(swapData.inputAmount) > inputTokenBalance) {
      alert('Saldo tidak mencukupi')
      return
    }

    clearError()
    const result = await executeSwap()

    if (result.success && result.transactionId) {
      setLastTxId(result.transactionId)
      alert(`Swap berhasil! Transaction ID: ${result.transactionId}`)
      
      // Reset form
      setSwapData({
        ...swapData,
        inputAmount: '',
        outputAmount: ''
      })
    } else {
      alert(`Swap gagal: ${result.error || 'Unknown error'}`)
    }
  }

  const priceImpact = quote ? quote.priceImpactPct * 100 : 0
  const priceImpactColor = priceImpact < 1 ? 'text-green-600' : priceImpact < 3 ? 'text-yellow-600' : 'text-red-600'

  return (
    <div className="min-h-screen bg-neo-bg">
      {/* Real Blockchain Mode Warning */}
      {isRealBlockchainMode() && (
        <div className="bg-neo-secondary border-b-3 border-neo-border p-4">
          <div className="max-w-7xl mx-auto flex items-center space-x-3">
            <ExclamationTriangleIcon className="h-6 w-6 text-white" />
            <div>
              <p className="text-white font-black uppercase">⚠️ REAL BLOCKCHAIN MODE AKTIF</p>
              <p className="text-white font-bold text-sm">Transaksi akan berjalan di blockchain Solana yang nyata. Anda bertanggung jawab penuh atas setiap transaksi.</p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white border-b-3 border-neo-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black text-neo-text uppercase tracking-tight">ZKswap Trading</h1>
              <p className="text-neo-text font-bold mt-1">Privacy-first decentralized exchange</p>
            </div>
            
            {/* Wallet Status */}
            <div className="flex items-center space-x-4">
              {isWalletConnected ? (
                <div className="bg-neo-success border-3 border-neo-border rounded-neo px-4 py-2 shadow-neo-sm">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-white border border-black rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-sm font-black text-neo-text uppercase">Terhubung</p>
                      <p className="text-xs font-bold text-neo-text">{getBalance()}</p>
                      {publicKey && (
                        <p className="text-xs font-mono text-neo-text">
                          {`${publicKey.toString().slice(0, 4)}...${publicKey.toString().slice(-4)}`}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ) : connecting ? (
                <div className="bg-neo-warning border-3 border-neo-border rounded-neo px-4 py-2 shadow-neo-sm">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-white border border-black rounded-full animate-pulse"></div>
                    <div>
                      <p className="text-sm font-black text-neo-text uppercase">Menghubungkan...</p>
                      <p className="text-xs font-bold text-neo-text">Mohon tunggu</p>
                    </div>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => {
                    console.log('🔗 Wallet connect button clicked');
                    setVisible(true);
                  }}
                  className="btn-primary px-6 py-2 flex items-center"
                  disabled={isLoading}
                >
                  <WalletIcon className="h-5 w-5 mr-2" strokeWidth={2.5} />
                  {isLoading ? 'Memuat...' : 'Hubungkan Wallet'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Trading Interface */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black text-neo-text uppercase">Swap Tokens</h2>
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-2 hover:bg-neo-accent rounded-neo border-2 border-transparent hover:border-neo-border transition-colors"
                >
                  <Cog6ToothIcon className="h-6 w-6 text-neo-text" strokeWidth={2.5} />
                </button>
              </div>

              {/* Settings Panel */}
              {showSettings && (
                <div className="mb-6 p-4 bg-neo-bg border-3 border-neo-border rounded-neo shadow-neo-sm">
                  <label className="block text-sm font-bold text-neo-text mb-2">
                    Slippage Tolerance
                  </label>
                  <div className="flex space-x-2">
                    {[10, 50, 100].map(bps => (
                      <button
                        key={bps}
                        onClick={() => setSwapData({...swapData, slippageBps: bps})}
                        className={`px-3 py-1 rounded-neo font-bold border-3 text-sm ${
                          swapData.slippageBps === bps
                            ? 'bg-neo-primary text-white border-neo-border shadow-neo-sm'
                            : 'bg-white border-neo-border text-neo-text hover:bg-neo-accent hover:shadow-neo-sm'
                        }`}
                      >
                        {bps / 100}%
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Token */}
              <div className="mb-4">
                <label className="block text-sm font-bold text-neo-text mb-2">Dari</label>
                <div className="p-4 border-3 border-neo-border rounded-neo bg-white shadow-neo-sm focus-within:shadow-neo transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <select
                      value={swapData.inputToken}
                      onChange={(e) => setSwapData({...swapData, inputToken: e.target.value})}
                      className="text-xl font-bold bg-transparent border-none focus:ring-0 p-0 text-neo-text cursor-pointer"
                    >
                      {tokens.map(token => (
                        <option key={token} value={token}>{token}</option>
                      ))}
                    </select>
                    {inputTokenBalance !== null && inputTokenBalance > 0 ? (
                      <span className="text-sm font-bold text-neo-success">
                        Saldo: {inputTokenBalance.toFixed(4)} SOL
                      </span>
                    ) : inputTokenBalance !== null ? (
                      <span className="text-sm font-bold text-neo-secondary">
                        Saldo: {inputTokenBalance.toFixed(4)} SOL (Saldo tidak mencukupi)
                      </span>
                    ) : (
                      <span className="text-sm font-bold text-gray-400">
                        Memuat saldo...
                      </span>
                    )}
                  </div>
                  <input
                    type="number"
                    placeholder="0.0"
                    value={swapData.inputAmount}
                    onChange={(e) => setSwapData({...swapData, inputAmount: e.target.value})}
                    className="w-full text-3xl font-black bg-transparent border-none focus:ring-0 p-0 text-neo-text placeholder-gray-300"
                    step="0.000001"
                  />
                </div>
              </div>

              {/* Swap Direction Button */}
              <div className="flex justify-center -my-4 relative z-10">
                <button
                  onClick={handleSwapTokens}
                  className="p-3 bg-neo-accent border-3 border-neo-border rounded-neo hover:bg-neo-primary hover:text-white transition-all shadow-neo hover:shadow-neo-lg hover:-translate-y-1"
                >
                  <ArrowsUpDownIcon className="h-6 w-6 text-neo-text" strokeWidth={2.5} />
                </button>
              </div>

              {/* Output Token */}
              <div className="mb-6 mt-2">
                <label className="block text-sm font-bold text-neo-text mb-2">Ke</label>
                <div className="p-4 border-3 border-neo-border rounded-neo bg-neo-bg shadow-neo-sm">
                  <select
                    value={swapData.outputToken}
                    onChange={(e) => setSwapData({...swapData, outputToken: e.target.value})}
                    className="text-xl font-bold bg-transparent border-none focus:ring-0 p-0 mb-2 text-neo-text cursor-pointer"
                  >
                    {tokens.map(token => (
                      <option key={token} value={token}>{token}</option>
                    ))}
                  </select>
                  <div className="text-3xl font-black text-neo-text">
                    {isLoadingQuote ? (
                      <span className="text-gray-400">Memuat...</span>
                    ) : (
                      swapData.outputAmount || '0.0'
                    )}
                  </div>
                </div>
              </div>

              {/* Price Info */}
              {quote && (
                <div className="mb-6 p-4 bg-white border-3 border-neo-border rounded-neo space-y-2 text-sm shadow-neo-sm">
                  <div className="flex justify-between font-bold">
                    <span className="text-gray-600">Harga</span>
                    <span className="text-neo-text">
                      1 {swapData.inputToken} = {currentPrice?.toFixed(6)} {swapData.outputToken}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-gray-600">Price Impact</span>
                    <span className={`${priceImpactColor}`}>
                      {priceImpact.toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-gray-600">Minimum Received</span>
                    <span className="text-neo-text">
                      {formatAmount(quote.otherAmountThreshold, getTokenDecimals(quote.outputMint)).toFixed(6)} {swapData.outputToken}
                    </span>
                  </div>
                  {lastUpdate && (
                    <div className="text-xs font-mono text-gray-500 text-right">
                      Update terakhir: {lastUpdate.toLocaleTimeString()}
                    </div>
                  )}
                </div>
              )}

              {/* Error Display */}
              {error && (
                <div className="mb-4 p-3 bg-neo-secondary border-3 border-neo-border rounded-neo text-sm text-white font-bold shadow-neo-sm">
                  {error}
                </div>
              )}

              {/* Swap Button */}
              <button
                onClick={handleExecuteSwap}
                disabled={isSwapping || isLoadingQuote || !isWalletConnected || !swapData.inputAmount}
                className="w-full btn-primary py-4 text-xl font-black disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSwapping ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-4 border-white mr-3"></div>
                    Memproses Swap...
                  </div>
                ) : !isWalletConnected ? (
                  'Hubungkan Wallet untuk Swap'
                ) : isLoadingQuote ? (
                  'Memuat Quote...'
                ) : (
                  'Swap Sekarang'
                )}
              </button>

              {/* Last Transaction */}
              {lastTxId && (
                <div className="mt-4 p-3 bg-neo-success border-3 border-neo-border rounded-neo shadow-neo-sm">
                  <p className="text-sm text-neo-text font-black mb-1 uppercase">
                    Transaksi Berhasil {isRealBlockchainMode() ? '(Real Blockchain)' : '(Demo Mode)'}
                  </p>
                  {isRealBlockchainMode() ? (
                    <div className="space-y-2">
                      <p className="text-xs text-neo-text font-bold">Transaksi real di blockchain Solana</p>
                      <a
                        href={`https://explorer.solana.com/tx/${lastTxId}?cluster=mainnet-beta`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-white font-bold underline break-all block"
                      >
                        🔗 View on Solana Explorer: {lastTxId}
                      </a>
                    </div>
                  ) : (
                    <p className="text-xs text-neo-text font-mono">
                      Demo transaction (mock): {lastTxId}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Market Info */}
          <div>
            <div className="card p-6 mb-6">
              <h3 className="text-xl font-black text-neo-text mb-4 uppercase">Informasi Pasar</h3>
              <div className="space-y-4 text-sm">
                <div className="p-3 bg-neo-bg border-2 border-neo-border rounded-neo">
                  <p className="text-gray-600 font-bold mb-1">Network</p>
                  <p className="font-black text-neo-text">Solana Mainnet-Beta</p>
                </div>
                <div className="p-3 bg-neo-bg border-2 border-neo-border rounded-neo">
                  <p className="text-gray-600 font-bold mb-1">DEX Aggregator</p>
                  <p className="font-black text-neo-text">Jupiter V6</p>
                </div>
                <div className="p-3 bg-neo-bg border-2 border-neo-border rounded-neo">
                  <p className="text-gray-600 font-bold mb-1">Status</p>
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-neo-success border border-black rounded-full mr-2"></div>
                    <p className="font-black text-neo-success">Operational</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Features */}
            <div className="mb-6 card p-6 bg-neo-primary border-3 border-neo-border">
              <h3 className="text-xl font-black text-white mb-3 uppercase">Fitur Privacy</h3>
              <ul className="space-y-2 text-sm text-white font-bold">
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-white border border-black rounded-full mr-2 mt-1.5"></div>
                  <span>Zero-knowledge proof verification</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-white border border-black rounded-full mr-2 mt-1.5"></div>
                  <span>MEV-resistant routing</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-white border border-black rounded-full mr-2 mt-1.5"></div>
                  <span>Private order aggregation</span>
                </li>
                <li className="flex items-start">
                  <div className="h-2 w-2 bg-white border border-black rounded-full mr-2 mt-1.5"></div>
                  <span>Cross-program invocation</span>
                </li>
              </ul>
            </div>

            {/* Wallet Info */}
            {isWalletConnected && (
              <div className="card p-6">
                <h3 className="text-xl font-black text-neo-text mb-4 uppercase">Info Wallet</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-600 font-bold mb-1">Saldo SOL</p>
                    <p className="font-black text-neo-text text-2xl">
                      {balance !== null ? `${balance.toFixed(4)} SOL` : 'Memuat saldo...'}
                    </p>
                    {inputTokenBalance !== null && inputTokenBalance !== balance && (
                      <p className="text-xs font-mono text-gray-500 mt-1">
                        Debug: Token balance = {inputTokenBalance.toFixed(4)} SOL
                      </p>
                    )}
                  </div>
                  <div>
                    <p className="text-gray-600 font-bold mb-1">Alamat</p>
                    <p className="font-mono text-xs text-neo-text bg-neo-bg p-2 rounded-neo border-2 border-neo-border break-all">
                      {mockWallet.connected && mockWallet.publicKey 
                        ? mockWallet.publicKey.toString()
                        : getWalletAddress()
                      }
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
