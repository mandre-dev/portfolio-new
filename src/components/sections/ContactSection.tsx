'use client'

import { motion } from 'framer-motion'
import { OWNER } from '@/lib/data'

export default function ContactSection() {
  return (
    <section className="px-10 py-14" style={{ borderColor: 'var(--border)' }}>
      <div className="mb-8">
        <h2 className="text-[22px] font-bold tracking-tight" style={{ color: 'var(--text)' }}>
          Vamos conversar
        </h2>
        <p className="text-sm mt-0.5 font-light" style={{ color: 'var(--muted)' }}>
          Aberto a projetos, vagas CLT/PJ e consultorias.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="surface-card overflow-hidden"
        >
          <div
            className="flex items-center gap-2.5 px-6 py-5 border-b"
            style={{ borderColor: 'var(--border)' }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white"
              style={{ background: 'var(--grad)' }}
            >
              ✉
            </div>
            <div>
              <div className="text-[15px] font-bold" style={{ color: 'var(--text)' }}>
                Enviar mensagem
              </div>
              <div className="text-xs" style={{ color: 'var(--muted)' }}>
                Respondo em até 24h
              </div>
            </div>
          </div>

          <div className="p-6">
            {/* Status */}
            <div
              className="flex items-center gap-3 p-4 rounded-[10px] mb-6"
              style={{
                background: 'var(--success-bg)',
                border: '1px solid var(--success-border)',
              }}
            >
              <div className="relative w-3 h-3 flex-shrink-0">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: 'var(--success)' }}
                />
                <div
                  className="absolute inset-[-4px] rounded-full border-2 animate-ping opacity-50"
                  style={{ borderColor: 'var(--success)' }}
                />
              </div>
              <div>
                <div className="text-[13px] font-semibold" style={{ color: 'var(--success)' }}>
                  Disponível para novos projetos
                </div>
                <div className="text-xs" style={{ color: 'var(--success)', opacity: 0.7 }}>
                  {OWNER.location} · Remoto ou presencial
                </div>
              </div>
            </div>

            {/* Form fields */}
            <div className="flex flex-col gap-3.5">
              <div className="grid grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>
                    Nome
                  </label>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="rounded-[10px] px-3.5 py-2.5 text-sm outline-none transition-all"
                    style={{
                      background: 'var(--surface2)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                      fontFamily: 'var(--font-plus-jakarta)',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'var(--accent-mid)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="rounded-[10px] px-3.5 py-2.5 text-sm outline-none transition-all"
                    style={{
                      background: 'var(--surface2)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                      fontFamily: 'var(--font-plus-jakarta)',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'var(--accent-mid)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>
                  Assunto
                </label>
                <input
                  type="text"
                  placeholder="Projeto, vaga, parceria..."
                  className="rounded-[10px] px-3.5 py-2.5 text-sm outline-none transition-all"
                  style={{
                    background: 'var(--surface2)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                    fontFamily: 'var(--font-plus-jakarta)',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent-mid)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold" style={{ color: 'var(--muted)' }}>
                  Mensagem
                </label>
                <textarea
                  placeholder="Descreva o projeto ou oportunidade..."
                  rows={4}
                  className="rounded-[10px] px-3.5 py-2.5 text-sm outline-none transition-all resize-y"
                  style={{
                    background: 'var(--surface2)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                    fontFamily: 'var(--font-plus-jakarta)',
                  }}
                  onFocus={e => (e.target.style.borderColor = 'var(--accent-mid)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--border)')}
                />
              </div>
              <button
                className="flex items-center gap-2 px-7 py-3 rounded-[10px] text-white text-sm font-semibold w-fit transition-all hover:opacity-90 hover:-translate-y-px"
                style={{ background: 'var(--grad)' }}
                onClick={() => alert('Configure com Formspree ou seu backend!')}
              >
                Enviar mensagem
              </button>
            </div>
          </div>
        </motion.div>

        {/* Links + location */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4"
        >
          <div className="surface-card overflow-hidden">
            <div
              className="flex items-center gap-2.5 px-6 py-5 border-b"
              style={{ borderColor: 'var(--border)' }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-content text-white flex items-center justify-center"
                style={{ background: 'var(--grad)' }}
              >
                🔗
              </div>
              <div>
                <div className="text-[15px] font-bold" style={{ color: 'var(--text)' }}>
                  Redes & Perfis
                </div>
                <div className="text-xs" style={{ color: 'var(--muted)' }}>
                  {OWNER.name}
                </div>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-2.5">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  ),
                  name: 'GitHub',
                  handle: OWNER.githubHandle,
                  href: OWNER.github,
                },
                { icon: 'in', name: 'LinkedIn', handle: OWNER.linkedinHandle, href: OWNER.linkedin },
                { icon: '@', name: 'Email', handle: OWNER.email, href: `mailto:${OWNER.email}` },
                { icon: '↓', name: 'Currículo', handle: 'Download PDF', href: '#' },
              ].map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-[10px] group transition-all"
                  style={{
                    background: 'var(--surface2)',
                    border: '1px solid var(--border)',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border-hover)'
                    ;(e.currentTarget as HTMLElement).style.background = '#ede9fe'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                    ;(e.currentTarget as HTMLElement).style.background = 'var(--surface2)'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold"
                      style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                      }}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                        {link.name}
                      </div>
                      <div className="text-xs" style={{ color: 'var(--muted)' }}>
                        {link.handle}
                      </div>
                    </div>
                  </div>
                  <span
                    className="text-lg transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                    style={{ color: 'var(--hint)' }}
                  >
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Location card */}
          <div
            className="rounded-[14px] p-5"
            style={{ background: 'var(--surface2)', border: '1px solid var(--border)' }}
          >
            <div
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--hint)' }}
            >
              Localização
            </div>
            <div className="text-[15px] font-bold mb-1" style={{ color: 'var(--text)' }}>
              Cabo Frio, RJ
            </div>
            <div className="text-[13px]" style={{ color: 'var(--muted)' }}>
              Brasil · Remoto ou presencial
            </div>
            <div
              className="mt-3.5 pt-3.5 text-xs"
              style={{
                borderTop: '1px solid var(--border)',
                color: 'var(--muted)',
              }}
            >
              Fuso horário:{' '}
              <strong style={{ color: 'var(--text)' }}>{OWNER.timezone}</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
