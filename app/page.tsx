import Link from 'next/link'
import { Button } from "@/components/ui/button"
import StaticEmojiBackground from '../components/StaticEmojiBackground'

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-amber-100 overflow-hidden">
      <StaticEmojiBackground />
      <div className="text-center px-4 sm:px-6 lg:px-8 z-10">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-amber-900 mb-2">
          Pret
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-amber-700 mb-6">
          meal prepping is so back
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-amber-800 mb-8 max-w-xl mx-auto">
          We help you decide what meal you&apos;re going to eat, over and over again till the end of time (2 days) and then what to eat after that.
        </p>
        <Button asChild size="lg" className="text-base sm:text-lg px-8 py-3 bg-black hover:bg-green-600 hover:text-white transition-colors duration-300">
          <Link href="/get-started">
            make my meal
          </Link>
        </Button>
      </div>
    </div>
  )
}

