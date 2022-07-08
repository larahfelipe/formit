import { Routes, Route, Navigate } from 'react-router-dom';

import { SendConfirmation } from '@/pages';

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/confirmation" element={<SendConfirmation />} />
      <Route path="*" element={<Navigate to="/confirmation" />} />
    </Routes>
  );
};
