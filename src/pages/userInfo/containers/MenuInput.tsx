import * as React from 'react';
import { months, years, days, gender } from './data/index'; // years 배열을 import

export interface MenuInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title: string;
  inputType: 'input' | 'select' | 'gend';
}

const MenuInput = React.forwardRef<HTMLInputElement, MenuInputProps>(({ name, title, inputType }) => {
  return (
    <div className="mt-3 flex flex-col items-center">
      <div className="flex items-center">
        <div className="text-[12px] font-semibold text-[#FF3D00]">{title}</div>
        <div className="ml-4 flex items-center space-x-2">  {/* 통일된 마진과 정렬 */}
          {/* inputType에 따른 UI 표시 */}
          {inputType === 'input' ? (
            <input className="h-[30px] w-[153px] rounded-[10px] bg-[#F6F6F6] pl-4" placeholder={name} />
          ) : inputType === 'select' ? (
            <>
              {/* 생년월일 선택 */}
              <div className="flex items-baseline">
                <select className="h-[26px] w-[66px] rounded-[10px] border-[1px] border-[#DADADA] bg-[#FFF] pl-1">
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <p className="ml-[2px] text-[11px] font-normal text-[#999]">년</p>
              </div>

              <div className="flex items-baseline">
                <select className="ml-2 h-[26px] w-[66px] rounded-[10px] border-[1px] border-[#DADADA] bg-[#FFF] pl-1">
                  {months.map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <p className="ml-[2px] text-[11px] font-normal text-[#999]">월</p>
              </div>

              <div className="flex items-baseline">
                <select className="ml-2 h-[26px] w-[66px] rounded-[10px] border-[1px] border-[#DADADA] bg-[#FFF] pl-1">
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
                <p className="ml-[2px] text-[11px] font-normal text-[#999]">일</p>
              </div>
            </>
          ) : inputType === 'gend' ? (
            <div className="flex items-center">
              {/* 성별 선택 옵션 */}
              <select className="h-[26px] w-[66px] rounded-[10px] border-[1px] border-[#DADADA] bg-[#FFF] pl-1">
                {gender.map((genders) => (
                  <option key={genders} value={genders}>
                    {genders}
                  </option>
                ))}
              </select>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
});

MenuInput.displayName = 'MenuInput';
export { MenuInput };
  