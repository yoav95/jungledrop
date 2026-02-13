import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvqmnXaTGYaDQWBtK9coYHX-YxjO0mUTg",
  authDomain: "jungledrop-4d6c1.firebaseapp.com",
  projectId: "jungledrop-4d6c1",
  storageBucket: "jungledrop-4d6c1.firebasestorage.app",
  messagingSenderId: "817919042453",
  appId: "1:817919042453:web:9c93dabf9149a3b0cb4c9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firebase Storage
const storage = getStorage(app);

export { app, analytics, storage };
