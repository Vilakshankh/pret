import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Cedarville_Cursive } from 'next/font/google'

const cedarville = Cedarville_Cursive({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-cedarville'
})

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-2xl">
        {/* Top Right Button  
        <div className="absolute top-4 right-4">
          <Button 
            asChild 
            className="bg-black text-white hover:bg-purple-600 transition-colors shadow-none text-xs uppercase tracking-wider"
          >
            <Link href="/returning-user">
              Alpha User
            </Link>
          </Button>
        </div>*/}

        {/* Side Text */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left tracking-widest text-sm">
          SMALL BATCHES
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 origin-right tracking-widest text-sm">
          YOUR MOM&apos;S COOKING
        </div>



        {/* Main Content */}
        <div className="text-left space-y-6">
        
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-widest font-bold uppercase">
              Pret
            </h1>
            <h2 className={`text-3xl sm:text-4xl tracking-wider ${cedarville.className}`}>
              Meal Prepping
            </h2>
          </div>

          <p className="text-sm tracking-[0.2em] uppercase">
            We help you decide what meals you&apos;re going to eat for the week.
          </p>

                  {/* Info Box */}
        <div className="border border-black grid grid-cols-2">
            <div className="border-r border-black p-4">
              <p className="text-xs uppercase tracking-wider">Meals Prepared</p>
              <p className="font-mono text-red-500">00012</p>
            </div>


            <div className="p-4">
              <p className="text-xs uppercase tracking-wider">Best Before</p>
              <p className="font-mono text-red-500">2 Days</p>
            </div>
        </div>
        <div className="flex justify-center">
                  <Button 
                    asChild 
                    className="w-full border border-black rounded-none h-auto bg-black text-white hover:bg-green-600 transition-all duration-300 text-xs uppercase tracking-wider shadow-none"
                  >
                    <Link href="/new-user">
                      New User
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    className="w-full border border-black rounded-none h-auto bg-purple-600 text-white hover:bg-green-600 transition-all duration-300 text-xs uppercase tracking-wider shadow-none"
                  >
                    <Link href="/returning-user">
                      Alpha User
                    </Link>
                  </Button>
                </div>
          <div className="h-16"></div>



          <div className="text-left space-y-8">
            <div className="space-y-6">
              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="what-we-do" className="border-black">
                    <AccordionTrigger className="text-xs uppercase tracking-wider">
                      What we do
                    </AccordionTrigger>
                    <AccordionContent>
                      <ol className="text-sm tracking-[0.1em] leading-relaxed list-decimal pl-6 space-y-2">
                        <li>Plan Your Meals For The Week: Because staring into the fridge hoping for inspiration clearly isn't working.</li>
                        <li>Create Your Cooking Schedule</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="how-it-works" className="border-black">
                    <AccordionTrigger className="text-xs uppercase tracking-wider">
                      How it works
                    </AccordionTrigger>
                    <AccordionContent>
                      <ol className="text-sm tracking-[0.1em] leading-relaxed list-decimal pl-6 space-y-2">
                        <li>We learn about your lifestyle</li>
                        <li>We build your personalized profile:
                          <ul className="list-disc pl-6 mt-2 space-y-2">
                            <li>A meal plan tailored to you.</li>
                            <li>A prepping schedule that fits your life.</li>
                          </ul>
                        </li>
                        <li>You're in control
                          <ul className="list-disc pl-6 mt-2">
                            <li>Edit or customize your plan anytime.</li>
                          </ul>
                        </li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="why-it-works" className="border-black">
                    <AccordionTrigger className="text-xs uppercase tracking-wider">
                      Why it works:
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="text-sm tracking-[0.1em] leading-relaxed list-disc pl-6 space-y-2">
                        <li>No more decision fatigue and those "What's for dinner?" crises.</li>
                        <li>No more empty fridges on a random Tuesday.</li>
                      </ul>

                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

