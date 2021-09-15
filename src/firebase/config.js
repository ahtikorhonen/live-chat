import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCO0boA9lq5UBv5JO70JOU96tvCW0LaNoE",
    authDomain: "live-chat-c0ed6.firebaseapp.com",
    projectId: "live-chat-c0ed6",
    storageBucket: "live-chat-c0ed6.appspot.com",
    messagingSenderId: "237342974893",
    appId: "1:237342974893:web:5e86ffd26f27af2169b724"
  }

  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp, projectAuth }