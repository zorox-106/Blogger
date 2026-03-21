import React from 'react';
import { cn } from '@/lib/utils';

export const Card = React.forwardRef(({ className, children, hoverEffect = false, shadowColor = "pop-soft", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "bg-white border-2 border-border rounded-xl",
        `shadow-${shadowColor}`,
        hoverEffect && "transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-[1.02] hover:-rotate-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
Card.displayName = "Card";

export const CardHeader = ({ className, children, ...props }) => (
  <div className={cn("p-6 flex flex-col space-y-1.5", className)} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ className, children, ...props }) => (
  <h3 className={cn("font-heading font-bold text-2xl tracking-tight text-foreground", className)} {...props}>
    {children}
  </h3>
);

export const CardContent = ({ className, children, ...props }) => (
  <div className={cn("p-6 pt-0 font-body text-foreground/80", className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ className, children, ...props }) => (
  <div className={cn("p-6 pt-0 flex items-center", className)} {...props}>
    {children}
  </div>
);
