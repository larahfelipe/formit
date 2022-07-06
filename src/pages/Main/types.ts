export enum Steps {
  FIRST,
  SECOND,
  THIRD,
  FOURTH,
  FIFTH
}

export enum FormNames {
  ENTERPRISE_STEP = 'enterpriseStep',
  ADDRESS_STEP = 'addressStep',
  PROPRIETARY_STEP = 'proprietaryStep',
  PAYMENT_METHODS_STEP = 'paymentMethodsStep'
}

export type Step = {
  title: string;
  formName: FormNames;
  formDataIsValid: boolean;
  Element: (props: StepComponentProps) => JSX.Element;
};

export type StepComponentProps = {
  onChangeStep: (step: number) => void;
};
