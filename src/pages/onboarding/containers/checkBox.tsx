import * as React from 'react';

export interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  element: string | null;
  checked: boolean; // 부모 컴포넌트에서 제어할 수 있도록 checked 추가
  onChange: () => void; // 부모 컴포넌트에서 상태를 업데이트하는 함수를 전달받음
}

const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(({ element, checked, onChange, ...props }, ref) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        ref={ref}
        checked={checked} // 부모 컴포넌트에서 제어된 상태 사용
        onChange={onChange} // 클릭 시 부모의 상태 변경 함수 호출
        className="h-5 w-5 cursor-pointer appearance-none rounded border-2 border-gray-300 checked:border-[#FF3D00] checked:bg-[#FF3D00] focus:outline-none"
        {...props}
      />
      <label
        onClick={onChange} // 클릭 시 부모의 onChange 호출
        className="ml-2 cursor-pointer text-base font-semibold text-[#FF3D00]"
      >
        {element}
      </label>
    </div>
  );
});

CheckBox.displayName = 'CheckBox';

export { CheckBox };
