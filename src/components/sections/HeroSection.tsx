'use client'

import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { OWNER, METRICS } from '@/lib/data'
import type { PageName } from '@/types'

const HeroCanvas = lazy(() => import('@/components/three/HeroCanvas'))

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

interface HeroProps {
  onNavigate: (page: PageName) => void
}

export default function HeroSection({ onNavigate }: HeroProps) {
  return (
    <section
      className="relative overflow-hidden border-b"
      style={{
        background: 'var(--surface)',
        borderColor: 'var(--border)',
        minHeight: '92vh',
      }}
    >
      {/* Three.js canvas — right side */}
      <div className="absolute right-0 top-0 w-[50%] h-full opacity-90 pointer-events-none">
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </div>

      {/* Gradient fade over canvas */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, var(--surface) 20%, transparent 50%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center px-10 py-20" style={{ minHeight: '92vh' }}>
        {/* Kicker */}
        <motion.div {...fadeUp(0)} className="mb-6">
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold"
            style={{
              background: 'rgba(22, 163, 74, 0.1)',
              border: '1px solid rgba(22, 163, 74, 0.35)',
              color: '#16a34a',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
              style={{ background: '#16a34a' }}
            />
            Seja bem-vindo ao meu portf&oacute;lio!
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.1)}
          className="font-display mb-2 leading-[0.95]"
          style={{
            fontSize: 'clamp(52px, 8vw, 96px)',
            fontFamily: 'var(--font-cabinet)',
            fontWeight: 800,
            letterSpacing: '-3px',
            color: 'var(--text)',
          }}
        >
          Marcos André<br />
          <span className="grad-text">Mendon&ccedil;a.</span>
        </motion.h1>

        {/* Role */}
        <motion.p
          {...fadeUp(0.18)}
          className="text-lg font-normal mb-4"
          style={{ color: 'var(--muted)' }}
        >
          Desenvolvedor{' '}
          <span className="font-semibold" style={{ color: 'var(--accent-mid)' }}>
            Full-Stack &amp; DevOps
          </span>
        </motion.p>

        {/* Location */}
        <motion.div
          {...fadeUp(0.24)}
          className="flex items-center gap-1.5 text-[13px] mb-7"
          style={{ color: 'var(--hint)' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {OWNER.location}
        </motion.div>

        {/* Bio */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-[15px] font-light leading-relaxed mb-9 max-w-[480px]"
          style={{ color: 'var(--muted)' }}
        >
          Desenvolvedor Full-Stack{' '}
          <strong style={{ color: 'var(--text)', fontWeight: 600 }}>
            (Python/JavaScript)
          </strong>{' '}
          com aptid&atilde;o para{' '}
          <strong style={{ color: 'var(--text)', fontWeight: 600 }}>
            DevOps
          </strong>{' '}
          e automa&ccedil;&atilde;o de processos com{' '}
          <strong style={{ color: 'var(--text)', fontWeight: 600 }}>
            APIs escal&aacute;veis.
          </strong>
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.36)} className="flex gap-2.5 mb-14 flex-wrap">
          <button
            onClick={() => onNavigate('projects')}
            className="px-7 py-3 rounded-[10px] text-white text-sm font-semibold transition-all hover:opacity-90 hover:-translate-y-px"
            style={{ background: 'var(--grad)' }}
          >
            Ver projetos
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-7 py-3 rounded-[10px] text-sm font-medium transition-all hover:-translate-y-px"
            style={{
              border: '1px solid var(--border)',
              background: 'var(--surface)',
              color: 'var(--text)',
            }}
          >
            Entrar em contato
          </button>
        </motion.div>

        {/* Metrics */}
        <motion.div
          {...fadeUp(0.44)}
          className="grid grid-cols-4 gap-4 max-w-[560px]"
        >
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
              className="rounded-[10px] p-5 hover:-translate-y-0.5 transition-transform"
              style={{ background: 'var(--surface2)' }}
            >
              <div
                className="text-[11px] font-semibold uppercase tracking-wider mb-1.5"
                style={{ color: 'var(--hint)' }}
              >
                {m.label}
              </div>
              <div className="text-[32px] font-extrabold leading-none tracking-tight grad-text">
                {m.value}
              </div>
              <div className="text-xs mt-1 font-medium" style={{ color: 'var(--success)' }}>
                {m.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}