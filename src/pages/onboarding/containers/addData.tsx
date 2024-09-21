import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { CheckBox } from './checkBox';

export function AddData() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(localStorage.getItem('selectedElement') || ''); // localStorage의 값을 초기 값으로 설정

  const getInstaFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('insta'); // Get the value of the insta parameter
  };
  const insta = getInstaFromQuery(); // Extract insta from query parameters

  const handleSelect = (element: string) => {
    if (selected && selected !== element) {
      // alert를 띄우고 상태 업데이트를 하지 않음
      alert('하나의 정보만 선택할 수 있습니다.');
    } else {
      // 선택 또는 선택 취소 로직
      const newSelected = selected === element ? '' : element;
      setSelected(newSelected); // 새로운 선택 상태로 업데이트
      if (newSelected) {
        localStorage.setItem('selectedElement', newSelected); // 선택된 값을 localStorage에 저장
      } else {
        localStorage.removeItem('selectedElement'); // 선택 취소 시 localStorage에서 삭제
      }
    }
  };

  const handleJustStart = () => {
    navigate(`/matey-frontend/test?insta=${insta}`);
  };

  const handleAddData = () => {
    navigate(`/matey-frontend/test/input/data?insta=${insta}`);
  };

  return (
    <>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3 transform">
        <div className="mt-1 text-base font-extrabold">잠깐, 원한다면</div>
        <div className="w-[300px] text-2xl font-extrabold">다른 정보도 공유도 가능해요 </div>

        <div className="flex justify-center">
          <div>
            <div className="mt-[40px] flex items-center justify-start">
              <CheckBox
                element={'전화번호'}
                checked={selected === '전화번호'}
                onChange={() => handleSelect('전화번호')}
              />
            </div>
            <div className="mt-[11px] flex items-center justify-start">
              <CheckBox element={'mbti'} checked={selected === 'mbti'} onChange={() => handleSelect('mbti')} />
            </div>
            <div className="mt-[11px] flex items-center justify-start">
              <CheckBox
                element={'계좌번호'}
                checked={selected === '계좌번호'}
                onChange={() => handleSelect('계좌번호')}
              />
            </div>
            <div className="mt-[11px] flex items-center justify-start">
              <CheckBox element={'생일'} checked={selected === '생일'} onChange={() => handleSelect('생일')} />
            </div>
          </div>
        </div>
      </div>

      <div className="bottom_button flex justify-center">
        <Button
          onClick={handleAddData}
          className="h-[50px] w-[40%] rounded-[12px] text-[16px] font-extrabold"
          variant={'default'}
          size={'sm'}
        >
          정보 추가하기
        </Button>
        <Button
          onClick={handleJustStart}
          className="ml-2 h-[50px] w-[40%] rounded-[12px] bg-gray-500/50 text-[16px] font-extrabold"
          variant={'default'}
          size={'sm'}
        >
          그냥 시작하기
        </Button>
      </div>
    </>
  );
}
