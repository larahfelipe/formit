import { Routes, Route, Navigate } from 'react-router-dom';

import { Form } from '@/pages';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
