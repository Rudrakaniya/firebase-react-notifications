import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: 'AIzaSyCiJ9NaWvxwJ2TMWllY28vp5nVpP4WZk18',
  authDomain: 'notifications-testing-671f1.firebaseapp.com',
  projectId: 'notifications-testing-671f1',
  storageBucket: 'notifications-testing-671f1.appspot.com',
  messagingSenderId: '910071797967',
  appId: '1:910071797967:web:2f1152df9a43d6e5e17fba',
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {vapidKey: 'BCozYiPjthFeNk-uCnCKcz7oIbVVc3E_ml_UUOpte5e7cF-yPM5AdgxfEUQr452FdOKbfNn8x2XhmvsKzLJrCJM'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});