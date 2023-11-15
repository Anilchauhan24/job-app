
// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA_b8R057FOCEFGQiHIl8H7W2LjDtXQfIQ",
    authDomain: "bustling-victor-401522.firebaseapp.com",
    projectId: "bustling-victor-401522",
    storageBucket: "bustling-victor-401522.appspot.com",
    messagingSenderId: "201365420918",
    appId: "1:201365420918:web:8c25403ede13a185125857"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log('Firebase initialized:', app);
export { auth };
