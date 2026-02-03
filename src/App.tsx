import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { Sidebar } from "@/components/Sidebar"
import { HomeContent } from "@/components/HomeContent"
import { ColorsContent } from "@/components/ColorsContent"
import { CustomColorsContent } from "@/components/CustomColorsContent"

function AppLayout() {
  const location = useLocation()
  const showSidebar = !location.pathname.startsWith("/colors")

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {showSidebar && <Sidebar />}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/colors" element={<ColorsContent />} />
          <Route path="/colors/custom" element={<CustomColorsContent />} />
        </Routes>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
