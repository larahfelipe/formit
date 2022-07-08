import { BrowserRouter } from 'react-router-dom';

import { useUserStore } from '@/store';

import { ProtectedRoutes } from './ProtectedRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRoutes = () => {
  const formIsValidated = useUserStore((state) => state.formIsValidated);

  return (
    <BrowserRouter>
      {formIsValidated ? <ProtectedRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
};
