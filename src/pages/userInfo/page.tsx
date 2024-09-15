import { MenuInput } from './containers/MenuInput';

export function Menu() {
  return (
    <>
      <div className="main">
        <div className="main_content">
          회원님의 정보를 입력해주세요 !
          <MenuInput name="강우현" title="이름" inputType="input" />
          <MenuInput name="birthday" title="생년월일" inputType="select" />
          <MenuInput name="gender" title="성별" inputType="gend" />
          <MenuInput name="터틀대학교" title="학교" inputType="input" />
          <MenuInput name="감귤포장학과" title="학과" inputType="input" />
          <MenuInput name="20241814" title="학번" inputType="input" />
          <MenuInput name="ENTP" title="MBTI" inputType="input" />
          <MenuInput name="010-1234-5678" title="전화번호" inputType="input" />
          <MenuInput name="@or_nxt11" title="인스탁 ID" inputType="input" />
          <MenuInput name="E-mail" title="이메일" inputType="input" />
        </div>
      </div>
    </>
  );
}
