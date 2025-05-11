import { Navigate, Route, Routes } from 'react-router-dom';

import FormPage from '@/pages/Form';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
