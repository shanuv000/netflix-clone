import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC-zGlp4FB1re5M7dtIACHHxxBVdoTkDxM",
    authDomain: "netflix-441f8.firebaseapp.com",
    projectId: "netflix-441f8",
    storageBucket: "netflix-441f8.appspot.com",
    messagingSenderId: "263525435363",
    appId: "1:263525435363:web:2b127761aa37fe278a42d6",
    measurementId: "G-N4NNQRDSZQ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth=firebase.auth();

export {auth};
export default {db};
