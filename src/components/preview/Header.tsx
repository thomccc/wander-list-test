import imgImage27 from "@/assets/figma/ed3f4cd9a537c34d4a62dc230718a5c6ea1e009a.png"
import searchIcon from "@/assets/figma/95a0edb6da2b88a8d9c2ebe3e10c701a2dbc50ef.svg"

interface HeaderProps {
  secondaryBgColor: string
  secondaryTextColor: string
  backgroundColor: string
  bodyTextColor: string
}

export function Header({ secondaryBgColor, secondaryTextColor, backgroundColor, bodyTextColor }: HeaderProps) {
  return (
    <div className="content-stretch flex items-center justify-between pl-[48px] pr-[36px] py-[12px] relative size-full" style={{ backgroundColor }}>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[32px] items-start justify-center min-h-px min-w-px relative">
        <div className="h-[28px] relative shrink-0 w-[111px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage27} />
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-h-px min-w-px relative">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <div
            className="content-stretch flex gap-[2px] h-[40px] items-center justify-center min-h-[40px] overflow-clip px-[12px] relative rounded-full shrink-0"
            style={{ backgroundColor: secondaryBgColor }}
          >
            <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
              <p
                className="font-['Instrument_Sans:Medium',sans-serif] font-[550] leading-[normal] relative shrink-0 text-[14px] whitespace-nowrap"
                style={{ color: secondaryTextColor }}
              >
                List on Downtime
              </p>
            </div>
          </div>
          <div className="bg-transparent content-stretch flex items-center justify-center min-h-[40px] min-w-[40px] overflow-clip px-[14px] relative rounded-full shrink-0 size-[40px]">
            <div className="overflow-clip relative shrink-0 size-[16px]">
              <img alt="" className="block max-w-none size-full" src={searchIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
