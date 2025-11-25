import React from 'react'
import { Shield, Lock, Eye, Zap, TrendingUp, Users, Globe } from 'lucide-react'

export function FeaturesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-background-base py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-hero font-bold text-neutral-900 mb-6">
            Privacy-First Features
          </h1>
          <p className="text-body-large text-neutral-700 max-w-3xl mx-auto">
            ZKswap offers various customizable privacy features to meet 
            your trading needs, from basic privacy levels to maximum privacy.
          </p>
        </div>
      </section>

      {/* Privacy Levels */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Privacy Levels
            </h2>
            <p className="text-body-large text-neutral-700">
              Choose privacy level according to your trading needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-neutral-500" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Standard Privacy</h3>
              <p className="text-body text-neutral-700 mb-6">
                Basic privacy with one-time addresses and route obfuscation
              </p>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li>• One-time addresses</li>
                <li>• Route obfuscation</li>
                <li>• Metadata protection</li>
                <li>• Fast execution (0-3 minutes)</li>
                <li>• Low fees</li>
              </ul>
            </div>
            <div className="card p-8 border-2 border-primary-500">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Lock className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Private Mode</h3>
              <p className="text-body text-neutral-700 mb-6">
                Enhanced privacy with two-hop routing and random bridge tokens
              </p>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li>• Two-hop routing</li>
                <li>• Random bridge tokens</li>
                <li>• Advanced obfuscation</li>
                <li>• Balanced speed (5-15 minutes)</li>
                <li>• Medium fees</li>
              </ul>
            </div>
            <div className="card p-8">
              <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-white" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Maximum Privacy</h3>
              <p className="text-body text-neutral-700 mb-6">
                Maximum privacy with ring signatures and Monero integration
              </p>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li>• Ring signatures</li>
                <li>• Monero integration</li>
                <li>• Anonymity set protection</li>
                <li>• Maximum security (10-40 minutes)</li>
                <li>• Higher fees</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Aggregator Mechanism */}
      <section className="py-24 bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-title font-bold text-neutral-900 mb-6">
                Aggregator Mechanism
              </h2>
              <p className="text-body-large text-neutral-700 mb-8">
                ZKswap aggregates liquidity from multiple DEXs to provide the best prices 
                and minimal slippage while maintaining transaction privacy.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="text-primary-600" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Price Discovery</h3>
                    <p className="text-body text-neutral-700">
                      The system searches for the best prices from various liquidity sources in real-time
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="text-primary-600" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Split Routing</h3>
                    <p className="text-body text-neutral-700">
                      Transactions are divided across multiple routes to minimize slippage and get optimal prices
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lock className="text-primary-600" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Privacy-Enhanced</h3>
                    <p className="text-body text-neutral-700">
                      All routing is done with maximum privacy without compromising execution
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card p-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8">
                <h3 className="text-subtitle font-semibold text-neutral-900 mb-6 text-center">
                  Traditional Execution vs ZKswap
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-sm text-neutral-600">Single DEX</span>
                    <span className="text-sm font-medium text-neutral-900">2.5% slippage</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                    <span className="text-sm text-neutral-600">Basic Aggregator</span>
                    <span className="text-sm font-medium text-neutral-900">0.8% slippage</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary-500 text-white rounded-lg">
                    <span className="text-sm font-semibold">ZKswap (with privacy)</span>
                    <span className="text-sm font-semibold">0.05% slippage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Deep-Dive */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Deep Dive: Main Features
            </h2>
            <p className="text-body-large text-neutral-700">
              Learn in detail how each feature works to provide the best trading experience
            </p>
          </div>
          <div className="space-y-16">
            {/* Best Execution */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="text-primary-600" size={24} />
                </div>
                <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Best Execution Engine</h3>
                <p className="text-body text-neutral-700 mb-6">
                  Advanced execution algorithms using machine learning to identify 
                  optimal routes and minimize slippage in various market conditions.
                </p>
                <ul className="space-y-2 text-body text-neutral-600">
                  <li>• Real-time price discovery from 15+ DEXs</li>
                  <li>• Smart routing dengan AI optimization</li>
                  <li>• MEV protection dan front-running mitigation</li>
                  <li>• Auto-retry with fallback routes</li>
                </ul>
              </div>
              <div className="card p-6">
                <div className="text-center">
                  <div className="text-hero font-bold text-semantic-success mb-2">95%</div>
                  <div className="text-body text-neutral-600">Best Price Achievement Rate</div>
                </div>
              </div>
            </div>

            {/* Low Fees */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 card p-6">
                <div className="text-center">
                  <div className="text-hero font-bold text-semantic-success mb-2">0.3%</div>
                  <div className="text-body text-neutral-600">Total Trading Fees</div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="text-primary-600" size={24} />
                </div>
                <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Efficient Low Fees</h3>
                <p className="text-body text-neutral-700 mb-6">
                  With low-cost Solana infrastructure, ZKswap can offer 
                  competitive fee structures without compromising execution quality.
                </p>
                <ul className="space-y-2 text-body text-neutral-600">
                  <li>• 0.1% protocol fee (below industry average)</li>
                  <li>• Solana gas fees (typically &lt;$0.01)</li>
                  <li>• No hidden fees or markups</li>
                  <li>• Fee discounts for high-volume users</li>
                </ul>
              </div>
            </div>

            {/* Security */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="text-primary-600" size={24} />
                </div>
                <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Security & Control</h3>
                <p className="text-body text-neutral-700 mb-6">
                  ZKswap prioritizes non-custodial design, giving users full control over 
                  their assets while maintaining maximum security.
                </p>
                <ul className="space-y-2 text-body text-neutral-600">
                  <li>• Non-custodial: users control private keys</li>
                  <li>• Audited smart contracts</li>
                  <li>• Active bug bounty program</li>
                  <li>• Real-time monitoring and alerting</li>
                </ul>
              </div>
              <div className="card p-6">
                <div className="text-center">
                  <div className="text-hero font-bold text-semantic-success mb-2">0</div>
                  <div className="text-body text-neutral-600">Security Incidents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Points */}
      <section className="py-24 bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Ecosystem & Integration
            </h2>
            <p className="text-body-large text-neutral-700">
              ZKswap is integrated with various protocols and platforms in the Solana ecosystem
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-neutral-900 mb-2">Jupiter</div>
              <div className="text-small text-neutral-600">DEX Aggregator</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-neutral-900 mb-2">Raydium</div>
              <div className="text-small text-neutral-600">AMM DEX</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-neutral-900 mb-2">Orca</div>
              <div className="text-small text-neutral-600">Concentrated Liquidity</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-neutral-900 mb-2">Serum</div>
              <div className="text-small text-neutral-600">Order Book</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-neutral-900 mb-2">Mango</div>
              <div className="text-small text-neutral-600">Margin Trading</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-2xl font-bold text-neutral-900 mb-2">Solend</div>
              <div className="text-small text-neutral-600">Lending Protocol</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-title font-bold text-neutral-900 mb-6">
            Ready to Experience Private Trading?
          </h2>
          <p className="text-body-large text-neutral-700 mb-8 max-w-2xl mx-auto">
            Explore all ZKswap features and experience the difference of trading with maximum privacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-4 text-lg">
              Start Trading
            </button>
            <button className="btn-secondary px-8 py-4 text-lg">
              View Documentation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}