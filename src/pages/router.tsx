import { Route, Routes } from 'react-router-dom';
import { MainPage } from './main/page';
import { Onboarding } from './onboarding/page';
import { Start } from './onboarding/containers/Start';

export function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/start" element={<Start />} />
      <Route path="/onboarding/success" element={<Onboarding />} />
    </Routes>
  );
}
