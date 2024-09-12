import * as React from 'react';

import { cn } from '../../libs/utils';

export interface CardProps extends React.InputHTMLAttributes<HTMLInputElement> {
  birth: string;
  first_name: string;
  second_name: string;
  job: string;
}

const Card = React.forwardRef<HTMLInputElement, CardProps>(
  ({ className, placeholder, birth, first_name, second_name, job, ...props }, ref) => {
    return (
      <div className="relative flex h-[222px] w-[350px] rounded-[10px] bg-[#7EC8FF] text-[#FFF613]">
        <div className="ml-2 mt-2 text-start">
          <div className="absolute top-[30px] -translate-y-1/2 text-4xl">{first_name}</div>
          <div className="absolute -bottom-[15px] -translate-y-1/2">
            <div className="text-sm">{birth}</div>
            <div className="text-sm">{job}</div>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 z-10 h-[1px] w-[250px] -translate-x-1/2 -translate-y-1/2 -rotate-45 transform bg-[#FFF613]"></div>
        <div className="absolute -right-[30px] top-1/2 -translate-y-1/2 -rotate-90 text-4xl">{second_name}</div>
      </div>
    );
  }
);
Card.displayName = 'Card';

export { Card };

{
  /*
     className={cn(
        'flex h-10 w-full items-center justify-center border-b-2 border-white bg-transparent px-[10px] py-2 text-center text-black placeholder:text-[#888888] placeholder:text-muted-foreground focus:border-white focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}*/
}
