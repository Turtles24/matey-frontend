import { useEffect } from 'react';
import { FakeFinishIcon } from '../../../components/Icon/onboarding/FakeFinish';

export function FakeFinish() {
  useEffect(() => {
    const fetchTotalClicks = async () => {
      try {
        const response = await fetch(
          'https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/api/total-clicks'
        );
        const data = await response.json();
        console.log('Total clicks:', data.totalClicks);
      } catch (error) {
        console.error('Error fetching total clicks:', error);
      }
    };

    fetchTotalClicks();
  }, []);

  useEffect(() => {
    const fetchCardClicks = async () => {
      try {
        const response = await fetch(
          'https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/api/total-card-clicks'
        );
        const data = await response.json();
        console.log('Card Total clicks:', data.totalCardClicks);
      } catch (error) {
        console.error('Error fetching total clicks:', error);
      }
    };

    fetchCardClicks();
  }, []);

  useEffect(() => {
    const fetchPayClicks = async () => {
      try {
        const response = await fetch(
          'https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/api/total-pay-clicks'
        );
        const data = await response.json();
        console.log('Pay Total clicks:', data.totalPayClicks);
      } catch (error) {
        console.error('Error fetching total clicks:', error);
      }
    };

    fetchPayClicks();
  }, []);

  useEffect(() => {
    const fetchReservClicks = async () => {
      try {
        const response = await fetch(
          'https://port-0-matey-backend-m0zjsul0a4243974.sel4.cloudtype.app/api/total-reserv-clicks'
        );
        const data = await response.json();
        console.log('Reserve Total clicks:', data.totalReservClicks);
      } catch (error) {
        console.error('Error fetching total clicks:', error);
      }
    };

    fetchReservClicks();
  }, []);

  return (
    <>
      <div className="main">
        <div className="main_content">
          <div className="fixed left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-[70%] transform">
            <FakeFinishIcon />
          </div>
        </div>
      </div>
    </>
  );
}
