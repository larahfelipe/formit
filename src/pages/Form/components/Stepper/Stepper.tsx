import * as M from '@mantine/core';

import { ProgressBar } from '@/components';

import { StepperStyles, useStyles } from './styles';
import type { StepperProps } from './types';

export const Stepper = ({ currentStep, steps, onChangeStep }: StepperProps) => {
  const { classes } = useStyles();

  return (
    <M.Stepper
      styles={StepperStyles}
      active={currentStep}
      color="indigo"
      size="xs"
      iconSize={34}
      breakpoint={610}
    >
      {steps.map(({ title, Element }) => (
        <M.Stepper.Step key={title} label={title}>
          <div className={classes.Header}>
            <p key={title}>{title}</p>

            <ProgressBar
              currentValue={currentStep}
              maxValue={steps.length - 1}
            />
          </div>

          <div className={classes.Body}>
            <Element onChangeStep={onChangeStep} />
          </div>
        </M.Stepper.Step>
      ))}
    </M.Stepper>
  );
};
