import { FakeSuccessIcon } from '../../../components/Icon/onboarding/FakeSuccess';
import { AlarmBtn } from '../../../components/Icon/onboarding/AlarmBtn';
import { useNavigate } from 'react-router-dom';
export function FakeSuccess() {
  const navigate = useNavigate();

  const handleAlarmClick = async () => {
    navigate('/matey-frontend/test/finish');

    try {
      const response = await fetch(
        'https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/api/reserv/click',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();
      console.log('Alarm Click registered:', data);
    } catch (error) {
      console.error('Error registering click:', error);
    }
  };
  return (
    <>
      <div className="main">
        <div className="main_content">
          <div className="fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-[70%] transform">
            <FakeSuccessIcon />
          </div>
          <div className="fixed bottom-[20px] left-1/2 z-10 -translate-x-1/2 translate-y-1 transform">
            <div className="text-[14px] text-black">아쉽지만 아직 정식 출시 전이에요 😥</div>
            <button onClick={handleAlarmClick} className="mt-[11px]">
              <AlarmBtn />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
