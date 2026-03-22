import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Work from '@/components/Work'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
