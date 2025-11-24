import { useMemo, useContext, createContext, useEffect, useState } from 'react'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter, SolflareWalletAdapter, MathWalletAdapter } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl, Connection } from '@solana/web3.js'

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css'

interface SolanaProviderProps {
  children: React.ReactNode
}

export function SolanaProvider({ children }: SolanaProviderProps) {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = 'mainnet-beta'
  
  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), [network])

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new MathWalletAdapter(),
    ],
    []
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider 
        wallets={wallets} 
        autoConnect={true}
        onError={(error) => {
          console.error('❌ Wallet error:', error);
        }}
      >
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

// Custom hook untuk menggunakan wallet context
export function useSolanaContext() {
  const context = useContext(SolanaContext)
  if (context === undefined) {
    throw new Error('useSolanaContext must be used within a SolanaProvider')
  }
  return context
}

export const SolanaContext = createContext<any>(null)