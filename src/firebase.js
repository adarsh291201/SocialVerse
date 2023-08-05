// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase, { firestore } from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUlehH7M8xCWbg7R3M1De6hZ24OILbk-4",
  authDomain: "fb-clone-b4b5f.firebaseapp.com",
  projectId: "fb-clone-b4b5f",
  storageBucket: "fb-clone-b4b5f.appspot.com",
  messagingSenderId: "1037131451512",
  appId: "1:1037131451512:web:08adeaf2fbfae4ff64f18d",
  measurementId: "G-0BJH9D7FJE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
