import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ProjectsSection } from '@/components/sections/projects'
import { ExperienceSection } from '@/components/sections/experience'
import { PapersSection } from '@/components/sections/papers'
import { ContactSection, Footer } from '@/components/sections/contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <PapersSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

