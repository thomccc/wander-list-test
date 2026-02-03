interface StatsSectionProps {
  backgroundColor: string
  bodyTextColor: string
}

export function StatsSection({ backgroundColor, bodyTextColor }: StatsSectionProps) {
  return (
    <div className="content-stretch flex items-center px-[48px] relative size-full" style={{ backgroundColor }}>
      <div className="flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-[550] justify-center leading-[0] relative shrink-0 text-[36px] tracking-[-0.72px] whitespace-nowrap" style={{ color: bodyTextColor }}>
        <p className="leading-[40px]">
          200+
          <br aria-hidden="true" />
          5 stars reviews.
        </p>
      </div>
    </div>
  )
}
