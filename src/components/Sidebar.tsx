import { ChevronDown } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  path?: string
  active?: boolean
}

interface NavSection {
  title?: string
  items: NavItem[]
}

interface SidebarProps {
  className?: string
}

const navSections: NavSection[] = [
  {
    items: [
      { label: "Home", path: "/" },
      { label: "Calendar" },
      { label: "Reservations" },
      { label: "Listings", path: "/listings" },
      { label: "Customers" },
    ],
  },
  {
    title: "Channels",
    items: [
      { label: "Website", path: "/website" },
      { label: "Wander" },
    ],
  },
  {
    title: "Insights",
    items: [
      { label: "Invoices" },
      { label: "Payouts" },
      { label: "Payments" },
      { label: "Capex" },
    ],
  },
  {
    title: "Growth",
    items: [
      { label: "Email" },
    ],
  },
]

export function Sidebar({ className }: SidebarProps) {
  const location = useLocation()

  return (
    <div
      className={cn(
        "bg-background border-r border-border/80 flex flex-col gap-3 h-full items-start p-3 w-[248px]",
        className
      )}
    >
      {/* Profile Section */}
      <div className="flex flex-col h-12 items-start justify-center shrink-0 w-full">
        <div className="flex items-center justify-between pl-3 pr-1.5 py-1.5 rounded-lg w-[224px] hover:bg-muted/50 transition-colors cursor-pointer group">
          <div className="flex gap-2 items-center">
            <Avatar className="h-6 w-6">
              <AvatarFallback className="bg-[#f0f0f0] text-xs font-medium text-[#202020]">
                C
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center text-sm font-medium text-[#5f5f5f] whitespace-nowrap">
              <span>Downtime vacation</span>
            </div>
          </div>
          <ChevronDown className="h-5 w-5 text-[#5f5f5f] shrink-0" />
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="flex flex-1 flex-col gap-5 items-start min-h-0 min-w-0 w-full">
        {navSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="flex flex-col items-start shrink-0 w-full">
            {/* Section Header */}
            {section.title && (
              <div className="flex flex-col items-start pb-1 shrink-0 w-full">
                <div className="flex h-[15px] items-center px-3 py-2 shrink-0 w-full">
                  <div className="flex flex-1 items-center min-h-0 min-w-0">
                    <span className="text-xs font-medium text-[#9a9a9a] whitespace-nowrap">
                      {section.title}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Items */}
            {section.items.map((item, itemIndex) => {
              const isActive = item.path
                ? location.pathname === item.path || location.pathname.startsWith(item.path + "/")
                : item.active || false
              
              const content = (
                <div
                  className={cn(
                    "flex flex-col h-9 items-start justify-center px-3 py-2 rounded-lg shrink-0 w-[224px] transition-colors",
                    isActive
                      ? "bg-[#f7f7f7] text-[#202020]"
                      : "text-[#5f5f5f] hover:bg-muted/50",
                    item.path && "cursor-pointer"
                  )}
                >
                  <div className="flex items-center shrink-0 w-full">
                    <span className="text-sm font-medium whitespace-nowrap">
                      {item.label}
                    </span>
                  </div>
                </div>
              )

              return item.path ? (
                <Link key={itemIndex} to={item.path} className="w-full">
                  {content}
                </Link>
              ) : (
                <div key={itemIndex}>
                  {content}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
