import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import villaImage from "@/assets/71beb024802dc22bc5353f3431bc1e938544ea72.png"
import oceanviewImage from "@/assets/f1abc558a045fffc28cb7ee7a5a91c9612be7323.png"
import mountainImage from "@/assets/44b7f40a2de8911435d3fc2f983b645f29478ae1.png"

interface Reservation {
  id: number
  property: {
    name: string
    location: string
    image: string
  }
  customer: string
  date: string
}

const reservations: Reservation[] = [
  {
    id: 1,
    property: {
      name: "Villa Seraphina",
      location: "Avalon, CA",
      image: villaImage,
    },
    customer: "Frank Smith",
    date: "Jan 6 - 9, 2026",
  },
  {
    id: 2,
    property: {
      name: "Oceanview Retreat",
      location: "Malibu, CA",
      image: oceanviewImage,
    },
    customer: "Emily Johnson",
    date: "Jan 6 - 9, 2026",
  },
  {
    id: 3,
    property: {
      name: "Mountain Escape",
      location: "Aspen, CO",
      image: mountainImage,
    },
    customer: "David Lee",
    date: "Jan 6 - 9, 2026",
  },
  {
    id: 4,
    property: {
      name: "Coastal Haven",
      location: "Santa Barbara, CA",
      image: villaImage,
    },
    customer: "Sarah Martinez",
    date: "Jan 6 - 10, 2026",
  },
  {
    id: 5,
    property: {
      name: "Sunset Beach House",
      location: "Laguna Beach, CA",
      image: oceanviewImage,
    },
    customer: "Michael Chen",
    date: "Jan 6 - 8, 2026",
  },
  {
    id: 6,
    property: {
      name: "Alpine Lodge",
      location: "Vail, CO",
      image: mountainImage,
    },
    customer: "Jennifer Williams",
    date: "Jan 6 - 12, 2026",
  },
  {
    id: 7,
    property: {
      name: "Desert Oasis",
      location: "Palm Springs, CA",
      image: villaImage,
    },
    customer: "Robert Taylor",
    date: "Jan 6 - 9, 2026",
  },
  {
    id: 8,
    property: {
      name: "Lakeside Cottage",
      location: "Lake Tahoe, CA",
      image: oceanviewImage,
    },
    customer: "Amanda Brown",
    date: "Jan 6 - 11, 2026",
  },
  {
    id: 9,
    property: {
      name: "Urban Loft",
      location: "San Francisco, CA",
      image: mountainImage,
    },
    customer: "James Wilson",
    date: "Jan 6 - 7, 2026",
  },
  {
    id: 10,
    property: {
      name: "Wine Country Estate",
      location: "Napa Valley, CA",
      image: villaImage,
    },
    customer: "Patricia Davis",
    date: "Jan 6 - 10, 2026",
  },
  {
    id: 11,
    property: {
      name: "Seaside Bungalow",
      location: "Monterey, CA",
      image: oceanviewImage,
    },
    customer: "Christopher Anderson",
    date: "Jan 6 - 9, 2026",
  },
  {
    id: 12,
    property: {
      name: "Rustic Cabin",
      location: "Big Bear, CA",
      image: mountainImage,
    },
    customer: "Lisa Garcia",
    date: "Jan 6 - 13, 2026",
  },
  {
    id: 13,
    property: {
      name: "Beachfront Paradise",
      location: "San Diego, CA",
      image: villaImage,
    },
    customer: "Thomas Anderson",
    date: "Jan 6 - 10, 2026",
  },
  {
    id: 14,
    property: {
      name: "Skyline Penthouse",
      location: "Los Angeles, CA",
      image: oceanviewImage,
    },
    customer: "Maria Rodriguez",
    date: "Jan 6 - 11, 2026",
  },
  {
    id: 15,
    property: {
      name: "Forest Hideaway",
      location: "Yosemite, CA",
      image: mountainImage,
    },
    customer: "Kevin Park",
    date: "Jan 6 - 14, 2026",
  },
  {
    id: 16,
    property: {
      name: "Desert Mirage",
      location: "Joshua Tree, CA",
      image: villaImage,
    },
    customer: "Rachel Green",
    date: "Jan 6 - 9, 2026",
  },
  {
    id: 17,
    property: {
      name: "Coastal Breeze",
      location: "Carmel-by-the-Sea, CA",
      image: oceanviewImage,
    },
    customer: "Daniel Kim",
    date: "Jan 6 - 12, 2026",
  },
  {
    id: 18,
    property: {
      name: "Summit View",
      location: "Mammoth Lakes, CA",
      image: mountainImage,
    },
    customer: "Olivia White",
    date: "Jan 6 - 15, 2026",
  },
  {
    id: 19,
    property: {
      name: "Garden Villa",
      location: "Santa Monica, CA",
      image: villaImage,
    },
    customer: "Nathan Brooks",
    date: "Jan 6 - 8, 2026",
  },
  {
    id: 20,
    property: {
      name: "Island Retreat",
      location: "Catalina Island, CA",
      image: oceanviewImage,
    },
    customer: "Sophie Martin",
    date: "Jan 6 - 11, 2026",
  },
]

