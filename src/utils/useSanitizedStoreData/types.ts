import type { UserStoreState } from '@/store';

export type UserData = {
  company: UserStoreState['company'];
  address: UserStoreState['address'];
  owner: UserStoreState['owner'];
  billing: UserStoreState['billing'];
};
