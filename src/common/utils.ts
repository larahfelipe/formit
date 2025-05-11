import { StepsNum } from '@/pages/Form/types';

export const checkIsFirstStep = (currentStep: StepsNum) =>
  currentStep === StepsNum.FIRST;

export const checkIsLastStep = (currentStep: StepsNum) => {
  const lastStep =
    StepsNum[Object.keys(StepsNum).at(-1) as keyof typeof StepsNum];
  return currentStep === lastStep;
};
