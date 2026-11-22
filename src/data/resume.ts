/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE.
 *  Edit this file to update the resume — no component changes needed.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Muhammad Naireza Nasution',
  shortName: 'Naireza',
  title: 'System Tester',
  tagline: 'QA engineer building reliable release processes for fast-moving agile teams.',
  // Not shown on the page currently — the hero eyebrow that used it was removed.
  location: 'Subang Jaya, Malaysia',

  /**
   * Verbatim from your Word resume.
   * NOTE: this reads as a fresh-graduate objective and undersells 5+ years of QA
   * work. A suggested replacement is in `summaryAlt` — swap the two if you agree.
   */
  summary:
    'Seeking to fully employ acquired academic knowledge while acquiring work ' +
    'experience at the same time. A committed worker with a focus to assist the ' +
    'organization to reach its goal and take on more responsibility as quickly as possible.',

  summaryAlt:
    'System tester with 5+ years owning quality in a high-velocity agile environment. ' +
    'I design and run the test process end to end — authoring cases to 95% coverage, ' +
    'introducing Playwright automation, and working directly with developers to close ' +
    'defects. I also built and run the internship programme, getting new testers ' +
    'contributing within their first week.',
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
    company: 'Sales Connection / Caction',
    location: 'Subang Jaya, Malaysia',
    role: 'System Tester',
    start: 'Dec 2020',
    // TODO: your Word resume says "Present" (last edited May 2025). Update if that changed.
    end: 'Present',
    current: true,
    blurb:
      'Own the testing process for a high-velocity agile product team, and run the ' +
      'internship programme end to end.',
    highlights: [
      'Created a detailed testing process to manage a high-velocity agile development environment.',
      'Authored test cases and executed tests for web applications, achieving 95% coverage.',
      'Introduced automated test scripts using Playwright.',
      'Communicate directly with developers to reproduce, triage and resolve bugs.',
      'Created an onboarding process for interns that gets them contributing within one week.',
      'Evaluate intern performance throughout their internship.',
    ],
    tags: ['Playwright', 'Test Strategy', 'Agile', 'Mentoring'],
  },
  {
    id: 'salesconnection-intern',
    company: 'Sales Connection',
    location: 'Subang Jaya, Malaysia',
    role: 'Intern',
    start: 'Sep 2020',
    end: 'Dec 2020',
    blurb: 'First exposure to product QA and customer-facing IT support.',
    highlights: [
      'Provided IT support to customers.',
      'Tested new release features ahead of rollout.',
      'Analysed upcoming features for testability and edge cases.',
    ],
    tags: ['Manual QA', 'IT Support'],
  },
  {
    id: 'familymart',
    company: 'Family Mart',
    location: 'Saitama, Japan',
    role: 'Store Clerk',
    start: 'Dec 2015',
    end: 'Dec 2016',
    blurb:
      'A year working and living in Japan — where the Japanese language and a habit ' +
      'for process discipline came from.',
    highlights: [
      'Managed wide-ranging daily operations, including inventory management.',
      'Placed special orders on behalf of customers.',
      'Processed POS transactions.',
      'Took a leadership role during shifts.',
    ],
    tags: ['Operations', 'Leadership'],
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
 * ⚠️ DRAFT — your Word resume has a "SKILLS" heading with nothing under it.
 * These are inferred from your work history. Please correct, cut and add to them.
 */
export type SkillGroup = { category: string; items: string[] }

export const skills: SkillGroup[] = [
  {
    category: 'Testing & QA',
    items: [
      'Test case design',
      'Test planning & strategy',
      'Regression testing',
      'Exploratory testing',
      'Defect reporting & triage',
      'Release / UAT testing',
    ],
  },
  {
    category: 'Automation',
    items: ['Playwright', 'Automated test scripts', 'Web application testing'],
  },
  {
    category: 'Tools & platforms',
    items: [
      'Git',
      'TestMu (formerly LambdaTest)',
      'Ego-Browser via Claude Code',
    ],
  },
  {
    category: 'Ways of working',
    items: ['Agile / Scrum', 'Developer collaboration', 'Onboarding design', 'Mentoring & evaluation'],
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
