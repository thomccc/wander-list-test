import { Link } from "react-router-dom"
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "@wandercom/design-system-web/ui/dropdown"
import { Button } from "@wandercom/design-system-web/ui/button"
import { cn } from "@/lib/utils"

const SEGMENTS = [
  { value: "editor", label: "Editor" },
  { value: "ai-mode", label: "AI Mode" },
  { value: "theme", label: "Theme" },
] as const
export type BuilderMode = (typeof SEGMENTS)[number]["value"]

function BuilderSegmentedControl({
  value,
  onChange,
}: {
  value: BuilderMode
  onChange: (value: BuilderMode) => void
}) {
  return (
    <div
      role="tablist"
      aria-label="View mode"
      className="flex h-10 w-fit items-center gap-0.5 rounded-full bg-[var(--color-neutral-100)] p-1"
    >
      {SEGMENTS.map((seg) => {
        const isSelected = value === seg.value
        return (
          <button
            key={seg.value}
            type="button"
            role="tab"
            aria-selected={isSelected}
            onClick={() => onChange(seg.value)}
            className={cn(
              "inline-flex h-8 items-center justify-center rounded-full px-3 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[var(--color-border-selected)] focus-visible:ring-offset-1",
              isSelected
                ? "bg-white text-[var(--color-neutral-900)] shadow-sm"
                : "bg-transparent text-[var(--color-neutral-550)] hover:text-[var(--color-neutral-700)]"
            )}
          >
            {seg.label}
          </button>
        )
      })}
    </div>
  )
}

interface BuilderTopBarProps {
  mode: BuilderMode
  onModeChange: (value: BuilderMode) => void
  pageLabel: string
  pageOptions: string[]
  onPageChange: (value: string) => void
}

export function BuilderTopBar({
  mode,
  onModeChange,
  pageLabel,
  pageOptions,
  onPageChange,
}: BuilderTopBarProps) {
  return (
    <header
      className="relative flex h-[72px] w-full shrink-0 flex-col border-b border-[var(--color-border-primary)] bg-[var(--color-surface-primary)] py-3"
      role="banner"
    >
      {/* 48px-tall row with 12px vertical padding = 72px total */}
      <div className="relative flex h-12 items-center justify-between px-6">
        {/* Left: Editor / AI Mode / Theme toggle — custom to match Figma */}
        <div className="flex items-center">
          <BuilderSegmentedControl value={mode} onChange={onModeChange} />
        </div>

        {/* Center: Home dropdown */}
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center">
          <Dropdown>
            <DropdownTrigger
              variant="default"
              className="min-w-[120px] justify-between"
            >
              {pageLabel}
            </DropdownTrigger>
            <DropdownContent align="center" sideOffset={8}>
              {pageOptions.map((page) => (
                <DropdownItem key={page} onSelect={() => onPageChange(page)}>
                  {page}
                </DropdownItem>
              ))}
            </DropdownContent>
          </Dropdown>
        </div>

        {/* Right: Exit + Publish — 14px, 550, Instrument Sans via .builder-top-bar-actions */}
        <div className="builder-top-bar-actions flex items-center gap-1">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/website">Exit</Link>
          </Button>
          <Button variant="primary" size="sm">
            Publish
          </Button>
        </div>
      </div>
    </header>
  )
}
