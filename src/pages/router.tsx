import { Route, Routes } from 'react-router-dom';
import { MainPage } from './main/page';
import { Onboarding } from './onboarding/page';
import { Start } from './onboarding/containers/Start';
import { Menu } from './userInfo/page';
import { MenuList } from './menu/menubar';

export function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/start" element={<Start />} />
      <Route path="/onboarding/success" element={<Onboarding />} />
      <Route path="/userInfo" element={<Menu />} />
      <Route path="/menulist" element={<MenuList />} />
    </Routes>
  );
}
