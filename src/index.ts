// =============================================================================
// COREicons — Barrel Export
// Forensic icon library for the CORE ecosystem.
// Copyright (c) 2024-2026 CORE Project Contributors
// Licensed under MIT License
// =============================================================================

// Types
export type { IconProps } from "./types";
export { sizeMap, resolveSize, iconClass } from "./types";

// All 150+ Heroicons Outline re-exports
export * from "./heroicons";

// Semantic wrappers
export {
  FolderIcon,
  FileIcon,
  FileTextIcon,
  ArchiveIcon,
  DatabaseIcon,
  ChipIcon,
  ImageIcon,
  VideoIcon,
  AudioIcon,
  CodeIcon,
  SearchIcon,
  CopyIcon,
  CloseIcon,
  ExpandIcon,
  ViewGridIcon,
  ViewListIcon,
  WarningIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  TimeIcon,
  LocationIcon,
  EmailIcon,
} from "./semantic";

// Forensic domain icons
export {
  AD1Icon,
  E01Icon,
  L01Icon,
  RawIcon,
  UFEDIcon,
  ZipIcon,
  AxiomIcon,
  CellebriteIcon,
  GenericDbIcon,
  getContainerTypeIcon,
  getDatabaseTypeIcon,
  getFileIcon,
} from "./forensic";

// Spinner
export { SpinnerIcon } from "./spinner";
