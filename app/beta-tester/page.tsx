import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function BetaTesterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-white px-4">
      <div className="w-full max-w-2xl mx-auto text-left space-y-8">
        <h1 className="text-4xl font-bold tracking-wider">NOT READY YET :O</h1>
        
        <p className="text-sm tracking-[0.2em] uppercase">
           I&apos;m still working on getting everything perfect for our beta testers. Check back soon!
        </p>

        <div className="pt-8">
          <Button 
            asChild 
            className="bg-black text-white hover:bg-purple-600 transition-colors shadow-none text-xs uppercase tracking-wider"
          >
            <Link href="/">
              Go Back
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
} 