import imgHomeHero1440 from "@/assets/figma/e708087cc8134f460ecad1d98424b59b0df53f33.png"
import searchIcon from "@/assets/figma/37dccf938dca45edabe098929952a71b78747c37.svg"

interface HomeHeroProps {
  bgColor: string
  textColor: string
  backgroundColor: string
  bodyTextColor: string
  secondaryBodyTextColor: string
}

export function HomeHero({ bgColor, textColor, bodyTextColor, secondaryBodyTextColor }: HomeHeroProps) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[80px] relative size-full">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHomeHero1440} />
        <div className="absolute bg-[rgba(0,0,0,0.25)] inset-0" />
      </div>
      <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 text-[#fafafa] text-center w-full">
            <p className="font-['Roboto_Serif:Medium',sans-serif] font-medium leading-[40px] relative shrink-0 text-[36px] tracking-[-0.72px]">
              Big Lake Properties
            </p>
            <p className="font-['Instrument_Sans:Medium',sans-serif] font-[450] leading-[24px] max-w-[530px] min-w-full relative shrink-0 text-[16px] w-[min-content] whitespace-pre-wrap">
              Boutique stays designed by people who truly care.
            </p>
          </div>
          <div className="bg-[#f4f1ec] border-[0.5px] border-[rgba(0,0,0,0.08)] border-solid content-stretch flex gap-[4px] items-center p-px relative rounded-[999px] shadow-[0px_3px_12px_0px_rgba(0,0,0,0.08),0px_1px_4px_0px_rgba(0,0,0,0.1)] shrink-0">
            <div className="content-stretch flex gap-[6px] h-[46px] items-center overflow-clip pl-[16px] pr-[20px] relative rounded-full shrink-0">
              <div className="content-stretch flex gap-[2px] h-[32px] items-center justify-center min-h-[32px] overflow-clip relative rounded-full shrink-0">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <img alt="" className="block max-w-none size-full" src={searchIcon} />
                </div>
              </div>
              <div className="content-stretch flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-[550] gap-[8px] h-[40px] items-start justify-center leading-[0] max-w-[176px] relative shrink-0 text-[14px] whitespace-nowrap">
                <div className="flex flex-col justify-center relative shrink-0" style={{ color: secondaryBodyTextColor }}>
                  <p className="leading-[normal]">Anywhere</p>
                </div>
                <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[-13.5px]" style={{ color: bodyTextColor }}>
                  <p className="leading-[normal]">Los Angeles</p>
                </div>
              </div>
            </div>
            <div className="border border-[rgba(0,0,0,0.08)] border-solid h-[20px] rounded-lg shrink-0 w-px" />
            <div className="content-stretch flex h-[46px] items-center justify-center px-[20px] py-[10px] relative rounded-full shrink-0">
              <div className="flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-[550] justify-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap" style={{ color: secondaryBodyTextColor }}>
                <p className="leading-[normal]">Anytime</p>
              </div>
            </div>
            <div className="border border-[rgba(0,0,0,0.08)] border-solid h-[20px] rounded-lg shrink-0 w-px" />
            <div className="content-stretch flex gap-[4px] h-[46px] items-center pr-[4px] relative rounded-full shrink-0">
              <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-full shrink-0">
                <div className="flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-[550] justify-center leading-[0] relative shrink-0 text-[14px] whitespace-nowrap" style={{ color: secondaryBodyTextColor }}>
                  <p className="leading-[normal]">Any guests</p>
                </div>
              </div>
              <div
                className="content-stretch flex gap-[2px] h-[40px] items-center justify-center min-h-[40px] overflow-clip px-[12px] relative rounded-full shrink-0"
                style={{ backgroundColor: bgColor }}
              >
                <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
                  <p
                    className="font-['Instrument_Sans:Medium',sans-serif] font-[550] leading-[normal] relative shrink-0 text-[14px]"
                    style={{ color: textColor }}
                  >
                    Search
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
