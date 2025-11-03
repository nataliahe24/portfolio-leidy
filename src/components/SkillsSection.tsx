import { skills } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
            Technical Skills
          </h2>
          <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed">
            A snapshot of the technologies, languages, and tools I use to bring ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillCategory) => (
            <Card key={skillCategory.category} className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{skillCategory.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {skillCategory.items.map((skill) => (
                    <li key={skill.name} className="flex items-center gap-4">
                      <skill.icon className="h-6 w-6 text-primary" />
                      <span className="font-medium text-foreground/90">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
