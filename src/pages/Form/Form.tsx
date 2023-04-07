import * as M from '@mantine/core';
import { useNavigate } from 'react-router-dom';

import { IS_LAST_STEP, IS_FIRST_STEP } from '@/common';
import { Button } from '@/components';
import { useUserStore } from '@/store';

import { Stepper } from './components';
import { useSteps } from './hooks';
import { useStyles } from './styles';
import { Steps } from './types';

export const Form = () => {
  const { classes } = useStyles();
  const { steps } = useSteps();

  const navigate = useNavigate();

  const activeStep = useUserStore((state) => state.activeStep);
  const setActiveStep = useUserStore((state) => state.setActiveStep);

  const selectedStep = steps[activeStep];

  const handlePreviousStep = () => setActiveStep(activeStep - 1);
  const handleNextStep = (step: Steps) =>
    IS_LAST_STEP(activeStep) ? navigate('/confirmation') : setActiveStep(step);

  return (
    <div className={classes.Wrapper}>
      <div className={classes.CardWrapper}>
        <M.Card className={classes.Card} shadow="md">
          <M.CardSection className={classes.CardHeader}>
            <Stepper
              steps={steps}
              currentStep={activeStep}
              onChangeStep={handleNextStep}
            />
          </M.CardSection>

          <M.CardSection className={classes.CardFooter}>
            <div className={classes.ButtonsWrapper}>
              <Button
                variant="subtle"
                disabled={IS_FIRST_STEP(activeStep)}
                onClick={handlePreviousStep}
              >
                Voltar
              </Button>
              <Button
                type="submit"
                variant="light"
                form={selectedStep.formName}
                disabled={!selectedStep.formDataIsValid}
              >
                Próximo
              </Button>
            </div>
          </M.CardSection>
        </M.Card>
      </div>
    </div>
  );
};
