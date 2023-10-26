import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEFgOq6ZxftdQ4rN_Al29GcdujnlBhRqY",
  authDomain: "netflix-clone-9f049.firebaseapp.com",
  projectId: "netflix-clone-9f049",
  storageBucket: "netflix-clone-9f049.appspot.com",
  messagingSenderId: "495493944459",
  appId: "1:495493944459:web:7bb5fe399222de26fcb08e",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth, db };
