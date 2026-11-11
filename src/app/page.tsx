import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ProjectsSection } from '@/components/sections/projects'
import { ResultsSection } from '@/components/sections/results'
import { ExperienceSection } from '@/components/sections/experience'
import { SkillsSection } from '@/components/sections/skills'
import { PapersSection } from '@/components/sections/papers'
import { ContactSection, Footer } from '@/components/sections/contact'

const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Iliass Sijelmassi',
  url: 'https://www.iliasssijelmassi.com',
  image: 'https://www.iliasssijelmassi.com/headshot.jpg',
  jobTitle: 'Quantitative Researcher Intern',
  worksFor: { '@type': 'Organization', name: 'WorldQuant' },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'École Polytechnique' },
    { '@type': 'CollegeOrUniversity', name: 'HEC Paris' },
    { '@type': 'CollegeOrUniversity', name: 'INP-ENSEEIHT' },
  ],
  sameAs: [
    'https://github.com/IliassSjm',
    'https://www.linkedin.com/in/iliass-sijelmassi-068b46189/',
  ],
}

export default function Home() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="content" className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ResultsSection />
        <ExperienceSection />
        <SkillsSection />
        <PapersSection />
        <ContactSection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  )
}
