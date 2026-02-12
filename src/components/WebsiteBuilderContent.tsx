import { useMemo, useState } from "react"
import type { FormEvent } from "react"
import { BuilderTopBar, type BuilderMode } from "@/components/BuilderTopBar"
import { cn } from "@/lib/utils"

type SectionType = "hero" | "features" | "properties" | "stats" | "reviews"
type PageName = "Home" | "About" | "FAQ"
type FontPair = "classic" | "modern" | "monospace"

interface ReviewItem {
  quote: string
  author: string
}

interface PageModel {
  sections: SectionType[]
  heroTitle: string
  heroSubtitle: string
  reviews: ReviewItem[]
}

interface ThemePreset {
  id: "sand" | "ocean" | "forest"
  label: string
  canvas: string
  section: string
  accent: string
  heading: string
  body: string
}

const PAGE_OPTIONS: PageName[] = ["Home", "About", "FAQ"]

const SECTION_LABELS: Record<SectionType, string> = {
  hero: "Hero",
  features: "Features",
  properties: "Property Grid",
  stats: "Stats",
  reviews: "Reviews",
}

const THEME_PRESETS: ThemePreset[] = [
  {
    id: "sand",
    label: "Sand",
    canvas: "#f5f1ea",
    section: "#ffffff",
    accent: "#202020",
    heading: "#1a1a1a",
    body: "#404040",
  },
  {
    id: "ocean",
    label: "Ocean",
    canvas: "#e8f1f6",
    section: "#ffffff",
    accent: "#0b4f6c",
    heading: "#083344",
    body: "#164e63",
  },
  {
    id: "forest",
    label: "Forest",
    canvas: "#edf4ee",
    section: "#ffffff",
    accent: "#24533a",
    heading: "#1b4332",
    body: "#2d6a4f",
  },
]

const FONT_OPTIONS: Record<FontPair, { label: string; heading: string; body: string }> = {
  classic: {
    label: "Classic Serif",
    heading: "Georgia, 'Times New Roman', serif",
    body: "'Instrument Sans', system-ui, sans-serif",
  },
  modern: {
    label: "Modern Sans",
    heading: "'Avenir Next', 'Segoe UI', sans-serif",
    body: "'Instrument Sans', system-ui, sans-serif",
  },
  monospace: {
    label: "Monospace Editorial",
    heading: "'IBM Plex Mono', 'Courier New', monospace",
    body: "'Instrument Sans', system-ui, sans-serif",
  },
}

const INITIAL_PAGES: Record<PageName, PageModel> = {
  Home: {
    sections: ["hero", "features", "properties", "stats", "reviews"],
    heroTitle: "Big Lake Properties",
    heroSubtitle: "Boutique stays designed by people who truly care.",
    reviews: [
      { quote: "Incredible stay with thoughtful details everywhere.", author: "Buddy" },
      { quote: "The team is responsive and the home is exactly as listed.", author: "David" },
      { quote: "We left already planning our next trip back.", author: "Jade" },
    ],
  },
  About: {
    sections: ["hero", "features", "reviews"],
    heroTitle: "Designed by hospitality people",
    heroSubtitle: "A small company obsessed with exceptional stays.",
    reviews: [
      { quote: "The care and communication were exceptional.", author: "Marina" },
      { quote: "Everything felt intentional and premium.", author: "Leo" },
      { quote: "The process from booking to checkout was seamless.", author: "Noa" },
    ],
  },
  FAQ: {
    sections: ["hero", "reviews"],
    heroTitle: "Helpful answers before you book",
    heroSubtitle: "House rules, policies, and what to expect.",
    reviews: [
      { quote: "Clear info and fast answers before arrival.", author: "Ian" },
      { quote: "No surprises, exactly what we expected.", author: "Mia" },
      { quote: "Policies were easy to understand.", author: "Aria" },
    ],
  },
}

/**
 * Builder page at /website/builder.
 * No sidebar; full viewport. Wrapped by WebsiteLayout so Wander design system
 * tokens and components are available.
 */
