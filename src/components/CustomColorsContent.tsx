import { useState, useEffect } from "react"
import { ChevronLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { HexColorPicker, HexColorInput } from "react-colorful"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { Header } from "@/components/preview/Header"
import { HomeHero } from "@/components/preview/HomeHero"
import { HomePropertyGrid } from "@/components/preview/HomePropertyGrid"

const STORAGE_KEY = "customColors"

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

function saveColors(colors: SavedColors) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(colors))
  } catch (error) {
    console.error("Failed to save colors:", error)
  }
}

export function CustomColorsContent() {
  const navigate = useNavigate()
  const [textColor, setTextColor] = useState("#f7f7f7")
  const [bgColor, setBgColor] = useState("#202020")
  const [secondaryTextColor, setSecondaryTextColor] = useState("#202020")
  const [secondaryBgColor, setSecondaryBgColor] = useState("#f0f0f0")
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")
  const [bodyTextColor, setBodyTextColor] = useState("#202020")
  const [secondaryBodyTextColor, setSecondaryBodyTextColor] = useState("#404040")

  // Load saved colors on mount
  useEffect(() => {
    const saved = loadSavedColors()
    if (saved) {
      setTextColor(saved.textColor)
      setBgColor(saved.bgColor)
      setSecondaryTextColor(saved.secondaryTextColor)
      setSecondaryBgColor(saved.secondaryBgColor)
      setBackgroundColor(saved.backgroundColor)
      setBodyTextColor(saved.bodyTextColor)
      setSecondaryBodyTextColor(saved.secondaryBodyTextColor)
    }
  }, [])

  const handleApply = () => {
    const colors: SavedColors = {
      textColor,
      bgColor,
      secondaryTextColor,
      secondaryBgColor,
      backgroundColor,
      bodyTextColor,
      secondaryBodyTextColor,
    }
    saveColors(colors)
    // Save "custom" as the selected theme
    try {
      localStorage.setItem("selectedThemeId", "custom")
    } catch (error) {
      console.error("Failed to save selected theme:", error)
    }
    navigate("/colors")
  }

  return (
    <div className="flex h-full bg-background overflow-hidden">
      {/* Left Sidebar - Custom Colors Editor */}
      <div className="flex flex-col h-full bg-background overflow-y-auto border-r border-border/80 w-[400px] shrink-0">
        {/* Header */}
        <div className="flex flex-col gap-5 px-6 pt-3 pb-0 shrink-0">
          {/* Breadcrumb */}
          <div className="flex items-center justify-between h-12">
            <button
              onClick={() => navigate("/colors")}
              className="flex items-center justify-center h-7 w-7 rounded-full bg-[#f0f0f0] hover:bg-[#e0e0e0] transition-colors"
            >
              <ChevronLeft className="h-4 w-4 text-[#202020]" />
            </button>
            <button 
              onClick={handleApply}
              className="h-8 px-2 rounded-full bg-[#202020] text-[#f7f7f7] text-sm font-[450] hover:bg-[#202020]/90 transition-colors"
            >
              Apply
            </button>
          </div>

          {/* Title */}
          <div className="flex flex-col items-start">
            <h1 className="text-[30px] font-[450] leading-[36px] tracking-[-0.3px] text-[#202020]">
              Custom colors
            </h1>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="buttons" className="flex flex-col h-full">
          <div className="px-6 pt-10 border-b border-border/80 shrink-0">
            <TabsList className="h-auto bg-transparent p-0 gap-3">
              <TabsTrigger
                value="background"
                className={cn(
                  "h-10 py-3 px-0 text-sm font-[450] rounded-none border-b-2 border-transparent data-[state=active]:border-[#202020] data-[state=active]:bg-transparent data-[state=active]:shadow-none",
                  "text-[#5f5f5f] data-[state=active]:text-[#202020]"
                )}
              >
                Background
              </TabsTrigger>
              <TabsTrigger
                value="text"
                className={cn(
                  "h-10 py-3 px-0 text-sm font-[450] rounded-none border-b-2 border-transparent data-[state=active]:border-[#202020] data-[state=active]:bg-transparent data-[state=active]:shadow-none",
                  "text-[#5f5f5f] data-[state=active]:text-[#202020]"
                )}
              >
                Text
              </TabsTrigger>
              <TabsTrigger
                value="buttons"
                className={cn(
                  "h-10 py-3 px-0 text-sm font-[450] rounded-none border-b-2 border-transparent data-[state=active]:border-[#202020] data-[state=active]:bg-transparent data-[state=active]:shadow-none",
                  "text-[#5f5f5f] data-[state=active]:text-[#202020]"
                )}
              >
                Buttons
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="flex flex-col gap-8 px-6 py-8">
              {/* Buttons Content */}
              <TabsContent value="buttons" className="mt-0">
                <div className="flex flex-col gap-8">
                  <div className="bg-[#f7f7f7] h-[100px] rounded-lg flex items-center justify-center relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <button
                        className="h-12 px-4 rounded-full text-base font-[450] transition-colors"
                        style={{
                          backgroundColor: bgColor,
                          color: textColor,
                        }}
                      >
                        Primary
                      </button>
                    </div>
                  </div>

                  {/* Text Color Section */}
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center">
                        <h3 className="text-base font-[450] text-[#202020]">
                          Text color
                        </h3>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="h-[140px] rounded overflow-hidden">
                          <HexColorPicker
                            color={textColor}
                            onChange={setTextColor}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                        <div className="flex gap-2 items-start">
                          <HexColorInput
                            color={textColor}
                            onChange={setTextColor}
                            prefixed
                            className="flex-1 bg-[#f7f7f7] h-10 px-3.5 py-2.5 rounded-lg text-sm font-normal text-[#202020] border-none outline-none focus:ring-0"
                          />
                          <button className="h-10 px-3 rounded-full bg-[#f0f0f0] text-sm font-[450] text-[#202020] hover:bg-[#e0e0e0] transition-colors">
                            Undo
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Background Color Section */}
                  <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center">
                        <h3 className="text-base font-[450] text-[#202020]">
                          Background color
                        </h3>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="h-[140px] rounded overflow-hidden">
                          <HexColorPicker
                            color={bgColor}
                            onChange={setBgColor}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </div>
                        <HexColorInput
                          color={bgColor}
                          onChange={setBgColor}
                          prefixed
                          className="bg-[#f7f7f7] h-10 px-3.5 py-2.5 rounded-lg text-sm font-normal text-[#9a9a9a] border-none outline-none focus:ring-0 w-full"
                          placeholder="#000"
                        />
                        <div className="flex gap-2 items-center">
                          <div className="h-4 w-4 rounded bg-[#202020] flex items-center justify-center">
                            <svg
                              className="h-3 w-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-sm font-normal text-[#202020]">
                            Apply palette
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Button Preview */}
                  <div className="flex flex-col gap-8">
                    <div className="bg-[#f7f7f7] h-[100px] rounded-lg flex items-center justify-center relative">
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <button
                          className="h-12 px-4 rounded-full text-base font-[450] transition-colors"
                          style={{
                            backgroundColor: secondaryBgColor,
                            color: secondaryTextColor,
                          }}
                        >
                          Secondary
                        </button>
                      </div>
                    </div>

                    {/* Text Color Section */}
                    <div className="flex flex-col gap-8">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                          <h3 className="text-base font-[450] text-[#202020]">
                            Text color
                          </h3>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="h-[140px] rounded overflow-hidden">
                            <HexColorPicker
                              color={secondaryTextColor}
                              onChange={setSecondaryTextColor}
                              style={{ width: "100%", height: "100%" }}
                            />
                          </div>
                          <div className="flex gap-2 items-start">
                            <HexColorInput
                              color={secondaryTextColor}
                              onChange={setSecondaryTextColor}
                              prefixed
                              className="flex-1 bg-[#f7f7f7] h-10 px-3.5 py-2.5 rounded-lg text-sm font-normal text-[#202020] border-none outline-none focus:ring-0"
                            />
                            <button className="h-10 px-3 rounded-full bg-[#f0f0f0] text-sm font-[450] text-[#202020] hover:bg-[#e0e0e0] transition-colors">
                              Undo
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Background Color Section */}
                    <div className="flex flex-col gap-8">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                          <h3 className="text-base font-[450] text-[#202020]">
                            Background color
                          </h3>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="h-[140px] rounded overflow-hidden">
                            <HexColorPicker
                              color={secondaryBgColor}
                              onChange={setSecondaryBgColor}
                              style={{ width: "100%", height: "100%" }}
                            />
                          </div>
                          <HexColorInput
                            color={secondaryBgColor}
                            onChange={setSecondaryBgColor}
                            prefixed
                            className="bg-[#f7f7f7] h-10 px-3.5 py-2.5 rounded-lg text-sm font-normal text-[#9a9a9a] border-none outline-none focus:ring-0 w-full"
                            placeholder="#000"
                          />
                          <div className="flex gap-2 items-center">
                            <div className="h-4 w-4 rounded bg-[#202020] flex items-center justify-center">
                              <svg
                                className="h-3 w-3 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <span className="text-sm font-normal text-[#202020]">
                              Apply palette
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Background Tab */}
              <TabsContent value="background" className="mt-0">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center">
                      <h3 className="text-base font-[450] text-[#202020]">
                        Background color
                      </h3>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="h-[140px] rounded overflow-hidden">
                        <HexColorPicker
                          color={backgroundColor}
                          onChange={setBackgroundColor}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <HexColorInput
                        color={backgroundColor}
                        onChange={setBackgroundColor}
                        prefixed
                        className="bg-[#f7f7f7] h-10 px-3.5 py-2.5 rounded-lg text-sm font-normal text-[#9a9a9a] border-none outline-none focus:ring-0 w-full"
                        placeholder="#f4f1ec"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Text Tab */}
              <TabsContent value="text" className="mt-0">
                <div className="flex flex-col gap-8">
                  {/* Main Text Color Section */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center px-0">
                      <div className="bg-[#f0f0f0] border border-[rgba(0,0,0,0.05)] border-solid flex gap-1 h-6 items-center justify-center min-w-[24px] px-2 rounded-full shrink-0">
                        <p className="text-xs font-[450] text-[#202020] text-center">
                          Main text color
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 px-0">
                      <div className="h-[140px] rounded overflow-hidden">
                        <HexColorPicker
                          color={bodyTextColor}
                          onChange={setBodyTextColor}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <div className="flex gap-2 items-start">
                        <HexColorInput
                          color={bodyTextColor}
                          onChange={setBodyTextColor}
                          prefixed
                          className="flex-1 bg-[#f7f7f7] h-10 px-3.5 py-2.5 rounded-lg text-sm font-normal text-[#202020] border-none outline-none focus:ring-0"
                        />
                        <button className="h-10 px-3 rounded-full bg-[#f0f0f0] text-sm font-[450] text-[#202020] hover:bg-[#e0e0e0] transition-colors">
                          Undo
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Text Color Section */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center px-0">
                      <div className="bg-[#f0f0f0] border border-[rgba(0,0,0,0.05)] border-solid flex gap-1 h-6 items-center justify-center min-w-[24px] px-2 rounded-full shrink-0">
                        <p className="text-xs font-[450] text-[#202020] text-center">
                          Secondary text color
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 px-0">
                      <div className="h-[140px] rounded overflow-hidden">
                        <HexColorPicker
                          color={secondaryBodyTextColor}
                          onChange={setSecondaryBodyTextColor}
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                      <div className="flex gap-2 items-start">
                        <HexColorInput
                          color={secondaryBodyTextColor}
                          onChange={setSecondaryBodyTextColor}
                          prefixed
                          className="flex-1 bg-[#f7f7f7] h-10 px-3.5 py-2.5 rounded-lg text-sm font-normal text-[#202020] border-none outline-none focus:ring-0"
                        />
                        <button className="h-10 px-3 rounded-full bg-[#f0f0f0] text-sm font-[450] text-[#202020] hover:bg-[#e0e0e0] transition-colors">
                          Undo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>

      {/* Right Side - Preview */}
      <div className="flex-1 flex flex-col h-full bg-[#f7f7f7] overflow-y-auto">
        <div className="p-6">
          <div className="border border-border/80 rounded-lg overflow-hidden bg-white">
            <div className="relative w-full">
              <div className="flex flex-col w-full">
                <Header 
                  secondaryBgColor={secondaryBgColor} 
                  secondaryTextColor={secondaryTextColor}
                  backgroundColor={backgroundColor}
                  bodyTextColor={bodyTextColor}
                />
                <HomeHero 
                  bgColor={bgColor} 
                  textColor={textColor}
                  backgroundColor={backgroundColor}
                  bodyTextColor={bodyTextColor}
                  secondaryBodyTextColor={secondaryBodyTextColor}
                />
                <HomePropertyGrid 
                  secondaryBgColor={secondaryBgColor} 
                  secondaryTextColor={secondaryTextColor}
                  backgroundColor={backgroundColor}
                  bodyTextColor={bodyTextColor}
                  secondaryBodyTextColor={secondaryBodyTextColor}
                />
                <div style={{ height: "48px", backgroundColor }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
