import { useState, useEffect } from 'react';
import { TestBtn } from '../../components/Icon/onboarding/TestBtn';
import { Motion, spring } from 'react-motion';
import { Card } from '../../components/ui/card';
import { CardBack } from '../../components/ui/card_back';
import { useLocation, useNavigate } from 'react-router-dom';
import default_profile from '../../assets/defaulte_profile.png';

interface UserData {
  insta: string;
  userName: string;
  password: string;
}

interface UserData {
  mbti: string;
  birth: string;
  phone_num: string;
  bank_id: string;
}

export function Test() {
  const [clicked, setClicked] = useState(false);
  const [clickedText, setClickedText] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [fadeIn, setFadeIn] = useState(false); // fadeIn 상태 추가
  const [userData, setUserData] = useState<UserData | null>(null);
  const [, setProfile] = useState<UserData | null>(null);
  const [userDataAdded, setUserDataAdded] = useState<UserData | null>(null);
  const location = useLocation(); // Get the current URL location
  const navigate = useNavigate();

  const handleCard = async () => {
    setAnimate(true);
    setClickedText(true);
    try {
      const response = await fetch('https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/api/card/click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('Card Click registered:', data);
    } catch (error) {
      console.error('Error registering click:', error);
    }
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

  // Function to extract query parameters from the URL
  const getInstaFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('insta'); // Get the value of the insta parameter
  };

  useEffect(() => {
    const fetchData = async () => {
      const insta = getInstaFromQuery(); // Extract insta from query parameters
      if (!insta) {
        console.error('Insta parameter is missing');
        return;
      }

      try {
        const response = await fetch(
          `https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/api/user-data/${insta}`
        );
        if (!response.ok) {
          console.error('Error fetching user data:', response.status);
          return;
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      const insta = getInstaFromQuery(); // Extract insta from query parameters
      if (!insta) {
        console.error('Insta parameter is missing');
        return;
      }

      try {
        const response = await fetch(
          `https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/api/user-data-added/${insta}`
        );
        if (!response.ok) {
          console.error('Error fetching user data:', response.status);
          return;
        }
        const data = await response.json();
        setUserDataAdded(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [location]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const insta = 'or_nxt11'; // Extract insta from query parameters

        const response = await fetch(
          `https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/profile/img/${insta}`
        );
        if (!response.ok) {
          console.error('Error fetching user data:', response.status);
          return;
        }

        console.log(response);

        const data = await response.json();
        setProfile(data); // 이미지 URL로 프로필을 설정
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [location]);

  const handleClick = async () => {
    try {
      const response = await fetch('https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/api/click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      navigate('/matey-frontend/test/success');
      console.log('Click registered:', data);
    } catch (error) {
      console.error('Error registering click:', error);
    }
  };

  console.log(userData);

  const first = userData?.userName; // useEffect 외부에서 userData?.first 값 가져오기
  const second = userData?.userName;

  const userName = userData?.userName;

  const phone_num = userDataAdded?.phone_num;
  const insta = userDataAdded?.insta;
  const bank_id = userDataAdded?.bank_id;
  const birth = userDataAdded?.birth;

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
                <div>
                  <img className="w-[60px]" src={default_profile} />
                </div>
              </div>
              <div className="ml-2 text-2xl font-bold">{userName}</div>
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
                      job="Powered by Turtles"
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
                        userName={userName || null}
                      />
                    </div>
                  )}
                </Motion>
              </div>
            </>
          )}
          <div className="fixed bottom-[200px] left-1/2 z-10 -translate-x-1/2 translate-y-1 transform">
            {!clickedText && <div className="w-72 text-[24px] font-bold text-black">카드를 클릭해보세요! 🤗</div>}
          </div>
          {clicked && (
            <div className="fixed bottom-[20px] left-1/2 z-10 mt-[11px] -translate-x-1/2 translate-y-1 transform">
              <div className="text-[14px] text-white">인스타 계정을 클릭하면 인스타로 이동되어요 💸</div>
              <button className="mt-[11px]" onClick={handleClick}>
                <TestBtn />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
