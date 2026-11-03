import photos from '../data/photos.json' with { type: 'json' };
import rights from '../data/image-rights.json' with { type: 'json' };
import type { Locale } from './i18n';

export type ImageKey = keyof typeof photos;
export interface PhotoMetadata {
  width: number;
  height: number;
  widths: number[];
  files?: Record<string, string>;
  variantHeights?: Record<string, number>;
  alt: Record<Locale, string>;
  credit?: Partial<Record<Locale, string>>;
  author?: string | null;
  authorType?: string | null;
  source?: string | null;
  licenseUrl?: string | null;
  copyrightHolder?: string | null;
  licenseContactUrl?: string | null;
}
export interface ImagePerson {
  name: string;
  type: 'Person' | 'Organization';
  licenseContactUrl?: string | null;
}
export interface ImageRights {
  creatorId?: string | null;
  copyrightHolderId?: string | null;
  licenseContactId?: string | null;
  creditIsAttribution?: boolean;
}
export interface ImageRightsRegistry {
  people: Record<string, ImagePerson>;
  images: Partial<Record<ImageKey, ImageRights>>;
}
export const imageRights = rights as ImageRightsRegistry;

// Each role is explicit. A credit, source or creator does not prove ownership
// or identify the person to contact for a licence.
export function resolveImageMetadata(photo: PhotoMetadata, entry: ImageRights = {}, people = imageRights.people): PhotoMetadata {
  const person = (id: string) => {
    if (!Object.hasOwn(people, id)) throw new Error(`Unknown image person: ${id}`);
    return people[id];
  };
  const creator = entry.creatorId ? person(entry.creatorId) : undefined;
  const holder = entry.copyrightHolderId ? person(entry.copyrightHolderId) : undefined;
  const contact = entry.licenseContactId ? person(entry.licenseContactId) : undefined;
  return {
    ...photo,
    ...(entry.creatorId !== undefined ? { author: creator?.name, authorType: creator?.type } : {}),
    ...(entry.copyrightHolderId !== undefined ? { copyrightHolder: holder?.name } : {}),
    ...(entry.licenseContactId !== undefined ? { licenseContactUrl: contact?.licenseContactUrl } : {}),
    ...(entry.creditIsAttribution === false ? { credit: undefined } : {}),
  };
}
export function imageMetadata(name: ImageKey): PhotoMetadata {
  return resolveImageMetadata(photos[name], imageRights.images[name]);
}
export function imageFile(name: ImageKey, width: number) {
  const photo: PhotoMetadata = photos[name];
  if (!photo.widths.includes(width)) throw new Error(`Unknown image variant: ${name}-${width}`);
  return photo.files?.[width] ?? `/images/${name}-${width}.webp`;
}