export function WebsiteBuilderContent() {
  const [mode, setMode] = useState<BuilderMode>("editor")
  const [pageName, setPageName] = useState<PageName>("Home")
  const [pages, setPages] = useState<Record<PageName, PageModel>>(INITIAL_PAGES)
  const [palette, setPalette] = useState<ThemePreset["id"]>("sand")
  const [fontPair, setFontPair] = useState<FontPair>("classic")
  const [sectionToAdd, setSectionToAdd] = useState<SectionType>("hero")
  const [aiInput, setAiInput] = useState("")
  const [chat, setChat] = useState<Array<{ role: "user" | "assistant"; text: string }>>([
    {
      role: "assistant",
      text: "Ask me to edit the site. Example: 'Add a reviews section and switch to ocean theme.'",
    },
  ])

  const page = pages[pageName]
  const activeTheme = useMemo(
    () => THEME_PRESETS.find((item) => item.id === palette) ?? THEME_PRESETS[0],
    [palette]
  )
  const activeFonts = FONT_OPTIONS[fontPair]

  const updatePage = (updater: (model: PageModel) => PageModel) => {
    setPages((previous) => ({
      ...previous,
      [pageName]: updater(previous[pageName]),
    }))
  }

  const addSection = (section: SectionType) => {
    updatePage((current) => ({
      ...current,
      sections: [...current.sections, section],
    }))
  }

  const removeSection = (index: number) => {
    updatePage((current) => ({
      ...current,
      sections: current.sections.filter((_, i) => i !== index),
    }))
  }

  const moveSection = (index: number, direction: -1 | 1) => {
    updatePage((current) => {
      const nextIndex = index + direction
      if (nextIndex < 0 || nextIndex >= current.sections.length) {
        return current
      }
      const nextSections = [...current.sections]
      const [item] = nextSections.splice(index, 1)
      nextSections.splice(nextIndex, 0, item)
      return { ...current, sections: nextSections }
    })
  }

  const handleAiSubmit = (event: FormEvent) => {
    event.preventDefault()
    const prompt = aiInput.trim()
    if (!prompt) {
      return
    }

    setAiInput("")
    setChat((prev) => [...prev, { role: "user", text: prompt }])

    const normalized = prompt.toLowerCase()
    const actions: string[] = []

    if (normalized.includes("add hero")) {
      addSection("hero")
      actions.push("added a Hero section")
    }
    if (normalized.includes("add review")) {
      addSection("reviews")
      actions.push("added a Reviews section")
    }
    if (normalized.includes("remove review")) {
      updatePage((current) => ({
        ...current,
        sections: current.sections.filter((section) => section !== "reviews"),
      }))
      actions.push("removed all Reviews sections")
    }
    if (normalized.includes("ocean") || normalized.includes("blue")) {
      setPalette("ocean")
      actions.push("applied the Ocean palette")
    }
    if (normalized.includes("forest") || normalized.includes("green")) {
      setPalette("forest")
      actions.push("applied the Forest palette")
    }
    if (normalized.includes("sand") || normalized.includes("warm")) {
      setPalette("sand")
      actions.push("applied the Sand palette")
    }
    if (normalized.includes("serif")) {
      setFontPair("classic")
      actions.push("switched to Classic Serif typography")
    }
    if (normalized.includes("sans")) {
      setFontPair("modern")
      actions.push("switched to Modern Sans typography")
    }
    if (normalized.includes("mono")) {
      setFontPair("monospace")
      actions.push("switched to Monospace Editorial typography")
    }

    const reviewMatch = prompt.match(/review(?: text)?\s*(?:to|:)\s*["“]?(.+?)["”]?$/i)
    if (reviewMatch?.[1]) {
      const nextText = reviewMatch[1].trim()
      updatePage((current) => {
        if (current.reviews.length === 0) {
          return current
        }
        const nextReviews = [...current.reviews]
        nextReviews[0] = { ...nextReviews[0], quote: nextText }
        return { ...current, reviews: nextReviews }
      })
      actions.push("updated the first review copy")
    }

    const response =
      actions.length > 0
        ? `Done: ${actions.join(", ")}.`
        : "I did not detect a direct edit command. Try: add hero, add review, ocean theme, serif font, or review text: ... "
    setChat((prev) => [...prev, { role: "assistant", text: response }])
  }

  const sidebarTitle =
    mode === "editor" ? "Editor" : mode === "ai-mode" ? "AI Mode" : "Theme"

  return (
    <div className="flex h-full min-h-screen w-full flex-col overflow-hidden bg-[var(--color-surface-primary)]">
      <BuilderTopBar
        mode={mode}
        onModeChange={setMode}
        pageLabel={pageName}
        pageOptions={PAGE_OPTIONS}
        onPageChange={(value) => setPageName(value as PageName)}
      />
      <main className="flex min-h-0 flex-1">
        <section className="flex min-w-0 flex-1 items-start justify-center overflow-auto bg-[var(--color-surface-secondary)] p-8">
          <div
            className="w-full max-w-5xl rounded-2xl border border-[var(--color-border-secondary)] p-8 shadow-sm"
            style={{
              backgroundColor: activeTheme.canvas,
              color: activeTheme.body,
              fontFamily: activeFonts.body,
            }}
          >
            {page.sections.map((section, index) => (
              <div
                key={`${section}-${index}`}
                className="mb-6 rounded-xl p-8"
                style={{ backgroundColor: activeTheme.section }}
              >
                {section === "hero" && (
                  <div>
                    <p className="mb-3 text-xs uppercase tracking-[0.16em]" style={{ color: activeTheme.accent }}>
                      Hero
                    </p>
                    <h1
                      className="mb-3 text-4xl"
                      style={{ color: activeTheme.heading, fontFamily: activeFonts.heading }}
                    >
                      {page.heroTitle}
                    </h1>
                    <p className="max-w-2xl text-base">{page.heroSubtitle}</p>
                  </div>
                )}
                {section === "features" && (
                  <div>
                    <h2 className="mb-4 text-2xl" style={{ color: activeTheme.heading, fontFamily: activeFonts.heading }}>
                      Why guests book directly
                    </h2>
                    <div className="grid gap-3 md:grid-cols-3">
                      {["Priority support", "Curated amenities", "Best-rate guarantee"].map((item) => (
                        <div key={item} className="rounded-lg border border-black/10 p-4">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {section === "properties" && (
                  <div>
                    <h2 className="mb-4 text-2xl" style={{ color: activeTheme.heading, fontFamily: activeFonts.heading }}>
                      Featured homes
                    </h2>
                    <div className="grid gap-3 md:grid-cols-3">
                      {["Lakeview House", "Clifftop Villa", "Canyon Retreat"].map((item) => (
                        <div key={item} className="rounded-lg border border-black/10 p-4">
                          <p className="text-sm opacity-70">California</p>
                          <p className="mt-1 font-semibold">{item}</p>
                          <p className="mt-2 text-sm">$1,200 for 3 nights</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {section === "stats" && (
                  <div className="flex gap-8">
                    <div>
                      <p className="text-3xl font-semibold" style={{ color: activeTheme.heading }}>
                        200+
                      </p>
                      <p>5-star reviews</p>
                    </div>
                    <div>
                      <p className="text-3xl font-semibold" style={{ color: activeTheme.heading }}>
                        98%
                      </p>
                      <p>repeat guest rate</p>
                    </div>
                  </div>
                )}
                {section === "reviews" && (
                  <div>
                    <h2 className="mb-4 text-2xl" style={{ color: activeTheme.heading, fontFamily: activeFonts.heading }}>
                      Guest reviews
                    </h2>
                    <div className="grid gap-3 md:grid-cols-3">
                      {page.reviews.map((review, reviewIndex) => (
                        <div key={`${review.author}-${reviewIndex}`} className="rounded-lg border border-black/10 p-4">
                          <p className="text-sm">"{review.quote}"</p>
                          <p className="mt-3 text-sm font-semibold">{review.author}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <aside className="flex h-full w-[360px] shrink-0 flex-col border-l border-[var(--color-border-primary)] bg-[var(--color-surface-primary)]">
          <div className="border-b border-[var(--color-border-primary)] px-5 py-4">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-neutral-550)]">Mode</p>
            <h2 className="mt-1 text-lg font-medium text-[var(--color-neutral-900)]">{sidebarTitle}</h2>
          </div>

          <div className="flex-1 space-y-6 overflow-auto px-5 py-5">
            {mode === "editor" && (
              <>
                <div className="space-y-3">
                  <p className="text-sm font-medium text-[var(--color-neutral-900)]">Section order</p>
                  <div className="space-y-2">
                    {page.sections.map((section, index) => (
                      <div
                        key={`${section}-editor-${index}`}
                        className="flex items-center justify-between rounded-lg border border-[var(--color-border-secondary)] bg-[var(--color-surface-secondary)] px-3 py-2"
                      >
                        <span className="text-sm text-[var(--color-neutral-900)]">{SECTION_LABELS[section]}</span>
                        <div className="flex gap-1">
                          <button
                            type="button"
                            onClick={() => moveSection(index, -1)}
                            className="rounded border border-[var(--color-border-secondary)] px-2 py-1 text-xs"
                          >
                            Up
                          </button>
                          <button
                            type="button"
                            onClick={() => moveSection(index, 1)}
                            className="rounded border border-[var(--color-border-secondary)] px-2 py-1 text-xs"
                          >
                            Down
                          </button>
                          <button
                            type="button"
                            onClick={() => removeSection(index)}
                            className="rounded border border-[var(--color-border-secondary)] px-2 py-1 text-xs text-red-700"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-[var(--color-neutral-900)]">Add section</p>
                  <div className="flex gap-2">
                    <select
                      value={sectionToAdd}
                      onChange={(event) => setSectionToAdd(event.target.value as SectionType)}
                      className="h-9 flex-1 rounded-md border border-[var(--color-border-secondary)] bg-white px-2 text-sm"
                    >
                      {(Object.keys(SECTION_LABELS) as SectionType[]).map((section) => (
                        <option key={section} value={section}>
                          {SECTION_LABELS[section]}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => addSection(sectionToAdd)}
                      className="h-9 rounded-md bg-[var(--color-neutral-900)] px-3 text-sm text-white"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-[var(--color-neutral-900)]">Hero content</p>
                  <input
                    value={page.heroTitle}
                    onChange={(event) =>
                      updatePage((current) => ({ ...current, heroTitle: event.target.value }))
                    }
                    className="h-9 w-full rounded-md border border-[var(--color-border-secondary)] bg-white px-3 text-sm"
                    placeholder="Hero title"
                  />
                  <textarea
                    value={page.heroSubtitle}
                    onChange={(event) =>
                      updatePage((current) => ({ ...current, heroSubtitle: event.target.value }))
                    }
                    className="min-h-[80px] w-full rounded-md border border-[var(--color-border-secondary)] bg-white px-3 py-2 text-sm"
                    placeholder="Hero subtitle"
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-[var(--color-neutral-900)]">Review content</p>
                  <textarea
                    value={page.reviews[0]?.quote ?? ""}
                    onChange={(event) =>
                      updatePage((current) => {
                        if (current.reviews.length === 0) {
                          return current
                        }
                        const next = [...current.reviews]
                        next[0] = { ...next[0], quote: event.target.value }
                        return { ...current, reviews: next }
                      })
                    }
                    className="min-h-[96px] w-full rounded-md border border-[var(--color-border-secondary)] bg-white px-3 py-2 text-sm"
                    placeholder='First review text (for "edit review section" flow)'
                  />
                </div>
              </>
            )}

            {mode === "ai-mode" && (
              <div className="flex h-full min-h-[420px] flex-col">
                <div className="mb-3 rounded-lg border border-[var(--color-border-secondary)] bg-[var(--color-surface-secondary)] p-3 text-xs text-[var(--color-neutral-700)]">
                  Prompt examples: "Add hero", "Add review", "Ocean theme", "Serif typography", "Review text: Amazing host and perfect weekend."
                </div>
                <div className="flex-1 space-y-2 overflow-auto rounded-lg border border-[var(--color-border-secondary)] bg-[var(--color-surface-secondary)] p-3">
                  {chat.map((message, index) => (
                    <div
                      key={`msg-${index}`}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm",
                        message.role === "user"
                          ? "bg-[var(--color-neutral-900)] text-white"
                          : "bg-white text-[var(--color-neutral-900)]"
                      )}
                    >
                      {message.text}
                    </div>
                  ))}
                </div>
                <form className="mt-3 flex gap-2" onSubmit={handleAiSubmit}>
                  <input
                    value={aiInput}
                    onChange={(event) => setAiInput(event.target.value)}
                    className="h-10 flex-1 rounded-md border border-[var(--color-border-secondary)] bg-white px-3 text-sm"
                    placeholder="Tell AI what to change..."
                  />
                  <button type="submit" className="h-10 rounded-md bg-[var(--color-neutral-900)] px-4 text-sm text-white">
                    Send
                  </button>
                </form>
              </div>
            )}

            {mode === "theme" && (
              <>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-[var(--color-neutral-900)]">Color palette</p>
                  <div className="grid grid-cols-3 gap-2">
                    {THEME_PRESETS.map((preset) => (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setPalette(preset.id)}
                        className={cn(
                          "rounded-lg border p-2 text-left",
                          palette === preset.id
                            ? "border-[var(--color-neutral-900)]"
                            : "border-[var(--color-border-secondary)]"
                        )}
                      >
                        <div className="mb-2 flex gap-1">
                          <span className="size-4 rounded-full" style={{ backgroundColor: preset.canvas }} />
                          <span className="size-4 rounded-full" style={{ backgroundColor: preset.accent }} />
                          <span className="size-4 rounded-full border border-black/10" style={{ backgroundColor: preset.section }} />
                        </div>
                        <span className="text-xs text-[var(--color-neutral-900)]">{preset.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-[var(--color-neutral-900)]">Typography</p>
                  <div className="space-y-2">
                    {(Object.keys(FONT_OPTIONS) as FontPair[]).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setFontPair(option)}
                        className={cn(
                          "w-full rounded-lg border px-3 py-2 text-left",
                          fontPair === option
                            ? "border-[var(--color-neutral-900)] bg-[var(--color-surface-secondary)]"
                            : "border-[var(--color-border-secondary)]"
                        )}
                      >
                        <p className="text-sm text-[var(--color-neutral-900)]">{FONT_OPTIONS[option].label}</p>
                        <p className="text-xs text-[var(--color-neutral-550)]" style={{ fontFamily: FONT_OPTIONS[option].heading }}>
                          Heading preview
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </aside>
      </main>
    </div>
  )
}
