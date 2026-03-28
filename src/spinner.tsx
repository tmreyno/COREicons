// =============================================================================
// COREicons — SpinnerIcon
// Animated loading spinner for all CORE applications.
// Copyright (c) 2024-2026 CORE Project Contributors
// Licensed under MIT License
// =============================================================================

import type { Component } from "solid-js";
import type { IconProps } from "./types";
import { resolveSize } from "./types";

/** Animated loading spinner SVG */
export const SpinnerIcon: Component<IconProps> = (props) => (
  <svg
    class={`${resolveSize(props.size)} ${props.class || ""} shrink-0 animate-spin`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    />
    <path
      class="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);
