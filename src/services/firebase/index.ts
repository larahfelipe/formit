import { initializeApp, FirebaseOptions } from 'firebase/app';
import { getStorage } from 'firebase/storage';

import config from '@/config';

const firebaseConfig: FirebaseOptions = {
  apiKey: config.firebaseApiKey,
  authDomain: config.firebaseAuthDomain,
  projectId: config.firebaseProjectId,
  storageBucket: config.firebaseStorageBucket,
  messagingSenderId: config.firebaseMessagingSenderId,
  appId: config.firebaseAppId
};

const firebaseApp = initializeApp(firebaseConfig);

export const firebaseStorage = getStorage(firebaseApp);
