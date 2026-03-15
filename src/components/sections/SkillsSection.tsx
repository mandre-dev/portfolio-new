'use client'

import { motion } from 'framer-motion'
import { SKILL_GROUPS } from '@/lib/data'
import { cn } from '@/lib/utils'

const iconBg: Record<string, string> = {
  blue: '#ede9fe',
  purple: '#f3e8ff',
  indigo: '#e0e7ff',
}

export default function SkillsSection() {
  return (
    <section className="px-10 py-14 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="mb-8">
        <h2 className="text-[22px] font-bold tracking-tight" style={{ color: 'var(--text)' }}>
          Skills & Tecnologias
        </h2>
        <p className="text-sm mt-0.5 font-light" style={{ color: 'var(--muted)' }}>
          Stack que uso no dia a dia.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: gi * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="surface-card p-6"
          >
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
                style={{ background: iconBg[group.color] ?? '#ede9fe' }}
              >
                {group.icon}
              </div>
              <div>
                <div className="font-bold text-[15px]" style={{ color: 'var(--text)' }}>
                  {group.title}
                </div>
                <div className="text-[11px]" style={{ color: 'var(--hint)' }}>
                  {group.subtitle}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map(skill => (
                <span
                  key={skill.name}
                  className={cn(
                    'px-3 py-1 rounded-md text-[12px] font-medium border transition-all cursor-default',
                    skill.hot
                      ? 'text-[var(--accent-2)]'
                      : 'text-[var(--muted)] hover:text-[var(--accent-mid)]'
                  )}
                  style={{
                    background: skill.hot ? '#ede9fe' : 'var(--surface2)',
                    borderColor: skill.hot ? '#c4b5fd' : 'var(--border)',
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
