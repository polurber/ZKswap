/**
 * Mock Wallet untuk Testing Transaction ID Format
 * Simulates Phantom wallet untuk demonstrate real Solana transaction ID generation
 */

import { PublicKey, VersionedTransaction } from '@solana/web3.js'
import type { WalletAdapter, WalletReadyState, WalletName } from '@solana/wallet-adapter-base'

// User's wallet address
export const MOCK_WALLET_ADDRESS = new PublicKey('8PhhgPEtVEdmiYazfa1pg7y8iG6RGohupjVNBkHKNKCx')

export class MockWallet {
  public readonly name = 'MockWallet' as WalletName<'MockWallet'>
  public readonly url = 'https://example.com/mock-wallet'
  public readonly icon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iIzEwNjc2NiIvPgo8cGF0aCBkPSJNMTIgNkM5Ljg0IDI1IDcuMjcgMTIgNS43NiAxMi41TDMgMTBDMyA4LjIzIDUuNjEgNiA5IDZDMTIuMTUgNiAxNSA3LjI1IDE1IDkuNUwxMCAxMUwxNSAyMEMxNSAyMi43NyAxMi4xNSAyNCA5IDI0QzUuNjEgMjQgMyAyMi43NyAzIDIwTDUuNzYgMjAuNUM3LjI3IDIxIDkuODQgMTIgMTIgNk0xMy41IDEzTDE0LjUgMTJMMTMgMTMuNUwxMS41IDEyTDEzIDEyTDEzLjUgMTNaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K'
  
  // Wallet state
  public publicKey: PublicKey | null = MOCK_WALLET_ADDRESS
  connected: boolean = false
  connecting: boolean = false
  disconnecting: boolean = false
  readyState: WalletReadyState = 'Installed' as WalletReadyState

  // AutoConnect method (required by WalletProvider)
  async autoConnect(): Promise<void> {
    if (!this.connected && !this.connecting) {
      return this.connect()
    }
  }

  // Connect method
  async connect(): Promise<void> {
    console.log('🔗 Mock Wallet: Connecting Phantom wallet...')
    
    this.connecting = true
    try {
      // Simulate connection delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      this.connected = true
      this.publicKey = MOCK_WALLET_ADDRESS
      
      console.log('✅ Mock Wallet: Connected successfully')
      console.log('📝 Mock Wallet Address:', this.publicKey?.toString())
      
    } catch (error) {
      console.error('❌ Mock Wallet: Connection failed', error)
      throw error
    } finally {
      this.connecting = false
    }
  }

  // Disconnect method  
  async disconnect(): Promise<void> {
    console.log('🔌 Mock Wallet: Disconnecting...')
    
    this.disconnecting = true
    try {
      this.connected = false
      this.publicKey = null
      console.log('✅ Mock Wallet: Disconnected successfully')
      
      // Dispatch disconnect event to trigger UI updates
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('mockWalletDisconnected'))
        window.dispatchEvent(new CustomEvent('triggerUIUpdate', {
          detail: { type: 'wallet-state-changed' }
        }))
      }
    } catch (error) {
      console.error('❌ Mock Wallet: Disconnection failed', error)
      throw error
    } finally {
      this.disconnecting = false
    }
  }

  async signTransaction(transaction: any): Promise<any> {
    if (!this.connected) {
      throw new Error('Wallet not connected')
    }
    
    console.log('✍️ Mock Wallet: Signing transaction...')
    console.log('📋 Transaction details:', {
      feePayer: this.publicKey?.toString(),
      messageAccounts: transaction.message?.accountKeys?.length || 'N/A'
    })
    
    // Create signed transaction with custom send method for real transaction ID
    const signedTx = {
      ...transaction,
      signatures: [Buffer.from('mock_signature_for_testing')],
      serialize: () => Buffer.from(JSON.stringify(transaction)),
      _customSendTransaction: () => this.sendRealTransaction(Buffer.from(JSON.stringify(transaction)))
    }
    
    return signedTx
  }

  async sendTransaction(transaction: any, connection: any, options?: any): Promise<string> {
    if (!this.connected) {
      throw new Error('Wallet not connected')
    }
    
    console.log('📡 Mock Wallet: Sending transaction...')
    
    // Use custom send transaction method for realistic transaction ID
    if (transaction._customSendTransaction) {
      return transaction._customSendTransaction()
    }
    
    // Fallback to regular signing and sending
    const signedTx = await this.signTransaction(transaction)
    return this.sendRealTransaction(signedTx.serialize())
  }

  async signAllTransactions(transactions: VersionedTransaction[]) {
    if (!this.connected) {
      throw new Error('Wallet not connected')
    }
    
    console.log('✍️ Mock Wallet: Signing all transactions...')
    return transactions.map(tx => ({ ...tx, signatures: [Buffer.from('mock_signature'), ...tx.signatures.slice(1)] }))
  }

  // Simulate real Solana transaction ID generation
  generateRealTransactionId(): string {
    // Real Solana transaction IDs are base58 encoded 64-byte signatures
    // This mock generates a realistic-looking transaction ID
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let result = ''
    for (let i = 0; i < 44; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }

  // Method to get realistic Solana network response
  async sendRealTransaction(rawTransaction: Uint8Array) {
    console.log('📡 Mock Wallet: Sending to Solana network...')
    console.log('🌐 Network: Solana Mainnet')
    console.log('⛓️ Blockchain: Proof of Stake + Proof of History')
    console.log('🔍 Transaction size:', rawTransaction.length, 'bytes')
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Generate realistic transaction ID
    const realTxId = this.generateRealTransactionId()
    
    console.log('⏳ Mock Wallet: Transaction submitted')
    console.log('📝 Transaction ID:', realTxId)
    console.log('🔗 Explorer URL: https://explorer.solana.com/tx/' + realTxId)
    console.log('🔍 Status: Pending confirmation...')
    
    return realTxId
  }
}

export const mockWallet = new MockWallet()