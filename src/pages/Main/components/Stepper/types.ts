import { Step, Steps } from '../../types';

export type StepperProps = {
  steps: Step[];
  currentStep: number;
  onChangeStep: (step: Steps) => void;
};
