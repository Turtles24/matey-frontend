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

  const handleClick = async () => {
    if (
      first !== '' &&
      second !== '' &&
      first_ko !== '' &&
      second_ko !== '' &&
      phone_num !== '' &&
      bank_id !== '' &&
      insta !== '' &&
      birth !== ''
    ) {
      try {
        // Save data to the backend
        const response = await fetch('https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/api/save', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            first,
            second,
            first_ko,
            second_ko,
            birth,
            phone_num,
            bank_id,
            insta,
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
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <>
      <div className="main">
        <div className="main_content">
          {/* Input fields for user details */}
          <div>
            <div>영어이름</div>
            <input placeholder="성" type="text" value={first} onChange={(e) => setFirst(e.target.value)} />
            <input placeholder="이름" type="text" value={second} onChange={(e) => setSecond(e.target.value)} />
          </div>

          <div>한국이름</div>
          <input placeholder="성" type="text" value={first_ko} onChange={(e) => setFirstKo(e.target.value)} />
          <input placeholder="이름" type="text" value={second_ko} onChange={(e) => setSecondKo(e.target.value)} />

          {/* More input fields */}
          <div>카드정보</div>
          <input placeholder="생일" type="text" value={birth} onChange={(e) => setBirth(e.target.value)} />
          <input placeholder="전화번호" type="text" value={phone_num} onChange={(e) => setPhoneNum(e.target.value)} />
          <input placeholder="계좌번호" type="text" value={bank_id} onChange={(e) => setBankId(e.target.value)} />
          <input placeholder="인스타" type="text" value={insta} onChange={(e) => setInsta(e.target.value)} />
        </div>
        <button onClick={handleClick}>Login</button>
      </div>
    </>
  );
}
