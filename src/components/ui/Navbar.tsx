'use client'

import { useTheme } from '@/hooks/useTheme'
import { NAV_ITEMS, OWNER } from '@/lib/data'
import type { PageName } from '@/types'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface NavbarProps {
  currentPage: PageName
  onNavigate: (page: PageName) => void
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const { toggle, isDark, mounted } = useTheme()

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-10 h-16 border-b"
      style={{
        background: 'var(--nav-bg)',
        backdropFilter: 'blur(16px)',
        borderColor: 'var(--border)',
        transition: 'background 0.3s ease',
      }}
    >
      {/* Logo */}
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center gap-2.5 font-semibold text-[15px] hover:opacity-80 transition-opacity"
        style={{ color: 'var(--text)' }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[13px] font-extrabold"
          style={{ background: 'var(--grad)' }}
        >
          {OWNER.initials}
        </div>
        Portfólio
      </button>

      {/* Nav links */}
      <ul className="flex gap-0.5 list-none">
        {NAV_ITEMS.map(item => (
          <li key={item.page}>
            <button
              onClick={() => onNavigate(item.page)}
              className={cn(
                'px-3.5 py-1.5 rounded-lg text-[13px] font-medium transition-all',
                currentPage === item.page
                  ? 'text-[var(--accent-mid)]'
                  : 'text-[var(--muted)] hover:text-[var(--text)]'
              )}
              style={{
                background: currentPage === item.page ? 'var(--surface2)' : 'transparent',
              }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-2.5">
        {/* Theme toggle */}
        {mounted && (
          <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.92 }}
            title={isDark ? 'Modo claro' : 'Modo escuro'}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-base transition-all"
            style={{
              border: '1px solid var(--border)',
              background: 'var(--surface2)',
              color: 'var(--muted)',
            }}
          >
            {isDark ? '☀️' : '🌙'}
          </motion.button>
        )}
      </div>
    </nav>
  )
}
