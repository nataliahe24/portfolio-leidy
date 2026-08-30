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
import { ProjectImageGallery } from "@/components/molecules/ProjectImageGallery";
import { getImagesByIds } from "@/lib/placeholder-images";
import type { Project } from "@/lib/data";
import { Github } from "lucide-react";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const images = getImagesByIds(project.images);

  return (
    <Card
      className="overflow-hidden shadow-lg transition-shadow
        duration-300 hover:shadow-2xl"
    >
      <CardHeader className="p-0">
        <ProjectImageGallery images={images} title={project.title} />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle
          className="font-headline text-xl font-bold mb-2
            text-center"
        >
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
}
