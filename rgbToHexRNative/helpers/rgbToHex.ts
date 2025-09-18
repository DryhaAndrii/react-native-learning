export function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (value: number) => Math.max(0, Math.min(255, value));

  const toHex = (value: number) => {
    const clamped = clamp(value);
    const hex = clamped.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const hexR = toHex(r);
  const hexG = toHex(g);
  const hexB = toHex(b);

  return `#${hexR}${hexG}${hexB}`.toLowerCase();
}
