'use client'
import { BlockQuotes } from "@/components/typography/blockquotes";
import { TypeH2 } from "@/components/typography/h2";
import { Lead } from "@/components/typography/lead";
import { Muted } from "@/components/typography/muted";
import { TypeP } from "@/components/typography/p";
import { Small } from "@/components/typography/small";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Image from "next/image";
import { useState } from "react";


const tabs =  [


    {
      key: 'chapter_1',
        label: 'Chapter 1',
        year: 2013,
        subText :'Football',
        src:'/chapter-1.png',
        blocks: [
            {
                type:'paragraph',
                value: 'Attended the university of Regina on a football scholarship.  Started 32 games at Right Tackle.  Team nominee for top student athlete.  Graduated with a degree in Software Systems Engineering.'
            },
            {
                type:'paragraph',
                value: 'Was drafted by the Calgary Stampeders in the 3rd round.  Attended camps with the Stampeders, Winnipeg Bluebombers and The Montreal Alouettes.  '
            },
            {
                type:'paragraph',
                value: 'In 2013 I earned a spot on the Montreal Alouettes. The following season I was released and got a job at iQMetrix as a full stack web developer.'
            },
            {
                type:'paragraph',
                value: 'Attended the university of Regina on a football scholarship.  Started 32 games at Right Tackle.  Team nominee for top student athlete.  Graduated with a degree in Software Systems Engineering.'
            },
            {
                type:'paragraph',
                value: 'Was drafted by the Calgary Stampeders in the 3rd round.  Attended camps with the Stampeders, Winnipeg Bluebombers and The Montreal Alouettes.  '
            },
            {
                type:'paragraph',
                value: 'In 2013 I earned a spot on the Montreal Alouettes. The following season I was released and got a job at iQMetrix as a full stack web developer.'
            },
        ]
    },
    {
        key: 'chapter_2',
        label: 'Chapter 2',
        src:'/poker.png',
        year: 2015,
        subText :'Poker',
        blocks: [
            {
                type:'paragraph',
                value: 'During my first full time job at iQMetrix I was playing live poker.  I made $300,000 at 23 and decided I should focus on poker instead of web development.'
            },
            {
                type:'paragraph',
                value: 'I spent the next 6 years travelling to high stakes tournaments and hosting poker games.  I won multiple tournaments and supported myself full time. '
            },
            {
                type:'paragraph',
                value: 'In 2018 I got 98th in the $10,000 WSOP main event. During Covid poker shut down and I decided to focus on web development again.'
            },
        ]
    },
    {
        key: 'chapter_3',
        label: 'Chapter 3',
        src:'/chapter-1.png',
        year: 2016,
        subText :'Real Estate',
        blocks: [
            {
                type:'paragraph',
                value: 'I was a poker player'
            },
            {
                type:'paragraph',
                value: 'I was a poker player'
            },
            {
                type:'paragraph',
                value: 'I was a poker player'
            },
        ]
    },
    {
        key: 'chapter_4',
        label: 'Chapter 4',
        src:'/chapter-1.png',
        year: 2017,
        subText :'Udemy',
        blocks: [
            {
                type:'paragraph',
                value: 'I was a poker player'
            },
            {
                type:'paragraph',
                value: 'I was a poker player'
            },
            {
                type:'paragraph',
                value: 'I was a poker player'
            },
        ]
    },
    {
        key: 'chapter_5',
        label: 'Chapter 5',
        year: 2018,
        subText :'PdM',
        src:'/chapter-1.png',
        blocks: [
            {
                type:'paragraph',
                value: 'I was a poker player'
            },
            {
                type:'paragraph',
                value: 'I was a poker player'
            },
            {
                type:'paragraph',
                value: 'I was a poker player'
            },
        ]
    },
    {
        key: 'chapter_6',
        label: 'Chapter 6',
        year: 2019,
        subText :'Chuckwagon',
        src:'/chapter-1.png',
        blocks: [
            {
                type:'paragraph',
                value: 'I was a poker player'
            },
            {
                type:'paragraph',
                value: 'I was a poker player'
            },
            {
                type:'paragraph',
                value: 'I was a poker player'
            },
        ]
    },
    {
        key: 'chapter_7',
        label: 'Chapter 7',
        year: 2020,
        subText :'Freelance',
        src:'/chapter-1.png',
        youtubeId: 'WaMIEwKWbyI',
        mediaSubText: 'Launching Lead Tech at Data Council in Austin',
        blocks: [
            {
                type:'paragraph',
                value: 'When Covid cancelled the University football season, I was unbound to Regina.  I decided I would go on the road and see what else was out there.  I went to Los Angeles to start networking with Start ups'
            },
            {
                type:'paragraph',
                value: 'Eventually I landed a full time gig with Crowdpass where they needed someone to take over the web app.  I was able to take over the web app and build a mobile app and a lead generation system.'
            },
            {
                type:'paragraph',
                value: 'Here is me at Data Council in Austin where we rolled out our lead collection system to the public. '
            },
        ]
    },
 
]

