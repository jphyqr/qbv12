'use client'
import DeepDashboard from "@/components/layout/deep-dashboard/deep-dashboard";
import HeroSection from "@/components/layout/hero-section";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Code, Github, Hammer, Linkedin, LinkedinIcon, LucideLinkedin, Spade } from "lucide-react";
import Image from "next/image";
import NextjsProjects from "./_components/react-projects";
import { BlockQuotes } from "@/components/typography/blockquotes";
import { Lead } from "@/components/typography/lead";
import { TypeP } from "@/components/typography/p";
import { TypeH2 } from "@/components/typography/h2";
import { Separator } from "@/components/ui/separator";
import BackStory from "./_components/backstory";
import CrowdpassProjects from "./_components/crowdpass-projects";
import ReactProjects from "./_components/react-projects";
import Faqs from "@/components/layout/faqs";


export const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id)
  element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

export default function Home() {



  const icons = [ 
    {
      icon: <GitHubLogoIcon/>,
     // label: 'Github',
      href: 'https://www.github.com/jphyqr'
    },
    {
      icon: <LinkedInLogoIcon/>,
   //   label: 'Linkedin',
      href: 'https://www.linkedin.com/in/johnhashem/'
    },
    {
      icon: <TwitterLogoIcon/>,
    //  label: 'Twitter',
      href: 'https://twitter.com/hashbuilds'
    }
  ]
  return (
    <main className="flex min-h-screen flex-col items-center    max-w-6xl ml-auto mr-auto  pb-96">
   <HeroSection
     icons={icons}
 
    
    h1='Nice to meet you'
    p1='This site is a work in progress. Here is a video of me trying to be an SEO content creator.  Enjoy.'
    p2='teest'
    primaryButton={<Button onClick={()=>scrolltoHash('projects')} variant="default">Projects</Button>}
    secondaryButton={<Button onClick={()=>scrolltoHash('backstory')} variant="outline">Back Story</Button>}
    videoUrl='https://aqsqa2ypgvbzi7ri.public.blob.vercel-storage.com/AECSEOINTRO-IeZSZduqQ2uoxOkryjvjCRwmwNV8T7.mp4'//https://aqsqa2ypgvbzi7ri.public.blob.vercel-storage.com/vsl_4-9UiWNO4erDe3m5fau5X1YlwMxD7FHL.mp4'
    thumbnailUrl='/thumbnail.png'

   />




<div id='backstory' className='mb-14'/>
<BackStory/>



<div id='projects' className='mb-14'/>
   <DeepDashboard
  
   topTabs={[
    {
      key:'NextJS',
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
      label :'NextJS',
      todo:true
    },
    {
      key: 'React',
      icon: <Code/>,
      label: 'Components',
      description: 'A collection of advanced React Components that I have built.',
      component: <ReactProjects/>
    },
    {
      key: 'SEO',
      icon: <LucideLinkedin/>,
      label: 'SEO',
      component: <div>SEO</div>,
      todo:true
    },
    {
      key: 'Crowdpass',
      icon: <LucideLinkedin/>,
      label:'Crowdpass',
      component: <CrowdpassProjects/>,
      todo:true
    },
    {
      key: 'Chuckwagon',
      icon: <LucideLinkedin/>,
      label:'Chuckwagon',
      component: <div>Chuckwagon</div>,
      todo:true
    },
    {
      key: 'WSOP',
      icon: <Spade/>,
      label:'WSOP',
      component: <div>WSOP</div>,
      todo:true
    },
    {
      key: 'Straight Flush',
      icon: <Hammer/>,
      label:'Straight Flush',
      component: <div>Straight Flush</div>,
      todo:true
    },
    {
      key: 'Leboldus',
      icon: <LucideLinkedin/>,
      label:'Leboldus',
      component: <div>Leboldus</div>,
      todo:true

    },
    {
      key: 'Rams',
      icon: <LucideLinkedin/>,
      label:'Rams',
      component: <div>Rams</div>,
      todo:true
    }


   ]}
   />


<div id='faqs' className='mb-14'/>
<Faqs faqs={

[
  {
      question:'Do You Code?',
      answer: 'Yes, I code 5-6 days a week. Coding is my creative outlet.'
  },
  {
    question: 'How much do you charge?',
    answer: 'Depends if your project is going to take over my creative brain. If it is closed loop programming then $75/hour.  If it is open ended strategic work that will tap into my subconcious mind then I charge 5K-15K/month depending on services.'
  },
  {
    question:'Can you fix my computer?',
    answer: 'No. I am pretty terrible with hardware/networks/anything that is not code.'
},
{
  question:'Can you remodel my bathroom?',
  answer: 'Yes.  I can fix nearly anything in wood frame construction.'
},
{
  question:'Do you count cards?',
  answer: 'No.  That is blackjack.  I am very bad at blackjack.  If you are going to gamble your best bet is bacarrat or craps since you cannot make a mistake.  Roulette you may get short changed.  Blackjack and poker you will be way behind the curve.'
},
  {
    question:'How much do you bench press?',
    answer: 'When I was 23 I did 425.  In 2022 I had a slight tear in my pec, now I am working my way back up.  Currently 315 for 5'
},
{
  question:'What is the most you ever lost at poker?',
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

}/>



    </main>
  );
}
