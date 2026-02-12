export function ListingsContent() {
  return (
    <div className="flex flex-col h-full bg-background overflow-y-auto">
      {/* Header */}
      <div className="flex flex-col gap-2 px-12 pt-20 pb-10 shrink-0">
        <div>
          <h1 className="text-[30px] font-medium leading-[36px] tracking-[-0.3px] text-[#202020]">
            Listings
          </h1>
          <p className="text-sm font-normal leading-normal text-[#202020]">
            Manage your property listings.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-12 pb-12">
        <div className="flex items-center justify-center min-h-[400px] text-muted-foreground">
          Listings content coming soon...
        </div>
      </div>
    </div>
  )
}
