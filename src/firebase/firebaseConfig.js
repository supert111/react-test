import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCHvij0dPIoc3vvxbXT0A7UXH6vHG7gB0M",
  authDomain: "order-cart-6c1d1.firebaseapp.com",
  databaseURL: "https://order-cart-6c1d1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "order-cart-6c1d1",
  storageBucket: "order-cart-6c1d1.appspot.com",
  messagingSenderId: "901666863983",
  appId: "1:901666863983:web:f0810425adb7c82ef1c69a"
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);