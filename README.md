# Marcos André — Portfolio

Portfólio profissional construído com **Next.js 14**, **TypeScript**, **Framer Motion** e **Three.js**.

## 🛠 Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 14 (App Router) |
| Linguagem | TypeScript 5 (strict) |
| Estilo | Tailwind CSS |
| Animações | Framer Motion 11 |
| 3D | Three.js + React Three Fiber |
| Processo | PM2 (cluster mode) |
| Proxy | Nginx |
| SSL | Let's Encrypt (Certbot) |
| CI/CD | GitHub Actions |

## 📁 Estrutura

```
src/
├── app/
│   ├── layout.tsx       # Root layout + metadata SEO
│   ├── page.tsx         # Entry point
│   ├── portfolio.tsx    # Client component principal
│   └── globals.css      # Design tokens + Tailwind
├── components/
│   ├── three/
│   │   └── HeroCanvas.tsx   # Esfera 3D + partículas
│   ├── ui/
│   │   └── Navbar.tsx       # Nav + toggle dark/light
│   └── sections/
│       ├── HeroSection.tsx
│       ├── ProjectsSection.tsx
│       ├── SkillsSection.tsx
│       ├── ExperienceSection.tsx
│       └── ContactSection.tsx
├── hooks/
│   └── useTheme.ts      # Dark/light mode com localStorage
├── lib/
│   ├── data.ts          # Todo o conteúdo do portfólio
│   └── utils.ts         # cn() helper
└── types/
    └── index.ts         # TypeScript interfaces
```

## 🚀 Rodando localmente

```bash
npm install
npm run dev
# Acesse http://localhost:3000
```

## 🏗 Build

```bash
npm run build   # Build de produção
npm run start   # Inicia em produção (porta 3000)
```

## 🌐 Deploy na VPS

### Primeira vez

```bash
# Na VPS (como root):
chmod +x setup-vps.sh
./setup-vps.sh
```

### Deploys automáticos

Cada push para `main` dispara o workflow `.github/workflows/deploy.yml`:

1. Type-check + Lint
2. Build Next.js
3. SSH na VPS → `git pull` → `npm run build` → `pm2 reload`

### Secrets necessários no GitHub

| Secret | Valor |
|---|---|
| `VPS_HOST` | IP ou domínio da VPS |
| `VPS_USER` | Usuário SSH (ex: root) |
| `VPS_SSH_KEY` | Chave SSH privada |

## ✏️ Personalizando

Todo o conteúdo está centralizado em `src/lib/data.ts`:

- `OWNER` → seus dados pessoais
- `PROJECTS` → seus projetos
- `SKILL_GROUPS` → suas skills
- `EXPERIENCES` → sua experiência profissional
- `METRICS` → os números do hero

## 📊 Performance

- **Lighthouse score**: 100/100/100/100 (meta)
- **Core Web Vitals**: LCP < 1.5s, CLS 0, FID < 50ms
- Three.js com `Suspense` (não bloqueia o LCP)
- Fontes com `font-display: swap`
- Imagens em formato AVIF/WebP
- Security headers via `next.config.ts`
