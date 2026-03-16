'use client'

import { motion } from 'framer-motion'
import { PROJECTS } from '@/lib/data'
import type { Project } from '@/types'

const iconColors: Record<Project['color'], string> = {
  blue: 'linear-gradient(135deg,#4f63e8,#6366f1)',
  purple: 'linear-gradient(135deg,#7c3aed,#9333ea)',
  teal: 'linear-gradient(135deg,#0891b2,#0e7490)',
  indigo: 'linear-gradient(135deg,#4338ca,#6366f1)',
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

interface Props {
  preview?: boolean
}

export default function ProjectsSection({ preview = false }: Props) {
  const projects = preview ? PROJECTS.slice(0, 2) : PROJECTS

  return (
    <section className="px-10 py-14 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-[22px] font-bold tracking-tight" style={{ color: 'var(--text)' }}>
            {preview ? 'Projetos em destaque' : 'Meus Projetos'}
          </h2>
          <p className="text-sm mt-0.5 font-light" style={{ color: 'var(--muted)' }}>
            {preview ? 'Trabalhos recentes selecionados' : 'Confira abaixo ⬇'}
          </p>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-2.5"
      >
        {projects.map(project => (
          <motion.a
            key={project.id}
            variants={item}
            href={project.githubUrl ?? project.liveUrl ?? '#'}
            target="_blank"
            rel="noreferrer"
            className="surface-card flex items-center justify-between gap-5 p-5 cursor-pointer group"
            style={{ textDecoration: 'none' }}
          >
            <div className="flex items-center gap-4 min-w-0">
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-[10px] flex-shrink-0 overflow-hidden"
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  // fallback — letra inicial se não tiver imagem
                  <div
                    className="w-full h-full flex items-center justify-center text-white text-base font-extrabold"
                    style={{ background: iconColors[project.color] }}
                  >
                    {project.title[0]}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="min-w-0">
                <div className="font-bold text-[15px] mb-0.5" style={{ color: 'var(--text)' }}>
                  {project.title}
                </div>
                <div
                  className="text-[13px] font-light max-w-[420px]"
                  style={{ color: 'var(--muted)' }}
                >
                  {project.description}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 flex-shrink-0">
              {/* Tech tags */}
              <div className="flex gap-1.5 flex-wrap justify-end">
                {project.tech.slice(0, 4).map(t => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                    style={{
                      background: 'var(--surface2)',
                      color: 'var(--accent-mid)',
                      border: '1px solid #e0e7ff',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <span
                className="text-lg transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                style={{ color: 'var(--hint)' }}
              >
                ↗
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  )
}