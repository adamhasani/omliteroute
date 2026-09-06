import type { ComponentType } from "react";

export type LobeIconComponent = ComponentType<{
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}>;

/**
 * Lightweight provider icon fallback.
 * Provider icons are rendered via native SVGs in /providers/{id}.svg or KNOWN_SVGS.
 */
export function getLobeProviderIcon(
  _providerId: string,
  _type: "mono" | "color" = "color"
): LobeIconComponent | null {
  return null;
}
