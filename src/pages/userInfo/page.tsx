import { MenuInput } from './containers/MenuInput';

export function Menu() {
  return (
    <>
      <div className="main">
        <div className="main_content">
          메뉴페이지 입니다.
          <MenuInput name="20241861" title="학번" inputType="input" />
          <MenuInput name="20241861" title="생년월일" inputType="input" />
        </div>
      </div>
    </>
  );
}
