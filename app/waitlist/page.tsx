import Script from 'next/script'
import { Cedarville_Cursive } from 'next/font/google'
import Link from 'next/link'

const cedarville = Cedarville_Cursive({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cedarville'
})




export default function WaitlistPage() {
  return (
    <>
      <link 
        rel="stylesheet" 
        href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
      />
      <Script src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js" />

      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="w-full max-w-2xl mx-auto text-left space-y-6 p-8">

          
          <div className="pl-4">
            <h1 className={`text-4xl sm:text-5xl tracking-widest font-bold ${cedarville.className}`}>
              Please Wait To Be Seated
            </h1>
            <div className="h-5"></div>
            <p className="text-sm tracking-[0.2em] uppercase">
              Join my waitlist so that you can be notified when I&apos;ve finished it!
            </p>
          </div>

          <div id="getWaitlistContainer" data-waitlist_id="23171" data-widget_type="WIDGET_1"></div>
        </div>
        
      </div>
    </>
  )
}
