import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { InstaIcon } from '../../../components/Icon/onboarding/InstaIcon';
import light from '../../../assets/light.png';
import { motion } from 'framer-motion';

export interface InfoBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  first_line: string;
  second_line: string;
}

const InfoBox = React.forwardRef<HTMLInputElement, InfoBoxProps>(({ first_line, second_line }) => {
  const location = useLocation();

  const shouldRenderInstaIcon = location.pathname !== '/matey-frontend/test/input/data';

  return (
    <div>
      <motion.div
        initial={{ y: 20, opacity: 0 }} // 시작 상태
        animate={{ y: 0, opacity: 1 }} // 애니메이션 상태
        exit={{ y: 20, opacity: 0 }} // 종료 상태
        transition={{ duration: 1 }} // 애니메이션 지속 시간
        className="text-2xl font-bold"
      >
        <div className="flex items-center justify-center align-middle">
          {shouldRenderInstaIcon ? <InstaIcon /> : <img src={light} alt="Light" />}
        </div>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }} // 시작 상태
        animate={{ y: 0, opacity: 1 }} // 애니메이션 상태
        exit={{ y: 20, opacity: 0 }} // 종료 상태
        transition={{ duration: 1 }} // 애니메이션 지속 시간
      >
        <div className="mt-3 animate-fade">
          <div className="text-2xl font-extrabold">{first_line}</div>
          <div className="mt-1 text-base font-extrabold">{second_line}</div>
        </div>
      </motion.div>
    </div>
  );
});

InfoBox.displayName = 'InfoBox';

export { InfoBox };
