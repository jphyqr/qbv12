import TechTabs from "@/components/common/tech-tabs";
import { Calculator, Code, Spade } from "lucide-react";
import JamStacks from "../../components/jamstack"
import { ScrollArea } from "@/components/ui/scroll-area";
import { CopyBlock } from "react-code-blocks";



export default function ReactProjects() {
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
    key:'cold-plunge-calculator',
    label:'Cold Plunge Calculator',
    icon: <Calculator/>,
    description: 'A calculator to help you determine the cost of your cold plunge',
    href: 'https://coldplungemap.com/plunge-cost-calculator',
    component:<div className="flex w-full  flex-grow">
<iframe src="https://coldplungemap.com/plunge-cost-calculator" className=' flex-grow' frameBorder="0" allowFullScreen></iframe>
    </div> },
{
    key:'smart-degen',
    label:'Poker Trainer',
    icon: <Spade/>,
    description: 'Generative poker hands from real situations, treadmill friendly',
    href: 'https://www.smrtdegen.com/poker/training/wsop-main-event-day-1-prep/6',
    component:<div className="flex w-full  flex-grow">
<iframe src="https://www.smrtdegen.com/poker/training/wsop-main-event-day-1-prep/6" className='    w-[400px] ml-auto mr-auto ' frameBorder="0" allowFullScreen></iframe>
    </div> },

{
    key:'jamstacks',
    label:'CSS animation',
    icon: <Spade/>,
    description: 'CSS Animation for a Twitch Stream where I talked about JAMSTACK applications',
    href: 'https://www.smrtdegen.com/poker/training/wsop-main-event-day-1-prep/6',
    component: 
    
    <div className='flex flex-col'>
   <JamStacks/>

    </div>
 

},
]}
/>


   




}