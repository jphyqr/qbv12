
import { Card, CardContent, CardHeader } from "./ui/card"
import { Checkbox } from "./ui/checkbox"

import { DollarSign, Star } from "lucide-react"
import { StarFilledIcon } from "@radix-ui/react-icons"


export type TableData = {
    columns: Column[]

    rows: Row[]
}

export type Column = {
 isWinner:boolean
 title:string
 img?:string
 description:string
 cells: Cell[]  
}

export type Cell = {
rowKey:string
value: number | string | boolean
}

export type Row ={
    title:string;
    key:string;
    type: RowType;
}

export type RowType = 'rating' | 'checkbox' | 'price' | 'label'

export type ComparisonTableProps = {
data: TableData

}


export default function ComparisonTable({data} : ComparisonTableProps) {

    const renderCell = (cell: Cell) => {    

   switch(rows.find((row) => row.key === cell.rowKey)?.type) {
         case 'rating':
              return <div className="flex">

                {
                    Array.from({length: 5}).map((_, index) => {
                        if(index < Number(cell.value)) 
                        return <StarFilledIcon className="h-4 w-4" key={index} />
                        return <Star className="h-4 w-4" key={index} />
                    })
                }
         
        
                      </div>
         case 'price':
            return <div className="flex">

            {
                Array.from({length: 5}).map((_, index) => {
                    if(index < Number(cell.value)) 
                    return <DollarSign className="h-4 w-4" key={index} />
                    return  <></>
                })
            }
     
    
                  </div>
         case 'checkbox':
              return   <Checkbox checked={cell.value? true:false} id="terms" />

   }
    }


const {columns, rows} = data

    return   <div className="flex">

        {
            columns.map((column) => {
     return      <Card className={` mr-2 ${column.isWinner?  ' bg-secondary' : ''}  `}
    
 key={column.title}>

        <CardHeader>
        {column.title}
        </CardHeader>

        <CardContent>
            {column.cells.map((cell) => {
                return <div className='flex w-full justify-between' key={cell.rowKey}>
                    {rows.find((row) => row.key === cell.rowKey)?.title}


                    {renderCell(cell)}

                </div>
            })
            }
        </CardContent>
 
 </Card>
            })
        }

   
    </div>

}