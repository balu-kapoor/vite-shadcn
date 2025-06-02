import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background/50 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 ease-in-out hover:border-blue-500/50 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/20 dark:focus:shadow-blue-400/20 group relative before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-r before:from-blue-500/10 before:to-purple-500/10 before:opacity-0 focus:before:opacity-100 before:transition-all before:duration-300 before:-z-10",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }