import { Navigate, Route, Routes } from 'react-router-dom';

import ConfirmationPage from '@/pages/Confirmation';

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/confirm" element={<ConfirmationPage />} />
      <Route path="*" element={<Navigate to="/confirmation" />} />
    </Routes>
  );
};
