import { MenuInput } from './containers/MenuInput';

export function Menu() {
  return (
    <>
      <div className="main">
        <div className="main_content">
          메뉴페이지 입니다.
          <MenuInput name="20240000" title="학번" inputType="input" />
          <MenuInput name="20241861" title="생년월일" inputType="select" />
          <MenuInput name="Gender" title="성별" inputType = "select" />
        </div>
      </div>
    </>
  );
}
