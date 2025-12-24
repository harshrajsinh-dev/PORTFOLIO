import ProjectCard from '../components/ProjectCard'

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

  return (
    <section id="projects" className='bg-white  p-7 shadow rounded-2xl'>
      <h2 className="relative inline-block text-2xl font-bold mb-6 group">
        PROJECTS
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
      </h2>


      <div className="md:grid-cols-3 flex flex-col gap-10">
        {projects.map(p => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  )
}
