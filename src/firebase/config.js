import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import {FIREBASE_KEY} from '../utils/constants';

console.log(FIREBASE_KEY);
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  //   databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'rn-firebase-app-868fa',
  //   storageBucket: 'your-project-id-1234.appspot.com',
  //   messagingSenderId: '12345-insert-yourse',
  appId: '1:992154086255:android:b64994c85b14420b64969a',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
