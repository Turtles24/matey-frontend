import { useState, useEffect } from 'react';
import { TestBtn } from '../../components/Icon/onboarding/TestBtn';
import { TestProfile } from '../../components/Icon/onboarding/TestProfile';
import { Motion, spring } from 'react-motion';
import { Card } from '../../components/ui/card';
import { CardBack } from '../../components/ui/card_back';

export function Test() {
  const [clicked, setClicked] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [fadeIn, setFadeIn] = useState(false); // fadeIn 상태 추가
  const [userData, setUserData] = useState(null);

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
        const response = await fetch('http://localhost:5001/api/user-data');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(userData);

  const first = localStorage.getItem('first');
  const second = localStorage.getItem('second');

  const first_ko = localStorage.getItem('first_ko');
  const second_ko = localStorage.getItem('second_ko');
  const phone_num = localStorage.getItem('phone_num');
  const insta = localStorage.getItem('insta');
  const bank_id = localStorage.getItem('bank_id');
  const birth = localStorage.getItem('birth');

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
          <div className="ml-6 flex items-center pt-10">
            <div className="">
              <TestProfile />
            </div>
            <div className="ml-2 text-2xl font-bold">
              {first_ko}
              {second_ko}
            </div>
          </div>

          {!clicked && (
            <div className="fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform">
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
                    <Card birth={birth} first_name={first} second_name={second} job="SonongsilUniv" />
                  </div>
                )}
              </Motion>
            </div>
          )}

          {clicked && (
            <>
              <div className={`fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform`}></div>
              <div className={`fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform`}>
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
                        bank_id={bank_id}
                        phone_num={phone_num}
                        insta={insta}
                        first_ko={first_ko}
                        second_ko={second_ko}
                      />
                    </div>
                  )}
                </Motion>
              </div>
            </>
          )}
          <button className="fixed bottom-[20px] left-1/2 z-10 -translate-x-1/2 translate-y-1 transform">
            <TestBtn />
          </button>
        </div>
      </div>
    </>
  );
}
