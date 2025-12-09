import { services } from "@/lib/data";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            What I Offer
          </h2>
          <p className="max-w-[900px] text-slate-300 md:text-xl/relaxed">
            From crafting user interfaces to architecting server-side logic, I
            provide a range of services to build your next project.
          </p>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="grid gap-1 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 mb-4">
                <service.icon className="h-8 w-8 text-cyan-400" />
              </div>
              <h3 className="font-headline text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="text-sm text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
