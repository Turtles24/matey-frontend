import { Success } from '../../../components/Icon/onboarding/Success';

const OnboardingSuccess = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/3 transform">
      <Success />
    </div>
  );
};
OnboardingSuccess.displayName = 'OnboardingSuccess';

export { OnboardingSuccess, Success };
