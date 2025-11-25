import React from 'react'
import { Shield, Lock, Eye, CheckCircle, AlertTriangle, FileText } from 'lucide-react'

export function SecurityPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-background-base py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-hero font-bold text-neutral-900 mb-6">
            Security & Trust
          </h1>
          <p className="text-body-large text-neutral-700 max-w-3xl mx-auto">
            ZKswap is built with security as the main priority, using 
            industry standards and independent audits to protect your assets.
          </p>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Four Pillars of Trust
            </h2>
            <p className="text-body-large text-neutral-700">
              Security foundation that makes ZKswap trusted for private trading
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Non-Custodial</h3>
              <p className="text-body text-neutral-700">
                You maintain full control over private keys. 
                ZKswap never custody your assets.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Audited</h3>
              <p className="text-body text-neutral-700">
                Smart contracts have been audited by leading security firms 
                with transparent results.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Compliant</h3>
              <p className="text-body text-neutral-700">
                Complying with applicable regulations with privacy-preserving 
                compliance mechanisms.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">MEV-Protected</h3>
              <p className="text-body text-neutral-700">
                Protection system against MEV attacks and front-running 
                to ensure fair execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Summary */}
      <section className="py-24 bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Audit Summary
            </h2>
            <p className="text-body-large text-neutral-700">
              Independent audit reports validating the security of ZKswap system
            </p>
          </div>
          <div className="card p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-subtitle font-semibold text-neutral-900 mb-6">Smart Contract Audit</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                    <span className="text-body text-neutral-700">Audit Firm</span>
                    <span className="font-medium text-neutral-900">PeckShield</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                    <span className="text-body text-neutral-700">Date</span>
                    <span className="font-medium text-neutral-900">January 2025</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                    <span className="text-body text-neutral-700">Status</span>
                    <div className="flex items-center">
                      <CheckCircle className="text-semantic-success mr-2" size={16} />
                      <span className="font-medium text-semantic-success">Completed</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                    <span className="text-body text-neutral-700">Critical Issues</span>
                    <span className="font-medium text-semantic-success">0</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-body text-neutral-700">High Issues</span>
                    <span className="font-medium text-semantic-success">0</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-subtitle font-semibold text-neutral-900 mb-6">Cryptographic Review</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                    <span className="text-body text-neutral-700">Review Firm</span>
                    <span className="font-medium text-neutral-900">Trail of Bits</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                    <span className="text-body text-neutral-700">Date</span>
                    <span className="font-medium text-neutral-900">December 2024</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                    <span className="text-body text-neutral-700">Scope</span>
                    <span className="font-medium text-neutral-900">ZK Circuits</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-neutral-200">
                    <span className="text-body text-neutral-700">Result</span>
                    <div className="flex items-center">
                      <CheckCircle className="text-semantic-success mr-2" size={16} />
                      <span className="font-medium text-semantic-success">Verified</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-body text-neutral-700">Security Level</span>
                    <span className="font-medium text-semantic-success">128-bit</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-primary-50 border border-primary-200 rounded-lg">
              <div className="flex items-center mb-3">
                <CheckCircle className="text-primary-600 mr-3" size={20} />
                <h4 className="font-semibold text-primary-900">Audit Conclusion</h4>
              </div>
              <p className="text-body text-primary-800">
                "ZKswap's smart contracts and ZK implementation have been thoroughly reviewed and found to meet 
                industry standards for security and correctness. No critical vulnerabilities were identified."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bug Bounty */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Bug Bounty Program
            </h2>
            <p className="text-body-large text-neutral-700">
              Reward program for security researchers who discover vulnerabilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-8">
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-semantic-success mb-2">$500K</div>
                <div className="text-body text-neutral-600">Maximum Bounty</div>
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4 text-center">Reward Structure</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-body text-neutral-700">Critical (Funds at risk)</span>
                  <span className="font-semibold text-semantic-success">$100K - $500K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-body text-neutral-700">High (Functionality broken)</span>
                  <span className="font-semibold text-semantic-warning">$10K - $50K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-body text-neutral-700">Medium (Partial impact)</span>
                  <span className="font-semibold text-semantic-info">$1K - $10K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-body text-neutral-700">Low (Informational)</span>
                  <span className="font-semibold text-neutral-600">$100 - $1K</span>
                </div>
              </div>
            </div>
            <div className="card p-8">
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Program Details</h3>
              <ul className="space-y-3 text-body text-neutral-700">
                <li>• Scope: Smart contracts, frontend, backend</li>
                <li>• Duration: Ongoing program</li>
                <li>• Min bounty: $100 for valid reports</li>
                <li>• Public disclosure: After fix deployment</li>
                <li>• Good faith research encouraged</li>
                <li>• Coordinated disclosure policy</li>
              </ul>
              <div className="mt-6">
                <button className="btn-primary w-full">
                  Submit Vulnerability Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Regulatory Compliance
            </h2>
            <p className="text-body-large text-neutral-700">
              ZKswap complies with applicable regulations while maintaining user privacy
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-6">Compliance Framework</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-500 pl-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">AML/KYC</h4>
                  <p className="text-body text-neutral-700">
                    Implementasi AML/KYC yang privacy-preserving menggunakan selective disclosure 
                    dan zero-knowledge proofs untuk verifikasi compliance.
                  </p>
                </div>
                <div className="border-l-4 border-primary-500 pl-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">Data Protection</h4>
                  <p className="text-body text-neutral-700">
                    Minimal data policy with 72-hour retention and encrypted storage 
                    for all user data.
                  </p>
                </div>
                <div className="border-l-4 border-primary-500 pl-6">
                  <h4 className="font-semibold text-neutral-900 mb-2">Cross-Border</h4>
                  <p className="text-body text-neutral-700">
                    Mengacu pada FATF Travel Rule dengan mekanisme transfer information 
                    yang privacy-preserving.
                  </p>
                </div>
              </div>
            </div>
            <div className="card p-8">
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-6">Regulatory Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-semantic-success/10 border border-semantic-success/20 rounded-lg">
                  <span className="text-body text-neutral-700">EU Compliance</span>
                  <div className="flex items-center">
                    <CheckCircle className="text-semantic-success mr-2" size={16} />
                    <span className="text-small font-medium text-semantic-success">MiCA Ready</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-semantic-success/10 border border-semantic-success/20 rounded-lg">
                  <span className="text-body text-neutral-700">US Compliance</span>
                  <div className="flex items-center">
                    <CheckCircle className="text-semantic-success mr-2" size={16} />
                    <span className="text-small font-medium text-semantic-success">SEC/CFTC Aligned</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-semantic-success/10 border border-semantic-success/20 rounded-lg">
                  <span className="text-body text-neutral-700">Global Standards</span>
                  <div className="flex items-center">
                    <CheckCircle className="text-semantic-success mr-2" size={16} />
                    <span className="text-small font-medium text-semantic-success">FATF Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Privacy Policy
            </h2>
            <p className="text-body-large text-neutral-700">
              Transparent privacy policy and user data protection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Lock className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Data Minimization</h3>
              <p className="text-body text-neutral-700 mb-4">
                ZKswap collects minimal data required for operations. 
                No tracking cookies or data mining.
              </p>
              <ul className="text-small text-neutral-600 space-y-1">
                <li>• Only essential transaction data</li>
                <li>• No personal identity stored</li>
                <li>• Encrypted transmission</li>
                <li>• No third-party sharing</li>
              </ul>
            </div>
            <div className="card p-8">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Retention Policy</h3>
              <p className="text-body text-neutral-700 mb-4">
                Strict data retention policy with automatic deletion 
                to protect long-term privacy.
              </p>
              <ul className="text-small text-neutral-600 space-y-1">
                <li>• Transaction logs: 72 hours</li>
                <li>• Order IDs: 72 hours</li>
                <li>• Audit logs: 1 year (encrypted)</li>
                <li>• User preferences: Until deletion request</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security Best Practices */}
      <section className="py-24 bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Security Best Practices
            </h2>
            <p className="text-body-large text-neutral-700">
              Security guidelines for ZKswap users
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-600" size={20} />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-3">Wallet Security</h3>
              <ul className="text-body text-neutral-700 space-y-2">
                <li>• Use hardware wallets for large amounts</li>
                <li>• Enable 2FA on wallet providers</li>
                <li>• Regularly backup seed phrases</li>
                <li>• Never share private keys</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-600" size={20} />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-3">Transaction Verification</h3>
              <ul className="text-body text-neutral-700 space-y-2">
                <li>• Always verify contract addresses</li>
                <li>• Check slippage tolerance settings</li>
                <li>• Review transaction details before signing</li>
                <li>• Use testnet for new features</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-600" size={20} />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-3">Privacy Protection</h3>
              <ul className="text-body text-neutral-700 space-y-2">
                <li>• Choose appropriate privacy level</li>
                <li>• Avoid address reuse</li>
                <li>• Use VPN when accessing</li>
                <li>• Clear browser data regularly</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="text-primary-600" size={20} />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-3">Phishing Protection</h3>
              <ul className="text-body text-neutral-700 space-y-2">
                <li>• Only use official URLs</li>
                <li>• Verify SSL certificates</li>
                <li>• Never click suspicious links</li>
                <li>• Check for official communications</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-primary-600" size={20} />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-3">Network Security</h3>
              <ul className="text-body text-neutral-700 space-y-2">
                <li>• Use secure internet connections</li>
                <li>• Avoid public WiFi for trading</li>
                <li>• Keep software updated</li>
                <li>• Use reputable RPC providers</li>
              </ul>
            </div>
            <div className="card p-6">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="text-primary-600" size={20} />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-3">Regular Maintenance</h3>
              <ul className="text-body text-neutral-700 space-y-2">
                <li>• Review account activity regularly</li>
                <li>• Update wallet software</li>
                <li>• Monitor for security updates</li>
                <li>• Diversify storage methods</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-title font-bold text-neutral-900 mb-6">
            Trusted by Security-Conscious Users
          </h2>
          <p className="text-body-large text-neutral-700 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust ZKswap for 
            secure and private trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-4 text-lg">
              Start Secure Trading
            </button>
            <button className="btn-secondary px-8 py-4 text-lg">
              Download Security Report
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}