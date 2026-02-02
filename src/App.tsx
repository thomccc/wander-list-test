import { Sidebar } from "@/components/Sidebar"
import { HomeContent } from "@/components/HomeContent"

function App() {
  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <HomeContent />
      </div>
    </div>
  )
}

export default App
