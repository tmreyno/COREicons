// =============================================================================
// COREicons — Semantic Icon Wrappers
// Named icon components with consistent sizing for common use cases.
// Copyright (c) 2024-2026 CORE Project Contributors
// Licensed under MIT License
// =============================================================================

import type { Component } from "solid-js";
import type { IconProps } from "./types";
import { iconClass } from "./types";
import {
  HiOutlineFolder,
  HiOutlineDocument,
  HiOutlineDocumentText,
  HiOutlineArchiveBox,
  HiOutlineCircleStack,
  HiOutlineCpuChip,
  HiOutlinePhoto,
  HiOutlineFilm,
  HiOutlineMusicalNote,
  HiOutlineCodeBracket,
  HiOutlineMagnifyingGlass,
  HiOutlineClipboardDocument,
  HiOutlineExclamationTriangle,
  HiOutlineChevronDown,
  HiOutlineChevronRight,
  HiOutlineXMark,
  HiOutlineClock,
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlineSquares2x2,
  HiOutlineListBullet,
  HiOutlineArrowsPointingOut,
} from "solid-icons/hi";

// Files & Folders
export const FolderIcon: Component<IconProps> = (props) => <HiOutlineFolder class={iconClass(props)} />;
export const FileIcon: Component<IconProps> = (props) => <HiOutlineDocument class={iconClass(props)} />;
export const FileTextIcon: Component<IconProps> = (props) => <HiOutlineDocumentText class={iconClass(props)} />;
export const ArchiveIcon: Component<IconProps> = (props) => <HiOutlineArchiveBox class={iconClass(props)} />;
export const DatabaseIcon: Component<IconProps> = (props) => <HiOutlineCircleStack class={iconClass(props)} />;
export const ChipIcon: Component<IconProps> = (props) => <HiOutlineCpuChip class={iconClass(props)} />;

// Media
export const ImageIcon: Component<IconProps> = (props) => <HiOutlinePhoto class={iconClass(props)} />;
export const VideoIcon: Component<IconProps> = (props) => <HiOutlineFilm class={iconClass(props)} />;
export const AudioIcon: Component<IconProps> = (props) => <HiOutlineMusicalNote class={iconClass(props)} />;
export const CodeIcon: Component<IconProps> = (props) => <HiOutlineCodeBracket class={iconClass(props)} />;

// Actions
export const SearchIcon: Component<IconProps> = (props) => <HiOutlineMagnifyingGlass class={iconClass(props)} />;
export const CopyIcon: Component<IconProps> = (props) => <HiOutlineClipboardDocument class={iconClass(props)} />;
export const CloseIcon: Component<IconProps> = (props) => <HiOutlineXMark class={iconClass(props)} />;

// View
export const ExpandIcon: Component<IconProps> = (props) => <HiOutlineArrowsPointingOut class={iconClass(props)} />;
export const ViewGridIcon: Component<IconProps> = (props) => <HiOutlineSquares2x2 class={iconClass(props)} />;
export const ViewListIcon: Component<IconProps> = (props) => <HiOutlineListBullet class={iconClass(props)} />;

// Status
export const WarningIcon: Component<IconProps> = (props) => <HiOutlineExclamationTriangle class={iconClass(props)} />;

// Chevrons
export const ChevronDownIcon: Component<IconProps> = (props) => <HiOutlineChevronDown class={iconClass(props)} />;
export const ChevronRightIcon: Component<IconProps> = (props) => <HiOutlineChevronRight class={iconClass(props)} />;

// Time & Location
export const TimeIcon: Component<IconProps> = (props) => <HiOutlineClock class={iconClass(props)} />;
export const LocationIcon: Component<IconProps> = (props) => <HiOutlineMapPin class={iconClass(props)} />;

// Communication
export const EmailIcon: Component<IconProps> = (props) => <HiOutlineEnvelope class={iconClass(props)} />;
