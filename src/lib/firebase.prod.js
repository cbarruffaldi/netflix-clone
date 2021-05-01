import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './firebase-config.js';
// import { seedDatabase } from '../seed';

const config = firebaseConfig;
const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
