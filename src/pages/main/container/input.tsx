import { InstaIcon } from '../../../components/Icon/InstaIcon';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Input() {
  return (
    <>
      <div>
        <div className="flex items-center justify-center align-middle">
          <InstaIcon />
        </div>
        <div className="mt-5">
          <p>
            <text className="text-xl font-bold">인스타그램에서 친구를 찾아볼게요</text>
          </p>
          <text className="text-sm font-bold">사용중인 인스타그램 아이디를 알려주세요</text>
        </div>
      </div>
      <div>
        <div className="mt-10">
          <input
            className="border-b-2 px-10 text-center font-medium focus:outline-none"
            type="text"
            placeholder="@인스타아이디"
          ></input>
        </div>
        <div className="mt-3">
          <input
            className="border-b-2 px-10 text-center font-medium focus:outline-none"
            type="password"
            placeholder="비밀번호"
          ></input>
        </div>
      </div>
      <div className="mt-40">
        <button className="rounded-md border-none bg-orange-400 px-14 py-1 font-semibold hover:bg-orange-300">
          MATEY 시작하기!
        </button>
      </div>
    </>
  );
}
