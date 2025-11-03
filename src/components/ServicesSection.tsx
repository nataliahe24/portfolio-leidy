import { services } from '@/lib/data';

export function ServicesSection() {
  return (
    <section id="services" className="w-full bg-muted py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
            What I Offer
          </h2>
          <p className="max-w-[900px] text-foreground/70 md:text-xl/relaxed">
            From crafting user interfaces to architecting server-side logic, I provide a range of services to build your next project.
          </p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="grid gap-1 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-headline text-xl font-bold">{service.title}</h3>
              <p className="text-sm text-foreground/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
