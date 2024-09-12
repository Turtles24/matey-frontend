import { FakeSuccessIcon } from '../../../components/Icon/onboarding/FakeSuccess';
import { AlarmBtn } from '../../../components/Icon/onboarding/AlarmBtn';
import { useNavigate } from 'react-router-dom';
export function FakeSuccess() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/matey-frontend/test/finish');
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
            <button onClick={handleSuccess} className="mt-[11px]">
              <AlarmBtn />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
