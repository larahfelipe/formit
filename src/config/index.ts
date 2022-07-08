export default {
  apiUrl: import.meta.env.VITE_API_URL,
  brasilApiUrl: 'https://brasilapi.com.br/api',
  firebaseApiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  firebaseAuthDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  firebaseProjectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  firebaseStorageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  firebaseMessagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  firebaseAppId: import.meta.env.VITE_FIREBASE_APP_ID,
  userStorageKey: 'formit@user'
} as const;
