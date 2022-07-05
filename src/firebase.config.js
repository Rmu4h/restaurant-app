import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

//email 14rom.shevchuk@gmail.com

const firebaseConfig = {
  apiKey: "AIzaSyCPPVBMlmd5JAx6W1qotmzF3x1I_8SvSO8",
  authDomain: "restaurant-app-22c1c.firebaseapp.com",
  databaseURL: "https://restaurant-app-22c1c-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-22c1c",
  storageBucket: "restaurant-app-22c1c.appspot.com",
  messagingSenderId: "814985338855",
  appId: "1:814985338855:web:fb5967836f47da8a542742"
};

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };