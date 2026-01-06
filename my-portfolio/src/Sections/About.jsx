export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-32 max-w-5xl mx-auto px-4 py-16"
    >
      {/* Heading */}
      <h2 className="text-4xl font-semibold tracking-tight mb-4">
        About
      </h2>

      <p className="text-slate-600 max-w-2xl mb-14">
        I’m a full-stack developer focused on building reliable, scalable
        web applications with clean architecture and thoughtful UX.
      </p>

      {/* Skills */}
      <div className="grid gap-10 md:grid-cols-3">
        
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">
            Frontend
          </h3>
          <ul className="space-y-2 text-slate-600">
            <li>React</li>
            <li>JavaScript</li>
            <li>Tailwind</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">
            Backend
          </h3>
          <ul className="space-y-2 text-slate-600">
            <li>Node.js</li>
            <li>Express</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-3">
            Tools & Infra
          </h3>
          <ul className="space-y-2 text-slate-600">
            <li>MongoDB</li>
            <li>Git & GitHub</li>
            <li>Vercel</li>
          </ul>
        </div>

      </div>
    </section>
  )
}
