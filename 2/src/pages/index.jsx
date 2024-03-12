import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const MainView = lazy(
  () => import('./main/main.view.jsx')
);

const SecondView = lazy(
  () => import('./second/second.view.jsx')
);

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainView />} />
      <Route path="/second" element={<SecondView />} />
    </Routes>
  );
};