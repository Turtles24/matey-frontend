import { LeftArrow } from '../components/Icon/onboarding/LeftArrow';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  Link: string;
  back_disable: string;
  back_work: string;
}

const Header: FC<HeaderProps> = ({ back_disable, back_work, Link }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (back_work === 'no') {
      return;
    }

    if (Link) {
      navigate(Link);
    } else {
      const currentPath = location.pathname;

      if (currentPath === '/Onboarding/Phone') {
      } else {
        window.history.back();
      }
    }
  };
  return (
    <>
      <div className="mr-[140px] mt-[20px] flex items-center justify-center text-[19px] text-lg font-bold not-italic">
        {!back_disable && (
          <a onClick={handleBackClick}>
            <LeftArrow />
          </a>
        )}
      </div>
    </>
  );
};

export default Header;
