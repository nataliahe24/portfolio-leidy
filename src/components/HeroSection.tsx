import Image from "next/image";
import { Button } from "./ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Download, MessageCircle } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const profileImage = PlaceHolderImages.find((p) => p.id === "profile");

  return (
    <section
      id="hero"
      className="w-full py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-500"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-6">
        <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
          {profileImage && (
            <Image
              src={profileImage.imageUrl}
              alt={profileImage.description}
              width={320}
              height={320}
              className="rounded-full object-cover shadow-2xl border-4 border-cyan-400/50"
              data-ai-hint={profileImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 rounded-full border-4 border-cyan-400/20 animate-pulse"></div>
        </div>
        <div className="space-y-4 text-center md:text-left">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
            Leidy's Portfolio
          </h1>
          <p className="font-headline text-2xl font-medium text-white">
            Full-Stack Developer
          </p>
          <p className="max-w-[600px] text-blue-100/80 md:text-xl/relaxed">
            I build elegant and efficient web solutions. With a passion for
            clean code and user-centric design, I transform complex problems
            into beautiful, intuitive digital experiences.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start pt-4">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/15 hover:text-white bg-white/5 backdrop-blur-sm"
            >
              <Link href="#contact">
                <MessageCircle className="mr-2" />
                Contact Me
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/15 hover:text-white bg-white/5 backdrop-blur-sm"
            >
              <a href="/assets/cv_leidy.pdf" download>
                <Download className="mr-2" />
                Check my CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
