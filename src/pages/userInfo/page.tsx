import { MenuInput } from './containers/MenuInput';
import React, { useState } from 'react';


export function Menu() {
  const [isEditingInfo, setIsEditingInfo] = useState(true);

  return (
    <>
    {/* 버튼들 */}
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
        <button
          onClick={() => setIsEditingInfo(true)}
          className={`mr-3 font-bold px-4 py-2 rounded-full cursor-pointer ${
            isEditingInfo ? 'border-2 border-l-0 border-r-0 border-t-0 border-b-orange-400 border-b-4' : 'bg-transparent'
          }`}
        >
          회원정보 수정
        </button>
        <button
          onClick={() => setIsEditingInfo(false)}
          className={` ml-3 font-bold px-4 py-2 rounded-full cursor-pointer ${
            !isEditingInfo ? 'border-2 border-l-0 border-r-0 border-t-0 border-b-orange-400 border-b-4' : 'bg-transparent'
          }`}
        >
          내 명함 관리하기
        </button>
      </div>
      {isEditingInfo ?   (
        <div className="main">
          <div className="main_content">
            회원님의 정보를 입력해주세요 !
            <MenuInput name="강우현" title="이름" inputType="input" />
            <MenuInput name="birthday" title="생년월일" inputType="select" />
            <MenuInput name="gender" title="성별" inputType="gend" />
            <MenuInput name="터틀대학교" title="학교" inputType="input" />
            <MenuInput name="감귤포장학과" title="학과" inputType="input" />
            <MenuInput name="20241814" title="학번" inputType="input" />
            <MenuInput name="ENTP" title="MBTI" inputType="input" />
            <MenuInput name="010-1234-5678" title="전화번호" inputType="input" />
            <MenuInput name="@or_nxt11" title="인스탁 ID" inputType="input" />
            <MenuInput name="E-mail" title="이메일" inputType="input" />
          </div>
        </div>
      ) : (
        <div className=''>

        </div>
      )}
    </>
  );
};
