import { Metadata } from 'next'
import NewWidget from '../../components/NewWidget'

export const metadata: Metadata = {
  title: 'Join Our Waitlist - Pret',
  description: 'Join our waitlist to be notified when our meal prepping app launches!',
}

export default function WaitlistPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-2xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl tracking-widest font-bold">
          We are cooking our app.
        </h1>
        
        <p className="text-lg tracking-wide">
          Join our waitlist so that you can be notified when we&apos;ve launched! I mean when the meal is ready to eat lol.
        </p>

        <NewWidget />
      </div>
    </div>
  )
} 