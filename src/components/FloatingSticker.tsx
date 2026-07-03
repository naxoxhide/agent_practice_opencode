import type { CSSProperties, ReactNode } from "react";

export function FloatingSticker({
  children,
  className = "",
  style,
  rotate = 0,
  duration = 6,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  rotate?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <div
      className={`sticker-float pointer-events-none select-none absolute ${className}`}
      style={
        {
          ...style,
          "--sticker-rot": `${rotate}deg`,
          "--sticker-duration": `${duration}s`,
          "--sticker-delay": `${delay}s`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
