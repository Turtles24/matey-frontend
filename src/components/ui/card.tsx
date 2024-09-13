import * as React from 'react';

export interface CardProps extends React.InputHTMLAttributes<HTMLInputElement> {
  birth: string | null;
  first_name: string | null;
  second_name: string | null;
  job: string | null;
}

const Card = React.forwardRef<HTMLInputElement, CardProps>(({ birth, first_name, second_name, job }) => {
  return (
    <div
      className="relative flex h-[222px] w-[350px] rounded-[10px] bg-[#7EC8FF] text-[#FFF613]"
      style={{ fontFamily: 'YUniverse-B' }}
    >
      <div className="ml-2 mt-2 text-start">
        <div className="absolute top-[30px] -translate-y-1/2 text-4xl">{first_name}</div>
        <div className="absolute -bottom-[15px] -translate-y-1/2">
          <div className="text-sm">{birth}</div>
          <div className="text-sm">{job}</div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 z-10 h-[1px] w-[250px] -translate-x-1/2 -translate-y-1/2 -rotate-45 transform bg-[#FFF613]"></div>
      <div className="absolute left-[110%] top-1/2 z-10 h-[200px] w-[250px] -translate-x-1/2 -translate-y-1/2 -rotate-90 transform text-4xl">
        {second_name}
      </div>
    </div>
  );
});
Card.displayName = 'Card';

export { Card };
