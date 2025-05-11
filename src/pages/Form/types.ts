export enum StepsNum {
  FIRST,
  SECOND,
  THIRD,
  FOURTH
}

export enum FormNames {
  COMPANY_STEP = 'companyForm',
  ADDRESS_STEP = 'addressForm',
  OWNER_STEP = 'ownerForm',
  BILLING_STEP = 'billingForm'
}

export type Step = {
  title: string;
  formName: FormNames;
  formIsValid: boolean;
  Element: (props: StepComponentProps) => JSX.Element;
};

export type StepComponentProps = {
  onChangeStep: (step: number) => void;
};