export function HomeContent() {
  return (
    <Tabs defaultValue="checking-in" className="flex flex-col h-full bg-background overflow-y-auto">
      {/* Header - scrolls away */}
      <div className="flex flex-col gap-2 px-12 pt-20 pb-10 shrink-0">
        <h1 className="text-[30px] font-medium leading-[36px] tracking-[-0.3px] text-[#202020]">
          Home
        </h1>
        <p className="text-sm font-normal leading-normal text-[#202020]">
          Manage your tasks, reservations, and more.
        </p>
      </div>

      {/* Sticky Tabs - stays at top when scrolling */}
      <div className="sticky top-0 z-10 bg-background shrink-0 pt-3">
        <div className="px-12">
          <TabsList className="h-10 gap-6 bg-transparent p-0">
            <TabsTrigger
              value="checking-in"
              className={cn(
                "h-10 px-0 py-3 text-sm font-medium text-[#202020] rounded-none border-b-2 border-transparent data-[state=active]:border-[#202020] data-[state=active]:bg-transparent data-[state=active]:shadow-none",
                "hover:text-[#202020]"
              )}
            >
              Checking in today
            </TabsTrigger>
            <TabsTrigger
              value="checking-out"
              className={cn(
                "h-10 px-0 py-3 text-sm font-medium text-[#5f5f5f] rounded-none border-b-2 border-transparent data-[state=active]:border-[#202020] data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-[#202020]",
                "hover:text-[#202020]"
              )}
            >
              Checking out today
            </TabsTrigger>
          </TabsList>
        </div>
      </div>

      {/* Table Content - scrolls below sticky tabs */}
      <TabsContent value="checking-in" className="mt-0">
        <ReservationsTable reservations={reservations} />
      </TabsContent>
      <TabsContent value="checking-out" className="mt-0">
        <ReservationsTable reservations={[]} />
      </TabsContent>
    </Tabs>
  )
}

function ReservationsTable({ reservations }: { reservations: Reservation[] }) {
  return (
    <div className="flex flex-col">
      {/* Table Header - sticky below tabs */}
      <div className="sticky top-[52px] z-10 bg-background border-t border-b border-border/80 flex h-10 items-center px-12 py-3 shrink-0">
        <div className="flex flex-1 gap-4 items-center">
          <div className="flex flex-1 flex-col justify-center min-w-0">
            <span className="text-sm font-normal text-[#9a9a9a] leading-5 whitespace-pre-wrap">Property</span>
          </div>
          <div className="flex flex-1 gap-4 items-center min-w-0">
            <div className="flex flex-1 flex-col justify-center min-w-0">
              <span className="text-sm font-normal text-[#9a9a9a] leading-5 whitespace-pre-wrap">Customer</span>
            </div>
            <div className="flex flex-1 flex-col justify-center min-w-0">
              <span className="text-sm font-normal text-[#9a9a9a] leading-5 whitespace-pre-wrap">Date</span>
            </div>
          </div>
        </div>
      </div>

      {/* Table Rows */}
      <div className="flex flex-col">
        {reservations.length === 0 ? (
          <div className="flex items-center justify-center min-h-[400px] text-muted-foreground">
            No reservations
          </div>
        ) : (
          reservations.map((reservation, index) => (
          <div
            key={reservation.id}
            className={cn(
              "border-b border-border/80 flex items-center px-12 py-3 shrink-0 hover:bg-[#F7F7F7] transition-colors cursor-pointer",
              index === reservations.length - 1 && "border-b-0"
            )}
          >
            <div className="flex flex-1 gap-4 items-center min-w-0">
              {/* Property Column */}
              <div className="flex flex-1 gap-3 items-center min-w-0">
                <div className="relative rounded-lg shrink-0 size-12 overflow-hidden">
                  <img
                    alt={reservation.property.name}
                    className="absolute inset-0 object-cover pointer-events-none rounded-lg size-full"
                    src={reservation.property.image}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1 items-start min-w-0">
                  <p className="text-sm font-medium text-[#202020] leading-normal truncate w-full">
                    {reservation.property.name}
                  </p>
                  <p className="text-sm font-normal text-[#5f5f5f] leading-normal truncate w-full">
                    {reservation.property.location}
                  </p>
                </div>
              </div>

              {/* Customer and Date Columns */}
              <div className="flex flex-1 gap-4 items-center min-w-0">
                <div className="flex flex-1 flex-col justify-center min-w-0">
                  <p className="text-sm font-normal text-[#202020] leading-normal whitespace-pre-wrap">
                    {reservation.customer}
                  </p>
                </div>
                <div className="flex flex-1 flex-col justify-center min-w-0">
                  <p className="text-sm font-normal text-[#202020] leading-normal whitespace-pre-wrap">
                    {reservation.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
        )}
      </div>
    </div>
  )
}
