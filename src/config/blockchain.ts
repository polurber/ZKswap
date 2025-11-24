/**
 * Blockchain Configuration
 * Easily toggle between demo and real blockchain modes
 */

export const BLOCKCHAIN_CONFIG = {
  // ⚠️ WARNING: Set to true only if you want REAL transactions on Solana blockchain
  // Transactions will be sent to actual blockchain with real costs
  ENABLE_REAL_BLOCKCHAIN: true,

  // Network configuration
  SOLANA_RPC: 'https://api.mainnet-beta.solana.com',
  
  // Jupiter API endpoints (for quote and swap)
  JUPITER_API: {
    QUOTE_URL: 'https://quote-api.jup.ag/v6/quote',
    SWAP_URL: 'https://quote-api.jup.ag/v6/swap',
  },

  // Slippage settings for real transactions
  DEFAULT_SLIPPAGE_BPS: 50, // 0.5%

  // Minimum amounts (in SOL lamports) for safety
  MIN_SOL_AMOUNT: 1000000, // 0.001 SOL minimum
  
  // Maximum amounts (in SOL lamports) for safety
  MAX_SOL_AMOUNT: 1000000000, // 1 SOL maximum
};

// Helper function to check if we're in real mode
export const isRealBlockchainMode = (): boolean => BLOCKCHAIN_CONFIG.ENABLE_REAL_BLOCKCHAIN;

// Helper function to get mode description
export const getModeDescription = (): string => {
  if (BLOCKCHAIN_CONFIG.ENABLE_REAL_BLOCKCHAIN) {
    return 'Real Blockchain Mode - Transactions will be sent to Solana mainnet';
  } else {
    return 'Demo Mode - Simulated transactions only';
  }
};

// Warning message for real mode
export const REAL_MODE_WARNING = `
⚠️ REAL BLOCKCHAIN MODE AKTIF ⚠️

• Transaksi akan berjalan di blockchain Solana yang nyata
• Biaya gas akan dipotong dari saldo wallet Anda  
• Transaksi tidak dapat dibatalkan
• Anda bertanggung jawab penuh atas setiap transaksi

Pastikan saldo wallet mencukupi untuk biaya gas sebelum melakukan swap.
`;