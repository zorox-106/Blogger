import React from 'react';
import { cn } from '@/lib/utils'; // I will create a simple utility for class merging

export const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  children, 
  icon,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-heading font-bold rounded-full transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-accent text-white border-2 border-border shadow-pop hover:shadow-pop-hover hover:-translate-y-[2px] hover:-translate-x-[2px] active:shadow-pop-active active:translate-y-[2px] active:translate-x-[2px]",
    secondary: "bg-transparent text-foreground border-2 border-border hover:bg-tertiary hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-pop active:shadow-none active:translate-y-[0px] active:translate-x-[0px]",
    outline: "bg-transparent text-foreground border-2 border-border border-dashed hover:border-solid hover:bg-muted",
  };

  const sizes = {
    sm: "h-10 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
    icon: "h-12 w-12",
  };

  return (
    <button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {icon && (
        <span className="flex items-center justify-center w-6 h-6 bg-white text-foreground rounded-full ml-1">
          {icon}
        </span>
      )}
    </button>
  );
});
Button.displayName = "Button";
