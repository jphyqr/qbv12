'use client'
import { BlockQuotes } from "@/components/typography/blockquotes";
import { TypeH2 } from "@/components/typography/h2";
import { Lead } from "@/components/typography/lead";
import { Muted } from "@/components/typography/muted";
import { TypeP } from "@/components/typography/p";
import { Small } from "@/components/typography/small";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Image from "next/image";
import { useEffect, useState } from "react";



type Block = {
    type: string
    value: string
    src?: string
    youtubeId?: string
    grayscale?: boolean
    videoSrc?: string

}

type Tabs ={
    key: string
    label: string
    year: number
    subText: string
    src?: string
    mediaSubText?: string
    blocks: Block[]
    youtubeId?: string
   

}

const tabs : Tabs[] =  [

    {
      key: 'chapter_1',
        label: 'Chapter 1',
        year: 2013,
        subText :'Football',
        src:'/chapter-1.png',
        blocks: [
            {
                type:'paragraph',
                value: 'Attended the University of Regina on a football scholarship.  Started 32 games at Right Tackle.  Team nominee for top student athlete.  Graduated with a degree in Software Systems Engineering.',
                src: '/rams.png',
       
            },

            {
                type:'paragraph',
                value: 'In 2013 I earned a spot on the Montreal Alouettes. The following season I was released and got a job at iQMetrix as a full stack web developer.',
                src: '/als.png'
            },

            {
                type:'paragraph',
                value: 'Coaching.',
                videoSrc: 'https://aqsqa2ypgvbzi7ri.public.blob.vercel-storage.com/fakefg-aQRaBGghIHoQpYav3ZLcbvDJLPWAfh.mp4'
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
                src: '/poker-1.png',
                grayscale:true,
                value: 'Was playing poker full time and working at iQMetrix.  I was making more money playing poker than I was at my job.  I decided to quit my job and play poker full time.'
            },
            {
                type:'paragraph',
                value: 'I spent the next 6 years travelling to high stakes tournaments and hosting poker games.  I won multiple tournaments and supported myself full time.  My best finish was 98th/8600 in the World Series Of Poker Main Event',
                grayscale:true,

                src:'/poker-2.png'
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
                src: '/real-estate-1.png',
                value: 'I needed a break from poker and decided to get into real estate.  I saw a rehab property on my street and decided I would buy it and fix it.  Neighbours said it was vacant for a decade.  Went through the mail to find names. Found the owners Obituary online.  Spent a month contacting everyone with the same last name on facebook/phone book until I found all 4 siblings and purchased the property.  I had not even been inside.  30K for a house on a lot worth 80K.  Then walked into this.'
            },
            {
                type:'paragraph',
                src: '/real-estate-2.png',
                value: 'I was shocked.  But I knew there was nothing in this place that I couldnt handle.  A thousand simple tasks that needed to be done. I found labourers on facebook to help and got to work.'
            },
            {
                type:'paragraph',
                value: 'Ripped out everything.  Fixed fire damaged exterior walls. Added a beam to open up interior wall.  Learned the residential electrical code and passed a home owners inspection. ',
                videoSrc:'https://aqsqa2ypgvbzi7ri.public.blob.vercel-storage.com/poker03-qZzG6WZPfBaWjKNoXh1lkt1Wy8756k.mp4'

            },
            {
                type:'paragraph',
                value: 'Converted to a fully legal up and down suite and sold it for 240K.  ',
                videoSrc: 'https://aqsqa2ypgvbzi7ri.public.blob.vercel-storage.com/real-estate-4-Mrbin3H3CT6yhX592Sf4NdWQySYBoq.mp4'
            },
            {
                type:'paragraph',
                value: 'At the same time, my parents home had a fire.  They needed a full rebuild and seemed obvious for me to take the tools and crew I was working with and take on a much bigger project.  Without blinking I was build a residential construction company. ',
                src: '/real-estate-6.png'
            },
            {
                type:'paragraph',
                value: 'After my parents house, I ended up doing contracting jobs for friends and family.  It was exciting and fun, but never what I planned on doing with my life.  I had to get back into software.',
                src: '/real-estate-8.png'
            },
            {
                type:'paragraph',
                value: 'I loved building with my hands, but I wanted to build something with more impact.  I knew it would be tough to get back into tech after a long break, but I knew it would be nothing compared to the things I built over the last 4 years in construction.',
videoSrc:'https://aqsqa2ypgvbzi7ri.public.blob.vercel-storage.com/channels-jyKcDqWecOAcLWQrz2k3QSshibeaDs.mp4'            }
        ]
    },
    {
        key: 'chapter_4',
        label: 'Chapter 4',
        src:'/product-1.png',
        year: 2017,
        subText :'Product',
        blocks: [

            {
                type:'paragraph',
                src:'/product-3.png',
                value: 'Did a hard stop on construction.  Focused on poker and figuring out a way back into tech. I had a clear vision of my future and changed to become the person I saw myself as.  Spent months on Udemy and at the gym to prepare for the next chapter.  Attended networking events to get a feel for the local tech industry.'
            },
            {
                type:'paragraph',
                src:'/product-2.png',
                value: 'A player in my game had just done an ICO. I told him that if there was a big enough change in tech that the industry would forgive my 6 year break, I would do it.  "This is it." he said, and I started learning about blockchain and machine learning.  I started attending tech events and networking.  I realized there was nothing in my city for data science and hosted an event.  This lead to my first job.'
            },
            {
                type:'paragraph',
                src:'/product-4.png',
                 value: 'I was hired to be the product manager for their AI ad tech product.  It was a great experience to work at a start up and work as both a product manager and a software developer.'
            },

        ]
    },
    {
        key: 'chapter_5',
        label: 'Chapter 5',
        year: 2019,
        subText :'Chuckwagon',
        src:'/chapter-1.png',
        blocks: [
            {
                type:'paragraph',
                value: 'While working as a PdM, I was coding side projects for my hobbies.  I was the host in the local poker community and decided to build an app for poker hosts.  Poker was going to be my way to see the world, and the app would get me access to the games I wanted to be in.  I started privatehost, social network for hosts and players',
                 src: '/privatehost.png'
            },
            {
                type:'paragraph',
                videoSrc: 'https://aqsqa2ypgvbzi7ri.public.blob.vercel-storage.com/filtered-CCEFD9A2-99F0-407B-8498-E6ACA61A9975-tBJNPBgIhznk8BR8cd4ZhnP0XwNKoq.MP4',

                value: 'I needed a proper studio to run the game while also building the app.  A place I had full control.   I rented a shut down restaurant with a loft up top.  As pandemic restrictions increased we could only have 6 people in a room. I cut a hole in my poker table and built a way to stream players into the game.  Eventually restrictions got too tight and I had to shut it down.  I was stuck with a building and no way to use it.  I subletted the kitchen to my poker dealer who had a small hummus company.  He had just got the kitchen back up to code.  I had nothing to do for the next month and I joked about turning it into a Texas BBQ restaurant, and he said absolutely.'
            },

            {
                type:'paragraph',
                src: '/smoker.jpg',
                value: 'We designed and fabricated a smoker and started renovating. Word god to our neighbours and they were not too happy about the idea of a Smoker, and told us they would fight it.  I knew I could come up with a new food offering and started experiementing with neat things off Youtube.'
            },
            
            {
                videoSrc: 'https://aqsqa2ypgvbzi7ri.public.blob.vercel-storage.com/chuckwagon-szjLxpsd3kBJY5rrpGBvojPZ63NeaX.mp4',
                type:'paragraph',
                value: 'In a month, I we turned the poker club into a restaurant. But we had no food offering. Smashburgers looked neat and we had a great gas stove.  I figured I could make these one of a kind, something our city had not seen before.  It was a hit and our reviews were amazing.'
            },
            {
                type:'paragraph',
                value: 'After enough iterations, we had a one of a kind smash burger that blew peoples minds.',
                src: '/burger.png'

            },

            {
                type:'paragraph',
                src: '/review.png',
                value: 'Local food critiques were raving about us and it was clear that we found product market fit.'
            },  
            {
                type:'paragraph',
                videoSrc: 'https://aqsqa2ypgvbzi7ri.public.blob.vercel-storage.com/IMG_6550-wgFVVQKmHxGu8TYviEyc9dibmeFgUK.MOV',
                value: 'But I was not happy.  I could see the same thing happening that did with constrcution.  Creating handcuffs that would not allow me to take a real shot at tech.   I decided to build custom POS software for us, that took the sting off of flipping burgers all summer.  Neither my partner or me were really into the restaurant business, and we decided to close it down.  I was going to go on the road and see what else was out there.  I went to Los Angeles to start networking with Start ups'
            },
            
            
        ]
    },
    {
        key: 'chapter_6',
        label: 'Chapter 6',
        year: 2021,
        subText :'Freelance',
        src:'/chapter-1.png',
        blocks: [
            {
                type:'paragraph',
                value: 'I did Upwork gigs while attending tech events in Santa Monica until I found a full time remote job with Crowdpass.  The primary project I worked on was building a mobile app to connect their SaaS platform to their wristbands to create Access control for events.',
                videoSrc: 'https://aqsqa2ypgvbzi7ri.public.blob.vercel-storage.com/crowdpassdemo-n0qFIdxsCwTLU2Oqu60TR9bkoiFLhS.mp4'
            },
            {
                type:'paragraph',
                value: 'The second large project I did was to build lead retrieval ontop of the wristbands.  Built a peer to peer lead connection system for Data Science Council.',
                youtubeId: 'WaMIEwKWbyI'
            },
        ]
    },

 
]

