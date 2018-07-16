import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBeRw2M4QBhxL-tIqxLE48vYYSSc4rRzAQ",
  authDomain: "menus4allreact.firebaseapp.com",
  databaseURL: "https://menus4allreact.firebaseio.com",
  });

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;

