import ProjectCard from '../Components/ProjectCard'
import Slider from '../Components/Slider'

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio',
      desc: 'google.com',
      tech: ['React', 'Tailwind', 'GSAP ']
    },
    {
      title: 'Animated Stories',
      desc: 'Hindi story voice-over videos',
      tech: ['React', 'Lottie']
    },
    {
      title: 'Digital Card',
      desc: 'Premium event e-card',
      tech: ['HTML', 'Tailwind']
    },

  ]
  return <Slider />
}
