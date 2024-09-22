import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { InstaIcon } from '../../../components/Icon/onboarding/InstaIcon';
import light from '../../../assets/light.png';

export interface InfoBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  first_line: string;
  second_line: string;
}

const InfoBox = React.forwardRef<HTMLInputElement, InfoBoxProps>(({ first_line, second_line }) => {
  const location = useLocation();

  const shouldRenderInstaIcon = location.pathname !== '/matey-frontend/test/input/data';

  return (
    <div>
      <div className="flex items-center justify-center align-middle">
        {shouldRenderInstaIcon ? <InstaIcon /> : <img src={light} alt="Light" />}
      </div>
      <div className="mt-3">
        <div className="text-2xl font-extrabold">{first_line}</div>
        <div className="mt-1 text-base font-extrabold">{second_line}</div>
      </div>
    </div>
  );
});

InfoBox.displayName = 'InfoBox';

export { InfoBox };
