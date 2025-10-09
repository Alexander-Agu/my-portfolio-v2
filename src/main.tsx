import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header.tsx'
import Hero from './components/Hero/Hero.tsx'
import About from './components/About/About.tsx'
import Experience from './components/Experience/Resume.tsx'
import Projects from './components/Project/Project.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Hero />
    <Experience />
    <Projects />
    <About />
  </StrictMode>,
)
