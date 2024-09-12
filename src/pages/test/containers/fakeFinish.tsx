import { FakeFinishIcon } from '../../../components/Icon/onboarding/FakeFinish';

export function FakeFinish() {
  return (
    <>
      <div className="main">
        <div className="main_content">
          <div className="fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-[70%] transform">
            <FakeFinishIcon />
          </div>
        </div>
      </div>
    </>
  );
}
