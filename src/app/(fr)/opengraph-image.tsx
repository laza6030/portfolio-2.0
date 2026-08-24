import { author } from "@/app/lib/site";
import { ogContentType, ogSize, renderOgImage } from "@/app/lib/og";

export const alt = `${author.name} — ${author.jobTitle.fr}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage("fr");
}
