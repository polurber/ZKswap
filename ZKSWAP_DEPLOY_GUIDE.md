# 🚀 Panduan Deploy ZKSwap Website ke GitHub

## 📁 Struktar Project
```
zkswap-website/
├── src/
│   ├── components/          # React components
│   │   ├── layout/         # Navbar, Footer
│   │   └── ErrorBoundary.tsx
│   ├── pages/              # Halaman aplikasi
│   │   ├── HomePage.tsx    # Homepage
│   │   ├── TradingPage.tsx # Halaman trading
│   │   ├── FeaturesPage.tsx
│   │   ├── TechnologyPage.tsx
│   │   ├── SecurityPage.tsx
│   │   ├── CommunityPage.tsx
│   │   └── DocumentationPage.tsx
│   ├── hooks/              # Custom hooks
│   │   ├── useWallet.ts    # Wallet connection logic
│   │   ├── useJupiterSwap.ts # Swap functionality
│   │   └── use-mobile.tsx  # Mobile detection
│   ├── services/           # API dan services
│   │   ├── jupiterApi.ts   # Jupiter API integration
│   │   └── mockWallet.ts   # Mock wallet for testing
│   ├── contexts/           # React contexts
│   │   └── SolanaContext.tsx
│   ├── config/             # Configuration
│   │   └── blockchain.ts   # Blockchain config
│   ├── lib/                # Utilities
│   │   └── utils.ts        # Helper functions
│   ├── types/              # TypeScript types
│   ├── App.tsx             # Main App component
│   └── main.tsx            # Entry point
├── public/                 # Static files
│   ├── wallet-diagnostic.html
│   ├── swap-debug.html
│   └── network-test.html
├── package.json            # Dependencies
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind CSS config
├── tsconfig.json           # TypeScript config
└── README.md
```

## 🔧 Prerequisites
1. **Node.js** (version 16 atau lebih tinggi)
2. **npm** atau **pnpm** (recommended: pnpm)
3. **Git** untuk commit dan push ke GitHub

## 📥 Langkah Deploy ke GitHub

### 1. Buat Repository GitHub
```bash
# Buat repository baru di GitHub dengan nama "zkswap-website"
# Set visibility: Public atau Private sesuai kebutuhan
```

### 2. Clone dan Setup Project
```bash
# Clone repository yang baru dibuat
git clone https://github.com/YOUR_USERNAME/zkswap-website.git
cd zkswap-website

# Copy semua file dari folder zkswap-website ke repository
# (nama folder sudah sama, mudah dipindah)
```

### 3. Install Dependencies
```bash
# Install dependencies
npm install
# ATAU jika menggunakan pnpm
pnpm install
```

### 4. Development Mode
```bash
# Jalankan development server
npm run dev
# ATAU
pnpm dev

# Website akan tersedia di http://localhost:5173
```

### 5. Build untuk Production
```bash
# Build project untuk production
npm run build
# ATAU
pnpm build

# File build akan ada di folder 'dist/'
```

## 🌐 Deploy Options

### Option A: GitHub Pages
1. **Enable GitHub Pages**:
   - Masuk ke repository settings
   - Scroll ke "Pages" section
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Folder: /dist

2. **Build dan Deploy**:
```bash
# Setiap kali update, run:
npm run build
git add .
git commit -m "Update website"
git push origin main
```

3. **Akses Website**:
   - URL: `https://YOUR_USERNAME.github.io/zkswap-website`

### Option B: Netlify (Recommended)
1. **Connect ke Netlify**:
   - Login ke Netlify.com
   - Click "New site from Git"
   - Connect GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Auto Deploy**:
   - Setiap push ke main branch akan auto deploy
   - Preview deployments untuk pull requests

### Option C: Vercel
1. **Connect ke Vercel**:
   - Login ke Vercel.com
   - Import GitHub repository
   - Framework preset: Vite
   - Auto deploy enabled

### Option D: Manual Server
```bash
# Build project
npm run build

# Upload folder 'dist/' ke server web Anda
# Configure server untuk serve static files dari 'dist/'
```

## ⚙️ Environment Variables (Jika Diperlukan)

Jika menggunakan API keys atau environment variables, buat file `.env`:

```bash
# .env
VITE_API_ENDPOINT=your_api_endpoint
VITE_RPC_URL=your_rpc_url
# Tambah env variables lainnya sesuai kebutuhan
```

**Penting**: 
- File `.env` harus di-gitignore (sudah configured)
- Environment variables harus di-start dengan `VITE_`

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear cache dan reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

### Routing Issues (SPA)
Jika menggunakan GitHub Pages, tambahkan ke `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/zkswap-website/', // nama repository
  build: {
    outDir: 'dist'
  }
})
```

### Wallet Connection Issues
- Pastikan network/testnet configuration benar
- Check console logs untuk debugging
- Mock wallet harus berfungsi di development mode

## 📱 Testing
```bash
# Jalankan tests (jika ada)
npm test

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🔄 Update Workflow
```bash
# 1. Make changes
# 2. Test locally
npm run dev

# 3. Build dan test production
npm run build
npm run preview

# 4. Commit dan push
git add .
git commit -m "Description of changes"
git push origin main

# 5. Deploy (auto via Netlify/Vercel atau manual)
```

## 📞 Support
Jika ada masalah durante deploy:
1. Check browser console untuk errors
2. Verify all dependencies terinstall dengan benar
3. Ensure Node.js version compatible (16+)
4. Check network connectivity untuk API calls

---
**ZKSwap Website - Ready for Production** 🚀