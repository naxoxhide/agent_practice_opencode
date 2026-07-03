import Link from "next/link";
import { FloatingSticker } from "@/components/FloatingSticker";
import {
  SparkleSticker,
  DimensionRingSticker,
  ObjektCardSticker,
  PhotocardSticker,
  SssBadgeSticker,
} from "@/components/stickers/Stickers";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b-4 border-ink px-4 py-20 sm:py-28">
      <FloatingSticker className="left-[6%] top-[15%]" rotate={-8} duration={7}>
        <ObjektCardSticker size={72} />
      </FloatingSticker>
      <FloatingSticker className="right-[8%] top-[20%]" rotate={10} duration={5.5} delay={0.4}>
        <SparkleSticker size={44} />
      </FloatingSticker>
      <FloatingSticker className="left-[12%] bottom-[12%]" rotate={6} duration={6.5} delay={0.8}>
        <SssBadgeSticker size={68} />
      </FloatingSticker>
      <FloatingSticker className="right-[14%] bottom-[18%]" rotate={-10} duration={6} delay={0.2}>
        <DimensionRingSticker size={56} />
      </FloatingSticker>
      <FloatingSticker className="right-[30%] top-[8%] hidden sm:block" rotate={14} duration={7.5} delay={0.6}>
        <PhotocardSticker size={40} />
      </FloatingSticker>

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="font-display text-[10px] text-holo-cyan sm:text-xs">2022 — 2026</p>
        <h1 className="mt-4 font-display text-2xl leading-relaxed holo-text sm:text-4xl">
          tripleS: Into the Dimension
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
          La historia completa de tripleS: desde el anuncio del primer grupo idol de
          participacion de fans hasta la ultima sub-unidad. MVs, hitos y datos curiosos,
          en orden, en una sola linea de tiempo.
        </p>
        <Link
          href="#timeline"
          className="pixel-button pixel-frame-sm glow-on-hover mt-10 inline-block bg-cosmo-surface px-6 py-3 font-display text-[11px] text-ink"
        >
          Explorar la linea de tiempo
        </Link>
      </div>
    </section>
  );
}
