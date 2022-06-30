import * as M from '@mantine/core';

import { IS_FIRST_STEP, IS_LAST_STEP } from '@/common';
import { useUserStore } from '@/store';

import { useSteps } from './hooks';
import { useStyles } from './styles';
import { Steps } from './types';

export const Main = () => {
  const { classes } = useStyles();
  const { steps } = useSteps();

  const activeStep = useUserStore((state) => state.activeStep);
  const setActiveStep = useUserStore((state) => state.setActiveStep);

  const selectedStep = steps[activeStep];

  const handlePreviousStep = () => setActiveStep(activeStep - 1);
  const handleNextStep = (step: Steps) => setActiveStep(step);

  return (
    <div className={classes.Wrapper}>
      <div className={classes.CardWrapper}>
        <M.Card className={classes.Card} shadow="md">
          <M.CardSection className={classes.CardHeader}>
            <M.Stepper
              className={classes.StepperWrapper}
              active={activeStep}
              color="green"
              size="sm"
              iconSize={42}
            >
              {steps.map((step) => (
                <M.Stepper.Step key={step.title} label={step.title}>
                  <div className={classes.CardContent}>
                    <step.Element onChangeStep={handleNextStep} />
                  </div>
                </M.Stepper.Step>
              ))}
            </M.Stepper>
          </M.CardSection>

          <M.CardSection className={classes.CardFooter}>
            <div className={classes.ButtonsWrapper}>
              <M.Button
                variant="subtle"
                color="green"
                disabled={IS_FIRST_STEP(activeStep)}
                onClick={handlePreviousStep}
              >
                Voltar
              </M.Button>
              <M.Button
                type="submit"
                variant="light"
                color="green"
                form={selectedStep.formName}
                disabled={!selectedStep.formDataIsValid}
              >
                {IS_LAST_STEP(activeStep) ? 'Enviar' : 'Próximo'}
              </M.Button>
            </div>
          </M.CardSection>
        </M.Card>
      </div>
    </div>
  );
};
