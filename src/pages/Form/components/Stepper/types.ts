import { Step, StepsNum } from '../../types';

export type StepperProps = {
  steps: Step[];
  currentStep: number;
  onChangeStep: (step: StepsNum) => void;
};
