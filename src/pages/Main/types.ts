export enum Steps {
  FIRST,
  SECOND,
  THIRD
}

export enum FormNames {
  REGISTRATION_STEP = 'registrationStep',
  ADDRESS_STEP = 'addressStep',
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
