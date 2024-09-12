import * as React from 'react';
import { months, years, days, gender } from './data/index'; // years 배열을 import

export interface MenuInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title: string;
  inputType: 'input' | 'select';
}

const MenuInput = React.forwardRef<HTMLInputElement, MenuInputProps>(({ name, title, inputType }) => {
  return (
    <div className="mt-3 flex justify-center">
      <div className="flex items-center">
        <div className="text-[12px] font-semibold text-[#FF3D00]">{title}</div>
        <div className="ml-9 flex">
          {inputType === 'input' ? (
            <input className="h-[30px] w-[153px] rounded-[10px] bg-[#F6F6F6] pl-4" placeholder={name} />
          ) : (
            <>
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

              <div className='flex items-baseline'>
                <select className='ml-2 h-[26px] w-[66px] rounded-[10px] border-[1px] border-[#DADADA] bg-[#FFF] pl-1'>
                  {gender.map((genders)=>(
                    <option key ={genders} value = {genders}>
                      {genders}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
});

MenuInput.displayName = 'MenuInput';
export { MenuInput };
