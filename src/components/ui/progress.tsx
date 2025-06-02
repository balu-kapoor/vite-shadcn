import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    variant?: "default" | "gradient" | "success" | "warning" | "error"
    showValue?: boolean
  }
>(({ className, value, variant = "default", showValue = false, ...props }, ref) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "gradient":
        return "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient bg-[length:200%_200%]"
      case "success":
        return "bg-gradient-to-r from-green-500 to-emerald-500"
      case "warning":
        return "bg-gradient-to-r from-yellow-500 to-orange-500"
      case "error":
        return "bg-gradient-to-r from-red-500 to-rose-500"
      default:
        return "bg-gradient-to-r from-blue-600 to-purple-600"
    }
  }

  return (
    <div className="relative">
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 shadow-inner",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className={cn(
            "h-full w-full flex-1 transition-all duration-500 ease-out relative overflow-hidden",
            getVariantClasses(),
            "before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:animate-pulse"
          )}
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      </ProgressPrimitive.Root>
      
      {showValue && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium text-white drop-shadow-sm">
            {value}%
          </span>
        </div>
      )}
    </div>
  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }