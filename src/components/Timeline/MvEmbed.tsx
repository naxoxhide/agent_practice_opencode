"use client";

import { useState } from "react";
import Image from "next/image";

export function MvEmbed({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="pixel-frame-sm aspect-video w-full overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          allow="accelerated-inline-media; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="pixel-frame-sm glow-on-hover group relative block aspect-video w-full overflow-hidden bg-cosmo-void"
      aria-label={`Reproducir MV: ${title}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
        alt={`Miniatura del MV ${title}`}
        fill
        sizes="(max-width: 640px) 100vw, 480px"
        className="object-cover"
      />
      <span className="pixel-frame-sm holo-fill absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-cosmo-void">
        ▶
      </span>
      <span className="absolute bottom-0 left-0 right-0 bg-cosmo-void/85 px-2 py-1 font-display text-[9px] text-ink">
        {title}
      </span>
    </button>
  );
}
