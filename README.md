# COREicons

Forensic icon library for the **CORE** (Case Organization & Reporting Ecosystem) suite.

Built on [Heroicons](https://heroicons.com/) Outline via `solid-icons/hi`, with forensic-domain semantic wrappers and utilities.

## Features

- **150+ Heroicons Outline** re-exports organized by category
- **Semantic wrappers** — `FolderIcon`, `FileIcon`, `SearchIcon`, `EmailIcon`, etc. with size presets
- **Forensic container icons** — `AD1Icon`, `E01Icon`, `L01Icon`, `RawIcon`, `UFEDIcon`, `ZipIcon` with domain colors
- **Processed DB icons** — `AxiomIcon`, `CellebriteIcon`, `GenericDbIcon`
- **Icon getter utilities** — `getContainerTypeIcon()`, `getFileIcon()`, `getDatabaseTypeIcon()`
- **SpinnerIcon** — animated loading indicator
- **TypeScript-first** — `IconProps` with `size` presets (`xs`/`sm`/`md`/`lg`/`xl`) and custom pixel values

## Installation

```bash
npm install @core-suite/icons
```

## Usage

```tsx
// Import Heroicons directly
import { HiOutlineFingerPrint, HiOutlineShieldCheck } from "@core-suite/icons";

// Import semantic wrappers
import { FolderIcon, FileIcon, SearchIcon } from "@core-suite/icons";

// Import forensic icons
import { AD1Icon, E01Icon, getContainerTypeIcon } from "@core-suite/icons";

// Import spinner
import { SpinnerIcon } from "@core-suite/icons";

// Use with size presets
<FolderIcon size="sm" />      // 16×16
<FolderIcon size="md" />      // 20×20 (default)
<FolderIcon size="lg" />      // 24×24
<SearchIcon size="xl" />      // 32×32

// Dynamic icon selection
const Icon = getContainerTypeIcon("e01");
<Icon size="md" />

const FileTypeIcon = getFileIcon("report.pdf", false);
<FileTypeIcon size="sm" />
```

## Size Presets

| Preset | Class | Dimensions |
|--------|-------|------------|
| `xs` | `w-3 h-3` | 12×12 |
| `sm` | `w-4 h-4` | 16×16 |
| `md` | `w-5 h-5` | 20×20 |
| `lg` | `w-6 h-6` | 24×24 |
| `xl` | `w-8 h-8` | 32×32 |

## Icon Categories

### Heroicons Outline (150+)

Organized by domain: Navigation, Files & Folders, UI Controls, Search & View, Status & Alerts, Data & Database, Media, Communication, Time, Settings, Devices, Storage, People, and more.

### Forensic Container Icons

| Icon | Color | Container Type |
|------|-------|----------------|
| `AD1Icon` | Blue | AccessData AD1 |
| `E01Icon` | Green | EnCase EWF |
| `L01Icon` | Yellow | Logical Evidence |
| `RawIcon` | Purple | Raw/DD images |
| `UFEDIcon` | Accent | Cellebrite UFED |
| `ZipIcon` | Orange | Archives |

### Processed Database Icons

| Icon | Color | Tool |
|------|-------|------|
| `AxiomIcon` | Accent | Magnet AXIOM |
| `CellebriteIcon` | Pink | Cellebrite PA |
| `GenericDbIcon` | Secondary | Other tools |

## Architecture

```
src/
  ├── types.ts          — IconProps interface + size map
  ├── heroicons.ts      — All 150+ HiOutline re-exports
  ├── semantic.tsx      — Semantic wrapper components
  ├── forensic.tsx      — Forensic domain icons + getters
  ├── spinner.tsx       — SpinnerIcon component
  └── index.ts          — Barrel re-export
```

## Part of CORE Ecosystem

- **CORE-FFX** — Forensic File Explorer
- **CORE-RPT** — Report Generator
- **CORE-LAB** — Lab Management
- **CORE-WEB** — Web Portal
- **CORE-EVD** — Evidence Viewer
- **CORE-DBX** — Database Cleanup

## License

MIT
