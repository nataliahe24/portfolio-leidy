import Image from "next/image";
import type { ImagePlaceholder } from "@/lib/placeholder-images";

type ProjectSlideProps = {
  image: ImagePlaceholder;
  title: string;
};

export function ProjectSlide({ image, title }: ProjectSlideProps) {
  return (
    <Image
      src={encodeURI(image.imageUrl)}
      alt={title}
      width={1200}
      height={800}
      className="w-full h-auto"
      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw,
        100vw"
      data-ai-hint={image.imageHint}
    />
  );
}
