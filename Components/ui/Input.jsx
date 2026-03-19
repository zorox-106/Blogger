import React from 'react';
import { cn } from '@/lib/utils';

export const Input = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-lg border-2 border-slate-300 bg-white px-4 py-2 text-base font-body",
        "transition-all duration-200 shadow-[4px_4px_0px_0px_transparent]",
        "focus-visible:outline-none focus-visible:border-accent focus-visible:shadow-[4px_4px_0px_0px_#8B5CF6]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
});
Input.displayName = "Input";
