import { Button } from '@/components';

import { useStyles } from './styles';
import type { SendConfirmationDialogProps } from './types';

export const SendConfirmationDialog = ({
  onCancel,
  onConfirm
}: SendConfirmationDialogProps) => {
  const { classes } = useStyles();

  return (
    <div className={classes.Wrapper}>
      <div className={classes.Header}>
        <h3>Confirmar envio de dados</h3>
      </div>

      <div className={classes.Body}>
        <p>
          Confirma que os dados preenchidos estão corretos e que você deseja
          enviá-los?
        </p>
      </div>

      <div className={classes.ButtonsWrapper}>
        <Button variant="subtle" onClick={onCancel}>
          Cancelar
        </Button>
        <Button variant="light" onClick={onConfirm}>
          Enviar
        </Button>
      </div>
    </div>
  );
};
