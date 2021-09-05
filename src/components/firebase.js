import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";


export const firebaseconfig={
  apiKey: "AIzaSyC88jko0k35fv0pp_il35aYaHQV48XivQ4",
  authDomain: "sound-coil-324011.firebaseapp.com",
  projectId: "sound-coil-324011",
  storageBucket: "sound-coil-324011.appspot.com",
  messagingSenderId: "93278994873",
  appId: "1:93278994873:web:731a021beeefd6df80b668",
  measurementId: "G-SLSJ0RJ6VY"
}
firebase.initializeApp(firebaseconfig);
export const db=firebase.firestore();
// export {db};
export default firebase;
export const auth=firebase.auth();