export default function BackStory() {




const [selectedTab, setSelectedTab] = useState(tabs[6])
return <section id="section1" className=' py-48'>

<TypeH2>
  Back Story
</TypeH2>


   <BlockQuotes className=' mb-20'>
    Teach someone Incremental Static Regeneration, and they will think every website can become an authoritive DR 80.
   </BlockQuotes>


<Lead>
<p>
    I took a unique path to becoming a Product Engineer.  I graduated as a software engineer while playing college football.  Then I spent my 20s do a bunch of neat competitive things.  Then in my 30s I got hired as a product manager.  Now I have settled in as a Product Engineer building web applications.
</p>
<TypeP>
    test
</TypeP>
</Lead>

<Separator className='mt-10 mb-10'/>


<Tabs defaultValue="account" value={selectedTab.key} className="w-full">
    <div className='grid min-w-full w-full grid-cols-5  gap-10 mt-10'>

<div className="col-span-5 md:col-span-4">



    <div className='md:hidden flex'>
    <TabsList className='flex overflow-x-scroll'>
    {
        tabs.map((tab)=> {
            return (
                <TabsTrigger
                onClick={()=>setSelectedTab(tab)}
                key={tab.key} value={tab.key} className={`flex mb-2  border-b flex-col items-center justify-center mr-5 hover:opacity-100 transition-all hover:cursor-pointer ${tab.key==selectedTab?.key?'opacity-100':'opacity-70 '} `}>
                
                <div className='flex flex-col'>
                    <div className='flex items-center mb-1'>
                        <Small className='hidden md:block mr-2'>
                            {tab.label}
                        </Small>
                        <Muted>
                            {tab.year}
                        </Muted>
                    </div>
                {tab.subText} 
                </div>
               
                </TabsTrigger>
            )
        })
    }

  </TabsList>
    </div>
{
    tabs.map((tab)=> {  
        return (
            <TabsContent  key={tab.key} value={tab.key}>
            <div className=' flex flex-col'>
                <div className = 'hidden md:flex md:flex-col '>
                <TypeH2>
                    {tab.label}
                </TypeH2>
                <Lead>
                    {tab.subText}
                </Lead>
                </div>
                <div className='grid grid-cols-2 gap-10 mt-10 '>
                    <div className='flex flex-col'>

                  
                    {tab.youtubeId?<iframe
          id="ytplayer"
       

          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${tab.youtubeId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
         
        ></iframe>:<div>
                    <div className='flex flex-col relative'>
                        <AspectRatio ratio={9 / 9} className='relative w-full h-full'>
                        <Image
                            src={tab.src}
                            alt="Vercel Logo"
                            className="grayscale"
                            
                            layout="fill"
                            priority
                        />
                        </AspectRatio>

                     {selectedTab.key=='chapter_1' &&   <div className="absolute z-10 w-full h-full    opacity-100 transition-opacity duration-300 ease-in-out   ">
                        <AspectRatio ratio={9 / 9} className='relative w-full h-full'>
                        <Image
                            src='/chapter-1-color copy.png'
                            alt="Vercel Logo"
                          
                            
                            layout="fill"
                            priority
                        />
                        </AspectRatio>
                        </div>}
                    </div>
                    </div>}
{tab.mediaSubText&& <Muted > {tab.mediaSubText}</Muted>}
                    </div>

                    <div className='flex flex-col'>


                        <ScrollArea className=" h-[400px] w-full ">

                        {tab.blocks.map((block, i)=> {
                            return (
                                <div key={i} className='flex flex-col mb-4'>
                                    <div className='flex flex-col'>
                                        {block.type=='paragraph'&&
                                        <TypeP >
                                            {block.value}
                                        </TypeP>
                                        }
                                    </div>
                                </div>
                            )
                        })}
                        </ScrollArea>
                
                    </div>

                </div>
            </div>
            </TabsContent>
        )
    }
    
       )}
</div>
<div className='col-span-1   py-16'>
<TabsList className='hidden md:flex flex-col'>
    {
        tabs.map((tab)=> {
            return (
                <TabsTrigger
                onClick={()=>setSelectedTab(tab)}
                key={tab.key} value={tab.key} className={`flex mb-2  border-b flex-col items-center justify-center mr-5 hover:opacity-100 transition-all hover:cursor-pointer ${tab.key==selectedTab?.key?'opacity-100':'opacity-70 '} `}>
                
                <div className='flex flex-col'>
                    <div className='flex items-center mb-1'>
                        <Small className='mr-2'>
                            {tab.label}
                        </Small>
                        <Muted>
                            {tab.year}
                        </Muted>
                    </div>
                {tab.subText} 
                </div>
               
                </TabsTrigger>
            )
        })
    }

  </TabsList>

    </div>
        </div>

  

</Tabs>

{/* <div className='grid grid-cols-2 gap-10 mt-10'>
  <div className='flex flex-col'>
    <TypeH2>
      Machine Learning
    </TypeH2>
    <Lead>
      I had a friend who was a data scientist at a hedge fund.  He told me about the power of machine learning and how it was going to change the world.  I was sold.  I bought a course on Udemy and started learning.  I was hooked.  I was going to be a machine learning engineer.  
    </Lead>
  </div>

  <div className='flex flex-col'>
    <TypeH2>
      Blockchain
    </TypeH2>
    <Lead>
      I had a friend who was a data scientist at a hedge fund.  He told me about the power of machine learning and how it was going to change the world.  I was sold.  I bought a course on Udemy and started learning.  I was hooked.  I was going to be a machine learning engineer.  
    </Lead>
  </div>

  </div> */}






</section>
}