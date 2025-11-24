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
            ZKswap menawarkan berbagai fitur privasi yang dapat disesuaikan untuk memenuhi 
            kebutuhan trading Anda, dari privacy level dasar hingga maximum privacy.
          </p>
        </div>
      </section>

      {/* Privacy Levels */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Levels Privasi
            </h2>
            <p className="text-body-large text-neutral-700">
              Pilih level privasi yang sesuai dengan kebutuhan trading Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8">
              <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-neutral-500" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Standard Privacy</h3>
              <p className="text-body text-neutral-700 mb-6">
                Privasi dasar dengan one-time addresses dan route obfuscation
              </p>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li>• One-time addresses</li>
                <li>• Route obfuscation</li>
                <li>• Metadata protection</li>
                <li>• Fast execution (0-3 menit)</li>
                <li>• Biaya rendah</li>
              </ul>
            </div>
            <div className="card p-8 border-2 border-primary-500">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Lock className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Private Mode</h3>
              <p className="text-body text-neutral-700 mb-6">
                Privasi ditingkatkan dengan two-hop routing dan random bridge tokens
              </p>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li>• Two-hop routing</li>
                <li>• Random bridge tokens</li>
                <li>• Advanced obfuscation</li>
                <li>• Balanced speed (5-15 menit)</li>
                <li>• Biaya menengah</li>
              </ul>
            </div>
            <div className="card p-8">
              <div className="w-12 h-12 bg-primary-900 rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-white" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Maximum Privacy</h3>
              <p className="text-body text-neutral-700 mb-6">
                Privasi maksimal dengan ring signatures dan Monero integration
              </p>
              <ul className="space-y-3 text-sm text-neutral-600">
                <li>• Ring signatures</li>
                <li>• Monero integration</li>
                <li>• Anonymity set protection</li>
                <li>• Maximum security (10-40 menit)</li>
                <li>• Biaya lebih tinggi</li>
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
                Mekanisme Aggregator
              </h2>
              <p className="text-body-large text-neutral-700 mb-8">
                ZKswap mengagregasi likuiditas dari multiple DEXs untuk memberikan harga terbaik 
                dan slippage minimal, sambil mempertahankan privasi transaksi.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <TrendingUp className="text-primary-600" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Price Discovery</h3>
                    <p className="text-body text-neutral-700">
                      Sistem mencari harga terbaik dari berbagai sumber likuiditas secara real-time
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
                      Transaksi dibagi ke multiple routes untuk meminimalkan slippage dan mendapatkan harga optimal
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
                      Semua routing dilakukan dengan privasi maksimal tanpa mengorbankan eksekusi
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card p-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8">
                <h3 className="text-subtitle font-semibold text-neutral-900 mb-6 text-center">
                  Eksekusi Tradisional vs ZKswap
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
              Deep Dive: Fitur Utama
            </h2>
            <p className="text-body-large text-neutral-700">
              Pelajari secara detail bagaimana setiap fitur bekerja untuk memberikan pengalaman trading terbaik
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
                  Algoritma eksekusi yang canggih menggunakan machine learning untuk mengidentifikasi 
                  route optimal dan meminimalkan slippage dalam berbagai kondisi market.
                </p>
                <ul className="space-y-2 text-body text-neutral-600">
                  <li>• Real-time price discovery dari 15+ DEXs</li>
                  <li>• Smart routing dengan AI optimization</li>
                  <li>• MEV protection dan front-running mitigation</li>
                  <li>• Auto-retry dengan fallback routes</li>
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
                <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Biaya Rendah yang Efisien</h3>
                <p className="text-body text-neutral-700 mb-6">
                  Dengan infrastruktur Solana yang berbiaya rendah, ZKswap dapat menawarkan 
                  fee structure yang kompetitif tanpa mengorbankan kualitas eksekusi.
                </p>
                <ul className="space-y-2 text-body text-neutral-600">
                  <li>• 0.1% protocol fee (below industry average)</li>
                  <li>• Solana gas fees (typically &lt;$0.01)</li>
                  <li>• No hidden fees atau markups</li>
                  <li>• Fee discounts untuk high-volume users</li>
                </ul>
              </div>
            </div>

            {/* Security */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="text-primary-600" size={24} />
                </div>
                <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Keamanan & Kontrol</h3>
                <p className="text-body text-neutral-700 mb-6">
                  ZKswap mengutamakan non-custodial design, memberikan kontrol penuh kepada 
                  user atas aset mereka sambil mempertahankan keamanan maksimal.
                </p>
                <ul className="space-y-2 text-body text-neutral-600">
                  <li>• Non-custodial: user tetap kontrol private keys</li>
                  <li>• Audited smart contracts</li>
                  <li>• Bug bounty program aktif</li>
                  <li>• Real-time monitoring dan alerting</li>
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
              Ekosistem & Integrasi
            </h2>
            <p className="text-body-large text-neutral-700">
              ZKswap terintegrasi dengan berbagai protokol dan platform di ekosistem Solana
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
            Siap Mengalami Trading Privasi?
          </h2>
          <p className="text-body-large text-neutral-700 mb-8 max-w-2xl mx-auto">
            Explore semua fitur ZKswap dan rasakan perbedaan trading dengan privasi maksimal.
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