'use client'

import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { PageName } from '@/types'

import Navbar from '@/components/ui/Navbar'
import HeroSection from '@/components/sections/HeroSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import ContactSection from '@/components/sections/ContactSection'
import { OWNER } from '@/lib/data'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
}

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState<PageName>('home')

  const navigate = useCallback((page: PageName) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar currentPage={currentPage} onNavigate={navigate} />

      <AnimatePresence mode="wait">
        <motion.main
          key={currentPage}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {currentPage === 'home' && (
            <>
              <HeroSection onNavigate={navigate} />
              <ProjectsSection preview />
            </>
          )}
          {currentPage === 'projects' && <ProjectsSection />}
          {currentPage === 'skills' && <SkillsSection />}
          {currentPage === 'experience' && <ExperienceSection />}
          {currentPage === 'contact' && <ContactSection />}
        </motion.main>
      </AnimatePresence>

      <footer
        className="flex items-center justify-between px-10 py-6 border-t text-xs"
        style={{
          borderColor: 'var(--border)',
          background: 'var(--surface)',
          color: 'var(--hint)',
        }}
      >
        <div className="font-bold text-sm" style={{ color: 'var(--text)' }}>
          {OWNER.name.split(' ')[0]}{' '}
          <span className="grad-text">{OWNER.name.split(' ')[1]}</span>
          <span> © 2026 </span>  
        </div>
        

        <div className="flex items-center gap-1.5">
          <span>Feito com</span>
            {['Next.js 14', 'TypeScript', 'Framer Motion', 'Three.js'].map((tech, i, arr) => (
          <span key={tech}>
            <span style={{ color: 'var(--accent-mid)', fontWeight: 600 }}>{tech}</span>
              {i < arr.length - 1 && <span style={{ color: 'var(--hint)' }}> · </span>}
            </span>
          ))}
        </div>
      </footer>
    </div>
  )
}
