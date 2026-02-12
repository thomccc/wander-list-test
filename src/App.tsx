import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import { Sidebar } from "@/components/Sidebar"
import { HomeContent } from "@/components/HomeContent"
import { ColorsContent } from "@/components/ColorsContent"
import { CustomColorsContent } from "@/components/CustomColorsContent"
import { ListingsContent } from "@/components/ListingsContent"
import { WebsiteLayout } from "@/components/WebsiteLayout"
import { WebsiteContent } from "@/components/WebsiteContent"
import { WebsiteBuilderContent } from "@/components/WebsiteBuilderContent"

function AppLayout() {
  const location = useLocation()
  const showSidebar =
    !location.pathname.startsWith("/colors") &&
    !location.pathname.startsWith("/website/builder")

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {showSidebar && <Sidebar />}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/colors" element={<ColorsContent />} />
          <Route path="/colors/custom" element={<CustomColorsContent />} />
          <Route path="/listings" element={<ListingsContent />} />
          <Route path="/website" element={<WebsiteLayout />}>
            <Route index element={<WebsiteContent />} />
            <Route path="builder" element={<WebsiteBuilderContent />} />
          </Route>
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
