import * as React from 'react';

// 한글 자음과 모음을 로마자로 변환하는 기본 맵
const initialRomanizationMap: { [key: string]: string } = {
  가: 'GA',
  강: 'KANG',
  나: 'NA',
  다: 'DA',
  라: 'RA',
  마: 'MA',
  바: 'BA',
  사: 'SA',
  아: 'A',
  자: 'JA',
  차: 'CHA',
  카: 'KA',
  타: 'TA',
  파: 'PA',
  하: 'HA',
  우: 'WOO',
  현: 'HYEON',
  이: 'LEE',
  거: 'GEO',
  경: 'GYEONG',
  고: 'GO',
  공: 'GONG',
  구: 'GU',
  기: 'GI',
  너: 'NEO',
  노: 'NO',
  누: 'NU',
  도: 'DO',
  두: 'DU',
  루: 'RU',
  리: 'RI',
  모: 'MO',
  무: 'MU',
  보: 'BO',
  부: 'BU',
  서: 'SEO',
  소: 'SO',
  수: 'SU',
  여: 'YEO',
  오: 'O',
  요: 'YO',
  유: 'YU',
  저: 'JEO',
  조: 'JO',
  주: 'JU',
  처: 'CHEO',
  초: 'CHO',
  추: 'CHU',
  토: 'TO',
  투: 'TU',
  포: 'PO',
  푸: 'PU',
  호: 'HO',
  후: 'HU',
  정: 'JEONG',
  연: 'YEON',
  황: 'HWANG',
  은: 'EUN',
  성: 'SEONG',
  닥: 'DAK',
  단: 'DAN',
  닫: 'DAD',
  달: 'DAL',
  담: 'DAM',
  답: 'DAB',
  닷: 'DAT',
  당: 'DANG',
  닿: 'DAET',
  대: 'DAE',
  댁: 'DAEK',
  댄: 'DAEN',
  댐: 'DAEM',
  댕: 'DANG',
  더: 'DUH',
  덕: 'DUK',
  던: 'DUN',
  덤: 'DUM',
  덥: 'DUB',
  덧: 'DUT',
  덫: 'DUT',
  데: 'DAE',
  독: 'DOK',
  돈: 'DON',
  돌: 'DOL',
  돔: 'DOM',
  동: 'DONG',
  돚: 'DOT',
  돛: 'DOT',
  돼: 'DWAE',
  되: 'DWAE',
  됐: 'DWAET',
  됴: 'DYO',
  둑: 'DOOK',
  둔: 'DOON',
  둠: 'DOOM',
  둡: 'DOOP',
  둥: 'DOONG',
  뒤: 'DWI',
  듀: 'DU',
  듄: 'DUNE',
  드: 'DEH',
  득: 'DUK',
  든: 'DUN',
  듣: 'DUD',
  들: 'DUL',
  듬: 'DUM',
  듭: 'DUB',
  듯: 'DUT',
  등: 'DUNG',
  디: 'DI',
  딕: 'DIK',
  딘: 'DIN',
  딛: 'DID',
  딜: 'DIL',
  딥: 'DIP',
  딩: 'DING',
  락: 'RAK',
  란: 'RAN',
  랄: 'RAL',
  람: 'RAM',
  랑: 'RANG',
  랙: 'RAEK',
  랜: 'RAEN',
  램: 'RAM',
  랩: 'RAB',
  랫: 'RAT',
  랭: 'RANG',
  량: 'RYANG',
  러: 'RUH',
  럭: 'RUK',
  런: 'RUN',
  럼: 'RUM',
  럽: 'RUB',
  렁: 'RUNG',
  레: 'REH',
  렉: 'REK',
  렌: 'REN',
  렐: 'REL',
  렘: 'REM',
  려: 'RYUH',
  련: 'RYUN',
  령: 'RYUNG',
  로: 'ROH',
  록: 'ROK',
  론: 'RON',
  롱: 'RONG',
  뢰: 'RYEH',
  료: 'RYO',
  룡: 'RYONG',
  룩: 'ROOK',
  룬: 'ROON',
  룰: 'ROOL',
  류: 'RYU',
  릭: 'RIK',
  린: 'RIN',
  릴: 'RIL',
  림: 'RIM',
  립: 'RIB',
  링: 'RING',
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

const Card = React.forwardRef<HTMLInputElement, CardProps>(({ birth, first_name, job }) => {
  const name = first_name || '';
  const splitName = name.split('');
  const first = splitName[0] || '';
  const second = splitName.slice(1).join('') || '';

  const romanizedFirstName = romanizeKoreanName(first);
  const romanizedSecondName = romanizeKoreanName(second);

  const secondNameRef = React.useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = React.useState(55);

  React.useEffect(() => {
    const adjustFontSize = () => {
      const maxWidth = 220; // 최대 너비
      const element = secondNameRef.current;

      if (element) {
        let currentFontSize = fontSize;
        while (element.scrollWidth > maxWidth && currentFontSize > 35) {
          currentFontSize -= 1; // 폰트 크기 줄이기
          setFontSize(currentFontSize);
        }
      }
    };

    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);

    return () => {
      window.removeEventListener('resize', adjustFontSize);
    };
  }, [romanizedSecondName, fontSize]);

  return (
    <div
      className="relative flex h-[222px] w-[350px] rounded-[10px] bg-[#7EC8FF] text-[#FFF613]"
      style={{ fontFamily: 'YUniverse-B' }}
    >
      <div className="ml-2 mt-2 text-start">
        <div className="absolute top-[30px] -translate-y-1/2 text-4xl text-[55px]">{romanizedFirstName}</div>
        <div className="absolute -bottom-[10px] -translate-y-1/2">
          <div className="text-sm">{birth}</div>
          <div className="text-sm">{job}</div>
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 z-10 h-[1px] w-[250px] -translate-x-1/2 -translate-y-1/2 -rotate-45 transform bg-[#FFF613]"></div>
      <div
        ref={secondNameRef}
        className="absolute left-[92%] top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 -rotate-90 transform"
        style={{ fontSize: `${fontSize}px`, whiteSpace: 'nowrap' }}
      >
        {romanizedSecondName}
      </div>
    </div>
  );
});
Card.displayName = 'Card';

export { Card };
