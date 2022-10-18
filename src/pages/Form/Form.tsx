import { useNavigate } from 'react-router-dom';

import { IS_FIRST_STEP, IS_LAST_STEP } from '@/common';
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
      <Stepper
        steps={steps}
        currentStep={activeStep}
        onChangeStep={handleNextStep}
      />

      <div className={classes.ButtonsWrapper}>
        {!IS_FIRST_STEP(activeStep) && (
          <Button variant="subtle" onClick={handlePreviousStep}>
            Voltar
          </Button>
        )}
        <Button
          className={classes.NextButton}
          type="submit"
          variant="light"
          form={selectedStep.formName}
          disabled={!selectedStep.formDataIsValid}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
};
