import * as React from 'react';
import { InstaIcon } from '../../../components/Icon/onboarding/InstaIcon';

export interface InfoBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  first_line: string;
  second_line: string;
}

const InfoBox = React.forwardRef<HTMLInputElement, InfoBoxProps>(({ first_line, second_line }) => {
  return (
    <div>
      <div className="flex items-center justify-center align-middle">
        <InstaIcon />
      </div>
      <div className="mt-3">
        <div className="text-2xl font-extrabold">{first_line}</div>
        <div className="mt-1 text-base font-extrabold">{second_line}</div>
      </div>
    </div>
  );
});
InfoBox.displayName = ' InfoBox';

export { InfoBox };
