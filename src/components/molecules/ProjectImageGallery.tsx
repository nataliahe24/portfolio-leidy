"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectSlide } from "@/components/atoms/ProjectSlide";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

type ProjectImageGalleryProps = {
  images: ImagePlaceholder[];
  title: string;
};

const navButtonClass =
  "left-2 h-8 w-8 border-0 bg-black/55 text-white " +
  "hover:bg-black/70 hover:text-white";

export function ProjectImageGallery({
  images,
  title,
}: ProjectImageGalleryProps) {
  if (images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    return <ProjectSlide image={images[0]} title={title} />;
  }

  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-0">
        {images.map((image) => (
          <CarouselItem key={image.id} className="pl-0">
            <ProjectSlide image={image} title={title} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={navButtonClass} />
      <CarouselNext className={`${navButtonClass} left-auto right-2`} />
    </Carousel>
  );
}
