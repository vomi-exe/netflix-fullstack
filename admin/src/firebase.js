
import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCU1nTCYVcDUoA5E8Y1JP0lmLIGdk2niGg",
    authDomain: "netflix-99cca.firebaseapp.com",
    projectId: "netflix-99cca",
    storageBucket: "netflix-99cca.appspot.com",
    messagingSenderId: "178612327776",
    appId: "1:178612327776:web:225e2934d76eb336b07a05",
    measurementId: "G-PSKCV2BJNR"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;