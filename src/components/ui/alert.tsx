import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground transition-all duration-300 ease-in-out hover:scale-[1.02] group overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-background/90 backdrop-blur-sm text-foreground border-border/50 shadow-lg hover:shadow-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/5 before:to-purple-500/5 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300",
        destructive:
          "border-red-500/50 text-red-900 dark:text-red-100 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-red-500/20 [&>svg]:text-red-600 dark:[&>svg]:text-red-400 before:absolute before:inset-0 before:bg-gradient-to-r before:from-red-500/10 before:to-red-600/10 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300",
        success:
          "border-green-500/50 text-green-900 dark:text-green-100 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-green-500/20 [&>svg]:text-green-600 dark:[&>svg]:text-green-400 before:absolute before:inset-0 before:bg-gradient-to-r before:from-green-500/10 before:to-green-600/10 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300",
        warning:
          "border-yellow-500/50 text-yellow-900 dark:text-yellow-100 bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-950/50 dark:to-yellow-900/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-yellow-500/20 [&>svg]:text-yellow-600 dark:[&>svg]:text-yellow-400 before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-500/10 before:to-yellow-600/10 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300",
        info:
          "border-blue-500/50 text-blue-900 dark:text-blue-100 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 backdrop-blur-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/20 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-400 before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/10 before:to-blue-600/10 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  >
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight group-hover:scale-105 transition-transform duration-300", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed group-hover:text-foreground/90 transition-colors duration-300", className)}
    {...props}
  >
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }