import * as React from 'react';

import { cn } from '../../libs/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isInvalid?: boolean;
  isDisabled?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isDisabled = false, placeholder, ...props }, ref) => {
    return (
      <input
        type={type}
        placeholder={'@' + placeholder}
        className={cn(
          'flex h-10 w-full items-center justify-center border-b-2 border-white bg-transparent px-[10px] py-2 text-center text-black placeholder:text-[#888888] placeholder:text-muted-foreground focus:border-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          className,
          'font-pretendard text-[20px] font-semibold leading-[22px] tracking-[-1.41px]'
        )}
        ref={ref}
        disabled={isDisabled}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
