import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { checkIsFirstStep, checkIsLastStep } from '@/common/utils';
import { Button } from '@/components/Button';
import { useUserStore } from '@/store';

import { Stepper } from './components';
import { useSteps } from './hooks/useSteps';
import { useStyles } from './styles';
import { StepsNum } from './types';

export default function FormPage() {
  const { classes } = useStyles();
  const { steps } = useSteps();

  const navigate = useNavigate();

  const activeStep = useUserStore((state) => state.activeStep);
  const setActiveStep = useUserStore((state) => state.setActiveStep);

  const selectedStep = steps[activeStep];

  const handlePreviousStep = () => setActiveStep(activeStep - 1);

  const handleNextStep = (stepNum: StepsNum) =>
    checkIsLastStep(activeStep) ? navigate('/confirm') : setActiveStep(stepNum);

  useEffect(() => {
    document.title = `Registly | ${selectedStep.title}`;
  }, [selectedStep]);

  return (
    <div className={classes.Wrapper}>
      <Stepper
        steps={steps}
        currentStep={activeStep}
        onChangeStep={handleNextStep}
      />

      <div className={classes.ButtonsWrapper}>
        {!checkIsFirstStep(activeStep) && (
          <Button variant="subtle" onClick={handlePreviousStep}>
            Voltar
          </Button>
        )}
        <Button
          className={classes.NextButton}
          type="submit"
          variant="light"
          form={selectedStep.formName}
          disabled={!selectedStep.formIsValid}
        >
          Próximo
        </Button>
      </div>
    </div>
  );
}
