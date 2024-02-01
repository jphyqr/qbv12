import { cn } from "@/lib/utils";



  export function Large({children, className} : {children: React.ReactNode, className?: string}) {
    return (


        
        <div className={cn(className,"text-lg font-semibold")}>{children}</div>
    )
  }