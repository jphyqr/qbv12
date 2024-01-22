import DeepDashboard from "@/components/layout/deep-dashboard/deep-dashboard";
import HeroSection from "@/components/layout/hero-section";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Code, Hammer, Linkedin, LinkedinIcon, LucideLinkedin, Spade } from "lucide-react";
import Image from "next/image";
import NextjsProjects from "./_components/nextjs-projects";
import { BlockQuotes } from "@/components/typography/blockquotes";
import { Lead } from "@/components/typography/lead";
import { TypeP } from "@/components/typography/p";
import { TypeH2 } from "@/components/typography/h2";
import { Separator } from "@/components/ui/separator";
import BackStory from "./_components/backstory";
import CrowdpassProjects from "./_components/crowdpass-projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center    max-w-6xl ml-auto mr-auto">
   <HeroSection
   

    linkHref='/'
    leadingIcon={<LinkedInLogoIcon/>}
    h1='Nice to meet you'
    p1='Let me show you the things I build.'
    p2='Because I love to build things.'
    primaryButton={<Button variant="default">Web Stuff</Button>}
    secondaryButton={<Button variant="outline">Silly Stuff</Button>}
    videoUrl='https://aqsqa2ypgvbzi7ri.public.blob.vercel-storage.com/vsl_4-9UiWNO4erDe3m5fau5X1YlwMxD7FHL.mp4'


   />



<BackStory/>

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
    component: <NextjsProjects/>
      ,
      label :'NextJS'
    },
    {
      key: 'React',
      icon: <Code/>,
      label: 'React',
      component: <NextjsProjects/>
    },
    {
      key: 'SEO',
      icon: <LucideLinkedin/>,
      label: 'SEO',
      component: <div>SEO</div>
    },
    {
      key: 'Crowdpass',
      icon: <LucideLinkedin/>,
      label:'Crowdpass',
      component: <CrowdpassProjects/>
    },
    {
      key: 'Chuckwagon',
      icon: <LucideLinkedin/>,
      label:'Chuckwagon',
      component: <div>Chuckwagon</div>
    },
    {
      key: 'WSOP',
      icon: <Spade/>,
      label:'WSOP',
      component: <div>WSOP</div>
    },
    {
      key: 'Straight Flush',
      icon: <Hammer/>,
      label:'Straight Flush',
      component: <div>Straight Flush</div>
    },
    {
      key: 'Leboldus',
      icon: <LucideLinkedin/>,
      label:'Leboldus',
      component: <div>Leboldus</div>

    },
    {
      key: 'Rams',
      icon: <LucideLinkedin/>,
      label:'Rams',
      component: <div>Rams</div>
    }


   ]}
   />

    </main>
  );
}
