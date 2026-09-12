import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Work from '@/components/Work'
import Experience from '@/components/Experience'
import Connect from '@/components/Connect'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="site-shell">
      <Sidebar />
      <main className="site-main overflow-visible">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Connect />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
