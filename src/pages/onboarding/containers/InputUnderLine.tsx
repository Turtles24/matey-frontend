import { cn } from '../../../libs/utils';
import * as React from 'react';

export interface InputUnderLineProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputUnderLine = React.forwardRef<HTMLInputElement, InputUnderLineProps>(({ className, ...props }, ref) => {
  return <div className={cn('h-0.5 w-full bg-[#eeeeef]', className)} ref={ref} {...props}></div>;
});
InputUnderLine.displayName = 'InputUnderLine';

export { InputUnderLine };
