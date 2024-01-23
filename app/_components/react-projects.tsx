import TechTabs from "@/components/common/tech-tabs";
import { Calculator, Code } from "lucide-react";


export default function ReactProjects() {


return <TechTabs

items={[
{
    key:'cold-plunge-calculator',
    label:'Cold Plunge Calculator',
    icon: <Calculator/>,
    description: 'A calculator to help you determine the cost of your cold plunge',
    href: 'https://coldplungemap.com/plunge-cost-calculator',
    component:<div className="flex w-full  flex-grow bg-red-600">
<iframe src="https://coldplungemap.com/plunge-cost-calculator" className=' flex-grow' frameBorder="0" allowFullScreen></iframe>
    </div> },

]}
/>


   




}