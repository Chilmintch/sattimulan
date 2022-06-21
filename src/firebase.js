import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBOUPT7TVdnOLlg13m-pzINPzXe331s0UU",
    authDomain: "sattim-ulan.firebaseapp.com",
    projectId: "sattim-ulan",
    storageBucket: "sattim-ulan.appspot.com",
    messagingSenderId: "524867693455",
    appId: "1:524867693455:web:d0ca98cc5d81296a9bf9fa",
    measurementId: "G-V83WQZ20TN"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export {db, auth}