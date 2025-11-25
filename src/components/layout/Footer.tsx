import React from 'react'
import { Link } from 'react-router-dom'
import { Github, MessageCircle, Book } from 'lucide-react'

const XLogo = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
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

export function Footer() {
  return (
    <footer className="bg-white border-t-3 border-neo-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-4 group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
                <img src="/logo.png" alt="ZKswap Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-3xl font-black text-neo-text tracking-tighter">ZKswap</span>
            </div>
            <p className="text-body font-medium text-neo-text">
              Privacy-first DEX aggregator untuk Solana dengan zero-knowledge proofs.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-black text-xl text-neo-primary mb-4 uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-body font-bold text-neo-text hover:text-neo-secondary hover:underline decoration-2 underline-offset-2">Features</Link></li>
              <li><Link to="/technology" className="text-body font-bold text-neo-text hover:text-neo-secondary hover:underline decoration-2 underline-offset-2">Technology</Link></li>
              <li><Link to="/security" className="text-body font-bold text-neo-text hover:text-neo-secondary hover:underline decoration-2 underline-offset-2">Security</Link></li>
              <li><a href="/docs" className="text-body font-bold text-neo-text hover:text-neo-secondary hover:underline decoration-2 underline-offset-2">API</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-black text-xl text-neo-primary mb-4 uppercase tracking-wider">Community</h3>
            <ul className="space-y-3">
              <li><Link to="/community" className="text-body font-bold text-neo-text hover:text-neo-secondary hover:underline decoration-2 underline-offset-2">Discord</Link></li>
              <li><a href="#" className="text-body font-bold text-neo-text hover:text-neo-secondary hover:underline decoration-2 underline-offset-2">Telegram</a></li>
              <li><a href="https://x.com/zkswap131087" className="text-body font-bold text-neo-text hover:text-neo-secondary hover:underline decoration-2 underline-offset-2" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://github.com/polurber/ZKswap.git" className="text-body font-bold text-neo-text hover:text-neo-secondary hover:underline decoration-2 underline-offset-2" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-black text-xl text-neo-primary mb-4 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/docs" className="text-body font-bold text-neo-text hover:text-neo-secondary hover:underline decoration-2 underline-offset-2">Documentation</Link></li>
              <li><a href="/docs" className="text-body font-bold text-neo-text hover:text-neo-secondary hover:underline decoration-2 underline-offset-2">Blog</a></li>
              <li><a href="#" className="text-body font-bold text-neo-text hover:text-neo-secondary hover:underline decoration-2 underline-offset-2">Status</a></li>
              <li><a href="/community" className="text-body font-bold text-neo-text hover:text-neo-secondary hover:underline decoration-2 underline-offset-2">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t-3 border-neo-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-bold text-neo-text">
            © 2025 ZKswap. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://x.com/zkswap131087" className="text-neo-text hover:text-neo-primary transition-transform hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">X (Twitter)</span>
              <XLogo size={24} />
            </a>
            <a href="https://github.com/polurber/ZKswap.git" className="text-neo-text hover:text-neo-primary transition-transform hover:-translate-y-1" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">GitHub</span>
              <Github size={24} strokeWidth={2.5} />
            </a>
            <a href="/community" className="text-neo-text hover:text-neo-primary transition-transform hover:-translate-y-1">
              <span className="sr-only">Discord</span>
              <MessageCircle size={24} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}