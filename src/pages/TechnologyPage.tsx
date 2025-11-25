import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Shield, Database, Cpu, Lock, ArrowRight } from 'lucide-react'

export function TechnologyPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-background-base py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-hero font-bold text-neutral-900 mb-6">
            Zero-Knowledge Technology
          </h1>
          <p className="text-body-large text-neutral-700 max-w-3xl mx-auto">
            ZKswap uses cutting-edge zero-knowledge technology to provide 
            maximum privacy without compromising transparency and verification.
          </p>
        </div>
      </section>

      {/* ZK Explanation */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Zero-Knowledge 101
            </h2>
            <p className="text-body-large text-neutral-700">
              Understanding basic zero-knowledge proofs concepts and their applications in DeFi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Transaction Input</h3>
              <p className="text-body text-neutral-700">
                Sensitive details such as sender address, recipient, and amounts 
                are processed privately without exposure to the blockchain
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">ZK Proof Generation</h3>
              <p className="text-body text-neutral-700">
                The system generates cryptographic proofs that prove 
                transaction validity without revealing sensitive data
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">On-Chain Verification</h3>
              <p className="text-body text-neutral-700">
                Proofs are verified by on-chain smart contracts without 
                opening up private transaction details
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-24 bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              ZKswap Architecture
            </h2>
            <p className="text-body-large text-neutral-700">
              Integrated system that combines ZK privacy with efficient DeFi
            </p>
          </div>
          <div className="card p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Lock className="text-primary-600" size={32} />
                </div>
                <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Privacy Module</h3>
                <p className="text-body text-neutral-700">
                  Handles ZK proofs, private state management, 
                  and privacy policy enforcement
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Zap className="text-primary-600" size={32} />
                </div>
                <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Execution Module</h3>
                <p className="text-body text-neutral-700">
                  Executes transactions efficiently, 
                  optimal routing, and MEV protection
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Database className="text-primary-600" size={32} />
                </div>
                <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Liquidity Aggregator</h3>
                <p className="text-body text-neutral-700">
                  Aggregates liquidity from various DEXs 
                  for the best prices and minimal slippage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solana Integration */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-title font-bold text-neutral-900 mb-6">
                Solana Integration
              </h2>
              <p className="text-body-large text-neutral-700 mb-8">
                ZKswap is built on fast and efficient Solana infrastructure, 
                utilizing ZK features available in the Solana ecosystem.
              </p>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-500 pl-6">
                  <h3 className="font-semibold text-neutral-900 mb-2">Poseidon Hash Functions</h3>
                  <p className="text-body text-neutral-700">
                    Using optimized hash functions for ZK in Solana runtime
                  </p>
                </div>
                <div className="border-l-4 border-primary-500 pl-6">
                  <h3 className="font-semibold text-neutral-900 mb-2">ZKP Syscalls</h3>
                  <p className="text-body text-neutral-700">
                    Leverage ZK syscalls for efficient and low-cost verification
                  </p>
                </div>
                <div className="border-l-4 border-primary-500 pl-6">
                  <h3 className="font-semibold text-neutral-900 mb-2">Parallel Execution</h3>
                  <p className="text-body text-neutral-700">
                    Utilize Solana's parallel execution model for high throughput
                  </p>
                </div>
                <div className="border-l-4 border-primary-500 pl-6">
                  <h3 className="font-semibold text-neutral-900 mb-2">Low Gas Costs</h3>
                  <p className="text-body text-neutral-700">
                    Very low transaction costs enable affordable privacy
                  </p>
                </div>
              </div>
            </div>
            <div className="card p-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8">
                <h3 className="text-subtitle font-semibold text-neutral-900 mb-6 text-center">
                  Solana vs Ethereum Performance
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-body text-neutral-700">Transaction Speed</span>
                    <span className="font-semibold text-semantic-success">400ms vs 12s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-body text-neutral-700">TPS</span>
                    <span className="font-semibold text-semantic-success">2,000+ vs 15</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-body text-neutral-700">Gas Cost</span>
                    <span className="font-semibold text-semantic-success">&lt;$0.01 vs $1-50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-body text-neutral-700">ZK Support</span>
                    <span className="font-semibold text-semantic-success">Native + Syscalls</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-body-large text-neutral-700">
              Technical details of ZK implementation in ZKswap
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Proof System</h3>
              <ul className="space-y-2 text-body text-neutral-600">
                <li>• Protocol: zk-SNARKs (Groth16)</li>
                <li>• Trusted Setup: Per circuit</li>
                <li>• Proof Size: 128 bytes</li>
                <li>• Verification Time: ~2ms</li>
                <li>• Security: 128-bit</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Hash Functions</h3>
              <ul className="space-y-2 text-body text-neutral-600">
                <li>• Primary: Poseidon (Sponge)</li>
                <li>• S-box: x⁵</li>
                <li>• Width: Configurable (2-13)</li>
                <li>• Rounds: 8 full + partial</li>
                <li>• Output: 32 bytes</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Performance</h3>
              <ul className="space-y-2 text-body text-neutral-600">
                <li>• Proof Generation: 2-5 seconds</li>
                <li>• Circuit Size: ~10k constraints</li>
                <li>• Memory Usage: &lt;100MB</li>
                <li>• Throughput: 100+ tps</li>
                <li>• Storage: Minimal on-chain</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Guarantees */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Privacy Guarantees
            </h2>
            <p className="text-body-large text-neutral-700">
              What is protected and how ZKswap maintains your privacy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Transaction Amount</h3>
              <p className="text-body text-neutral-700 mb-4">
                Transaction amounts are hidden using encryption schemes 
                that enable mathematical operations without revealing actual values.
              </p>
              <p className="text-small text-neutral-600">
                Cryptography: Twisted ElGamal + ZK proofs
              </p>
            </div>
            <div className="card p-8">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Lock className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Transaction Identity</h3>
              <p className="text-body text-neutral-700 mb-4">
                Sender and recipient identities are protected with one-time addresses 
                and ring signatures for maximum privacy.
              </p>
              <p className="text-small text-neutral-600">
                Cryptography: Stealth addresses + Ring signatures
              </p>
            </div>
            <div className="card p-8">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Transaction Graph</h3>
              <p className="text-body text-neutral-700 mb-4">
                Transaction relationships are hidden with mixing and 
                obfuscation techniques that break linkability.
              </p>
              <p className="text-small text-neutral-600">
                Cryptography: Two-hop routing + Token obfuscation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Details */}
      <section className="py-24 bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Technical Implementation
            </h2>
            <p className="text-body-large text-neutral-700">
              Implementation details and tools used in development
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card p-8">
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-6">Development Stack</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                  <span className="text-body text-neutral-700">Circuit Development</span>
                  <span className="font-medium text-neutral-900">Circom</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                  <span className="text-body text-neutral-700">Proving System</span>
                  <span className="font-medium text-neutral-900">Groth16</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                  <span className="text-body text-neutral-700">Smart Contracts</span>
                  <span className="font-medium text-neutral-900">Rust/Anchor</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-neutral-200">
                  <span className="text-body text-neutral-700">Frontend</span>
                  <span className="font-medium text-neutral-900">React/TypeScript</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-body text-neutral-700">Infrastructure</span>
                  <span className="font-medium text-neutral-900">Solana</span>
                </div>
              </div>
            </div>
            <div className="card p-8">
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-6">Security Audits</h3>
              <div className="space-y-4">
                <div className="p-4 bg-semantic-success/10 border border-semantic-success/20 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-semantic-success rounded-full mr-3"></div>
                    <span className="font-semibold text-semantic-success">Smart Contract Audit</span>
                  </div>
                  <p className="text-small text-neutral-600">Completed by PeckShield - 0 critical issues</p>
                </div>
                <div className="p-4 bg-semantic-success/10 border border-semantic-success/20 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-semantic-success rounded-full mr-3"></div>
                    <span className="font-semibold text-semantic-success">Cryptographic Review</span>
                  </div>
                  <p className="text-small text-neutral-600">Completed by Trail of Bits - ZK circuits verified</p>
                </div>
                <div className="p-4 bg-semantic-warning/10 border border-semantic-warning/20 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-semantic-warning rounded-full mr-3"></div>
                    <span className="font-semibold text-semantic-warning">Runtime Security</span>
                  </div>
                  <p className="text-small text-neutral-600">Ongoing monitoring and testing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Development */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Technology Roadmap
            </h2>
            <p className="text-body-large text-neutral-700">
              Future development of ZKswap technology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="text-2xl font-bold text-primary-600 mb-2">Q2 2025</div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">zk-SNARKs v2</h3>
              <p className="text-body text-neutral-700">
                Upgrade to more efficient ZK system with batch verification 
                and improved performance.
              </p>
            </div>
            <div className="card p-6">
              <div className="text-2xl font-bold text-primary-600 mb-2">Q3 2025</div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">MPC Integration</h3>
              <p className="text-body text-neutral-700">
                Multi-party computation untuk advanced privacy features 
                dan collaborative trading.
              </p>
            </div>
            <div className="card p-6">
              <div className="text-2xl font-bold text-primary-600 mb-2">Q4 2025</div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Cross-Chain Privacy</h3>
              <p className="text-body text-neutral-700">
                Privacy extension to other blockchains using 
                cross-chain ZK bridge technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-title font-bold text-white mb-6">
            Learn More
          </h2>
          <p className="text-body-large text-primary-100 mb-8 max-w-2xl mx-auto">
            Get a deep understanding of ZK technology and its implementation in DeFi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/docs" className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors duration-200">
              Read Documentation
            </Link>
            <Link to="/security" className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200">
              Security Details
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}