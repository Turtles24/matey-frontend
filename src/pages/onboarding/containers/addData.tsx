import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/button';
import { CheckBox } from './checkBox';
import { motion } from 'framer-motion';

export function AddData() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(localStorage.getItem('selectedElement') || ''); // localStorage의 값을 초기 값으로 설정

  const getInstaFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('insta'); // Get the value of the insta parameter
  };
  const insta = getInstaFromQuery(); // Extract insta from query parameters

  const handleSelect = (element: string) => {
    const newSelected = element; // 새로 선택한 값으로 무조건 업데이트
    setSelected(newSelected); // 새로운 선택 상태로 업데이트
    localStorage.setItem('selectedElement', newSelected); // 선택된 값을 localStorage에 저장
  };

  const handleJustStart = () => {
    navigate(`/matey-frontend/test?insta=${insta}`);
  };

  const handleAddData = () => {
    navigate(`/matey-frontend/test/input/data?insta=${insta}`);
  };

  return (
    <>
      <div className="main">
        <div className="main_content">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3 transform">
          <motion.div
            initial={{ y: 20, opacity: 0 }} // 시작 상태
            animate={{ y: 0, opacity: 1 }} // 애니메이션 상태
            exit={{ y: 20, opacity: 0 }} // 종료 상태
            transition={{ duration: 1 }} // 애니메이션 지속 시간
          >
            <div className="mt-1 text-base font-extrabold">잠깐, 원한다면</div>
            <div className="w-[300px] text-2xl font-extrabold">다른 정보도 공유도 가능해요 </div>
          </motion.div>
          <div className="flex justify-center">
            <div>
              <div className="mt-[40px] flex items-center justify-start">
              <motion.div
                initial={{ y: 20, opacity: 0 }} // 시작 상태
                animate={{ y: 0, opacity: 1 }} // 애니메이션 상태
                exit={{ y: 20, opacity: 0 }} // 종료 상태
                transition={{ duration: 1 }} // 애니메이션 지속 시간
              >
                <CheckBox
                  element={'전화번호'}
                  checked={selected === '전화번호'}
                  onChange={() => handleSelect('전화번호')}
                />
                </motion.div>
              </div>
            
              <div className="mt-[11px] flex items-center justify-start">
              <motion.div
            initial={{ y: 20, opacity: 0 }} // 시작 상태
            animate={{ y: 0, opacity: 1 }} // 애니메이션 상태
            exit={{ y: 20, opacity: 0 }} // 종료 상태
            transition={{ duration: 1 }} // 애니메이션 지속 시간
          >
                <CheckBox element={'MBTI'} checked={selected === 'mbti'} onChange={() => handleSelect('mbti')} />
                </motion.div>
              </div>
              <div className="mt-[11px] flex items-center justify-start">
              <motion.div
            initial={{ y: 20, opacity: 0 }} // 시작 상태
            animate={{ y: 0, opacity: 1 }} // 애니메이션 상태
            exit={{ y: 20, opacity: 0 }} // 종료 상태
            transition={{ duration: 1 }} // 애니메이션 지속 시간
          >
                <CheckBox
                  element={'계좌번호'}
                  checked={selected === '계좌번호'}
                  onChange={() => handleSelect('계좌번호')}
                />
                </motion.div>
              </div>
              <div className="mt-[11px] flex items-center justify-start">
              <motion.div
            initial={{ y: 20, opacity: 0 }} // 시작 상태
            animate={{ y: 0, opacity: 1 }} // 애니메이션 상태
            exit={{ y: 20, opacity: 0 }} // 종료 상태
            transition={{ duration: 1 }} // 애니메이션 지속 시간
          >
                <CheckBox element={'이메일'} checked={selected === '이메일'} onChange={() => handleSelect('이메일')} />
                  </motion.div>
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
    </div>
    </div>
    </>
  );
}
