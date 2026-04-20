// ─── Project types ───────────────────────────────────────────────
export interface Project {
  id: string
  title: string
  image?: string
  description: string
  longDescription?: string
  tech: string[]
  category: 'fullstack' | 'backend' | 'devops' | 'frontend'
  color: 'blue' | 'purple' | 'teal' | 'indigo'
  githubUrl?: string
  liveUrl?: string
  infra?: string[]
}

// ─── Skill types ─────────────────────────────────────────────────
export interface SkillGroup {
  title: string
  subtitle: string
  icon: string
  color: 'blue' | 'purple' | 'indigo'
  skills: Skill[]
}

export interface Skill {
  name: string
  hot?: boolean
}

// ─── Experience types ─────────────────────────────────────────────
export interface Experience {
  id: string
  role: string
  company: string
  period: string
  description: string
  tech: string[]
  current?: boolean
}

// ─── Nav types ────────────────────────────────────────────────────
export type PageName = 'home' | 'projects' | 'skills' | 'experience' | 'contact'

export interface NavItem {
  label: string
  page: PageName
}
