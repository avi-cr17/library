import firebase from 'firebase/compat/app';
import "firebase/compat/database";


const firebaseConfig ={
  apiKey: "AIzaSyBnE5RloHuAfTnEzptgjgnkR1s_v1MJU30",
  authDomain: "library-f324d.firebaseapp.com",
  databaseURL: "https://library-f324d-default-rtdb.firebaseio.com",
  projectId: "library-f324d",
  storageBucket: "library-f324d.appspot.com",
  messagingSenderId: "91042522218",
  appId: "1:91042522218:web:5cb4239df28af04f87d613",
  measurementId: "G-BPMBPFHGY1"
}


    var fireDb = firebase.initializeApp(firebaseConfig);
    export default fireDb.database().ref();