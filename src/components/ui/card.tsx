import * as React from 'react';

// 한글 자음과 모음을 로마자로 변환하는 기본 맵
const initialRomanizationMap: { [key: string]: string } = {
  가: 'Ga',
  강: 'Kang',
  나: 'Na',
  다: 'Da',
  라: 'Ra',
  마: 'Ma',
  바: 'Ba',
  사: 'Sa',
  아: 'A',
  자: 'Ja',
  차: 'Cha',
  카: 'Ka',
  타: 'Ta',
  파: 'Pa',
  하: 'Ha',
  우: 'Woo',
  현: 'Hyun',
  이: 'Lee',
  거: 'Geo',
  경: 'Gyeong',
  고: 'Go',
  공: 'Gong',
  구: 'Gu',
  기: 'Gi',
  너: 'Neo',
  노: 'No',
  누: 'Nu',
  다: 'Da',
  도: 'Do',
  두: 'Du',
  라: 'Ra',
  루: 'Ru',
  리: 'Ri',
  마: 'Ma',
  모: 'Mo',
  무: 'Mu',
  보: 'Bo',
  부: 'Bu',
  서: 'Seo',
  소: 'So',
  수: 'Su',
  여: 'Yeo',
  오: 'O',
  요: 'Yo',
  우: 'U',
  유: 'Yu',
  자: 'Ja',
  저: 'Jeo',
  조: 'Jo',
  주: 'Ju',
  차: 'Cha',
  처: 'Cheo',
  초: 'Cho',
  추: 'Chu',
  타: 'Ta',
  토: 'To',
  투: 'Tu',
  파: 'Pa',
  포: 'Po',
  푸: 'Pu',
  하: 'Ha',
  호: 'Ho',
  후: 'Hu',
  정: 'Jeong',
  연: 'Yeon',
  // 더 많은 음절을 추가할 수 있습니다
};

// 한글을 로마자로 변환하는 함수 (간단한 규칙 적용)
const romanizeKoreanName = (koreanName: string): string => {
  let romanizedName = '';

  for (let char of koreanName) {
    // 자음+모음 음절을 로마자 표기법에 맞게 변환
    romanizedName += initialRomanizationMap[char] || char;
  }

  return romanizedName;
};

export interface CardProps extends React.InputHTMLAttributes<HTMLInputElement> {
  birth: string | null;
  first_name: string | null; // first_name이 null일 수 있으므로 null 허용
  second_name: string | null;
  job: string | null;
}

const Card = React.forwardRef<HTMLInputElement, CardProps>(({ birth, first_name, job }, ref) => {
  // first_name이 null이거나 빈 문자열이면 기본값으로 처리
  const name = first_name || ''; // first_name이 null이면 빈 문자열로 대체

  // 한글 이름에서 성과 이름을 분리하는 간단한 로직
  const splitName = name.split(''); // 성과 이름을 분리
  const first = splitName[0] || ''; // 성이 없을 경우 빈 문자열로 대체
  const second = splitName.slice(1).join('') || ''; // 이름이 없을 경우 빈 문자열로 대체

  // 성과 이름을 각각 로마자로 변환
  const romanizedFirstName = romanizeKoreanName(first);
  const romanizedSecondName = romanizeKoreanName(second);

  return (
    <div
      className="relative flex h-[222px] w-[350px] rounded-[10px] bg-[#7EC8FF] text-[#FFF613]"
      style={{ fontFamily: 'YUniverse-B' }}
    >
      <div className="ml-2 mt-2 text-start">
        <div className="absolute top-[30px] -translate-y-1/2 text-4xl">{romanizedFirstName}</div>
        <div className="absolute -bottom-[10px] -translate-y-1/2">
          <div className="text-sm">{birth}</div>
          <div className="text-sm">{job}</div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 z-10 h-[1px] w-[250px] -translate-x-1/2 -translate-y-1/2 -rotate-45 transform bg-[#FFF613]"></div>
      <div className="absolute left-[110%] top-1/2 z-10 h-[200px] w-[250px] -translate-x-1/2 -translate-y-1/2 -rotate-90 transform text-4xl">
        {romanizedSecondName}
      </div>
    </div>
  );
});
Card.displayName = 'Card';

export { Card };
