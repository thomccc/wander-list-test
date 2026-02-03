
interface ReviewsSectionProps {
  backgroundColor: string
  bodyTextColor: string
  secondaryBodyTextColor: string
}

const reviews = [
  {
    text: "Don't hesitate to book this place! It was so worth it to have a quiet spot right on the lake with easy water access. We can't wait to stay again!",
    name: "Buddy",
    date: "Stayed August 2025",
  },
  {
    text: "Don't hesitate to book this place! It was so worth it to have a quiet spot right on the lake with easy water access. We can't wait to stay again!",
    name: "David",
    date: "Stayed August 2025",
  },
  {
    text: "Don't hesitate to book this place! It was so worth it to have a quiet spot right on the lake with easy water access. We can't wait to stay again!",
    name: "David",
    date: "Stayed August 2025",
  },
]

export function ReviewsSection({ backgroundColor, bodyTextColor, secondaryBodyTextColor }: ReviewsSectionProps) {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center justify-center relative size-full" style={{ backgroundColor }}>
      <div className="content-stretch flex font-['Instrument_Sans:Medium',sans-serif] gap-[16px] items-center leading-[0] px-[48px] relative shrink-0 w-full" style={{ color: bodyTextColor }}>
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border border-[rgba(0,0,0,0.08)] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[115px] items-start min-h-px min-w-px p-[24px] relative rounded-xl"
          >
            <div className="flex flex-col font-[550] justify-center relative shrink-0 text-[16px] w-full" style={{ color: bodyTextColor }}>
              <p className="leading-[20px] whitespace-pre-wrap">"{review.text}"</p>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="flex flex-col font-[550] justify-center relative shrink-0 text-[16px] w-full" style={{ color: bodyTextColor }}>
                <p className="leading-[20px] whitespace-pre-wrap">{review.name}</p>
              </div>
              <div className="flex flex-col font-[450] justify-center relative shrink-0 text-[14px] w-full" style={{ color: secondaryBodyTextColor }}>
                <p className="leading-[normal] whitespace-pre-wrap">{review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
