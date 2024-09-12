import { useNavigate } from 'react-router-dom';
import { Logo } from '../../../components/Icon/onboarding/Logo';
import { Button } from '../../../components/ui/button';
import { PositionCenter } from '../../../containers/positionCenter';

export function Start() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/matey-frontend/onboarding');
  };

  return (
    <>
      <div className="main relative h-screen w-full bg-[#FF3D00]">
        <div className="main_content min-h-screen bg-[#FF3D00]">
          <div className="min-w-screen relative min-h-screen">
            <PositionCenter className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3 transform">
              <Logo />
            </PositionCenter>
          </div>

          <div className="bottom_button_start">
            <Button
              onClick={handleStart}
              className="h-[50px] w-[90%] rounded-[12px] text-[16px] font-extrabold"
              variant={'secondary'}
            >
              Matey 시작하기
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
