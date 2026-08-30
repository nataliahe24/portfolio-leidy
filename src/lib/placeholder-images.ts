import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
};

export const PlaceHolderImages: ImagePlaceholder[] =
  data.placeholderImages;

export function getImagesByIds(ids: string[]): ImagePlaceholder[] {
  return ids
    .map((id) => PlaceHolderImages.find((item) => item.id === id))
    .filter((item): item is ImagePlaceholder => Boolean(item));
}
