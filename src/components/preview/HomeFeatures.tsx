import imgSpotlight from "@/assets/figma/5c64f7f62901913ae473d542962e7b8bce8bf01b.png"
import icon1 from "@/assets/figma/504a61b80fbe5a9ffdf769f2103d5679d64ebeba.svg"
import icon2 from "@/assets/figma/54dbb644bff24b2bedf21e74da2aa3a430274d55.svg"
import icon3 from "@/assets/figma/e27d4ab4ccd0a2808fad4f06a2a58b8d02afc3da.svg"
import icon4 from "@/assets/figma/f9eb7adb61cefb51a2a3d4b2c6b212635efa55fd.svg"
import dividerLine from "@/assets/figma/95a0edb6da2b88a8d9c2ebe3e10c701a2dbc50ef.svg"

interface HomeFeaturesProps {
  secondaryBgColor: string
  secondaryTextColor: string
  backgroundColor: string
  bodyTextColor: string
}

const features = [
  { icon: icon1, text: "Thoughtfully Designed, Luxury Homes" },
  { icon: icon2, text: "Seamless, Stress-Free Stays" },
  { icon: icon3, text: "24/7 Guest Support (That Actually Cares)" },
  { icon: icon4, text: "Top tier amenities and interior design" },
]

export function HomeFeatures({ secondaryBgColor, backgroundColor, bodyTextColor }: HomeFeaturesProps) {
  return (
    <div className="content-stretch flex flex-col items-start p-[48px] relative size-full" style={{ backgroundColor }}>
      <div className="content-stretch flex flex-col items-start overflow-clip p-[60px] relative rounded-lg shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-lg">
          <img alt="" className="absolute max-w-none object-cover rounded-lg size-full" src={imgSpotlight} />
          <div className="absolute bg-[rgba(0,0,0,0.25)] inset-0 rounded-lg" />
        </div>
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px px-[80px] relative">
            <div className="flex flex-[1_0_0] flex-col font-['Instrument_Sans:Medium',sans-serif] font-[550] justify-center leading-[0] min-h-px min-w-px relative text-[36px] text-[#fafafa] tracking-[-0.72px]">
              <p className="leading-[40px] whitespace-pre-wrap">
                A little getaway
                <br aria-hidden="true" />
                changes everything.
              </p>
            </div>
          </div>
          <div className="bg-[#f4f1ec] content-stretch flex flex-col gap-[32px] items-start max-w-[480px] p-[32px] relative rounded-xl shrink-0 w-[480px]">
            <div className="flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-[550] justify-center leading-[0] relative shrink-0 text-[24px] tracking-[-0.24px] w-full" style={{ color: bodyTextColor }}>
              <p className="leading-[28px] whitespace-pre-wrap">Things that set us apart</p>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              {features.map((feature, index) => (
                <div key={index}>
                  <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                    <div
                      className="content-stretch flex items-center justify-center min-h-[40px] min-w-[40px] overflow-clip px-[14px] relative rounded-full shrink-0 size-[40px]"
                      style={{ backgroundColor: secondaryBgColor }}
                    >
                      <div className="overflow-clip relative shrink-0 size-[16px]">
                        <img alt="" className="block max-w-none size-full" src={feature.icon} />
                      </div>
                    </div>
                    <div className="flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-[550] justify-center leading-[0] relative shrink-0 text-[16px] whitespace-nowrap" style={{ color: bodyTextColor }}>
                      <p className="leading-[20px]">{feature.text}</p>
                    </div>
                  </div>
                  {index < features.length - 1 && (
                    <div className="h-0 relative shrink-0 w-full mt-4">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={dividerLine} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
