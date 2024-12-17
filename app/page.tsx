import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-2xl">
        {/* Top Right Button */}
        <div className="absolute top-4 right-4">
          <Button 
            asChild 
            className="bg-black text-white hover:bg-purple-600 transition-colors shadow-none text-xs uppercase tracking-wider"
          >
            <Link href="/returning-user">
              Alpha User
            </Link>
          </Button>
        </div>

        {/* Side Text */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left tracking-widest text-sm">
          SMALL BATCHES
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 origin-right tracking-widest text-sm">
          YOUR MOM&apos;S COOKING
        </div>

        {/* Main Content */}
        <div className="text-center space-y-6">
          
          
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-widest font-bold uppercase">
              Pret
            </h1>
            <h2 className="text-3xl sm:text-4xl tracking-wider uppercase italic">
              Meal Prepping
            </h2>
          </div>

          <p className="text-sm tracking-[0.2em] uppercase">
            We help you decide what meals you&apos;re going to eat for the week.
          </p>

          {/* Info Box */}
          <div className="border border-black grid grid-cols-3 mt-8">
            <div className="border-r border-black p-4">
              <p className="text-xs uppercase tracking-wider">Meals Prepared</p>
              <p className="font-mono text-red-500">00012</p>
            </div>
            <Button 
              asChild 
              className="border-r border-black rounded-none h-auto bg-black text-white hover:bg-green-600 transition-all duration-300 text-xs uppercase tracking-wider italic shadow-none"
            >
              <Link href="/authentication">
                What Do I Eat?
              </Link>
            </Button>
            <div className="p-4">
              <p className="text-xs uppercase tracking-wider">Time Est.</p>
              <p className="font-mono text-red-500">2 Days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

