import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

// Make sure it hasn't already been initialized
if (!firebase.apps.length) {
  const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_DATABASE_URL
  };
  firebase.initializeApp(config);
}

export default firebase;