export default function BackStory() {


    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const [selectedTab, setSelectedTab] = useState(tabs[tabs.length-1])

    useEffect(() => {
        if (!api) {
          return
        }
     

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
     
        api.on("select", () => {

          setCurrent(api.selectedScrollSnap() + 1)
        })
      }, [api])






const [selectedBlockIndex, setSelectedBlockIndex] = useState(0)
return <section id="section1" className=' w-full p-4'>

<TypeH2>
  Back Story
</TypeH2>



{/* 
   <BlockQuotes className=' mb-20'>
    Teach someone Incremental Static Regeneration, and they will think every website can become an authoritive DR 80.
   </BlockQuotes> */}



<Tabs defaultValue="account" value={selectedTab?.key} className="w-full">
    <div className='grid min-w-full w-full grid-cols-5  gap-10 mt-10'>

<div className="col-span-5 md:col-span-4 ">



    <div className='md:hidden flex '>
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
            <div className=' flex flex-col '>
                <div className = 'hidden md:flex md:flex-col '>
                <TypeH2>
                    {tab.label}
                </TypeH2>
                <Lead>
                    {tab.subText}
                </Lead>
                </div>
                <div className='flex md:grid mt-10  '>
                   

<div id='carousel-wrapper' className='px-14 md:px-0  '>


<Carousel     setApi={setApi} className="  max-w-md ml-auto   mr-auto">
      <CarouselContent >
        {tab.blocks.map((block, index) => (
            <CarouselItem key={index}>
            <div>
              <Card>
           

 <div className='flex flex-col'>

              
                    {block.youtubeId?<iframe
          id="ytplayer"
       

          width="100%"
          height="360"
          
          src={`https://www.youtube.com/embed/${block.youtubeId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
         
        ></iframe>:
        
        block.videoSrc?<video className='w-full'  controls>
        <source src={block.videoSrc} type="video/mp4"/>
        Your browser does not support the video tag.
        </video>:

        <div>
                    <div className='flex flex-col relative'>
                        <AspectRatio ratio={9 / 9} className='relative w-full h-full'>
                        <Image
                            src={block.src || '/chapter-1-color copy.png'}
                            alt="Vercel Logo"
                          
                            
                            layout="fill"
                            priority
                        />
                        </AspectRatio>

                     {/* {selectedTab.key=='chapter_1' &&   <div className="absolute z-10 w-full h-full    opacity-100 transition-opacity duration-300 ease-in-out   ">
                        <AspectRatio ratio={9 / 9} className='relative w-full h-full'>
                        <Image
                            src='/chapter-1-color copy.png'
                            alt="Vercel Logo"
                          
                            
                            layout="fill"
                            priority
                        />
                        </AspectRatio>
                        </div>} */}
                    </div>
                    </div>}

                    <div className='p-3'>
                    {/* {tab.mediaSubText&& <Muted > {tab.mediaSubText}</Muted>} */}
<p className='mt-2'>
    {block.value}
</p>
                    </div>

                    </div>

              </Card>
            </div>
            </CarouselItem>
        ))}
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))} */}
      </CarouselContent>
      <CarouselPrevious
       //onClick={()=>setSelectedBlockIndex(selectedBlockIndex-1)}
      />
      <CarouselNext


       //onClick={()=>setSelectedBlockIndex(selectedBlockIndex+1)}
       />
      
  
    </Carousel>

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