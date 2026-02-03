import img1 from "@/assets/figma/3c4e0e9be0074dc212e4c1c03045a7c905c07dbd.png"
import img2 from "@/assets/figma/eafea49cec3dae5d4f1c27e37755a3918ed990a9.png"
import img3 from "@/assets/figma/96d7f74e6680aa1a13c6139bd6f9bbcbd85b7c6d.png"
import img4 from "@/assets/figma/6ffa3f80180d139479e899ae29bddc28a8d505a9.png"
import img5 from "@/assets/figma/fd7515b029e63f06f8fa5e72aac28293091924d9.png"
import img6 from "@/assets/figma/f0e0329ddf2e08d082610d1fd0e185b2a2f6ea1e.png"
import img7 from "@/assets/figma/413191ef64c835ce6e879ddc6088ef7404b5f7d6.png"
import img8 from "@/assets/figma/6c4c763aa834d29083264eadacd8fa639abb36d6.png"

interface HomePropertyGridProps {
  secondaryBgColor: string
  secondaryTextColor: string
  backgroundColor: string
  bodyTextColor: string
  secondaryBodyTextColor: string
}

const properties = [
  { img: img1, location: "Napa Valley, California, USA", title: "Wine Country Retreat", price: "$1,500 for 4 nights", beds: 6, guests: 12 },
  { img: img2, location: "Big Sur, California, USA", title: "Coastal Haven", price: "$1,200 for 3 nights", beds: 5, guests: 10 },
  { img: img3, location: "Lake Tahoe, California, USA", title: "Mountain Escape", price: "$1,800 for 5 nights", beds: 7, guests: 15 },
  { img: img4, location: "Santa Barbara, California, USA", title: "Oceanview Paradise", price: "$1,400 for 3 nights", beds: 4, guests: 9 },
  { img: img5, location: "Laguna Beach, California, USA", title: "Coastal Paradise", price: "$900 for 3 nights", beds: 4, guests: 8 },
  { img: img6, location: "Napa Valley, California, USA", title: "Wine Country Retreat", price: "$1,500 for 4 nights", beds: 6, guests: 12 },
  { img: img7, location: "Big Sur, California, USA", title: "Coastal Haven", price: "$1,200 for 3 nights", beds: 5, guests: 10 },
  { img: img8, location: "Mendocino, California, USA", title: "Seaside Cottage", price: "$1,100 for 3 nights", beds: 5, guests: 10 },
]

export function HomePropertyGrid({ secondaryBgColor, secondaryTextColor, backgroundColor, bodyTextColor, secondaryBodyTextColor }: HomePropertyGridProps) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center p-[48px] relative size-full" style={{ backgroundColor }}>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0">
            <div className="flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-[550] justify-center leading-[0] relative shrink-0 text-[24px] tracking-[-0.24px] whitespace-nowrap" style={{ color: bodyTextColor }}>
              <p className="leading-[28px]">Beach getaways</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
              {properties.slice(0, 5).map((property, idx) => (
                <div key={idx} className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[256px]">
                  <div className="aspect-square overflow-clip relative rounded-xl shrink-0 w-full">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-xl size-full" src={property.img} />
                    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.5)] bottom-[12px] h-[6px] left-1/2 overflow-clip rounded-full w-[40px]">
                      <div className="absolute bg-white left-0 rounded-full size-[6px] top-0" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-[450] justify-center leading-[0] relative shrink-0 text-[14px] w-full" style={{ color: secondaryBodyTextColor }}>
                        <p className="leading-[normal] whitespace-pre-wrap">{property.location}</p>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <p className="font-['Instrument_Sans:Medium',sans-serif] font-[550] leading-[normal] relative shrink-0 text-[14px] w-full whitespace-pre-wrap" style={{ color: bodyTextColor }}>
                          {property.title}
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                        <div className="flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-[450] justify-end leading-[0] relative shrink-0 text-[14px] whitespace-nowrap" style={{ color: bodyTextColor }}>
                          <p className="leading-[normal]">{property.price}</p>
                        </div>
                        <div className="h-[12px] w-px opacity-20" style={{ backgroundColor: bodyTextColor }} />
                        <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                          <span className="font-['Instrument_Sans:Medium',sans-serif] font-[450] leading-[normal] relative shrink-0 text-[14px] text-center" style={{ color: bodyTextColor }}>
                            {property.beds} beds
                          </span>
                          <div className="relative shrink-0 size-[2px] rounded-full opacity-20" style={{ backgroundColor: bodyTextColor }} />
                          <span className="font-['Instrument_Sans:Medium',sans-serif] font-[450] leading-[normal] relative shrink-0 text-[14px] text-center" style={{ color: bodyTextColor }}>
                            {property.guests} guests
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
              {properties.slice(5, 8).map((property, idx) => (
                <div key={idx} className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[256px]">
                  <div className="aspect-square overflow-clip relative rounded-xl shrink-0 w-full">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-xl size-full" src={property.img} />
                    <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0.5)] bottom-[12px] h-[6px] left-1/2 overflow-clip rounded-full w-[40px]">
                      <div className="absolute bg-white left-0 rounded-full size-[6px] top-0" />
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                      <div className="flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-[450] justify-center leading-[0] relative shrink-0 text-[14px] w-full" style={{ color: secondaryBodyTextColor }}>
                        <p className="leading-[normal] whitespace-pre-wrap">{property.location}</p>
                      </div>
                      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                        <p className="font-['Instrument_Sans:Medium',sans-serif] font-[550] leading-[normal] relative shrink-0 text-[14px] w-full whitespace-pre-wrap" style={{ color: bodyTextColor }}>
                          {property.title}
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                        <div className="flex flex-col font-['Instrument_Sans:Medium',sans-serif] font-[450] justify-end leading-[0] relative shrink-0 text-[14px] whitespace-nowrap" style={{ color: bodyTextColor }}>
                          <p className="leading-[normal]">{property.price}</p>
                        </div>
                        <div className="h-[12px] w-px opacity-20" style={{ backgroundColor: bodyTextColor }} />
                        <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
                          <span className="font-['Instrument_Sans:Medium',sans-serif] font-[450] leading-[normal] relative shrink-0 text-[14px] text-center" style={{ color: bodyTextColor }}>
                            {property.beds} beds
                          </span>
                          <div className="relative shrink-0 size-[2px] rounded-full opacity-20" style={{ backgroundColor: bodyTextColor }} />
                          <span className="font-['Instrument_Sans:Medium',sans-serif] font-[450] leading-[normal] relative shrink-0 text-[14px] text-center" style={{ color: bodyTextColor }}>
                            {property.guests} guests
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="content-stretch flex gap-[2px] h-[40px] items-center justify-center min-h-[40px] overflow-clip px-[12px] relative rounded-full shrink-0"
        style={{ backgroundColor: secondaryBgColor }}
      >
        <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0">
          <p
            className="font-['Instrument_Sans:Medium',sans-serif] font-[550] leading-[normal] relative shrink-0 text-[14px] whitespace-nowrap"
            style={{ color: secondaryTextColor }}
          >
            See more properties
          </p>
        </div>
      </div>
    </div>
  )
}
