// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAGUhiznxJ-VavFP3zxbySAcKwkqd1qPwo",
//     authDomain: "cv-builder-d26e8.firebaseapp.com",
//     projectId: "cv-builder-d26e8",
//     storageBucket: "cv-builder-d26e8.firebasestorage.app",
//     messagingSenderId: "614070041367",
//     appId: "1:614070041367:web:8620db92aa6093bff89552",
//     measurementId: "G-DL2L3QHKYQ"
//   };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// // Initialize Storage
// const storage = getStorage(app);

// export { db, auth, storage };

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase config object
const firebaseConfig = {
  apiKey: "AIzaSyAGUhiznxJ-VavFP3zxbySAcKwkqd1qPwo",
  authDomain: "cv-builder-d26e8.firebaseapp.com",
  projectId: "cv-builder-d26e8",
  storageBucket: "cv-builder-d26e8.firebasestorage.app",
  messagingSenderId: "614070041367",
  appId: "1:614070041367:web:8620db92aa6093bff89552",
  measurementId: "G-DL2L3QHKYQ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
