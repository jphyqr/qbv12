import TechTabs from "@/components/common/tech-tabs";
import { Code } from "lucide-react";


export default function CrowdpassProjects() {


return <TechTabs

items={[
{
    key:'Lead NFC',
    label:'Lead NFC',
    icon: <Code/>,
    component: <div>Lead NFC</div>},
    {
        key:'Web App',
        label:'Web App',
        icon: <Code/>,
        component: <div>Web App</div>},
        {
            key:'Mobile App',
            label:'Mobile App',
            icon: <Code/>,
            component: <div>Mobile App</div>},
]}
/>


   




}