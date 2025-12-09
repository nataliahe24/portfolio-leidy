import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function PortfolioSection() {
  return (
    <section
      id="projects"
      className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-slate-300 md:text-xl/relaxed">
              A selection of projects that showcase my skills in frontend and
              backend development.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find(
              (p) => p.id === project.image
            );
            return (
              <Card
                key={project.id}
                className="overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <CardHeader className="p-0">
                  {projectImage && (
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-48"
                      data-ai-hint={projectImage.imageHint}
                    />
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-xl font-bold mb-2 text-center ">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/80 mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                {project.githubLink && (
                  <CardFooter className="p-6 pt-0">
                    <Button asChild variant="outline" className="w-full">
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> View on GitHub
                      </Link>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
