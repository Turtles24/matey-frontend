import { useEffect } from 'react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import Header from '../../../containers/header';
import { PositionCenter } from '../../../containers/positionCenter';
import { Spacing } from '../../../containers/spacing';
import { InfoBox } from '../containers/InfoBox';
import { InputUnderLine } from '../containers/InputUnderLine';
import { Motion, spring } from 'react-motion';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Updated zod schema
const schema = z.object({
  email: z.string().email({ message: '올바른 형식의 메일을 입력해주세요' }),
  phone_num: z
    .string()
    .regex(/^\d{3}-\d{4}-\d{4}$/, { message: '전화번호는 010-XXXX-XXXX 형태의 숫자로 입력해주세요' }) // Allow digits and dashes
    .min(13, { message: '전화번호는 13글자여야 합니다' })
    .max(13, { message: '전화번호는 13글자여야 합니다' }),
  mbti: z
    .string()
    .min(4, { message: 'MBTI 4글자를 입력해주세요' })
    .max(4, { message: 'MBTI 4글자를 입력해주세요' })
    .transform((value) => value.toUpperCase()),
  bank_id: z
    .string()
    .regex(/^\d+$/, { message: '숫자만 입력 가능합니다' }) // Allow only digits
    .nonempty({ message: '계좌번호를 입력해주세요' }),
});

export function InputData() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const phone_num = watch('phone_num');
  const birth = watch('birth');
  const mbti = watch('mbti');
  const bank_id = watch('bank_id');

  const Select = localStorage.getItem('selectedElement');
  const userName = localStorage.getItem('userName') || null;

  // Format the phone number as 010-XXXX-XXXX
  useEffect(() => {
    if (phone_num?.length === 11) {
      const formattedPhoneNum = phone_num.replace(/(\d{3})(\d{4})(\d{4})/, '010-$2-$3');
      setValue('phone_num', formattedPhoneNum);
    }
  }, [phone_num, setValue]);

  const onSubmit = async (data: any) => {
    const insta = new URLSearchParams(location.search).get('insta');
    if (!insta) {
      alert('Insta parameter is missing');
      return;
    }

    try {
      const response = await fetch('https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/register/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          insta,
          mbti: mbti || null,
          birth: birth || null,
          phone_num: phone_num || null,
          bank_id: bank_id || null,
        }),
      });

      if (response.ok) {
        navigate(`/matey-frontend/test?insta=${insta}`);
      } else {
        alert('Failed to save data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="main">
        <div className="main_content">
          <Header Link={'/'} back_disable={'yes'} back_work={'yes'} />
          <Spacing className="mt-28"></Spacing>

          <InfoBox first_line={`${userName}님의 ${Select}를 입력해주세요`} second_line={''} />

          <Spacing className="mt-14"></Spacing>

          <PositionCenter>
            {Select === 'mbti' && (
              <div className="w-[90%] text-start">
                <Input
                  className="text-start"
                  placeholder="MBTI"
                  {...register('mbti')}
                  maxLength={4} // Restrict MBTI input to 4 characters
                />
                <InputUnderLine />

                {errors.mbti && <p className="text-red-500">{errors.mbti.message}</p>}
              </div>
            )}

            {Select === '전화번호' && (
              <div className="w-[90%] text-start">
                <Input
                  placeholder="전화번호"
                  className="text-start"
                  {...register('phone_num')}
                  minLength={13}
                  maxLength={13} // Matches the format 010-XXXX-XXXX
                />
                <InputUnderLine />

                {errors.phone_num && <p className="text-red-500">{errors.phone_num.message}</p>}
              </div>
            )}

            {Select === '이메일' && (
              <div className="w-[90%] text-start">
                <Input placeholder="이메일" className="text-start" {...register('email')} />
                <InputUnderLine />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
            )}

            {Select === '계좌번호' && (
              <div className="w-[90%] text-start">
                <Input placeholder="계좌번호" className="text-start" {...register('bank_id')} />
                <InputUnderLine />
                {errors.bank_id && <p className="text-red-500">{errors.bank_id.message}</p>}
              </div>
            )}
          </PositionCenter>

          <Spacing className="mt-2"></Spacing>
          <Motion
            style={{
              opacity: spring(1),
              height: spring(200),
            }}
          >
            {({ opacity, height }) => (
              <div
                style={{
                  opacity,
                  height,
                  overflow: 'hidden',
                }}
              >
                <div className="bottom_button">
                  <Button
                    onClick={handleSubmit(onSubmit)} // Correct way to handle form submission
                    className="h-[50px] w-[90%] rounded-[12px] text-[16px] font-extrabold"
                  >
                    Matey 시작하기
                  </Button>
                </div>
              </div>
            )}
          </Motion>
        </div>
      </div>
    </>
  );
}
