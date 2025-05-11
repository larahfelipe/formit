import { toast } from 'react-hot-toast';

// import { api } from '@/services';
import { useUserStore } from '@/store';
import { useSanitizedStoreData } from '@/utils';

export const useApi = () => {
  const resetStore = useUserStore((state) => state.resetStore);
  const { getAll } = useSanitizedStoreData();

  const sendUserData = async () => {
    const userData = getAll();

    try {
      console.log(userData);
      // await api.post('/users', userData);
      toast.success('Dados enviados com sucesso');
      resetStore();
    } catch (err) {
      console.error(err);
      toast.error('Algo deu errado. Por favor, tente novamente mais tarde');
    }
  };

  return { sendUserData };
};
