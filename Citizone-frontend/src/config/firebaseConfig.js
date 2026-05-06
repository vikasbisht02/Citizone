import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Debug: Log if config is loaded properly
if (!firebaseConfig.apiKey) {
  console.warn('Firebase config is not loaded. Make sure .env variables are set and dev server is restarted.');
  console.log('Current config:', firebaseConfig);
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Connect to emulator in development
if (import.meta.env.VITE_ENVIRONMENT === 'development' && !auth.emulatorConfig) {
  connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
}

export default app;
