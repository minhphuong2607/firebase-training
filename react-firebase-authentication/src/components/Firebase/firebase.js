import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDqS46ESLmscokgh10dQ-HPHxs9eFiqWhE",
  authDomain: "authenticationapp-f85d7.firebaseapp.com",
  databaseURL: "https://authenticationapp-f85d7.firebaseio.com",
  projectId: "authenticationapp-f85d7",
  storageBucket: "authenticationapp-f85d7.appspot.com",
  messagingSenderId: "410681582133",
  appId: "1:410681582133:web:43b5eec4a4e1b39e4e077c",
  measurementId: "G-QXS3LJVZQS"
};

  class Firebase {
      constructor() {
          app.initializeApp(firebaseConfig);

          this.auth = app.auth();
          this.db = app.database();
      }

    // *** Auth API *** 
    doCreateUserWithEmailAndPassword = (email, password) => 
      this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
    
    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
    
    // *** User API ***
 
    user = uid => this.db.ref(`users/${uid}`);
 
    users = () => this.db.ref('users');
  
  }

  export default Firebase;