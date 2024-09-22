import { useEffect, useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import Header from '../../../containers/header';
import { PositionCenter } from '../../../containers/positionCenter';
import { Spacing } from '../../../containers/spacing';
import { InfoBox } from '../containers/InfoBox';
import { InputUnderLine } from '../containers/InputUnderLine';
import { Motion, spring } from 'react-motion';
import { useNavigate } from 'react-router-dom';

interface UserData {
  insta: string;
  password: string;
}

export function InputData() {
  const [mbti, setMbti] = useState('');
  const [birth, setBirth] = useState('');
  const [phone_num, setPhoneNum] = useState('');
  const [bank_id, setBankId] = useState('');

  const navigate = useNavigate();
  const [, setUserData] = useState<UserData | null>(null);

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

  const handleClick = async () => {
    const insta = getInstaFromQuery(); // Extract insta from query parameters

    try {
      // Save data to the backend
      const response = await fetch('https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/register/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          insta,
          mbti: mbti || null,
          birth: birth || null,
          phone_num: phone_num || null,
          bank_id: bank_id || null,
        }),
      });

      if (response.ok) {
        // Navigate to the new page and pass insta as a query parameter
        navigate(`/matey-frontend/test?insta=${insta}`);
      } else {
        alert('Failed to save data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const Select = localStorage.getItem('selectedElement');
  const userName = localStorage.getItem('userName') || null; // useEffect 외부에서 userData?.first 값 가져오기

  return (
    <>
      <div className="main">
        <div className="main_content">
          <Header Link={'/'} back_disable={'yes'} back_work={'yes'} />
          <Spacing className="mt-28"></Spacing>

          <InfoBox first_line={userName + '님의 ' + Select + '를 입력해주세요'} second_line={''} />

          <Spacing className="mt-14"></Spacing>

          <PositionCenter>
            {Select === 'mbti' && (
              <PositionCenter>
                <Input
                  className="w-[90%] text-start"
                  placeholder="MBTI"
                  value={mbti}
                  onChange={(e) => setMbti(e.target.value)}
                />
              </PositionCenter>
            )}

            {Select === '전화번호' && (
              <PositionCenter>
                <Input
                  className="w-[90%] text-start"
                  placeholder="전화번호"
                  value={phone_num}
                  onChange={(e) => setPhoneNum(e.target.value)}
                />
              </PositionCenter>
            )}
            {Select === '계좌번호' && (
              <PositionCenter>
                <Input
                  className="w-[90%] text-start"
                  placeholder="계좌번호"
                  value={bank_id}
                  onChange={(e) => setBankId(e.target.value)}
                />
              </PositionCenter>
            )}
            {Select === '생일' && (
              <PositionCenter>
                <Input
                  className="w-[90%] text-start"
                  placeholder="생일 (2005년 1월 1일 -> 050101)"
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
                />
              </PositionCenter>
            )}
          </PositionCenter>

          <PositionCenter>
            <InputUnderLine />
          </PositionCenter>

          <Spacing className="mt-2"></Spacing>
          <Motion
            style={{
              opacity: spring(mbti.trim() !== '' || phone_num.trim() || bank_id.trim() || birth.trim() ? 1 : 0),
              height: spring(mbti.trim() !== '' || phone_num.trim() || bank_id.trim() || birth.trim() ? 200 : 0),
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
                  <Button onClick={handleClick} className="h-[50px] w-[90%] rounded-[12px] text-[16px] font-extrabold">
                    Matey 시작하기
                  </Button>
                </div>
              </div>
            )}
          </Motion>
        </div>
      </div>
    </>
  );
}
