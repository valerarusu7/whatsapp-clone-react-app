import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAi_cuJxOjJvdfErzAsJmY6sJZLyJkqHp0",
  authDomain: "whatsapp-clone-2c8a3.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-2c8a3.firebaseio.com",
  projectId: "whatsapp-clone-2c8a3",
  storageBucket: "whatsapp-clone-2c8a3.appspot.com",
  messagingSenderId: "376624399095",
  appId: "1:376624399095:web:86211c35f4ed21a7cd89f2",
  measurementId: "G-9P3RPRM99Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
