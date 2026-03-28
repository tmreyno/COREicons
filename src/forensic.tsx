// =============================================================================
// COREicons — Forensic Domain Icons
// Container type icons, processed DB icons, and getter utilities.
// Copyright (c) 2024-2026 CORE Project Contributors
// Licensed under MIT License
// =============================================================================

import type { Component } from "solid-js";
import type { IconProps } from "./types";
import { iconClass } from "./types";
import {
  HiOutlineArchiveBox,
  HiOutlineCircleStack,
  HiOutlineDocumentText,
  HiOutlineCpuChip,
  HiOutlineDevicePhoneMobile,
  HiOutlineDocument,
  HiOutlineFolder,
  HiOutlinePhoto,
  HiOutlineFilm,
  HiOutlineMusicalNote,
  HiOutlineCodeBracket,
} from "solid-icons/hi";

// ============================================================================
// Container Type Icons — colors match CORE-FFX CONTAINER_ICON_COLORS
// ============================================================================

export const AD1Icon: Component<IconProps> = (props) =>
  <HiOutlineArchiveBox class={`${iconClass(props)} text-blue-400`} />;

export const E01Icon: Component<IconProps> = (props) =>
  <HiOutlineCircleStack class={`${iconClass(props)} text-green-400`} />;

export const L01Icon: Component<IconProps> = (props) =>
  <HiOutlineDocumentText class={`${iconClass(props)} text-yellow-400`} />;

export const RawIcon: Component<IconProps> = (props) =>
  <HiOutlineCpuChip class={`${iconClass(props)} text-purple-400`} />;

export const UFEDIcon: Component<IconProps> = (props) =>
  <HiOutlineDevicePhoneMobile class={`${iconClass(props)} text-accent`} />;

export const ZipIcon: Component<IconProps> = (props) =>
  <HiOutlineArchiveBox class={`${iconClass(props)} text-orange-400`} />;

// ============================================================================
// Processed Database Icons
// ============================================================================

export const AxiomIcon: Component<IconProps> = (props) =>
  <HiOutlineCircleStack class={`${iconClass(props)} text-accent`} />;

export const CellebriteIcon: Component<IconProps> = (props) =>
  <HiOutlineDevicePhoneMobile class={`${iconClass(props)} text-pink-400`} />;

export const GenericDbIcon: Component<IconProps> = (props) =>
  <HiOutlineFolder class={`${iconClass(props)} text-txt-secondary`} />;

// ============================================================================
// Icon Getters — dynamic icon selection by type string
// ============================================================================

import {
  FileIcon,
  FolderIcon,
  ImageIcon,
  VideoIcon,
  AudioIcon,
  CodeIcon,
  FileTextIcon,
  ArchiveIcon,
  DatabaseIcon,
} from "./semantic";

/** Get container type icon component based on type string */
export function getContainerTypeIcon(type: string): Component<IconProps> {
  const t = type.toLowerCase();
  if (t.includes("ad1")) return AD1Icon;
  if (t.includes("e01") || t.includes("encase")) return E01Icon;
  if (t.includes("l01")) return L01Icon;
  if (t.includes("raw") || t.includes("dd")) return RawIcon;
  if (t.includes("ufed") || t.includes("ufd")) return UFEDIcon;
  if (t.includes("tar") || t.includes("7z") || t.includes("zip") || t.includes("rar") || t.includes("gz")) return ZipIcon;
  return FileIcon;
}

/** Get database type icon component */
export function getDatabaseTypeIcon(dbType: string): Component<IconProps> {
  const t = dbType.toLowerCase();
  if (t.includes("axiom") || t.includes("magnet")) return AxiomIcon;
  if (t.includes("cellebrite") || t.includes("pa")) return CellebriteIcon;
  return GenericDbIcon;
}

/** Helper to extract lowercase extension from filename */
function getExtension(filename: string): string {
  const idx = filename.lastIndexOf(".");
  return idx >= 0 ? filename.slice(idx + 1).toLowerCase() : "";
}

/** Get file icon based on extension */
export function getFileIcon(filename: string, isDir: boolean): Component<IconProps> {
  if (isDir) return FolderIcon;

  const ext = getExtension(filename);

  // Images
  if (["jpg", "jpeg", "png", "gif", "bmp", "svg", "webp", "ico", "tiff"].includes(ext)) return ImageIcon;
  // Videos
  if (["mp4", "avi", "mkv", "mov", "wmv", "flv", "webm", "m4v"].includes(ext)) return VideoIcon;
  // Audio
  if (["mp3", "wav", "ogg", "flac", "aac", "m4a", "wma"].includes(ext)) return AudioIcon;
  // Code
  if (["js", "ts", "jsx", "tsx", "py", "rb", "java", "c", "cpp", "h", "cs", "go", "rs", "php", "html", "css", "json", "xml", "yaml", "yml", "sql"].includes(ext)) return CodeIcon;
  // Text/Documents
  if (["txt", "md", "rtf", "doc", "docx", "pdf", "odt"].includes(ext)) return FileTextIcon;
  // Archives
  if (["zip", "tar", "gz", "rar", "7z", "bz2", "xz"].includes(ext)) return ArchiveIcon;
  // Database
  if (["db", "sqlite", "sqlite3", "mdb", "accdb"].includes(ext)) return DatabaseIcon;

  return FileIcon;
}
