'use client'

import { motion } from 'framer-motion'
import { EXPERIENCES } from '@/lib/data'

export default function ExperienceSection() {
  return (
    <section className="px-10 py-14 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="mb-8">
        <h2 className="text-[22px] font-bold tracking-tight" style={{ color: 'var(--text)' }}>
          Experiência Profissional
        </h2>
        <p className="text-sm mt-0.5 font-light" style={{ color: 'var(--muted)' }}>
          Trajetória e aprendizados.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-[19px] top-2 bottom-2 w-px"
          style={{ background: 'var(--border)' }}
        />

        <div className="flex flex-col">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-7 py-5 group"
            >
              {/* Dot */}
              <div className="flex flex-col items-center flex-shrink-0 pt-1">
                <div
                  className="w-2.5 h-2.5 rounded-full border-2 relative z-10 transition-colors"
                  style={{
                    background: exp.current ? 'var(--accent-mid)' : 'var(--surface)',
                    borderColor: 'var(--accent-mid)',
                  }}
                />
              </div>

              {/* Content */}
              <div className="pb-2">
                <div
                  className="text-[11px] font-semibold uppercase tracking-wider mb-1"
                  style={{ color: 'var(--hint)' }}
                >
                  {exp.period}
                  {exp.current && (
                    <span
                      className="ml-2 px-2 py-0.5 rounded-full text-[10px] normal-case tracking-normal"
                      style={{
                        background: 'var(--success-bg)',
                        color: 'var(--success)',
                        border: '1px solid var(--success-border)',
                      }}
                    >
                      atual
                    </span>
                  )}
                </div>
                <div className="text-[15px] font-bold mb-0.5" style={{ color: 'var(--text)' }}>
                  {exp.role}
                </div>
                <div className="text-[13px] mb-2" style={{ color: 'var(--muted)' }}>
                  {exp.company}
                </div>
                <p
                  className="text-[13px] leading-relaxed font-light max-w-[540px]"
                  style={{ color: 'var(--muted)' }}
                >
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {exp.tech.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[12px] font-medium"
                      style={{
                        background: 'var(--surface2)',
                        color: 'var(--muted)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
