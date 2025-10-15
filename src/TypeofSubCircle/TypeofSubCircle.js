export function generateSemiCircle(count, radius = 180, side = "left") {
  const start = -119;
  const end = 119;
  const step = count > 1 ? (end - start) / (count - 1) : 0;

  return Array.from({ length: count }, (_, i) => {
    const deg = start + step * i;
    const angle = (deg * Math.PI) / 180;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const tx = side === "left" ? -x : x;
    const rx = Math.round(tx * 100) / 100;
    const ry = Math.round(y * 100) / 100;

    return {
      transform: `translate(${rx}px, ${ry}px) translate(-50%, -50%)`,
    };
  });
}

export const STAGGER_MS = 120;
export const BASE_MS = 500;
