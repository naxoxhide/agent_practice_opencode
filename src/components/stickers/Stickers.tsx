// Componentes puramente presentacionales (sin hooks): pueden quedarse como
// Server Components, cero JS de cliente para los stickers decorativos.
const GRAD_ID = "sticker-holo-grad";

function HoloDefs() {
  return (
    <defs>
      <linearGradient id={GRAD_ID} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="50%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
  );
}

// Genera una grilla de pixeles a partir de una funcion de distancia,
// para formas radiales (sparkle, anillo) sin escribir bitmaps a mano.
function PixelGrid({
  size,
  gridSize,
  fill,
  className,
}: {
  size: number;
  gridSize: number;
  fill: (x: number, y: number, center: number) => boolean;
  className?: string;
}) {
  const unit = size / gridSize;
  const center = (gridSize - 1) / 2;
  const cells: { x: number; y: number }[] = [];
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (fill(x, y, center)) cells.push({ x, y });
    }
  }
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <HoloDefs />
      {cells.map(({ x, y }) => (
        <rect
          key={`${x}-${y}`}
          x={x * unit}
          y={y * unit}
          width={unit}
          height={unit}
          fill={`url(#${GRAD_ID})`}
          stroke="#05050f"
          strokeWidth={Math.max(unit * 0.08, 0.5)}
        />
      ))}
    </svg>
  );
}

// Sparkle: diamante de pixeles, el "brillo" clasico de pixel art.
export function SparkleSticker({ size = 56, className }: { size?: number; className?: string }) {
  return (
    <PixelGrid
      size={size}
      gridSize={11}
      className={className}
      fill={(x, y, c) => Math.abs(x - c) + Math.abs(y - c) <= 4}
    />
  );
}

// Dimension Ring: anillos concentricos, guino al concepto "Dimension" del lore de tripleS.
export function DimensionRingSticker({ size = 64, className }: { size?: number; className?: string }) {
  return (
    <PixelGrid
      size={size}
      gridSize={13}
      className={className}
      fill={(x, y, c) => {
        const dist = Math.round(Math.max(Math.abs(x - c), Math.abs(y - c)));
        return dist % 2 === 0;
      }}
    />
  );
}

// Objekt Card: silueta de tarjeta coleccionable (proporcion real ~2.5:3.5)
// con marco pixel y relleno holografico.
export function ObjektCardSticker({ size = 64, className }: { size?: number; className?: string }) {
  const w = size * 0.72;
  const h = size;
  const notch = size * 0.1;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={w}
      height={h}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <HoloDefs />
      <polygon
        points={`0,${notch} ${notch},0 ${w - notch},0 ${w},${notch} ${w},${h} 0,${h}`}
        fill={`url(#${GRAD_ID})`}
        stroke="#e6e6f5"
        strokeWidth={size * 0.045}
      />
      <rect
        x={w * 0.14}
        y={h * 0.14}
        width={w * 0.72}
        height={h * 0.5}
        fill="none"
        stroke="#e6e6f5"
        strokeWidth={size * 0.02}
        opacity={0.7}
      />
    </svg>
  );
}

// Photocard: sticker cuadrado tipo "sello" con esquina achaflanada,
// para variar frente a Objekt Card.
export function PhotocardSticker({ size = 56, className }: { size?: number; className?: string }) {
  const notch = size * 0.18;
  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <HoloDefs />
      <polygon
        points={`${notch},0 ${size},0 ${size},${size - notch} ${size - notch},${size} 0,${size} 0,${notch}`}
        fill={`url(#${GRAD_ID})`}
        stroke="#e6e6f5"
        strokeWidth={size * 0.05}
      />
    </svg>
  );
}

// SSS Badge: chip con el nombre de la habilidad especial de cada integrante.
export function SssBadgeSticker({ size = 72, className }: { size?: number; className?: string }) {
  const h = size * 0.42;
  return (
    <svg
      viewBox={`0 0 ${size} ${h}`}
      width={size}
      height={h}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <HoloDefs />
      <rect x={0} y={0} width={size} height={h} fill="#05050f" stroke={`url(#${GRAD_ID})`} strokeWidth={size * 0.035} />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="var(--font-pixel), monospace"
        fontSize={h * 0.4}
        fill={`url(#${GRAD_ID})`}
      >
        SSS
      </text>
    </svg>
  );
}
