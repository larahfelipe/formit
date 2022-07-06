import * as M from '@mantine/core';

import { useStyles } from './styles';
import type { StepperProps } from './types';

export const Stepper = ({ currentStep, steps, onChangeStep }: StepperProps) => {
  const { classes } = useStyles();

  return (
    <M.Stepper
      className={classes.StepperWrapper}
      active={currentStep}
      color="green"
      size="sm"
      iconSize={42}
      breakpoint={760}
    >
      {steps.map(({ title, Element }) => (
        <M.Stepper.Step key={title} label={title}>
          <div className={classes.StepperContentWrapper}>
            <Element onChangeStep={onChangeStep} />
          </div>
        </M.Stepper.Step>
      ))}
    </M.Stepper>
  );
};
