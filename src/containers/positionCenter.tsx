import * as React from 'react';

import { cn } from '../libs/utils';

export interface PositionCenterProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const PositionCenter = React.forwardRef<HTMLInputElement, PositionCenterProps>(({ className, ...props }, ref) => {
  return <div className={cn('flex justify-center', className)} ref={ref} {...props} />;
});
PositionCenter.displayName = 'PositionCenter';

export { PositionCenter };
