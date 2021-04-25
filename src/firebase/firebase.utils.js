import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC19VCgKHhfl57EDZ55qtDrLymcXC_598s",
  authDomain: "reactshop-db-c07b0.firebaseapp.com",
  projectId: "reactshop-db-c07b0",
  storageBucket: "reactshop-db-c07b0.appspot.com",
  messagingSenderId: "576972378782",
  appId: "1:576972378782:web:eb1833af2f6f31601fa18f",
  measurementId: "G-47GV27PXMW"
};

export const createUserProfileDocument = async( userAuth, additionalData) => {
    if(!userAuth) return;
    //const userRef = firestore.doc('/users/4ljhZR4f4LQwsVvCwOexx');
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } =userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }    
    console.log(userRef);
    return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;