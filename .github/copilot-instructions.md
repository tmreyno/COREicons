## COREicons — Copilot Instructions

You are working on **COREicons**, the forensic icon library for the CORE (Case Organization & Reporting Ecosystem) suite.

### Architecture

- **Framework:** SolidJS + TypeScript (source-only package, no build step)
- **Icon source:** Heroicons Outline via `solid-icons/hi` — ONLY `HiOutline*` variants
- **No Solid/Mini variants:** Never use `HiSolid*` or `HiMini*`
- **Styling:** Tailwind CSS utility classes for sizing (`w-N h-N`)

### Key Conventions

1. **All icons are HiOutline only** — consistency across the entire CORE ecosystem
2. **IconProps** with size presets: `xs` (12px), `sm` (16px), `md` (20px, default), `lg` (24px), `xl` (32px)
3. **`iconClass()` helper** resolves size + custom classes + `shrink-0` for all icon components
4. **Semantic wrappers** provide named components: `FolderIcon`, `FileIcon`, `SearchIcon`, etc.
5. **Forensic icons** have domain-specific colors: AD1=blue, E01=green, L01=yellow, Raw=purple, UFED=accent, Archive=orange
6. **Getter utilities** select icons dynamically: `getContainerTypeIcon()`, `getFileIcon()`, `getDatabaseTypeIcon()`

### File Organization

| File | Purpose |
|------|---------||
| `src/types.ts` | `IconProps` interface, `sizeMap`, `resolveSize()`, `iconClass()` |
| `src/heroicons.ts` | All 150+ `HiOutline*` re-exports from `solid-icons/hi` |
| `src/semantic.tsx` | Named wrapper components (FolderIcon, SearchIcon, etc.) |
| `src/forensic.tsx` | Container type icons, processed DB icons, getter utilities |
| `src/spinner.tsx` | Animated SpinnerIcon SVG |
| `src/index.ts` | Barrel re-export |

### Adding a New Icon

1. Add the `HiOutline*` export to `src/heroicons.ts` under the correct category
2. If it needs a semantic name, add a wrapper component to `src/semantic.tsx`
3. If it's forensic-domain, add to `src/forensic.tsx` with the correct color class
4. Re-export from `src/index.ts`

### Do NOT

- Use `HiSolid*` or `HiMini*` icon variants
- Import directly from `solid-icons/hi` in consuming apps — always go through this package
- Use hardcoded pixel sizes — use the `size` prop or Tailwind `w-N h-N` classes
- Add a build step — this is a source-only package consumed via TypeScript paths
