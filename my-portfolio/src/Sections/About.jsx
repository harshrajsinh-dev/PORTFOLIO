export default function About() {
  return (
    <section id="about" className="p-2 scroll-mt-32 rounded-2xl shadow bg-white grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">

         <h2 className="p-2 relative inline-block text-2xl font-bold mb-6 group">
          ABOUT
       <span className="absolute left-0 bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
         </h2>
        <p className="mt-4 text-slate-600">
          I love building clean UI, scalable React apps.
        </p>
      </div>

      <aside className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold">Skills</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {['React', 'Tailwind', 'JS', 'Node'].map(skill => (
            <span
              key={skill}
              className="text-xs bg-slate-100 px-2 py-1 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </aside>
    </section>
  )
}
