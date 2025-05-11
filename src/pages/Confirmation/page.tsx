import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/Button';
import { useUserStore } from '@/store';

import { useApi } from './hooks';
import { useStyles } from './styles';

export default function ConfirmationPage() {
  const { classes } = useStyles();
  const { sendUserData } = useApi();
  const setFormIsValidated = useUserStore((state) => state.setFormIsValidated);

  const navigate = useNavigate();

  const handleCancel = () => {
    setFormIsValidated(false);
    navigate('/');
  };

  const handleConfirm = () => {
    sendUserData();
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
          <Button variant="subtle" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button variant="light" onClick={handleConfirm}>
            Enviar
          </Button>
        </div>
      </div>
    </div>
  );
}
