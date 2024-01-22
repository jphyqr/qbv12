import TechTabs from "@/components/common/tech-tabs";
import { Code } from "lucide-react";


export default function NextjsProjects() {


return <TechTabs

items={[
{
    key:'Facny Tool 1',
    label:'Fancy Tool 1 ',
    icon: <Code/>,
    component: <div>Project 1</div>},
    {
        key:'Project 2',
        label:'Project 2',
        icon: <Code/>,
        component: <div>Project 2</div>},
]}
/>


   




}