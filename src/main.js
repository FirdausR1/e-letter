import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

import '@/styles/app.css'
import '@/styles/page-example-common-style.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import '@purge-icons/generated'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyCzOXVUrd1waaQCwY1gjnOUHaLVmlhj7bA",
  authDomain: "login-letter.firebaseapp.com",
  projectId: "login-letter",
  storageBucket: "login-letter.appspot.com",
  messagingSenderId: "6244091903",
  appId: "1:6244091903:web:4371e6dd0e19c11a0549ca",
  measurementId: "G-LYLH31EH9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(router).use(analytics).mount('#app')
