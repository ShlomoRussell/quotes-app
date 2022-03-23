import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB3QgAELgJC7xQmALaMGMaLUYX9gKMho4",
  authDomain: "smart-quotes-76554.firebaseapp.com",
  projectId: "smart-quotes-76554",
  storageBucket: "smart-quotes-76554.appspot.com",
  messagingSenderId: "703050864228",
  appId: "1:703050864228:web:d01e4c71b0979ffb0d3171",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore();

export const databaseOprations = {
  getQuotes: () => getDocs(collection(database, "quotes")),
  addQuote: (quoteObject: QuoteInsertModel) =>
    addDoc(collection(database, "quotes"), quoteObject),
};

export interface QuoteModel extends QuoteInsertModel {
  rating: number;
  ratersCount: number;
}

export interface QuoteInsertModel {
  quote: string;
  by: {
    name: string;
    picUrl: string;
  };
}
