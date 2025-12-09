import { User, Target, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: User,
    title: "Background",
    description:
      "Industrial Engineer with technical training in Software Development",
  },
  {
    icon: Lightbulb,
    title: "Passion",
    description:
      "Technology and continuous learning, creating innovative solutions",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Team-oriented with assertive communication and problem-solving skills",
  },
  {
    icon: Target,
    title: "Focus",
    description: "Strategic thinking with strong commitment to shared goals",
  },
];

export function AboutSection() {
  return (
    <section id="about-me" className="w-full py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed">
            Get to know me better
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Industrial Engineer with technical training in Software
              Development, passionate about technology and continuous learning.
              I&apos;m motivated by creating innovative solutions and expanding
              my skills in software development and data analysis.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              I am a resilient professional, oriented toward teamwork, assertive
              communication, and problem-solving. I enjoy collaborating, adding
              value, and contributing to shared goals with strategic focus and
              strong commitment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <Card
                key={item.title}
                className="shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                        {item.title}
                      </h3>
                      <p className="text-sm text-foreground/70">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
