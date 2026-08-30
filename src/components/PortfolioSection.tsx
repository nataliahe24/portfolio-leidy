import { ProjectCard } from "@/components/molecules/ProjectCard";
import { projects } from "@/lib/data";

export function PortfolioSection() {
  return (
    <section
      id="projects"
      className="w-full py-20 md:py-32 bg-gradient-to-br
        from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className="flex flex-col items-center justify-center
            space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2
              className="font-headline text-3xl font-bold
                tracking-tighter sm:text-5xl bg-gradient-to-r
                from-blue-400 via-cyan-400 to-blue-400
                bg-clip-text text-transparent"
            >
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-slate-300 md:text-xl/relaxed">
              A selection of projects that showcase my skills in frontend and
              backend development.
            </p>
          </div>
        </div>
        <div
          className="mx-auto grid gap-8 py-12 sm:grid-cols-1
            md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
