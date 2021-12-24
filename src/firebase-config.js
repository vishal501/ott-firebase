import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7rFRBJGOFWuVNbWCnV7gEGyAStKFVCpM",
    authDomain: "fir-tutorial-e2830.firebaseapp.com",
    projectId: "fir-tutorial-e2830",
    storageBucket: "fir-tutorial-e2830.appspot.com",
    messagingSenderId: "872153505060",
    appId: "1:872153505060:web:a65e52243a9106db21a7b1",
    measurementId: "G-CQXWTVEQM3"
  };

  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);