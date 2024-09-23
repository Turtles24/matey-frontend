import { Route, Routes } from 'react-router-dom';
import { MainPage } from './main/page';
import { Onboarding } from './onboarding/page';
import { Start } from './onboarding/containers/Start';
import { Menu } from './userInfo/page';
import { Test } from './test/page';
import { FakeSuccess } from './test/containers/fakeSuccess';
import { AddData } from './onboarding/containers/addData';
import { InputData } from './onboarding/containers/inputData';

export function MainRouter() {
  return (
    <Routes>
      <Route path="/matey-frontend" element={<MainPage />} />
      <Route path="/matey-frontend/onboarding" element={<Onboarding />} />
      <Route path="/matey-frontend/start" element={<Start />} />
      <Route path="/matey-frontend/onboarding/success" element={<Onboarding />} />
      <Route path="/matey-frontend/userInfo" element={<Menu />} />
      <Route path="/matey-frontend/test" element={<Test />} />
      <Route path="/matey-frontend/test/success" element={<FakeSuccess />} />
      <Route path="/matey-frontend/test/add/data" element={<AddData />} />
      <Route path="/matey-frontend/test/input/data" element={<InputData />} />
    </Routes>
  );
}
