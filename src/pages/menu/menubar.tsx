import React from 'react';
import { Button } from '../../components/ui/button';
import { useNavigate } from 'react-router-dom';

export function MenuList() {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`/userInfo`);
  };

  return (
    <>
      <circle className="z-1 absolute right-[30vh] top-[60%] h-[397px] w-[397px] rounded-full bg-[radial-gradient(circle_at_top_left,_#FEE2E2,_#FFF)] blur-sm"></circle>
      <circle className="z-1 absolute left-[30vh] top-[5%] h-[397px] w-[397px] rounded-full bg-[radial-gradient(circle_at_bottom_right,_#FEE2E2,_#FFF)] blur-sm"></circle>

      <div className="z-100 relative flex h-screen items-center justify-center">
        <div className="flex items-center">
          <div className="text-[50px] font-bold">
            <div className="menu-icon mt-10 flex items-center">
              <Button
                className="menu-icon ml-1 h-[50px] w-[80%] rounded-[20px] bg-transparent font-medium text-black hover:bg-orange-500 hover:font-bold hover:text-white"
                onClick={onClickImg}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="hover:text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.8001 19.5514H19.8001M4.2002 19.5514L8.56618 18.6717C8.79796 18.625 9.01077 18.5109 9.17791 18.3437L18.9516 8.56461C19.4202 8.09576 19.4199 7.33577 18.9509 6.86731L16.8805 4.79923C16.4117 4.33097 15.6521 4.33129 15.1837 4.79995L5.40896 14.58C5.24214 14.7469 5.12824 14.9593 5.0815 15.1906L4.2002 19.5514Z"
                    stroke-width="2"
                  />
                </svg>
                <div className="ml-2"></div>
                개인정보 수정하기
              </Button>
            </div>
            <div className="menu-icon mt-6 flex items-center">
              <Button className="menu-icon ml-1 h-[50px] w-[80%] rounded-[20px] bg-transparent font-medium text-black hover:bg-orange-500 hover:font-bold hover:text-white">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 19 20"
                  fill="none"
                  className="hover:text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.5 13.25V1.75M9.5 1.75L5 5.75M9.5 1.75L14 5.75"
                    stroke-width="2"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 13.25V16.25C1 17.3546 1.89543 18.25 3 18.25H16C17.1046 18.25 18 17.3546 18 16.25V13.25"
                    stroke-width="2"
                  />
                </svg>
                <div className="ml-2"></div>
                공유한 기록보기
              </Button>
            </div>
            <div className="menu-icon mt-6 flex items-center">
              <Button className="menu-icon ml-1 h-[50px] w-[80%] rounded-[20px] bg-transparent font-medium text-black hover:bg-orange-500 hover:font-bold hover:text-white">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 19 20"
                  fill="none"
                  className="hover:text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.5 1.75L9.5 13.25M9.5 13.25L14 9.25M9.5 13.25L5 9.25"
                    stroke-width="2"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1 13.25V16.25C1 17.3546 1.89543 18.25 3 18.25H16C17.1046 18.25 18 17.3546 18 16.25V13.25"
                    stroke-width="2"
                  />
                </svg>
                <div className="ml-2"></div>
                공유받은 기록보기
              </Button>
            </div>
            <div className="menu-icon mt-6 flex items-center">
              <Button
                className="menu-icon ml-1 h-[50px] w-[80%] rounded-[20px] bg-transparent font-medium text-black hover:bg-orange-500 hover:font-bold hover:text-white"
                onClick={() => {
                  window.location.href = 'https://www.instagram.com/turtles__official/';
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="hover:text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.3998 3.60041L9.9998 6.00041H13.9998L15.5998 3.60041M4.7998 4.80039V19.2004C4.7998 20.5259 5.87432 21.6004 7.1998 21.6004H16.7998C18.1253 21.6004 19.1998 20.5259 19.1998 19.2004V4.8004C19.1998 3.47492 18.1253 2.40041 16.7998 2.4004L7.19981 2.40039C5.87432 2.40039 4.7998 3.47491 4.7998 4.80039Z"
                    stroke-width="2"
                  />
                </svg>
                <div className="ml-2"></div>
                SNS 홍보 이벤트
              </Button>
            </div>
            <div className="menu-icon mt-6 flex items-center">
              <Button className="menu-icon ml-1 h-[50px] w-[80%] rounded-[20px] bg-transparent font-medium text-black hover:bg-orange-500 hover:font-bold hover:text-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="hover:text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M13.6763 4.31627C13.2488 2.56124 10.7512 2.56124 10.3237 4.31627C10.2599 4.57999 10.1347 4.82492 9.95831 5.03112C9.78194 5.23732 9.55938 5.39897 9.30874 5.50291C9.0581 5.60684 8.78646 5.65014 8.51592 5.62927C8.24538 5.60839 7.9836 5.52394 7.75187 5.38279C6.20832 4.44227 4.44201 6.20855 5.38254 7.75207C5.99006 8.74884 5.45117 10.0494 4.31713 10.325C2.56096 10.7514 2.56096 13.25 4.31713 13.6753C4.58093 13.7392 4.8259 13.8645 5.03211 14.041C5.23831 14.2175 5.39991 14.4402 5.50375 14.691C5.6076 14.9418 5.65074 15.2135 5.62968 15.4841C5.60862 15.7547 5.52394 16.0165 5.38254 16.2482C4.44201 17.7917 6.20832 19.558 7.75187 18.6175C7.98356 18.4761 8.24536 18.3914 8.51597 18.3704C8.78658 18.3493 9.05834 18.3924 9.30912 18.4963C9.5599 18.6001 9.7826 18.7617 9.95911 18.9679C10.1356 19.1741 10.2609 19.4191 10.3248 19.6829C10.7512 21.439 13.2499 21.439 13.6752 19.6829C13.7393 19.4192 13.8647 19.1744 14.0413 18.9684C14.2178 18.7623 14.4405 18.6008 14.6912 18.497C14.9419 18.3932 15.2135 18.35 15.4841 18.3709C15.7546 18.3919 16.0164 18.4764 16.2481 18.6175C17.7917 19.558 19.558 17.7917 18.6175 16.2482C18.4763 16.0165 18.3918 15.7547 18.3709 15.4842C18.35 15.2136 18.3932 14.942 18.497 14.6913C18.6008 14.4406 18.7623 14.2179 18.9683 14.0414C19.1744 13.8648 19.4192 13.7394 19.6829 13.6753C21.439 13.2489 21.439 10.7502 19.6829 10.325C19.4191 10.2611 19.1741 10.1358 18.9679 9.95928C18.7617 9.78278 18.6001 9.56007 18.4962 9.3093C18.3924 9.05853 18.3493 8.78677 18.3703 8.51617C18.3914 8.24556 18.4761 7.98376 18.6175 7.75207C19.558 6.20855 17.7917 4.44227 16.2481 5.38279C16.0164 5.52418 15.7546 5.60886 15.484 5.62992C15.2134 5.65098 14.9417 5.60784 14.6909 5.504C14.4401 5.40016 14.2174 5.23856 14.0409 5.03236C13.8644 4.82616 13.7391 4.58119 13.6752 4.3174L13.6763 4.31627Z"
                    stroke-width="2"
                  />
                  <path
                    d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                    stroke-width="2"
                  />
                </svg>
                <div className="ml-2 border-b-8"></div>
                설정
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
