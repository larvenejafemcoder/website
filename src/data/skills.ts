export interface Skill {
  name: string
  level: number
  category: string
  icon?: string
}

export interface SkillCategory {
  name: string
  color: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Systems & Low-Level',
    color: '#b026ff',
    skills: [
      { name: 'C/C++', level: 85, category: 'Systems' },
      { name: 'Rust', level: 70, category: 'Systems' },
      { name: 'Assembly', level: 55, category: 'Systems' },
      { name: 'Linux', level: 90, category: 'Systems' },
      { name: 'Python', level: 88, category: 'Systems' },
      { name: 'C#/.NET', level: 75, category: 'Systems' },
    ],
  },
  {
    name: 'Frontend',
    color: '#ff2bd6',
    skills: [
      { name: 'TypeScript', level: 92, category: 'Frontend' },
      { name: 'React', level: 88, category: 'Frontend' },
      { name: 'Astro', level: 80, category: 'Frontend' },
      { name: 'Next.js', level: 85, category: 'Frontend' },
      { name: 'Three.js', level: 65, category: 'Frontend' },
      { name: 'TailwindCSS', level: 90, category: 'Frontend' },
    ],
  },
  {
    name: 'CS Fundamentals',
    color: '#33d1ff',
    skills: [
      { name: 'Algorithms', level: 82, category: 'CS' },
      { name: 'Data Structures', level: 85, category: 'CS' },
      { name: 'OS Concepts', level: 78, category: 'CS' },
      { name: 'Networking', level: 72, category: 'CS' },
      { name: 'Security', level: 68, category: 'CS' },
    ],
  },
  {
    name: 'Tools & Infra',
    color: '#00ffe1',
    skills: [
      { name: 'Git', level: 90, category: 'Tools' },
      { name: 'Docker', level: 75, category: 'Tools' },
      { name: 'CI/CD', level: 72, category: 'Tools' },
      { name: 'SQL', level: 78, category: 'Tools' },
      { name: 'Bash', level: 88, category: 'Tools' },
    ],
  },
]
