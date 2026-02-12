import { Link } from "react-router-dom"
import { Button } from "@wandercom/design-system-web/ui/button"

export function WebsiteContent() {
  return (
    <div className="flex flex-col h-full bg-background overflow-y-auto">
      <div className="flex flex-col gap-2 px-12 pt-20 pb-10 shrink-0">
        <h1 className="text-[30px] font-medium leading-[36px] tracking-[-0.3px] text-[#202020]">
          Website
        </h1>
        <p className="text-sm font-normal leading-normal text-[#5f5f5f]">
          Manage your direct booking website, domain, and public pages.
        </p>
      </div>

      <div className="px-12 pb-12">
        <div className="rounded-lg border border-border/80 bg-[#fafafa] p-8">
          <Button variant="primary" asChild>
            <Link to="/website/builder">Build my website</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
