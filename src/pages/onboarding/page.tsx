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
import { motion } from 'framer-motion';
export function Onboarding() {
  const [password, setPassword] = useState('');
  const [insta, setInsta] = useState('');
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname === '/matey-frontend/onboarding/success') {
    return <OnboardingSuccess />;
  }

  const handleClick = async () => {
    if (insta !== '' && password !== '' && userName !== '') {
      try {
        // Save data to the backend
        const response = await fetch('https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            insta,
            password,
            userName,
          }),
        });

        console.log(response);

        if (response.ok) {
          // Navigate to the new page and pass insta as a query parameter
          navigate(`/matey-frontend/onboarding/success?insta=${insta}`);
          localStorage.setItem('userName', userName);
        } else {
          alert('Failed to save data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <>
      <div className="main">
        <div className="main_content">
          <Header Link={'/'} back_disable={'yes'} back_work={'yes'} />
          <Spacing className="mt-28"></Spacing>

          <InfoBox first_line={'가입을 위해 인스타 아이디가 필요해요'} second_line={''} />

          <Spacing className="mt-14"></Spacing>
          <motion.div
            initial={{ y: 20, opacity: 0 }} // 시작 상태
            animate={{ y: 0, opacity: 1 }} // 애니메이션 상태
            exit={{ y: 20, opacity: 0 }} // 종료 상태
            transition={{ duration: 1 }} // 애니메이션 지속 시간
            className="text-2xl font-bold"
          >
            <PositionCenter>
              <div className="w-[90%] animate-fade">
                <Input
                  className="text-start"
                  placeholder="이름"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />

                <InputUnderLine className="w-full" />
              </div>
            </PositionCenter>
            <PositionCenter>
              <div className="mt-1 w-[90%] animate-fade">
                <Input
                  className="text-start"
                  placeholder="인스타"
                  value={insta}
                  onChange={(e) => setInsta(e.target.value)}
                />

                <InputUnderLine className="w-full" />
              </div>
            </PositionCenter>
          </motion.div>
          <Spacing className="mt-2"></Spacing>

          {/* Motion을 이용한 애니메이션 처리 */}
          <Motion
            style={{
              opacity: spring(insta.trim() !== '' && userName.trim() !== '' ? 1 : 0),
              height: spring(insta.trim() !== '' && userName.trim() !== '' ? 200 : 0),
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
                    className="w-[90%] animate-fade text-start"
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
                          onClick={handleClick}
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
