import TechTabs from "@/components/common/tech-tabs";
import { Calculator, Code, Home, Spade, VideoIcon } from "lucide-react";
import JamStacks from "../../components/jamstack"
import { ScrollArea } from "@/components/ui/scroll-area";
import { CopyBlock } from "react-code-blocks";
import { AspectRatio } from "@/components/ui/aspect-ratio";



export default function SEOProjects() {
    const copyBlockProps = {
        text: {},
        language: 'jsx',
        showLineNumbers: false,
        startingLineNumber: false,
        wrapLines: true,
      };

return <TechTabs

items={[
{
    key:'SEO VSL',
    label:'SEO VSL',
    icon: <VideoIcon/>,
    description: 'Fun Promo Video For SEO For Realtors',
    href: 'https://coldplungemap.com/plunge-cost-calculator',
    component:        <AspectRatio   ratio={16/9} >

    <video src={'https://aqsqa2ypgvbzi7ri.public.blob.vercel-storage.com/AECSEOINTRO-IeZSZduqQ2uoxOkryjvjCRwmwNV8T7.mp4'}  poster={'/thumbnail.png'} controls={true} loop muted className='rounded-lg w-full h-full'/>
         </AspectRatio>},
{
    key:'honest-door',
    label:'Honest Door SEO Consultant',
    icon: <Home/>,
    description: 'Generative poker hands from real situations, treadmill friendly',
    href: 'https://www.smrtdegen.com/poker/training/wsop-main-event-day-1-prep/6',
    component:<div className="flex w-full  flex-grow">
        <p>Helped fix crawling, indexing and page optimization for honestdoor.com</p>
         </div> },


]}
/>


   




}