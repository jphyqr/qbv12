'use client'
import { Muted } from "@/components/typography/muted"
import { Small } from "@/components/typography/small"
import { Card } from "@/components/ui/card"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { useState } from "react"


type TopTabItems ={
    key: string
    label: string
    icon: React.ReactNode
    component: React.ReactNode
}

type DeepDashboardProps = {
    topTabs: TopTabItems[]
} 

export default function DeepDashboard({topTabs}:DeepDashboardProps) {

const [activeTab, setActiveTab] = useState<TopTabItems | null>(topTabs[1])

return (
    <section id="section2" className='flex flex-col w-full   h-[90vh] '>

        <div className='flex w-full overflow-x-scroll '>
            {topTabs.map((tab)=> {
               
                return (
                    <div
                    onClick={()=>setActiveTab(tab)}
                    key={tab.key} className={`flex flex-col items-center justify-center mr-5 opacity-80 hover:opacity-100 transition-all hover:cursor-pointer ${tab.key==activeTab?.key?'opacity-100':''} `}>
    
                    <Card  className={` h-20 w-20 border-b mb-4 border-gray-600 rounded-xl flex items-center flex-col justify-center p-4    ${tab.key==activeTab?.key?'    text-blue-900':''} `}>
                     <AspectRatio ratio={1} className='m-0 p-0 flex flex-col items-center justify-center'>
                     {tab.icon}
                     </AspectRatio>
                 
                     
                    </Card>
                    
                    <Small   
                    className={`text-center  ${tab.key==activeTab?.key?'opacity-100':'opacity-80'} `}
                    >{tab.label}</Small>
                    </div>
                )
            }
           
               )}     
        </div>
        

        <div className='flex flex-col w-full  mt-14  rounded-xl p-4 items-center  flex-grow '>
            {activeTab&&activeTab.component}
        </div>
    </section>
)



}
