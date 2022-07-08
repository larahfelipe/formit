import { useNavigate } from 'react-router-dom';

import { Button } from '@/components';
import { useUserStore } from '@/store';

import { useApi } from './hooks';
import { useStyles } from './styles';

export const SendConfirmation = () => {
  const { classes } = useStyles();
  const { handleSendUserData } = useApi();
  const setFormIsValidated = useUserStore((state) => state.setFormIsValidated);

  const navigate = useNavigate();

  const handleOnCancel = () => {
    setFormIsValidated(false);
    navigate('/');
  };
  const handleOnConfirm = () => {
    handleSendUserData();
    navigate('/');
  };

  return (
    <div className={classes.Wrapper}>
      <div className={classes.CardWrapper}>
        <div className={classes.Header}>
          <h3>Confirmar envio de dados</h3>
        </div>

        <div className={classes.Body}>
          <p>
            Confirma que os dados preenchidos estão corretos e que você deseja
            enviá-los?
          </p>
        </div>

        <div className={classes.Footer}>
          <Button variant="subtle" onClick={handleOnCancel}>
            Cancelar
          </Button>
          <Button variant="light" onClick={handleOnConfirm}>
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
};
