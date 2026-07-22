import Image from "next/image";
import type { HeroImage } from "@/lib/images";

export default function HeroImage({
  image,
  className,
  priority = false,
}: {
  image: HeroImage;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`shine relative overflow-hidden rounded-2xl ${className ?? "aspect-[4/3]"}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
