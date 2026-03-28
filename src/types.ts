// =============================================================================
// COREicons — Icon Props & Size System
// Copyright (c) 2024-2026 CORE Project Contributors
// Licensed under MIT License
// =============================================================================

import type { JSX, Component } from "solid-js";

/**
 * Standard icon props for all CORE icon components.
 * Extends SVG attributes for full customization.
 */
export interface IconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  /** Size preset or custom pixel value */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  /** Additional CSS classes */
  class?: string;
}

/** Tailwind class mappings for size presets */
export const sizeMap: Record<string, string> = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
};

/** Resolve size preset or custom value to CSS class string */
export function resolveSize(size?: IconProps["size"]): string {
  if (typeof size === "number") {
    return `w-[${size}px] h-[${size}px]`;
  }
  return sizeMap[(size as string) || "md"];
}

/** Build combined class string for icon components */
export function iconClass(props: IconProps): string {
  return `${resolveSize(props.size)} ${props.class || ""} shrink-0`;
}

export type { Component };
