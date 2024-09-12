import { useState, useEffect } from 'react';
import { TestBtn } from '../../components/Icon/onboarding/TestBtn';
import { TestProfile } from '../../components/Icon/onboarding/TestProfile';
import { Motion, spring } from 'react-motion';
import { Card } from '../../components/ui/card';
import { CardBack } from '../../components/ui/card_back';

interface UserData {
  first: string;
  second: string;
  first_ko: string;
  second_ko: string;
  birth: string;
  phone_num: string;
  bank_id: string;
  insta: string;
}

export function Test() {
  const [clicked, setClicked] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [fadeIn, setFadeIn] = useState(false); // fadeIn 상태 추가
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleCard = () => {
    setAnimate(true);
  };

  // 클릭 시 animate 상태에 따라 clicked와 fadeIn 상태를 설정
  useEffect(() => {
    if (animate) {
      const timeout = setTimeout(() => {
        setClicked(true);
        setFadeIn(true); // 클릭 후 100ms 뒤에 fadeIn을 true로 설정
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [animate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/api/user-data');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(userData);

  const first = userData?.first; // useEffect 외부에서 userData?.first 값 가져오기
  const second = userData?.second;

  const first_ko = userData?.first_ko;
  const second_ko = userData?.second_ko;
  const phone_num = userData?.phone_num;
  const insta = userData?.insta;
  const bank_id = userData?.bank_id;
  const birth = userData?.birth;

  return (
    <>
      {clicked && (
        <div
          className={`z-1 fixed min-h-full w-full bg-black bg-opacity-70 transition-opacity duration-500 ease-in-out ${
            fadeIn ? 'fade-in' : ''
          }`}
        ></div>
      )}

      <div className="main">
        <div className="main_content">
          {!clicked && (
            <div className="ml-6 flex items-center pt-10">
              <div className="">
                <TestProfile />
              </div>
              <div className="ml-2 text-2xl font-bold">
                {first_ko}
                {second_ko}
              </div>
            </div>
          )}

          {!clicked && (
            <div className="fixed left-1/2 top-[45%] z-10 -translate-x-1/2 -translate-y-1/2 transform">
              <Motion
                defaultStyle={{ rotate: 0, opacity: 1 }}
                style={{
                  rotate: spring(animate ? 90 : 0),
                  opacity: spring(animate ? 1 : 1),
                }}
              >
                {(style) => (
                  <div
                    style={{
                      transform: `rotate(${style.rotate}deg)`,
                      opacity: style.opacity,
                    }}
                    onClick={handleCard}
                  >
                    <Card
                      birth={birth || null}
                      first_name={first || null}
                      second_name={second || null}
                      job="SonongsilUniv"
                    />
                  </div>
                )}
              </Motion>
            </div>
          )}

          {clicked && (
            <>
              <div className={`fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform`}></div>
              <div className={`fixed left-1/2 top-[45%] z-10 -translate-x-1/2 -translate-y-1/2 transform`}>
                <Motion
                  defaultStyle={{ scale: 1, opacity: 1 }}
                  style={{
                    scale: spring(1),
                    opacity: spring(1),
                  }}
                >
                  {(style) => (
                    <div
                      style={{
                        transform: `scale(${style.scale})`,
                        opacity: style.opacity,
                      }}
                    >
                      <CardBack
                        bank_id={bank_id || null}
                        phone_num={phone_num || null}
                        insta={insta || null}
                        first_ko={first_ko || null}
                        second_ko={second_ko || null}
                      />
                    </div>
                  )}
                </Motion>
              </div>
            </>
          )}
          <div className="fixed bottom-[20px] left-1/2 z-10 -translate-x-1/2 translate-y-1 transform">
            {!clicked && <div className="text-[14px] text-black">카드를 클릭해보세요 ☝️</div>}
            {clicked && <div className="text-[14px] text-white">계좌번호를 클릭하면 복사되어요 💸</div>}
            <button className="mt-[11px]">
              <TestBtn />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
