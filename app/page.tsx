import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-2xl">
        {/* Side Text */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left tracking-widest text-sm">
          SMALL BATCH
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 origin-right tracking-widest text-sm">
          HAND CRAFTED
        </div>

        {/* Main Content */}
        <div className="text-center space-y-6">
          <p className="text-sm tracking-[0.3em] uppercase">100% Natural</p>
          
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-widest font-bold uppercase">
              Pret
            </h1>
            <h2 className="text-3xl sm:text-4xl tracking-wider uppercase">
              Meal Prepping
            </h2>
          </div>

          <p className="text-sm tracking-[0.2em] uppercase">
            Fresh & Delicious
          </p>

          {/* Info Box */}
          <div className="border border-black grid grid-cols-3 mt-8">
            <div className="border-r border-black p-4">
              <p className="text-xs uppercase tracking-wider">Batch No.</p>
              <p className="font-mono text-red-500">00012</p>
            </div>
            <Link 
              href="/get-started" 
              className="border-r border-black p-4 group relative bg-black text-white hover:bg-green-600 transition-all duration-300"
            >
              <span className="absolute inset-0 flex items-center justify-center">
                make my meal
              </span>
            </Link>
            <div className="p-4">
              <p className="text-xs uppercase tracking-wider">Time Est.</p>
              <p className="text-sm">2 Days</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs uppercase tracking-wider max-w-lg mx-auto pt-4">
            We help you choose and decide what meal you&apos;re going to eat, over and over again till the end of time (2 days) and then what to eat after that.
          </p>
        </div>
      </div>
    </div>
  )
}

