'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Waitlist() {
  useEffect(() => {
    // Add CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.type = 'text/css'
    link.href = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css'
    document.head.appendChild(link)

    // Add Script
    const script = document.createElement('script')
    script.src = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      document.head.removeChild(link)
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white p-4 overflow-x-hidden">
      {/* Go Back Button */}
      <div className="absolute top-4 left-4">
        <Button 
          asChild 
          variant="link" 
          className="text-[10px] uppercase tracking-wider hover:text-red-500 transition-colors shadow-none"
        >
          <Link href="/new-user">
            Go Back
          </Link>
        </Button>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-2xl px-4 sm:scale-100 scale-90">
        <div className="text-left space-y-8">
          <div 
            id="getWaitlistContainer" 
            data-waitlist_id="23171" 
            data-widget_type="WIDGET_2"
            className="flex justify-center"
          />
        </div>
      </div>
    </div>
  )
} 