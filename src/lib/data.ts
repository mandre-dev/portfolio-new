import type { Project, SkillGroup, Experience, NavItem } from '@/types'

export const OWNER = {
  name: 'Marcos André Mendonça',
  initials: 'MA',
  role: 'Desenvolvedor Full-Stack & DevOps',
  location: 'Cabo Frio, RJ — Brasil',
  timezone: 'GMT-3 (BRT)',
  email: 'marcossandre016@gmail.com',
  github: 'https://github.com/mandre-dev',
  githubHandle: 'mandre-dev',
  linkedin: 'https://www.linkedin.com/in/marcos-andr%C3%A9-mendon%C3%A7a-b55a972a1',
  linkedinHandle: '/in/marcos-andré-mendonça',
  available: true,
  bio: `Desenvolvedor Full-Stack (Python/JavaScript) com aptidão para Devops e automação de processos com API's escaláveis.`,
} as const

export const METRICS = [
  { label: 'Experiência', value: '3+', sub: 'anos' },
  { label: 'Projetos', value: '4+', sub: 'entregues' },
  { label: 'Uptime', value: '99%', sub: 'médio em prod.' },
  { label: 'Stacks', value: '5+', sub: 'dominadas' },
] as const

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', page: 'home' },
  { label: 'Projetos', page: 'projects' },
  { label: 'Skills', page: 'skills' },
  { label: 'Experiência', page: 'experience' },
  { label: 'Contato', page: 'contact' },
]

export const PROJECTS: Project[] = [
  {
    id: 'saas-platform',
    title: 'SaaS Platform',
    description: 'Plataforma completa com auth, billing Stripe e painel admin.',
    longDescription: 'Plataforma SaaS completa com autenticação JWT, billing integrado com Stripe, painel admin e API pública documentada. Deploy em VPS com zero-downtime rolling update.',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'Stripe', 'Redis'],
    category: 'fullstack',
    color: 'blue',
    infra: [
      'Docker Compose (app + db + redis + nginx)',
      'GitHub Actions CI/CD',
      'SSL via Let\'s Encrypt automático',
      'Monitoramento com Grafana',
      'Backup automatizado do banco',
    ],
  },
  {
    id: 'api-gateway',
    title: 'API Gateway',
    description: 'Gateway com rate limiting, JWT e docs Swagger auto-gerada.',
    longDescription: 'Gateway de API com rate limiting por IP e por usuário, autenticação JWT, logging estruturado com Winston e documentação Swagger auto-gerada. 50k req/dia.',
    tech: ['Fastify', 'Redis', 'Swagger', 'Docker', 'TypeScript'],
    category: 'backend',
    color: 'purple',
  },
  {
    id: 'devops-dashboard',
    title: 'DevOps Dashboard',
    description: 'Monitoramento em tempo real com alertas e histórico de deploys.',
    longDescription: 'Dashboard de monitoramento com métricas em tempo real via Prometheus, alertas customizados e histórico de deploys.',
    tech: ['Grafana', 'Prometheus', 'Docker', 'Nginx'],
    category: 'devops',
    color: 'teal',
  },
  {
    id: 'portfolio',
    title: 'Este Portfólio',
    description: 'Next.js 14, TypeScript, Framer Motion, Three.js e deploy via CI/CD.',
    longDescription: 'O próprio portfólio como projeto técnico: Next.js 14 com App Router, TypeScript estrito, Three.js no hero, Framer Motion e deploy automático para VPS via GitHub Actions.',
    tech: ['Next.js 14', 'TypeScript', 'Three.js', 'Framer Motion', 'Tailwind'],
    category: 'frontend',
    color: 'indigo',
  },
]

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    subtitle: 'Interfaces modernas e performáticas',
    icon: '⚡',
    color: 'blue',
    skills: [
      { name: 'Next.js 14', hot: true },
      { name: 'React 18', hot: true },
      { name: 'TypeScript', hot: true },
      { name: 'Tailwind CSS', hot: true },
      { name: 'Framer Motion', hot: true },
      { name: 'Three.js' },
      { name: 'GraphQL' },
      { name: 'Jest / Vitest' },
    ],
  },
  {
    title: 'Backend',
    subtitle: 'APIs robustas e escaláveis',
    icon: '🔧',
    color: 'purple',
    skills: [
      { name: 'Node.js', hot: true },
      { name: 'Fastify', hot: true },
      { name: 'PostgreSQL', hot: true },
      { name: 'Prisma ORM', hot: true },
      { name: 'Redis', hot: true },
      { name: 'REST / tRPC' },
      { name: 'WebSockets' },
      { name: 'JWT / OAuth2' },
    ],
  },
  {
    title: 'DevOps & Infra',
    subtitle: 'Deploy automatizado e monitoramento',
    icon: '🚀',
    color: 'indigo',
    skills: [
      { name: 'Docker', hot: true },
      { name: 'Docker Compose', hot: true },
      { name: 'GitHub Actions', hot: true },
      { name: 'Nginx', hot: true },
      { name: 'Linux (Ubuntu)' },
      { name: 'Terraform' },
      { name: 'Grafana' },
      { name: 'Prometheus' },
    ],
  },
]

export const EXPERIENCES: Experience[] = [
  {
    id: 'current',
    role: 'Desenvolvedor Fullstack',
    company: 'Empresa Atual · Remoto',
    period: '2023 — Atual',
    description: 'Desenvolvimento de features end-to-end, da interface ao banco. Implementei CI/CD automatizado reduzindo o tempo de deploy de 40min para 8min. Containerizei todos os serviços da stack com Docker.',
    tech: ['Next.js', 'Docker', 'PostgreSQL', 'GitHub Actions'],
    current: true,
  },
  {
    id: 'startup',
    role: 'Desenvolvedor Backend',
    company: 'Startup XYZ · São Paulo',
    period: '2022 — 2023',
    description: 'APIs REST para app mobile com 50k+ usuários. Caching com Redis reduziu a latência das rotas principais em 60%. Setup de monitoramento com alertas automatizados.',
    tech: ['Node.js', 'Redis', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'junior',
    role: 'Desenvolvedor Junior',
    company: 'Agência ABC · Freelance',
    period: '2021 — 2022',
    description: 'Primeiros projetos reais — landing pages, pequenos sistemas e o aprendizado de que código em produção é diferente de tutorial.',
    tech: ['React', 'Node.js', 'MySQL'],
  },
]
