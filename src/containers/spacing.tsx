import * as React from 'react';

import { cn } from '../libs/utils';

export interface SpacingProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Spacing = React.forwardRef<HTMLInputElement, SpacingProps>(({ className, ...props }, ref) => {
  return <div className={cn('mt-2', className)} ref={ref} {...props} />;
});
Spacing.displayName = 'Spacing';

export { Spacing };
