import * as React from 'react';
import default_profile from '../../assets/defaulte_profile.png';
import { Duplicate, Share } from '../Icon/onboarding/CardIcon';

export interface CardBackProps extends React.InputHTMLAttributes<HTMLInputElement> {
  userName: string | null;
  bank_id: string | null;
  phone_num: string | null;
  insta: string | null;
}

interface UserDataAdded {
  bank_id?: string;
  birth?: string;
  mbti?: string;
  phone_num?: string;
}

interface UserData {
  insta?: string;
}

const CardBack = React.forwardRef<HTMLInputElement, CardBackProps>(({ userName }) => {
  const [userDataAdded, setUserDataAdded] = React.useState<UserDataAdded | null>(null);
  const [userData, setUserData] = React.useState<UserData | null>(null);

  const getInstaFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('insta'); // Get the value of the insta parameter
  };

  const handleInstaClick = (username: string | null) => {
    const url = `https://www.instagram.com/${username}`;
    window.open(url, '_blank');
  };

  const handlePayClick = async (text: string | null) => {
    if (text) {
      navigator.clipboard.writeText(text).then(
        () => {
          alert('복사되었습니다!');
        },
        () => {
          alert('복사에 실패했습니다.');
        }
      );
    } else {
      alert('복사할 내용이 없습니다.');
    }
    try {
      const response = await fetch('https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/api/pay/click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('Pay Click registered:', data);
    } catch (error) {
      console.error('Error registering click:', error);
    }
  };

  const handleMbtiClick = async (text: string | null) => {
    if (text) {
      navigator.clipboard.writeText(text).then(
        () => {
          alert('복사되었습니다!');
        },
        () => {
          alert('복사에 실패했습니다.');
        }
      );
    } else {
      alert('복사할 내용이 없습니다.');
    }
    try {
      const response = await fetch('https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/api/pay/click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('Pay Click registered:', data);
    } catch (error) {
      console.error('Error registering click:', error);
    }
  };

  const handlePhoneNumClick = async (text: string | null) => {
    if (text) {
      navigator.clipboard.writeText(text).then(
        () => {
          alert('복사되었습니다!');
        },
        () => {
          alert('복사에 실패했습니다.');
        }
      );
    } else {
      alert('복사할 내용이 없습니다.');
    }
    try {
      const response = await fetch('https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/api/pay/click', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      console.log('Pay Click registered:', data);
    } catch (error) {
      console.error('Error registering click:', error);
    }
  };

  React.useEffect(() => {
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

        // 응답 본문이 있는지 확인
        const text = await response.text();
        if (!text) {
          console.error('Empty response');
          return;
        }

        // JSON 파싱 시도
        const data = JSON.parse(text);
        setUserDataAdded(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [location]);

  React.useEffect(() => {
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

  const insta = userData?.insta;

  const birth = userDataAdded?.birth;
  const mbti = userDataAdded?.mbti;
  const phone_num = userDataAdded?.phone_num;
  const bank_id = userDataAdded?.bank_id;

  return (
    <div className="h-[410px] w-[250px] rounded-[10px] bg-[#7EC8FF] font-extrabold tracking-wide">
      <div className="pl-[22px] pt-[22px]">
        <div>
          <div className="text-start text-[32px] text-white">{userName}</div>
        </div>
        <div>
          <div className="cursor-pointer text-start text-[18px] font-medium text-white"></div>
        </div>
      </div>

      <div className="border-1 ml-[50px] mt-8">
        <img className="w-[150px] rounded-full" src={default_profile} />
      </div>

      <div className="mt-[92px] pb-[24px] pr-3">
        {insta !== undefined && insta !== 'null' && (
          <div className="flex items-center justify-end">
            <div
              className="mr-1 cursor-pointer text-end text-[18px] text-white"
              onClick={() => handleInstaClick(insta)}
            >
              @{insta}
            </div>
            <div>
              <Share />
            </div>
          </div>
        )}

        <div className="flex items-center justify-end">
          {birth !== undefined && birth !== 'null' && (
            <div className="mr-[3px]">
              <div className="cursor-pointer text-end text-[18px] text-white" onClick={() => handleInstaClick(birth)}>
                {birth}
              </div>
            </div>
          )}

          {mbti !== undefined && mbti !== 'null' && (
            <div className="mr-[3px]">
              <div className="cursor-pointer text-end text-[18px] text-white" onClick={() => handleMbtiClick(mbti)}>
                {mbti}
              </div>
            </div>
          )}

          {phone_num !== undefined && phone_num !== 'null' && (
            <div className="mr-[3px]">
              <div
                className="cursor-pointer text-end text-[18px] text-white"
                onClick={() => handlePhoneNumClick(phone_num)}
              >
                {phone_num}
              </div>
            </div>
          )}

          {bank_id !== undefined && bank_id !== 'null' && (
            <div className="mr-[3px]">
              <div className="cursor-pointer text-end text-[18px] text-white" onClick={() => handlePayClick(bank_id)}>
                {bank_id}
              </div>
            </div>
          )}
          <div>
            <Duplicate />
          </div>
        </div>
      </div>
    </div>
  );
});
CardBack.displayName = 'CardBack';

export { CardBack };
