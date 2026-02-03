import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Header } from "@/components/preview/Header"
import { HomeHero } from "@/components/preview/HomeHero"
import { HomePropertyGrid } from "@/components/preview/HomePropertyGrid"

const STORAGE_KEY = "customColors"
const SELECTED_THEME_KEY = "selectedThemeId"

interface SavedColors {
  textColor: string
  bgColor: string
  secondaryTextColor: string
  secondaryBgColor: string
  backgroundColor: string
  bodyTextColor: string
  secondaryBodyTextColor: string
}

function loadSavedColors(): SavedColors | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : null
  } catch {
    return null
  }
}

function saveSelectedTheme(themeId: string) {
  try {
    localStorage.setItem(SELECTED_THEME_KEY, themeId)
  } catch (error) {
    console.error("Failed to save selected theme:", error)
  }
}

function loadSelectedTheme(): string | null {
  try {
    return localStorage.getItem(SELECTED_THEME_KEY)
  } catch {
    return null
  }
}

interface ColorTheme {
  id: string
  name: string
  colors: {
    background: string
    surface: string
    secondary: string
    primary: string
  }
  buttonPrimary: string
  buttonSecondary: string
  buttonPrimaryText: string
  buttonSecondaryText: string
  hasCustom?: boolean
}

const colorThemes: ColorTheme[] = [
  {
    id: "modern-grey",
    name: "Modern Grey",
    colors: {
      background: "#ffffff",
      surface: "#f7f7f7",
      secondary: "#404040",
      primary: "#202020",
    },
    buttonPrimary: "#202020",
    buttonSecondary: "#f0f0f0",
    buttonPrimaryText: "#f7f7f7",
    buttonSecondaryText: "#202020",
  },
  {
    id: "desert-sand",
    name: "Desert Sand",
    colors: {
      background: "#f4f1ec",
      surface: "#b7a99b",
      secondary: "#8b8177",
      primary: "#3f3a36",
    },
    buttonPrimary: "#3f3a36",
    buttonSecondary: "#b7a99b",
    buttonPrimaryText: "#ffffff",
    buttonSecondaryText: "#202020",
  },
  {
    id: "forest-green",
    name: "Forest Green",
    colors: {
      background: "#ffffff",
      surface: "#b6c5ba",
      secondary: "#7a8d82",
      primary: "#1f3d2b",
    },
    buttonPrimary: "#1f3d2b",
    buttonSecondary: "#b6c5ba",
    buttonPrimaryText: "#ffffff",
    buttonSecondaryText: "#202020",
  },
  {
    id: "nordic-blue",
    name: "Nordic Blue",
    colors: {
      background: "#ffffff",
      surface: "#aecce0",
      secondary: "#7ba8c4",
      primary: "#0d3b66",
    },
    buttonPrimary: "#0a3052",
    buttonSecondary: "#aecce0",
    buttonPrimaryText: "#ffffff",
    buttonSecondaryText: "#202020",
  },
  {
    id: "custom",
    name: "Custom",
    colors: {
      background: "#ffffff",
      surface: "#ffffff",
      secondary: "#ffffff",
      primary: "#ffffff",
    },
    buttonPrimary: "#777777",
    buttonSecondary: "#ffffff",
    buttonPrimaryText: "#ffffff",
    buttonSecondaryText: "#202020",
    hasCustom: true,
  },
]

