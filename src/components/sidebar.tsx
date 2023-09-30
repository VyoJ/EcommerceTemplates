import { Button } from "@/components/ui/button"

export function Sidebar() {
  return (
    <div className= "pb-12 w-1/5">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start">
              Category 1
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Category 2
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Category 3
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Filters
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              Price
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Rating
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Specs
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}