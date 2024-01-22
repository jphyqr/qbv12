import { cn } from "@/lib/utils"



  export function BlockQuotes({children, className} : {children: React.ReactNode, className?: string}) {
    return (
   <blockquote className={cn(className,"mt-6 border-l-2 pl-6 italic")}>
     {children}
     </blockquote>
    )
  }
