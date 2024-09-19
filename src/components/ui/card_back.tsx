import * as React from 'react';
import { TestProfileBig } from '../Icon/onboarding/TestProfile';

export interface CardBackProps extends React.InputHTMLAttributes<HTMLInputElement> {
  first_ko: string | null;
  second_ko: string | null;
  bank_id: string | null;
  phone_num: string | null;
  insta: string | null;
}

const CardBack = React.forwardRef<HTMLInputElement, CardBackProps>(
  ({ first_ko, second_ko, bank_id, phone_num, insta }) => {
    const handleCopy = (text: string | null) => {
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

    return (
      <div className="h-[410px] w-[250px] rounded-[10px] bg-[#7EC8FF] font-extrabold tracking-wide">
        <div className="pl-[22px] pt-[30px]">
          <div>
            <div className="text-start text-[32px] text-white">
              {first_ko}
              {second_ko}
            </div>
          </div>
          <div>
            <div
              className="cursor-pointer text-start text-[18px] font-medium text-white"
              onClick={() => handleCopy(phone_num)}
            >
              {phone_num}
            </div>
          </div>
        </div>

        <div className="border-1 ml-[50px] mt-8">
          <TestProfileBig />
        </div>

        <div className="mt-14 pb-[24px] pr-3">
          <div>
            <div className="cursor-pointer text-end text-[18px] text-white" onClick={() => handleInstaClick(insta)}>
              {insta}
            </div>
          </div>
          <div>
            <div className="cursor-pointer text-end text-[18px] text-white" onClick={() => handlePayClick(bank_id)}>
              {bank_id}
            </div>
          </div>
        </div>
      </div>
    );
  }
);
CardBack.displayName = 'CardBack';

export { CardBack };
