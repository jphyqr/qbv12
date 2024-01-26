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

export default function Home() {

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }


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




    </main>
  );
}
