import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_apiKey,
//   authDomain: process.env.NEXT_PUBLIC_authDomain,
//   projectId: process.env.NEXT_PUBLIC_projectId,
//   storageBucket: process.env.NEXT_PUBLIC_storageBucket,
//   messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
//   appId: process.env.NEXT_PUBLIC_appId,
apiKey: "AIzaSyB3xbLiBpj6KNAHRDjvdf9pU9tPB3R9FF0",
  authDomain: "fir-1-878d1.firebaseapp.com",
  projectId: "fir-1-878d1",
  storageBucket: "fir-1-878d1.appspot.com",
  messagingSenderId: "989905639406",
  appId: "1:989905639406:web:c1b71c7d5059d17653e0ff"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);