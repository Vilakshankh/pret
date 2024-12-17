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
                <p className="text-sm tracking-[0.1em] leading-relaxed">
                  Tired of having struggle meals after struggle meals?
                  <br />
                  You know, the ones where cereal suddenly qualifies as dinner.
                  
                  <br /><br />
                  Too exhausted to figure out what to cook?
                  <br />
                  
                 
                  Want to actually prepare ahead of time?
                  <br />
                  Somehow "I'll start on Sunday" always turns into "Eh, maybe next week."
                  
                  <br /><br />
                  We get it. Life's too short for bad meals and last-minute panic cooking. Let's do something about it.
                </p>
              </div>
              <div className="flex justify-center">
                <Button 
                  onClick={() => setShowSolution(true)}
                  className="w-48 border border-black rounded-none h-auto bg-transparent text-black hover:bg-black hover:text-white transition-all duration-300 text-xs uppercase tracking-wider shadow-none py-3"
                >
                  How It Works
                </Button>
              </div>
            </>
          ) : (
            <>
              {/* Solution Statement */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-sm tracking-[0.1em] leading-relaxed">
                    <span className="font-bold">What we do:</span>
                  </p>
                  <ol className="text-sm tracking-[0.1em] leading-relaxed list-decimal pl-6 space-y-2">
                    <li>Plan Your Meals For The Week: Because staring into the fridge hoping for inspiration clearly isn't working.</li>
                    <li>Create Your Cooking Schedule: So you can finally stop asking, "When am I even supposed to cook all this?"</li>
                  </ol>
                  <p className="text-sm tracking-[0.1em] leading-relaxed mt-4">
                    <span className="font-bold">How it works:</span>
                  </p>
                  <ol className="text-sm tracking-[0.1em] leading-relaxed list-decimal pl-6 space-y-2">
                    <li>We learn about your lifestyle
                    </li>
                    <li>We build your personalized profile:
                      <ul className="list-disc pl-6 mt-2 space-y-2">
                        <li>A meal plan tailored to you.</li>
                        <li>A prepping schedule that actually fits your life.</li>
                      </ul>
                    </li>
                    <li>You're in control:
                      <ul className="list-disc pl-6 mt-2">
                        <li>Edit or customize your plan anytime.</li>
                      </ul>
                    </li>
                  </ol>
                  <p className="text-sm tracking-[0.1em] leading-relaxed mt-4">
                    <span className="font-bold">Why it works:</span>
                  </p>
                  <ul className="text-sm tracking-[0.1em] leading-relaxed list-disc pl-6 space-y-2">
                    <li>No more decision fatigue and those "What's for dinner?" crises.</li>
                    <li>No more empty fridges on a random Tuesday.</li>
                  </ul>
                  <p className="text-sm tracking-[0.1em] leading-relaxed">
                    Ready to stop overthinking meals?
                  </p>
                </div>
                <div className="flex justify-center">
                  <Button 
                    asChild
                    className="w-48 border border-black rounded-none h-auto bg-black text-white hover:bg-purple-500 transition-all duration-300 text-xs uppercase tracking-wider shadow-none py-3"
                  >
                    <Link href="/new-user/profile">
                      Create Profile
                    </Link>
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
} 