import React from 'react'
import { Users, Github, Award, BookOpen, Code, Zap, MessageCircle } from 'lucide-react'

const XLogo = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function CommunityPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-background-base py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-hero font-bold text-neutral-900 mb-6">
            Join the Community
          </h1>
          <p className="text-body-large text-neutral-700 max-w-3xl mx-auto">
            Join the leading privacy DeFi community and be part of the
            private trading revolution in the Solana ecosystem.
          </p>
        </div>
      </section>

      {/* Social Channels */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Connect With Us
            </h2>
            <p className="text-body-large text-neutral-700">
              Find ZKswap on your preferred platform and stay up-to-date with the latest developments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="https://x.com/zkswap131087?s=21" className="card p-8 text-center hover:scale-105 transition-transform" target="_blank" rel="noopener noreferrer">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <XLogo className="text-primary-600" size={32} />
              </div>
              <div className="font-semibold text-neutral-900 mb-2 text-lg">X</div>
              <div className="text-body text-neutral-600">25,000+ followers</div>
            </a>
            <a href="https://github.com/polurber/ZKswap.git" className="card p-8 text-center hover:scale-105 transition-transform" target="_blank" rel="noopener noreferrer">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Github className="text-primary-600" size={32} />
              </div>
              <div className="font-semibold text-neutral-900 mb-2 text-lg">GitHub</div>
              <div className="text-body text-neutral-600">Open source</div>
            </a>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-24 bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Community Programs
            </h2>
            <p className="text-body-large text-neutral-700">
              Berbagai program untuk berkontribusi dan mendapatkan reward dari ekosistem ZKswap
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="text-primary-600" size={32} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Ambassador Program</h3>
              <p className="text-body text-neutral-700 mb-6">
                Jadilah duta ZKswap dan dapatkan reward untuk membantu membangun komunitas
                privacy DeFi di region Anda.
              </p>
              <ul className="space-y-3 text-body text-neutral-600">
                <li>• Monthly salary + performance bonuses</li>
                <li>• Exclusive access to team</li>
                <li>• Speaking opportunities at conferences</li>
                <li>• Early access to new features</li>
              </ul>
              <div className="mt-6">
                <button className="btn-primary w-full">Apply as Ambassador</button>
              </div>
            </div>
            <div className="card p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <Code className="text-primary-600" size={32} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-4">Grant Program</h3>
              <p className="text-body text-neutral-700 mb-6">
                Dapatkan funding untuk membangun tools, integrations, dan aplikasi
                yang memperluas ekosistem privacy DeFi.
              </p>
              <ul className="space-y-3 text-body text-neutral-600">
                <li>• $10K - $500K per project</li>
                <li>• Technical mentorship from team</li>
                <li>• Co-marketing opportunities</li>
                <li>• Long-term partnership potential</li>
              </ul>
              <div className="mt-6">
                <button className="btn-secondary w-full">Apply for Grant</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Community Roadmap
            </h2>
            <p className="text-body-large text-neutral-700">
              Tahapan pengembangan ZKswap yang dipandu oleh input komunitas
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>

            <div className="space-y-12">
              {/* Q1 2025 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="card p-6">
                    <div className="text-2xl font-bold text-primary-600 mb-2">Q1 2025</div>
                    <h3 className="text-subtitle font-semibold text-neutral-900 mb-3">Community Foundation</h3>
                    <ul className="text-body text-neutral-700 space-y-2">
                      <li>• Launch ambassador program</li>
                      <li>• Establish community governance</li>
                      <li>• Developer grants program</li>
                      <li>• Regular community calls</li>
                    </ul>
                  </div>
                </div>
                <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-background-surface relative z-10"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Q2 2025 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-background-surface relative z-10"></div>
                <div className="flex-1 text-left pl-8">
                  <div className="card p-6">
                    <div className="text-2xl font-bold text-primary-600 mb-2">Q2 2025</div>
                    <h3 className="text-subtitle font-semibold text-neutral-900 mb-3">Ecosystem Expansion</h3>
                    <ul className="text-body text-neutral-700 space-y-2">
                      <li>• Cross-chain privacy features</li>
                      <li>• DeFi integrations expansion</li>
                      <li>• Mobile app launch</li>
                      <li>• Community governance v2</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Q3 2025 */}
              <div className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="card p-6">
                    <div className="text-2xl font-bold text-primary-600 mb-2">Q3 2025</div>
                    <h3 className="text-subtitle font-semibold text-neutral-900 mb-3">Advanced Features</h3>
                    <ul className="text-body text-neutral-700 space-y-2">
                      <li>• MPC integration launch</li>
                      <li>• Institutional features</li>
                      <li>• Advanced privacy controls</li>
                      <li>• Developer SDK v2</li>
                    </ul>
                  </div>
                </div>
                <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-background-surface relative z-10"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Q4 2025 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-4 h-4 bg-primary-500 rounded-full border-4 border-background-surface relative z-10"></div>
                <div className="flex-1 text-left pl-8">
                  <div className="card p-6">
                    <div className="text-2xl font-bold text-primary-600 mb-2">Q4 2025</div>
                    <h3 className="text-subtitle font-semibold text-neutral-900 mb-3">Global Adoption</h3>
                    <ul className="text-body text-neutral-700 space-y-2">
                      <li>• Global regulatory compliance</li>
                      <li>• Enterprise partnerships</li>
                      <li>• Community governance tokens</li>
                      <li>• Milestone celebrations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Resources */}
      <section className="py-24 bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              Developer Resources
            </h2>
            <p className="text-body-large text-neutral-700">
              Tools dan resources untuk developers yang ingin membangun di ekosistem ZKswap
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-3">API Documentation</h3>
              <p className="text-body text-neutral-700 mb-4">
                Comprehensive API reference untuk integrasi ZKswap ke aplikasi Anda.
              </p>
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                View Documentation →
              </a>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-3">SDK & Libraries</h3>
              <p className="text-body text-neutral-700 mb-4">
                JavaScript/TypeScript SDK untuk integrasi yang mudah dan cepat.
              </p>
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                Download SDK →
              </a>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-3">Integration Guides</h3>
              <p className="text-body text-neutral-700 mb-4">
                Step-by-step guides untuk berbagai jenis integrasi dan use cases.
              </p>
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                Read Guides →
              </a>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Github className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-3">GitHub Repository</h3>
              <p className="text-body text-neutral-700 mb-4">
                Source code, examples, dan contribuciones dari komunitas.
              </p>
              <a href="https://github.com/polurber/ZKswap.git" className="text-primary-600 hover:text-primary-700 font-medium" target="_blank" rel="noopener noreferrer">
                View Repository →
              </a>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-3">Developer Discord</h3>
              <p className="text-body text-neutral-700 mb-4">
                Channel khusus untuk developers dengan support langsung dari tim.
              </p>
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                Join Discord →
              </a>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-primary-600" size={24} />
              </div>
              <h3 className="text-subtitle font-semibold text-neutral-900 mb-3">Hackathons</h3>
              <p className="text-body text-neutral-700 mb-4">
                Partisipasi dalam hackathons dan kompetisi pengembangan.
              </p>
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                View Events →
              </a>
            </div>
          </div>
        </div>
      </section>

      

      {/* Community Contributions */}
      <section className="py-24 bg-background-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-title font-bold text-neutral-900 mb-4">
              How to Contribute
            </h2>
            <p className="text-body-large text-neutral-700">
              Berbagai cara untuk berkontribusi dan berharga bagi komunitas ZKswap
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="text-primary-600" size={24} />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-3">Code Contribution</h3>
              <p className="text-body text-neutral-700">
                Contribute ke open source codebase, report bugs, atau implement features baru.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-primary-600" size={24} />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-3">Content Creation</h3>
              <p className="text-body text-neutral-700">
                Tulis artikel, buat video tutorial, atau translate documentation.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-600" size={24} />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-3">Community Support</h3>
              <p className="text-body text-neutral-700">
                Help other members di Discord/Telegram, answer questions.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="text-primary-600" size={24} />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-3">Integration</h3>
              <p className="text-body text-neutral-700">
                Build integrations, plugins, atau applications yang menggunakan ZKswap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-title font-bold text-white mb-6">
            Ready to Join the Revolution?
          </h2>
          <p className="text-body-large text-primary-100 mb-8 max-w-2xl mx-auto">
            Become part of the privacy DeFi movement dan be part of shaping the future of decentralized finance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://x.com/zkswap131087?s=21" className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
              Follow on X
            </a>
            <a href="https://github.com/polurber/ZKswap.git" className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}