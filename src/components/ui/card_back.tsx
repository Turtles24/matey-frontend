import * as React from 'react';

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

    return (
      <div className="h-[410px] w-[250px] rounded-[10px] bg-[#7EC8FF] font-extrabold tracking-wide">
        <div className="pt-[45px]">
          <div className="text-[18px] text-[#FFF613]">이름</div>
          <div className="text-[12px] text-white">
            {first_ko}
            {second_ko}
          </div>
        </div>
        <div>
          <div className="mt-[47px] text-[18px] text-[#FFF613]">전화번호</div>
          <div
            className="cursor-pointer text-[12px] font-medium text-white underline"
            onClick={() => handleCopy(phone_num)}
          >
            {phone_num}
          </div>
        </div>
        <div>
          <div className="mt-[47px] text-[18px] text-[#FFF613]">인스타</div>
          <div className="cursor-pointer text-[12px] text-white underline" onClick={() => handleInstaClick(insta)}>
            {insta}
          </div>
        </div>
        <div>
          <div className="mt-[47px] text-[18px] text-[#FFF613]">계좌번호</div>
          <div className="cursor-pointer text-[12px] text-white underline" onClick={() => handleCopy(bank_id)}>
            {bank_id}
          </div>
        </div>
      </div>
    );
  }
);
CardBack.displayName = 'CardBack';

export { CardBack };
