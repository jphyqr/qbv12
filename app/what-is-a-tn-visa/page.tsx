
import ComparisonTable, { TableData } from '@/components/comparison-table'

import { Separator } from '@/components/ui/separator'
import { Angry } from 'lucide-react'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center    max-w-6xl ml-auto mr-auto">



<h2 className='text-4xl mb-4'>For Employers: Visa=Value</h2>




      <ComparisonTable 
      
      data={freelancerOptionData}
      />

      <Separator className='my-16'/>
   <p className='text-2xl mb-2'>Unfortunately, Visas are competitive, require too much time, and too much effort for busy companies.  </p>

   <p className='text-8xl  my-10'> <Angry height={300} width={300}/> </p>

      <Separator className='my-16'/>

<section className='bg-primary p-20'>
<p className='text-4xl mb-2'>If only there existed some unlimited Visa for compaines that need qualified engineers who will stick around for years but can start tomorrow...  </p>
     
</section>
    <Separator className='my-16'/>







      <ComparisonTable
      data={visaComparison}
      />
      <h2 className='text-2xl mt-8'>
        TN Visas require minimal effort and are unlimited.  They are the perfect solution for companies that need to hire engineers for the long term. 
      </h2>
   
   <Separator className='my-16'/>

          <h2 className='text-3xl mb-4'>
        Trial A Freelancer Today.  If you like them, we can help you get them a TN Visa.
      </h2>



    <h2 className='text-3xl mb-4'>Benefits of Canadian Software Engineers</h2>
      <ul>
         <li>They are fluent in English</li>
          <li>They are in the same time zone</li>
          <li>They are culturally similar</li>
          <li>They are highly educated</li>
          <li>They are highly skilled</li>
          <li>They are highly motivated</li>
          <li>They are highly appreciative</li>
          <li>They are highly loyal</li>
      </ul>

          <h2 className='text-3xl mb-4'>Benefits of a TN Engineer Placed In your Company</h2>

      <ul>
        <li>3 Year Window</li>
         <li>T2 Dependant</li>
         <li>Dependant on your company</li>

      </ul>

          <h2 className='text-3xl mb-4'>Benefit of using NoShore</h2>
     <ul>
      <li>
        We vet and ensure they have degree and referenced skill (required for visa)
      </li>
       <li>
        We send you candidates that fit your tech stack and culture for a trial period.  Can continue freelance if both sides agree.
       </li>
     </ul>

  
    </main>
  )
}




const visaComparison : TableData = {
  rows: [
    {
      title: 'No Sponsorship Required',
      key: 'sponsorship',
      type: 'checkbox'
    },
    {
      title: 'No Limit, No Lottery',
      key: 'limited',
      type: 'checkbox'
    },
    {
      title: "Degree+Job Offer",
      key: 'job-offer',
      type: 'checkbox'
    },
    {
      title: '3 Year',
      key: 'three-years',
      type: 'checkbox'
    },
    {
      title: 'Broad Skillset',
      key: 'broad-skillset',
      type: 'checkbox'
    },
    {
      title: 'Only For Specialists',
      key: 'specific-skillset',
      type: 'checkbox'
    },
    {
      title: 'Requires Degree',
      key: 'specific-skillset',
      type: 'checkbox'
    },
    {
      title: 'Immigration Intent',
      key: 'immigration-intent',
      type: 'checkbox'
    },
  ],

  columns: [
{
  isWinner: true,
  title: 'TN Visa',
  description: 'TN Visa',
  cells: [
    {
      rowKey: 'job-offer',
      value: true
    },
    {
      rowKey: 'three-years',
      value: true
    },
    {
      rowKey: 'sponsorship',
      value: true
    },
    { 
      rowKey: 'limited',
      value: true
      
    },


 

    {
      rowKey: 'specific-skillset',
      value: true

    }

   
  ]
},

{
  isWinner: false,
  title: 'H1-B',
  description: 'TN Visa',
  cells: [
    {
      rowKey: 'job-offer',
      value: true
    },
    {
      rowKey: 'three-years',
      value: true
    },
    {
      rowKey: 'sponsorship',
      value: false
    },
    {
      rowKey: 'limited',
      value: false
    },




{
  rowKey: 'specific-skillset',
  value: false
  
}

   
  ]
}
  ]
}




const freelancerOptionData : TableData ={
  rows: [

    {
      title: 'Affordable',
      key: 'affordable',
      type: 'checkbox'
    },
    {
      title: 'Time Zone',
      key: 'timezone',
      type: 'checkbox'
    },

    {
      title: 'Long Term',
      key: 'long-term',
      type: 'checkbox'
    },
  
  ],
columns: [

  {
    isWinner: false,
    title: 'Europe/Asia Remote',
    description: 'Asia Remote',
    cells: [
        {
          rowKey: 'affordable',
          value: true
        },
        {
          rowKey: 'timezone',
          value: false
        },
        {
          rowKey: 'easy-onboarding',
          value: false
        },
        {
          rowKey: 'long-term',
          value: false
        },

    ],


  },


  {
    isWinner: false,
    title: 'Near Shore',
    description: 'Near Shore',
    cells: [
        {
          rowKey: 'affordable',
          value: true
        },
        {
          rowKey: 'timezone',
          value: true
        },
        {
          rowKey: 'easy-onboarding',
          value: true
        },
        {
          rowKey: 'long-term',
          value: false
        },
    ],


  },


  {
    isWinner: false,
    title: 'US T2',
    description: 'T2 US',
    cells: [
        {
          rowKey: 'affordable',
          value: false
        },
        {
          rowKey: 'timezone',
          value: true
        },
        {
          rowKey: 'easy-onboarding',
          value: true
        },
        {
          rowKey: 'long-term',
          value: true
        },
    ],


  },

  {
    isWinner: true,
    title: 'Visa T2s',
    description: 'Visa T2s',
    cells: [
        {
          rowKey: 'affordable',
          value: true
        },
        {
          rowKey: 'timezone',
          value: true
        },
        {
          rowKey: 'easy-onboarding',
          value: true
        },
        {
          rowKey: 'long-term',
          value: true
        },

    ],


  },



]
}