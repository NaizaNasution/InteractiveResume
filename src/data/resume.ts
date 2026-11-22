/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE.
 *  Edit this file to update the resume — no component changes needed.
 *
 *  The page is written to serve two readers' goals:
 *    1. An employer sizing up an experienced QA Automation Engineer.
 *    2. An employer who wants everything visible without hunting for it.
 *  So: automation leads, nothing is hidden behind a click by default, and the
 *  copy is written in the first person rather than as resume shorthand.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Muhammad Naireza Nasution',
  shortName: 'Naireza',

  /**
   * Professional identity, not the employer's job title. The accurate title that
   * Caction gives the role ("System Tester") stays on the Experience entry below.
   */
  title: 'QA Automation Engineer',

  tagline:
    'Playwright automation, test strategy and release quality for fast-moving agile teams.',

  // Not shown on the page currently — the hero eyebrow that used it was removed.
  location: 'Subang Jaya, Malaysia',

  summary:
    'QA automation engineer with six years owning quality in a high-velocity agile ' +
    'environment. I introduced Playwright to the team\u2019s release process, design and ' +
    'run testing end to end — authoring cases to 95% coverage — and work directly with ' +
    'developers to reproduce and close defects. I also built and run the internship ' +
    'programme, getting new testers contributing within their first week.',

  /**
   * The original objective statement, kept verbatim from your Word resume for
   * reference. It reads as a fresh-graduate objective, so the page no longer uses it.
   */
  summaryOriginal:
    'Seeking to fully employ acquired academic knowledge while acquiring work ' +
    'experience at the same time. A committed worker with a focus to assist the ' +
    'organization to reach its goal and take on more responsibility as quickly as possible.',
} as const

export const contact = {
  email: 'nairezanasution@gmail.com',
  phone: '+6285975007451',
  linkedin: 'https://www.linkedin.com/in/muhammad-naireza-b065a71b4/',
  linkedinLabel: 'muhammad-naireza',
} as const

export type Job = {
  id: string
  company: string
  location: string
  role: string
  start: string
  end: string
  current?: boolean
  blurb: string
  highlights: string[]
  tags: string[]
}

export const experience: Job[] = [
  {
    id: 'caction',
    company: 'Caction',
    location: 'Subang Jaya, Malaysia',
    role: 'QA Automation Engineer',
    start: 'Dec 2020',
    // TODO: confirm this is still current.
    end: 'Present',
    current: true,
    blurb:
      'Own the testing process for a high-velocity agile product team — including the ' +
      'move from manual testing into Playwright automation — and run the internship ' +
      'programme end to end.',
    highlights: [
      'Introduced automated test scripts using Playwright.',
      'Authored test cases and executed tests for web applications, achieving 95% coverage.',
      'Created a detailed testing process to manage a high-velocity agile development environment.',
      'Communicate directly with developers to reproduce, triage and resolve bugs.',
      'Created an onboarding process for interns that gets them contributing within one week.',
      'Evaluate intern performance throughout their internship.',
    ],
    tags: ['Playwright', 'Test Automation', 'Test Strategy', 'Agile', 'Mentoring'],
  },
  {
    id: 'caction-intern',
    company: 'Caction',
    location: 'Subang Jaya, Malaysia',
    role: 'Software Development / Customer Support Intern',
    start: 'Sep 2020',
    end: 'Dec 2020',
    blurb: 'First exposure to product QA and customer-facing IT support.',
    highlights: [
      'Tested new release features ahead of rollout.',
      'Analysed upcoming features for testability and edge cases.',
      'Provided IT support to customers.',
    ],
    tags: ['Manual QA', 'IT Support'],
  },
]

export type Education = {
  school: string
  credential: string
  detail: string
  start: string
  end: string
}

export const education: Education[] = [
  {
    school: 'UOW Malaysia KDU',
    credential: 'Bachelor of Information Systems',
    detail: 'CGPA 3.48',
    start: 'Jan 2018',
    end: '2020',
  },
  {
    school: 'INTI International College Subang',
    credential: 'Foundation in Business Information Technology',
    detail: 'CGPA 3.14',
    start: 'Jan 2013',
    end: 'Apr 2014',
  },
]

/**
 * Automation leads deliberately — it is the first thing an employer should read.
 *
 * ⚠️ Still partly a draft: your Word resume has a "SKILLS" heading with nothing
 * under it, so everything except the tools you named is inferred from your history.
 */
export type SkillGroup = { category: string; items: string[] }

export const skills: SkillGroup[] = [
  {
    category: 'Automation',
    items: [
      'Playwright',
      'Automated test scripts',
      'Web application testing',
      'Regression automation',
    ],
  },
  {
    category: 'Tools & platforms',
    items: ['Git', 'TestMu (formerly LambdaTest)', 'Ego-Browser via Claude Code'],
  },
  {
    category: 'Testing & QA',
    items: [
      'Test case design',
      'Test planning & strategy',
      'Exploratory testing',
      'Defect reporting & triage',
      'Release / UAT testing',
    ],
  },
  {
    category: 'Ways of working',
    items: [
      'Agile / Scrum',
      'Developer collaboration',
      'Onboarding design',
      'Mentoring & evaluation',
    ],
  },
]

export type Language = { name: string; level: string; strength: number }

export const languages: Language[] = [
  { name: 'English', level: 'Professional', strength: 5 },
  { name: 'Malay', level: 'Native / Fluent', strength: 5 },
  { name: 'Indonesian', level: 'Native / Fluent', strength: 5 },
  // TODO: adjust — your resume lists Japanese without a level.
  { name: 'Japanese', level: 'Conversational', strength: 3 },
]

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const
