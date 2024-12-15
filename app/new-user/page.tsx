'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NewUser() {
  const [showSolution, setShowSolution] = useState(false)

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white p-4 overflow-x-hidden">
      {/* Go Back Button */}
      <div className="absolute top-4 left-4">
        <Button 
          asChild 
          variant="link" 
          className="text-[10px] uppercase tracking-wider hover:text-red-500 transition-colors shadow-none"
        >
          <Link href="/authentication">
            Go Back
          </Link>
        </Button>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-2xl px-4 sm:scale-100 scale-90">
        <div className="text-left space-y-8">
          {!showSolution ? (
            <>
              {/* Problem Statement */}
              <div className="space-y-4">
                <p className="text-sm tracking-[0.2em] leading-relaxed">
                  Tired of having struggle meals after struggle meals?
                  <br />I was too.
                  <br />Too tired to figure out what to cook?
                  <br />Want to prepare ahead of time?
                  <br />We'll make it easy for you.
                </p>
              </div>
              <div className="flex justify-center">
                <Button 
                  onClick={() => setShowSolution(true)}
                  className="w-48 border border-black rounded-none h-auto bg-transparent text-black hover:bg-black hover:text-white transition-all duration-300 text-xs uppercase tracking-wider shadow-none py-3"
                >
                  I'm So Frikin Tired
                </Button>
              </div>
            </>
          ) : (
            <>
              {/* Solution Statement */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-sm tracking-[0.2em] leading-relaxed">
                    We help you choose and decide what meal you&apos;re going to eat, over and over again till the end of time (2 days) and then what to eat after that.
                  </p>
                  <p className="text-sm tracking-[0.2em] leading-relaxed">
                    We take the ingredients:
                  </p>
                  <p className="text-sm tracking-[0.2em] leading-relaxed text-red-500 whitespace-nowrap">
                    Your Lifestyle + Your Food Preferences + Your Cooking Skills = Your Profile
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-sm tracking-[0.2em] leading-relaxed">
                    We use your profile to create a prepping schedule,
                    you are free to edit it if you want manually.
                  </p>
                  <p className="text-sm tracking-[0.2em] leading-relaxed">
                    We use your profile to create meals that you will be prepping
                    including on what day you'll eat what.
                  </p>
                  <p className="text-sm tracking-[0.2em] font-medium">
                    Ready?
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <Button 
                  asChild
                  className="w-48 border border-black rounded-none h-auto bg-black text-white hover:bg-green-600 transition-all duration-300 text-xs uppercase tracking-wider shadow-none py-3"
                >
                  <Link href="/new-user/profile">
                    Let's Cook
                  </Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
} 