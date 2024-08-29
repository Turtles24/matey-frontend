import { Input } from '../../components/ui/input';

export function MainPage() {
  return (
    <>
      <div className="main">
        <div className="main_content">
          <div className="flex h-screen items-center justify-center">
            <div className="z-100 absolute">
              <Input placeholder="입력해주세요" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
