'use client'
import DeepDashboard from "@/components/layout/deep-dashboard/deep-dashboard";
import HeroSection from "@/components/layout/hero-section";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon, GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Code, Github, Hammer, Linkedin, LinkedinIcon, LucideLinkedin, Spade } from "lucide-react";
import Image from "next/image";
import BackStory from "./_components/backstory";
import CrowdpassProjects from "./_components/crowdpass-projects";
import ReactProjects from "./_components/react-projects";
import Faqs from "@/components/layout/faqs";
import { scrolltoHash } from "@/lib/utils";
import { Muted } from "@/components/typography/muted";
import { BlockQuotes } from "@/components/typography/blockquotes";
import { Lead } from "@/components/typography/lead";
import { Large } from "@/components/typography/large";
import { TypeH2 } from "@/components/typography/h2";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { TypeH3 } from "@/components/typography/h3";
import { TypeP } from "@/components/typography/p";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";



export default function Home() {

const [openDialog, setOpenDialog] = useState(true)

  const icons = [
    {
      icon: <GitHubLogoIcon />,
      // label: 'Github',
      href: 'https://www.github.com/jphyqr'
    },
    {
      icon: <LinkedInLogoIcon />,
      //   label: 'Linkedin',
      href: 'https://www.linkedin.com/in/johnhashem/'
    },
    {
      icon: <TwitterLogoIcon />,
      //  label: 'Twitter',
      href: 'https://twitter.com/hashbuilds'
    }
  ]
  
  return (
    <main className="flex min-h-screen flex-col items-center    max-w-6xl ml-auto mr-auto  pb-96">

<Dialog open={openDialog} onOpenChange={setOpenDialog}>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Disclaimer</DialogTitle>
          <DialogDescription>
            
            <Lead className='mt-2 mb-2'>
            Profiles for frontend developers are sort of dumb.
            </Lead>

            <TypeP>
              The lines between code, no code, design, UI kits and boiler plates are so blurred that it is difficult to establish credit.
            </TypeP>

            <TypeP>
              Look at this modal.  Five years ago I would have built the entire thing from scratch.  A few years ago, used a library,  in 2024 I copy paste a pre configed (shadcn) of a headless UI (radix) and added a few borrowed utility classes (tailwind).  Tomorrow it will be AI generated.
            </TypeP>

            <TypeP>
            ..And lets be honest.. if I built a successful e2e project with lots of users, Id be swinging for the fences with my own start up...
            </TypeP>
            <TypeP>
              I have worked on a few larger projects and I can get references, but if you are reading this you are probably a start up or ecom site and dont really care so much about my large project contributions.
            </TypeP>
            <TypeP>
              So my vision is to feature my personality and creativity.  There are tones of low cost developers on upwork, but <strong> consider me if you want a high agency no-bagage product engineer, whose won in multiple competitive domains, and onboards obsession easily. </strong> 
            </TypeP>


<Separator className='mt-4 mb-4' />

<div className='flex  flex-wrap gap-1 items-center'>
<Label>My Tech Stack</Label>
           <Link href='www.tnvisa.com' target='blank'><Badge  variant={'destructive'}>TN Visa Ready <ArrowTopRightIcon/></Badge></Link> 
             <Badge   variant={'destructive'}>Relocation Ready</Badge>
             <Badge    variant={'destructive'}>Content Ready</Badge>
             <Badge   variant={'destructive'}>In Office Ready</Badge>
             <Badge   variant={'destructive'}>Team Building Ready</Badge>
  </div>

          </DialogDescription>

          
        </DialogHeader>

        <DialogFooter>

             <Button onClick={()=>setOpenDialog(false)} type="submit"  className='w-full mt-4' >Continue</Button>
    
       
        </DialogFooter>
      </DialogContent>
    </Dialog>
      <HeroSection
        icons={icons}


        h1='The Digital Quarterback for your V1'
        p1='Addicted to high pressure, big problems with ridiculous deadlines.'
        p2='teest'
        primaryButton={<Button onClick={() => scrolltoHash('projects')} variant="default">Projects</Button>}
        secondaryButton={<Button onClick={() => scrolltoHash('backstory')} variant="outline">Back Story</Button>}
        videoUrl='https://aqsqa2ypgvbzi7ri.public.blob.vercel-storage.com/AECSEOINTRO-IeZSZduqQ2uoxOkryjvjCRwmwNV8T7.mp4'//https://aqsqa2ypgvbzi7ri.public.blob.vercel-storage.com/vsl_4-9UiWNO4erDe3m5fau5X1YlwMxD7FHL.mp4'
        thumbnailUrl='/thumbnail.png'
        videoAltText='In lui of a VSL, here is some edutainment on SEO so you can read between the lines of my personality.  May update to a VSL after I get a haircut.'
      />
 
 
      <Lead>
        <strong>I get bored,</strong> but not like that.  My zone of genious was practicing the exact same drop step over and over again.  Adding resistance bands, frictionless floors, and obstructions to the mix.  Anything to make sure that when I stepped on the football field that under any situation I would get that first step down in the right place every time.  Just writing about this jacks me up.
      </Lead>

      <div className='mt-8' />
      <Lead>
        Years later I was coaching.  The words innovative and creative followed me around because of the gaudy results our offence put up.  But behind closed doors, I defined creativity differently. I had many speaches, most unique to version of the team I was coaching.  But my speach on creativity was always the same.
      </Lead>

      <BlockQuotes>
        Anyone can be excited running new plays.  But being able to show up every day and get excited about improving 6 stretch,  even in your 4th year, is the true sign of being creative.
      </BlockQuotes>
      <div className='mt-8' />

      <Lead>
        Creativity is in the details.  It is in optimization.  It is in having a clear goal and winning.
      </Lead>
      <div className='mt-8' />
      <Lead>
        I get bored when the problem doesnt seem worth solving.  I get bored when the problem is too easy. I get bored when the customer is satisfied.
      </Lead>

      <div className='mt-4' />
      <Lead>
        I am not a designer.  I am not a developer.
      </Lead>

      <div className='mt-4' />
      <Large>I am a creative.</Large>
      <Large>I am a problem solver.</Large>

      <Large>I am a digital marketer.</Large>
      <Large>I am a product engineer.</Large>
      <div className='mt-4' />
      <TypeH2>I am a digital quarterback.</TypeH2>


      <div id='backstory' className='mb-14' />
      <BackStory />



      <div id='projects' className='mb-14' />
      <DeepDashboard

        topTabs={[
          {
            key: 'NextJS',
            icon:
              <Image
                src="next.svg"
                alt="Vercel Logo"
                className="dark:invert"

                layout="fill"
                priority
              />,
            component: <div>Next Projects</div>
            ,
            label: 'NextJS',
            todo: true
          },
          {
            key: 'React',
            icon: <Code />,
            label: 'Components',
            description: 'A collection of advanced React Components that I have built.',
            component: <ReactProjects />
          },
          {
            key: 'SEO',
            icon: <LucideLinkedin />,
            label: 'SEO',
            component: <div>SEO</div>,
            todo: true
          },
          {
            key: 'Crowdpass',
            icon: <LucideLinkedin />,
            label: 'Crowdpass',
            component: <CrowdpassProjects />,
            todo: true
          },
          {
            key: 'Chuckwagon',
            icon: <LucideLinkedin />,
            label: 'Chuckwagon',
            component: <div>Chuckwagon</div>,
            todo: true
          },
          {
            key: 'WSOP',
            icon: <Spade />,
            label: 'WSOP',
            component: <div>WSOP</div>,
            todo: true
          },
          {
            key: 'Straight Flush',
            icon: <Hammer />,
            label: 'Straight Flush',
            component: <div>Straight Flush</div>,
            todo: true
          },
          {
            key: 'Leboldus',
            icon: <LucideLinkedin />,
            label: 'Leboldus',
            component: <div>Leboldus</div>,
            todo: true

          },
          {
            key: 'Rams',
            icon: <LucideLinkedin />,
            label: 'Rams',
            component: <div>Rams</div>,
            todo: true
          }


        ]}
      />


      <div id='faqs' className='mb-14' />
      <Faqs faqs={

        [
          {
            question: 'Why QBV1?',
            answer: 'In football we have the term QB1.  At face value it means the starting quarterback for the next game.  But the branded version of the term means: the leader.  I never played quarterback, I was an offensive linemen.  But when it comes to product building I operate like a quarterback more than an offensive linemen. A quarterback is multi faceted.  They lead communication (manager) as well as strategy (product).  They need to distribute the ball (delegate) as well as be the ball carrier sometimes (code)  They need to be able to react to stress.  This is the environment I thrive in.  More specifically, I like start ups and new products.  Poker taught me to embrace ambiguity.  So I build V1s.  I am not an expert at scaling a working product, but I am an expert and getting high end systems out the door quickly. So think of me as the starting quarterback for your V1.'
          },
          {
            question: 'Do You Code?',
            answer: 'Yes, I code 5-6 days a week. Coding is my creative outlet.'
          },
          {
            question: 'How much do you charge?',
            answer: 'It depends if the work is something that will take over treadmill time. If I can leave the project at my desk, it will be cheaper.  If it requires deep strategic work that will take over my treadmill time, it will be more expensive.'
          },
          {
            question: 'Can you fix my computer?',
            answer: 'No. I am pretty terrible with hardware/networks/anything that is not code.'
          },
          {
            question: 'Can you remodel my bathroom?',
            answer: 'Yes.  I can fix nearly anything in wood frame construction.'
          },
          {
            question: 'Do you count cards?',
            answer: 'No.  That is blackjack.  I am very bad at blackjack.  If you are going to gamble your best bet is bacarrat or craps since you cannot make a mistake.  Roulette you may get short changed.  Blackjack and poker you will be way behind the curve.'
          },
          {
            question: 'How much do you bench press?',
            answer: 'When I was 23 I did 425.  In 2022 I had a slight tear in my pec, now I am working my way back up.  Currently 315 for 5'
          },
          {
            question: 'What is the most you ever lost at poker?',
            answer: 'Lots of 10K tournament buy ins.  In a cash game the most I lost was 30K in Malibus Room Montreal.  I transfered my 500 BNB to reaload.  6 months later those coins were worth $1,000,000'
          },
          {
            question: 'How Tall are you?',
            answer: '6\'7'
          },
          {
            question: 'What does it cost to feed you?',
            answer: 'A lot.  I spend most of my income on food.  I generally only eat beef and I have a nack for Rib steaks.  This addiction will keep me poor and dependant on your business.'
          },
          {
            question: 'What is your favorite product?',
            answer: 'John Hashem as a business has too many competing alter egos to use metric based prioritization frameworks.   Looking across all alter egos, there is one common motivation: fitness.  So we will use Jobs-to-be-done.  The main Job To Be Done for John is to become the strongest, fittest version of himself without increasing time in the gym/kitchen.   From this perspective the best product for John right now is Taco beef.  The product hits all of Johns macro goals while being cost effective, flexible, low time commitment and delicious.'
          }
        ]

      } />



    </main>
  );
}
