import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_apiKey,
//   authDomain: process.env.NEXT_PUBLIC_authDomain,
//   projectId: process.env.NEXT_PUBLIC_projectId,
//   storageBucket: process.env.NEXT_PUBLIC_storageBucket,
//   messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
//   appId: process.env.NEXT_PUBLIC_appId,
apiKey: "AIzaSyAzpzVf5n3MWGu3buZOunvxqYIuLCtNQzw",
  authDomain: "project-1cc6d.firebaseapp.com",
  projectId: "project-1cc6d",
  storageBucket: "project-1cc6d.appspot.com",
  messagingSenderId: "431075212448",
  appId: "1:431075212448:web:335357d839c212037a9dc5",
  measurementId: "G-P2EMFD7XGX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);