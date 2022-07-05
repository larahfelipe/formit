import type { UserStoreState } from '@/store';

export type UserData = {
  enterprise: UserStoreState['enterpriseStep'];
  address: UserStoreState['addressStep'];
  proprietary: UserStoreState['proprietaryStep'];
  paymentMethods: UserStoreState['paymentMethodsStep'];
};
