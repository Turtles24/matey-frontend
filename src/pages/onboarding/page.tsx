import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import Header from '../../containers/header';
import { PositionCenter } from '../../containers/positionCenter';
import { Spacing } from '../../containers/spacing';
import { InfoBox } from './containers/InfoBox';
import { InputUnderLine } from './containers/InputUnderLine';
import { Motion, spring } from 'react-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { OnboardingSuccess } from './containers/Success';

export function Onboarding() {
  const [instagramId, setInstagramId] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === '/matey-frontend/onboarding/success') {
    return <OnboardingSuccess />;
  }

  const handleOnboarding = () => {
    navigate('/matey-frontend/onboarding/success');
  };
  return (
    <>
      <div className="main">
        <div className="main_content">
          <Header Link={'/'} back_disable={'yes'} back_work={'yes'} />
          <Spacing className="mt-28"></Spacing>

          <InfoBox
            first_line={'인스타그램에서 친구를 찾아볼게요'}
            second_line={'사용중인 인스타그램 아이디를 알려주세요'}
          />

          <Spacing className="mt-14"></Spacing>

          <PositionCenter>
            <Input
              className="w-[90%] text-start"
              placeholder="인스타그램 아이디"
              value={instagramId}
              onChange={(e) => setInstagramId(e.target.value)}
            />
          </PositionCenter>

          <PositionCenter>
            <InputUnderLine />
          </PositionCenter>

          <Spacing className="mt-2"></Spacing>

          {/* Motion을 이용한 애니메이션 처리 */}
          <Motion
            style={{
              opacity: spring(instagramId.trim() !== '' ? 1 : 0),
              height: spring(instagramId.trim() !== '' ? 200 : 0),
            }}
          >
            {({ opacity, height }) => (
              <div
                style={{
                  opacity,
                  height,
                  overflow: 'hidden',
                }}
              >
                <PositionCenter>
                  <Input
                    className="w-[90%] text-start"
                    placeholder="비밀번호"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </PositionCenter>

                <PositionCenter>
                  <InputUnderLine />
                </PositionCenter>

                <Motion
                  style={{
                    opacity: spring(password.trim() !== '' ? 1 : 0),
                    height: spring(password.trim() !== '' ? 200 : 0),
                  }}
                >
                  {({ opacity, height }) => (
                    <div
                      style={{
                        opacity,
                        height,
                        overflow: 'hidden',
                      }}
                    >
                      <div className="bottom_button">
                        <Button
                          onClick={handleOnboarding}
                          className="h-[50px] w-[90%] rounded-[12px] text-[16px] font-extrabold"
                        >
                          Matey 시작하기
                        </Button>
                      </div>
                    </div>
                  )}
                </Motion>
              </div>
            )}
          </Motion>
        </div>
      </div>
    </>
  );
}
