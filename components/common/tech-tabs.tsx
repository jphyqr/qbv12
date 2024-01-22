'use client'

import { useState } from "react"
import { Card } from "../ui/card"
import { AspectRatio } from "@radix-ui/react-aspect-ratio"
import { Small } from "../typography/small"

type TechTabProps = {
    items: TabItems[]
}

type TabItems = {
    key: string
    label: string
    icon: React.ReactNode
    component: React.ReactNode
}

export default function TechTabs({items}:TechTabProps) {


    const [activeTab, setActiveTab] = useState<TabItems | null>(null)

return <div className='flex flex-col w-full mt-8 border  border-gray-800   rounded-xl '>
        <div className='flex w-full overflow-x-scroll border-b  px-2'>
            {items.map((tab)=> {
               
                return (
                    <div
                    onClick={()=>setActiveTab(tab)}
                    key={tab.key} className={`flex  flex-col  h-20 items-center justify-center mr-5  opacity-80 hover:opacity-100 transition-all hover:cursor-pointer ${tab.key==activeTab?.key?'opacity-100':''} `}>
    
                    <div  className={`   p-2  border-gray-600 rounded-xl flex   items-center   ${tab.key==activeTab?.key?'   bg-violet-500':''} `}>
               
                     {tab.icon}
                
                 
                     <Small   
                    className={`text-center  ml-3  ${tab.key==activeTab?.key?'opacity-100':'opacity-80'} `}
                    >{tab.label}</Small>
                    </div>
                    
                 
                    </div>
                )
            }
           
               )}     
        </div>

        <div className='flex flex-col w-full  mt-14  rounded-xl p-4 items-center'>
            {activeTab&&activeTab.component}
        </div>
        
</div>

}