export function ColorsContent() {
  const navigate = useNavigate()
  const [selectedThemeId, setSelectedThemeId] = useState<string>("modern-grey")
  const [savedCustomColors, setSavedCustomColors] = useState<SavedColors | null>(null)

  // Load saved custom colors and selected theme on mount
  useEffect(() => {
    const saved = loadSavedColors()
    if (saved) {
      setSavedCustomColors(saved)
      // Always select custom if custom colors exist
      setSelectedThemeId("custom")
    } else {
      // Only load saved theme if no custom colors exist
      const savedTheme = loadSelectedTheme()
      if (savedTheme) {
        setSelectedThemeId(savedTheme)
      }
    }
  }, [])

  const handleSave = () => {
    saveSelectedTheme(selectedThemeId)
  }

  return (
    <div className="flex h-full bg-background overflow-hidden">
      {/* Left Sidebar - Color Themes */}
      <div className="flex flex-col h-full bg-background overflow-y-auto border-r border-border/80 w-[400px] shrink-0">
        {/* Header */}
        <div className="flex flex-col gap-5 px-6 pt-3 pb-0 shrink-0">
          {/* Breadcrumb */}
          <div className="flex items-center justify-between h-12">
            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center h-7 w-7 rounded-full bg-[#f0f0f0] hover:bg-[#e0e0e0] transition-colors"
            >
              <ChevronLeft className="h-4 w-4 text-[#202020]" />
            </button>
            <button 
              onClick={handleSave}
              className="h-8 px-2 rounded-full bg-[#202020] text-[#f7f7f7] text-sm font-medium hover:bg-[#202020]/90 transition-colors"
            >
              Save
            </button>
          </div>

          {/* Title */}
          <div className="flex flex-col items-start">
            <h1 className="text-[30px] font-medium leading-[36px] tracking-[-0.3px] text-[#202020]">
              Edit colors
            </h1>
          </div>
        </div>

        {/* Color Themes */}
        <div className="flex flex-col gap-4 px-6 pt-10">
          {colorThemes.map((theme) => {
            // Use saved colors for custom theme if available
            const displayTheme = theme.id === "custom" && savedCustomColors
              ? {
                  ...theme,
                  colors: {
                    background: savedCustomColors.backgroundColor,
                    surface: savedCustomColors.secondaryBgColor,
                    secondary: savedCustomColors.secondaryBodyTextColor,
                    primary: savedCustomColors.bodyTextColor,
                  },
                  buttonPrimary: savedCustomColors.bgColor,
                  buttonSecondary: savedCustomColors.secondaryBgColor,
                  buttonPrimaryText: savedCustomColors.textColor,
                  buttonSecondaryText: savedCustomColors.secondaryTextColor,
                }
              : theme

            return (
              <ColorThemeCard
                key={theme.id}
                theme={displayTheme}
                isSelected={selectedThemeId === theme.id}
                onSelect={() => setSelectedThemeId(theme.id)}
              />
            )
          })}
        </div>
      </div>

      {/* Right Side - Preview */}
      <div className="flex-1 flex flex-col h-full bg-[#f7f7f7] overflow-y-auto">
        <div className="p-6">
          <div className="border border-border/80 rounded-lg overflow-hidden bg-white">
            <div className="relative w-full">
              <div className="flex flex-col w-full">
                {(() => {
                  let displayTheme = colorThemes.find(t => t.id === selectedThemeId)
                  
                  // Use saved custom colors if custom is selected
                  if (selectedThemeId === "custom" && savedCustomColors) {
                    displayTheme = {
                      id: "custom",
                      name: "Custom",
                      colors: {
                        background: savedCustomColors.backgroundColor,
                        surface: savedCustomColors.secondaryBgColor,
                        secondary: savedCustomColors.secondaryBodyTextColor,
                        primary: savedCustomColors.bodyTextColor,
                      },
                      buttonPrimary: savedCustomColors.bgColor,
                      buttonSecondary: savedCustomColors.secondaryBgColor,
                      buttonPrimaryText: savedCustomColors.textColor,
                      buttonSecondaryText: savedCustomColors.secondaryTextColor,
                      hasCustom: true,
                    }
                  }
                  
                  if (!displayTheme) return null
                  
                  return (
                    <>
                      <Header 
                        secondaryBgColor={displayTheme.buttonSecondary} 
                        secondaryTextColor={displayTheme.buttonSecondaryText}
                        backgroundColor={displayTheme.colors.background}
                        bodyTextColor={displayTheme.colors.primary}
                      />
                      <HomeHero 
                        bgColor={displayTheme.buttonPrimary} 
                        textColor={displayTheme.buttonPrimaryText}
                        backgroundColor={displayTheme.colors.background}
                        bodyTextColor={displayTheme.colors.primary}
                        secondaryBodyTextColor={displayTheme.colors.secondary}
                      />
                      <HomePropertyGrid 
                        secondaryBgColor={displayTheme.buttonSecondary} 
                        secondaryTextColor={displayTheme.buttonSecondaryText}
                        backgroundColor={displayTheme.colors.background}
                        bodyTextColor={displayTheme.colors.primary}
                        secondaryBodyTextColor={displayTheme.colors.secondary}
                      />
                      <div style={{ height: "48px", backgroundColor: displayTheme.colors.background }} />
                    </>
                  )
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ColorThemeCard({
  theme,
  isSelected,
  onSelect,
}: {
  theme: ColorTheme
  isSelected: boolean
  onSelect: () => void
}) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (theme.hasCustom) {
      navigate("/colors/custom")
    } else {
      onSelect()
    }
  }

  return (
    <div
      onClick={handleClick}
      className={cn(
        "flex flex-col gap-3 p-4 rounded-xl transition-colors border",
        isSelected
          ? "bg-white border-[#0078d4] cursor-default"
          : theme.hasCustom
          ? "bg-white border-border/80 hover:bg-[#f7f7f7] cursor-pointer"
          : "bg-[#f7f7f7] border-transparent hover:bg-[#f0f0f0] cursor-pointer"
      )}
    >
      {/* Color Swatches and Buttons */}
      <div className="flex gap-2 items-start">
        {/* Color Swatches */}
        <div
          className="h-8 w-8 rounded border border-border/80 shrink-0"
          style={{ backgroundColor: theme.colors.background }}
        />
        <div
          className="h-8 w-8 rounded border border-border/80 shrink-0"
          style={{ backgroundColor: theme.colors.surface }}
        />
        <div
          className="h-8 w-8 rounded border border-border/80 shrink-0"
          style={{ backgroundColor: theme.colors.secondary }}
        />
        <div
          className="h-8 w-8 rounded border border-border/80 shrink-0"
          style={{ backgroundColor: theme.colors.primary }}
        />

        {/* Vertical Separator */}
        <div className="h-8 w-px bg-border/80 mx-0 shrink-0" />

        {/* Button Previews */}
        <div className="flex gap-1.5 items-center">
          <div
            className="h-8 w-8 rounded flex items-center justify-center shrink-0"
            style={{ backgroundColor: theme.buttonPrimary }}
          >
            <span
              className="text-xs font-[450]"
              style={{ color: theme.buttonPrimaryText }}
            >
              Btn
            </span>
          </div>
          <div
            className="h-8 w-8 rounded flex items-center justify-center shrink-0"
            style={{ backgroundColor: theme.buttonSecondary }}
          >
            <span
              className="text-xs font-[450]"
              style={{ color: theme.buttonSecondaryText }}
            >
              Btn
            </span>
          </div>
        </div>
      </div>

      {/* Horizontal Separator */}
      <div className="h-px w-full bg-border/80" />

      {/* Theme Name */}
      <div className="flex items-center justify-between">
        <span className={cn(
          "text-sm font-[450]",
          isSelected ? "text-[#202020]" : "text-[#5f5f5f]"
        )}>
          {theme.name}
        </span>
        {isSelected && (
          <span className="text-sm font-[450] text-[#202020]">Current</span>
        )}
        {theme.hasCustom && !isSelected && (
          <ChevronRight className="h-4 w-4 text-[#202020]" />
        )}
      </div>
    </div>
  )
}
