// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCiJ9NaWvxwJ2TMWllY28vp5nVpP4WZk18',
  authDomain: 'notifications-testing-671f1.firebaseapp.com',
  projectId: 'notifications-testing-671f1',
  storageBucket: 'notifications-testing-671f1.appspot.com',
  messagingSenderId: '910071797967',
  appId: '1:910071797967:web:2f1152df9a43d6e5e17fba',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
