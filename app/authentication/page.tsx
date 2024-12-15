import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Authentication() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white px-4">
        {/* Go Back Button */}
        <div className="absolute top-4 left-4">
          <Button 
            asChild 
            variant="link" 
            className="text-[10px] uppercase tracking-wider hover:text-red-500 transition-colors shadow-none"
          >
            <Link href="/">
              Go Back
            </Link>
          </Button>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-6">
          <p className="text-sm tracking-[0.2em] uppercase">
            To cook, or to be cooked
          </p>
          <div className="space-y-4">
            <Button 
              asChild 
              className="w-48 border border-black rounded-none h-auto bg-transparent text-black hover:bg-black hover:text-white transition-all duration-300 text-xs uppercase tracking-wider shadow-none"
            >
              <Link href="/new-user">
                New User
              </Link>
            </Button>
            <Button 
              asChild 
              className="w-48 border border-black rounded-none h-auto bg-transparent text-black hover:bg-black hover:text-white transition-all duration-300 text-xs uppercase tracking-wider shadow-none"
            >
              <Link href="/returning-user">
                Returning User
              </Link>
            </Button>
          </div>
        </div>
      </div>
  )
} 