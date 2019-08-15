importScripts("https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/6.2.4/firebase-messaging.js")

var firebaseConfig = {
    apiKey: "AIzaSyAwokRB3Ze3zgBU6QqyT9Hlg0G3w0AEREk",
    authDomain: "jekyall.firebaseapp.com",
    databaseURL: "https://jekyall.firebaseio.com",
    projectId: "jekyall",
    storageBucket: "",
    messagingSenderId: "399884529588",
    appId: "1:399884529588:web:73c7e13d083f4835"
  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();
  