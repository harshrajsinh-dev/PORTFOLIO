import Header from './Components/Header'
import Hero from './Sections/Hero'
import Projects from './Sections/Projects'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Footer from './Components/Footer'
import Cursor from './Components/Cursor'
import Lenis from 'lenis'

export default function App() {
  // Initialize Lenis
  const lenis = new Lenis({
    autoRaf: true,
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <Cursor />

      <main className="max-w-5xl mx-auto p-6 space-y-16">
        <section id='home'>
          <Hero />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />

      <div>
      </div>
    </div>
  )
}
