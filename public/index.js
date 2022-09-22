// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { 
  getAuth, 
  createUserWithEmailAndPassword , 
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification} from "firebase/auth"
import { firestore } from "firebase/firestore"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzEBAkwS8fEEY99gD50KXhvaBX_0SoHEE",
  authDomain: "first-1247e.firebaseapp.com",
  projectId: "first-1247e",
  storageBucket: "first-1247e.appspot.com",
  messagingSenderId: "204749516463",
  appId: "1:204749516463:web:f999acf01a94762e14ee5a",
  measurementId: "G-Q9Y7XSHC9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();


let user = auth.currentUser;

const createAcount = () => {
  
  let email = document.getElementById('email').value;
  let password  = document.getElementById('password').value;
  let confromPassword = document.getElementById('comformPassword').value;
  
  if (password === confromPassword) { 
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
             user = userCredential.user;
            console.log(user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
                alert(errorMessage)
          });
        }
      else {
        alert('password mismatch');
      }
}


const signIn = () => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    user = userCredential.user;
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

const signout = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  
}

const sendMail = ( ) => {
  sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
}

const passwordReset = () =>{
  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}

document.getElementById('signIn').addEventListener("click", function(event){
  event.preventDefault();
  signIn()
});

document.addEventListener('DOMContentLoaded' ,() => {

  if (user)  {
    // ask user to login or show how to sign up 
  }
  else {

    // show dash board 
  }
})