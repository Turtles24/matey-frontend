import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { PositionCenter } from '../../../containers/positionCenter';
import { LogoSwap } from './LogoSwap';
import { useState, useEffect } from 'react';
import { Motion, spring } from 'react-motion'; // react-motion import 추가

export function Start() {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false); // 버튼 표시 여부를 관리하는 상태

  const handleStart = () => {
    navigate('/matey-frontend/onboarding');
  };

  useEffect(() => {
    // 페이지가 로드된 후 15초 뒤에 버튼이 나타나도록 설정
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 12000);

    // 컴포넌트가 언마운트될 때 타이머를 정리
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="main relative h-screen w-full bg-[#FF3D00]">
        <div className="main_content min-h-screen bg-[#FF3D00]">
          <div className="min-w-screen relative min-h-screen">
            <PositionCenter className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3 transform">
              <LogoSwap />
            </PositionCenter>
          </div>

          {showButton && (
            <Motion
              defaultStyle={{ opacity: 0, transform: 100 }} // 초기값 설정
              style={{
                opacity: spring(1), // opacity가 1로 애니메이션
                transform: spring(0), // transform 값이 0으로 애니메이션
              }}
            >
              {(style) => (
                <div
                  className="bottom_button_start"
                  style={{
                    opacity: style.opacity,
                    transform: `translateY(${style.transform}px)`,
                  }}
                >
                  <Button
                    onClick={handleStart}
                    className="h-[50px] w-[90%] rounded-[12px] text-[16px] font-extrabold"
                    variant={'secondary'}
                  >
                    Matey 시작하기
                  </Button>
                </div>
              )}
            </Motion>
          )}
        </div>
      </div>
    </>
  );
}
