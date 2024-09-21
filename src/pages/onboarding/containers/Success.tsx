import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Success } from '../../../components/Icon/onboarding/Success';

const OnboardingSuccess = () => {
  const navigate = useNavigate();

  const getInstaFromQuery = () => {
    const params = new URLSearchParams(location.search);
    return params.get('insta'); // Get the value of the insta parameter
  };

  const insta = getInstaFromQuery(); // Extract insta from query parameters

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/matey-frontend/test/add/data?insta=${insta}`);
    }, 5000); // 3초 후에 경로 이동

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigate]);

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3 transform">
      <Success />
    </div>
  );
};

OnboardingSuccess.displayName = 'OnboardingSuccess';

export { OnboardingSuccess, Success };
