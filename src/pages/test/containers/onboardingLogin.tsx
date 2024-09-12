import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OnboardingLogin() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [first_ko, setFirstKo] = useState('');
  const [second_ko, setSecondKo] = useState('');

  const [birth, setBirth] = useState('');
  const [phone_num, setPhoneNum] = useState('');
  const [insta, setInsta] = useState('');
  const [bank_id, setBankId] = useState('');

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem('first', first);
    localStorage.setItem('second', second);

    localStorage.setItem('first_ko', first_ko);
    localStorage.setItem('second_ko', second_ko);

    localStorage.setItem('birth', birth);
    localStorage.setItem('phone_num', phone_num);
    localStorage.setItem('bank_id', bank_id);
    localStorage.setItem('insta', insta);

    if (
      first != '' &&
      second != '' &&
      first_ko != '' &&
      second_ko != '' &&
      phone_num != '' &&
      bank_id != '' &&
      insta != '' &&
      birth != ''
    ) {
      navigate('/test');
    } else {
      alert('값을 모두 입력해주세요');
    }
  };

  return (
    <>
      <div className="main">
        <div className="main_content">
          <div>
            <div>영어이름</div>
            <div>
              {' '}
              <input
                placeholder="성"
                type="text"
                value={first}
                onChange={(e) => setFirst(e.target.value)} // onChange 핸들러 추가
              />
              <input
                placeholder="이름"
                type="text"
                value={second}
                onChange={(e) => setSecond(e.target.value)} // onChange 핸들러 추가
              />
            </div>
          </div>

          <div>
            <div>한국이름</div>
            <div>
              {' '}
              <input
                placeholder="성"
                type="text"
                value={first_ko}
                onChange={(e) => setFirstKo(e.target.value)} // onChange 핸들러 추가
              />
              <input
                placeholder="이름"
                type="text"
                value={second_ko}
                onChange={(e) => setSecondKo(e.target.value)} // onChange 핸들러 추가
              />
            </div>
          </div>

          <div>
            <div>카드정보</div>
            <div>
              {' '}
              <input
                placeholder="생일"
                type="text"
                value={birth}
                onChange={(e) => setBirth(e.target.value)} // onChange 핸들러 추가
              />
              <input
                placeholder="전화번호"
                type="text"
                value={phone_num}
                onChange={(e) => setPhoneNum(e.target.value)} // onChange 핸들러 추가
              />
              <input
                placeholder="계좌번호"
                type="text"
                value={bank_id}
                onChange={(e) => setBankId(e.target.value)} // onChange 핸들러 추가
              />
              <input
                placeholder="인스타"
                type="text"
                value={insta}
                onChange={(e) => setInsta(e.target.value)} // onChange 핸들러 추가
              />
            </div>
          </div>
        </div>
        <button onClick={handleClick}>Login</button>
      </div>
    </>
  );
}
